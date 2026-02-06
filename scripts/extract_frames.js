
import ffmpegPath from 'ffmpeg-static';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extractFrame = (videoFile, imageFile) => {
    return new Promise((resolve, reject) => {
        console.log(`Extracting frame from ${videoFile} -> ${imageFile}...`);

        const args = [
            '-y',
            '-i', videoFile,
            '-vframes', '1',
            '-f', 'image2',
            imageFile
        ];

        const proc = spawn(ffmpegPath, args);

        proc.on('close', (code) => {
            if (code === 0) {
                console.log(`Saved: ${imageFile}`);
                resolve();
            } else {
                reject(new Error(`ffmpeg exited with code ${code}`));
            }
        });
    });
};

const run = async () => {
    const publicDir = path.join(__dirname, '../public/videos');
    const assetsDir = path.join(__dirname, '../src/assets');

    // 1. Hero Video Frame
    await extractFrame(
        path.join(publicDir, 'aerial-birds-eye-tracking-shot-of-car-and-truck-dr-2025-08-28-14-35-14-utc.mov'),
        path.join(assetsDir, 'hero-poster-real.jpg')
    );

    // 2. IOT Video Frame
    await extractFrame(
        path.join(publicDir, 'IOT2.mp4'),
        path.join(assetsDir, 'iot-poster.jpg')
    );
};

run();
