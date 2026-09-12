"use client";

import { useEffect, useRef } from "react";

const SOUND_FILES = {
    maniyosai:
        "https://assets.autorender.io/k3Drw6LDzx/sounds/sapthangal/maniyosai.mp3",

    ohm:
        "https://assets.autorender.io/k3Drw6LDzx/sounds/sapthangal/om.mp3",

    birthday:
        "https://assets.autorender.io/k3Drw6LDzx/sounds/sapthangal/piranthanaal_paadal.mp3",

    alai:
        "https://assets.autorender.io/k3Drw6LDzx/sounds/sapthangal/waves.mp3",

    malai:
        "https://assets.autorender.io/k3Drw6LDzx/sounds/sapthangal/rain.mp3",

    paravaigal:
        "https://assets.autorender.io/k3Drw6LDzx/sounds/sapthangal/birds.mp3",
};

const MAIN_SOUNDS = [
    {
        id: "maniyosai",
        name: "மணியோசை",
        image: "maniyosai.png",
    },
    {
        id: "ohm",
        name: "ஓம்",
        image: "ohm.png",
    },
    {
        id: "birthday",
        name: "பிறந்த நாள்",
        image: "birthday.png",
    },
];

const PEACE_SOUNDS = [
    {
        id: "alai",
        name: "அலை",
        image: "alai.png",
    },
    {
        id: "malai",
        name: "மழை",
        image: "malai.png",
    },
    {
        id: "paravaigal",
        name: "பறவைகள்",
        image: "paravaigal.png",
    },
];

export default function SoundSection() {
    const activeCardRef = useRef(null);
    const activeAudioRef = useRef(null);

    useEffect(() => {
        return () => {
            if (activeAudioRef.current) {
                activeAudioRef.current.pause();
                activeAudioRef.current.currentTime = 0;
            }
        };
    }, []);

    function handleSoundClick(soundId, event) {
        const card = event.currentTarget;

        // =====================================================
        // SAME SOUND CLICKED AGAIN → STOP
        // =====================================================

        if (activeCardRef.current === card) {
            card.classList.remove("sound-active");

            if (activeAudioRef.current) {
                activeAudioRef.current.pause();
                activeAudioRef.current.currentTime = 0;
                activeAudioRef.current = null;
            }

            activeCardRef.current = null;

            return;
        }

        // =====================================================
        // STOP PREVIOUS SOUND
        // =====================================================

        if (activeCardRef.current) {
            activeCardRef.current.classList.remove("sound-active");
        }

        if (activeAudioRef.current) {
            activeAudioRef.current.pause();
            activeAudioRef.current.currentTime = 0;
            activeAudioRef.current = null;
        }

        // =====================================================
        // START NEW SOUND
        // =====================================================

        const soundUrl = SOUND_FILES[soundId];

        if (soundUrl) {
            const audio = new Audio(soundUrl);

            activeAudioRef.current = audio;

            audio.play().catch((error) => {
                console.log("Audio playback failed:", error);
            });

            audio.addEventListener("ended", () => {
                card.classList.remove("sound-active");

                if (activeAudioRef.current === audio) {
                    activeAudioRef.current = null;
                    activeCardRef.current = null;
                }
            });
        }

        // =====================================================
        // START CARD ANIMATION
        // =====================================================

        card.classList.add("sound-active");

        activeCardRef.current = card;
    }

    return (
        <div
            id="4"
            className="rn-pricing-area pricing-style-2 rn-section-gap section-separator"
            style={{
                background: "#fff",
            }}
        >
            <div className="container">

                {/* =================================================
                    MAIN TITLE
                ================================================= */}

                <div className="row">
                    <div className="col-lg-12">

                        <div className="title-area text-center">

                            <h5
                                className="title"
                                style={{
                                    color: "var(--color-primary)",
                                }}
                            >
                                சப்தங்கள்
                            </h5>

                            <img
                                src="/assets/images/custom/border-small.png"
                                alt="border"
                            />

                        </div>

                    </div>
                </div>

                <br />

                {/* =================================================
                    MAIN SOUNDS
                ================================================= */}

                <div className="row">

                    {MAIN_SOUNDS.map((sound) => (
                        <div
                            key={sound.id}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                            data-aos-once="true"
                            className="col-lg-4 col-md-6 col-sm-12 mb--30"
                        >
                            <div
                                className="sound-card"
                                data-sound={sound.id}
                                onClick={(event) =>
                                    handleSoundClick(
                                        sound.id,
                                        event
                                    )
                                }
                            >
                                <div className="sound-circle">

                                    <img
                                        src={`/assets/images/custom/${sound.image}`}
                                        alt={sound.name}
                                        className="sound-icon"
                                    />

                                </div>

                                <div className="sound-name">
                                    {sound.name}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* =================================================
                    PEACE SOUNDS TITLE
                ================================================= */}

                <div className="row mt--50">

                    <div className="col-lg-12">

                        <div className="title-area text-center">

                            <h5
                                className="title"
                                style={{
                                    color: "var(--color-primary)",
                                }}
                            >
                                மன அமைதி சப்தங்கள்
                            </h5>

                            <img
                                src="/assets/images/custom/border-small.png"
                                alt="Client-image"
                            />

                        </div>

                    </div>

                </div>

                <br />

                {/* =================================================
                    PEACE SOUNDS
                ================================================= */}

                <div className="row">

                    {PEACE_SOUNDS.map((sound) => (
                        <div
                            key={sound.id}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                            data-aos-once="true"
                            className="col-lg-4 col-md-6 col-sm-12 mb--30"
                        >
                            <div
                                className="sound-card"
                                data-sound={sound.id}
                                onClick={(event) =>
                                    handleSoundClick(
                                        sound.id,
                                        event
                                    )
                                }
                            >
                                <div className="sound-circle">

                                    <img
                                        src={`/assets/images/custom/${sound.image}`}
                                        alt={sound.name}
                                        className="sound-icon"
                                    />

                                </div>

                                <div className="sound-name">
                                    {sound.name}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}