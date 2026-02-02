import { ScrollTimeline } from "../components/ScrollTimeline";
import Beams from "../components/Beams";
import { LightRays } from "../components/LightRays";

export const TimelinePage = () => {
    return (
        <div className="relative min-h-screen pt-20">
            {/* Background Effects (reusing from App.tsx for consistency) */}
            <div className="fixed inset-0 z-0 hidden dark:block pointer-events-none">
                <Beams
                    beamWidth={3}
                    beamHeight={35}
                    beamNumber={20}
                    lightColor="#ffffff"
                    speed={1.0}
                    noiseIntensity={2.0}
                    scale={0.1}
                    rotation={30}
                />
                <LightRays />
            </div>

            <div className="relative z-10">
                <ScrollTimeline />
            </div>
        </div>
    );
};
