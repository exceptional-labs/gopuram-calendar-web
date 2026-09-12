"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AOSInit() {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 500,
                once: true,
                offset: 120,
            });

            window.AOS.refresh();
        }
    }, []);

    return (
        <Script
            src="/assets/js/vendor/aos.js"
            strategy="afterInteractive"
            onLoad={() => {
                if (window.AOS) {
                    window.AOS.init({
                        duration: 500,
                        once: true,
                        offset: 120,
                    });

                    window.AOS.refresh();
                }
            }}
        />
    );
}