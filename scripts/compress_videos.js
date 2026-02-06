
import ffmpegPath from 'ffmpeg-static';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to run ffmpeg command
const compressVideo = (inputFile, outputFile) => {
    return new Promise((resolve, reject) => {
        console.log(`Compressing ${inputFile} -> ${outputFile}...`);

        // ffmpeg arguments
        // CRF 28 is a good balance for web background video (lower quality but much smaller size)
        // -an removes audio (if you want to keep audio remove this flag, but usually background vids don't need it)
        // We will keep audio for generic usage but maybe remove it if it's strictly background. 
        // User didn't specify, but IOT2 usually implies background. 
        // Let's stick to CRF 28 + AAC audio just in case.

        const args = [
            '-y', // Overwrite output
            '-i', inputFile,
            '-vcodec', 'libx264',
            '-crf', '28', // Compression level (filesize/quality trade-off)
            '-preset', 'faster',
            '-acodec', 'aac',
            '-movflags', '+faststart', // Optimize for web streaming
            outputFile
        ];

        const proc = spawn(ffmpegPath, args);

        proc.stdout.on('data', (data) => {
            // console.log(`stdout: ${data}`); 
        });

        proc.stderr.on('data', (data) => {
            // console.error(`stderr: ${data}`); // Optional: noisy output
        });

        proc.on('close', (code) => {
            if (code === 0) {
                console.log(`Finished: ${outputFile}`);
                resolve();
            } else {
                console.error(`Error compressing ${inputFile}, code: ${code}`);
                reject(new Error(`ffmpeg exited with code ${code}`));
            }
        });
    });
};

const run = async () => {
    const publicDir = path.join(__dirname, '../public/videos');
    const filesToCompress = [
        'IOT2.mp4',
        'connp2.mp4',
        'aerial-birds-eye-tracking-shot-of-car-and-truck-dr-2025-08-28-14-35-14-utc.mov',
        // 'AI.mp4' // 10MB is borderline, maybe compress if needed. Let's include it.
        'AI.mp4'
    ];

    for (const file of filesToCompress) {
        const inputPath = path.join(publicDir, file);
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const outputPath = path.join(publicDir, `${name}_optimized.mp4`);

        if (fs.existsSync(inputPath)) {
            try {
                // Get original size
                const stats = fs.statSync(inputPath);
                console.log(`${file} Original Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

                await compressVideo(inputPath, outputPath);

                // Get new size
                const newStats = fs.statSync(outputPath);
                console.log(`${file} Optimized Size: ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);

            } catch (err) {
                console.error(`Failed to compress ${file}:`, err);
            }
        } else {
            console.warn(`File not found: ${inputPath}`);
        }
    }
};

run();
