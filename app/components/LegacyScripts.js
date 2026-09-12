"use client";

import { useEffect } from "react";

const legacyScripts = [
    "/assets/js/vendor/jquery.js",
    "/assets/js/vendor/modernizer.min.js",
    "/assets/js/vendor/feather.min.js",
    "/assets/js/vendor/slick.min.js",
    "/assets/js/vendor/bootstrap.js",
    "/assets/js/vendor/text-type.js",
    "/assets/js/vendor/wow.js",
    "/assets/js/vendor/aos.js",
    "/assets/js/vendor/particles.js",
    "/assets/js/vendor/jquery-one-page-nav.js",
    "/assets/js/main.js",
];

export default function LegacyScripts() {
    useEffect(() => {
        let cancelled = false;

        async function loadScript(src) {
            const existing = document.querySelector(
                `script[src="${src}"]`
            );

            if (existing) {
                return;
            }

            await new Promise((resolve, reject) => {
                const script = document.createElement("script");

                script.src = src;
                script.async = false;

                script.onload = resolve;
                script.onerror = () =>
                    reject(new Error(`Failed to load ${src}`));

                document.body.appendChild(script);
            });
        }

        async function loadAllScripts() {
            try {
                for (const src of legacyScripts) {
                    if (cancelled) return;

                    await loadScript(src);
                }

                if (window.feather) {
                    window.feather.replace();
                }

                if (window.AOS) {
                    window.AOS.init();
                    window.AOS.refresh();
                }
            } catch (error) {
                console.error("Legacy script loading error:", error);
            }
        }

        loadAllScripts();

        return () => {
            cancelled = true;
        };
    }, []);

    return null;
}