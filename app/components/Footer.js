"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Footer() {
    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    return (
        <>
            {/* Feather Icons */}
            <Script
                src="/assets/js/vendor/feather.min.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.feather) {
                        window.feather.replace();
                    }
                }}
            />

            <div
                id="footer"
                className="rn-footer-area footer-style-2 rn-section-gapTopx section-separator pt--50"
            >
                <div className="container pb--80 pb_sm--40 plr_sm--20">
                    <div className="row">

                        <div className="col-xl-12 col-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">

                            {/* Tagline */}
                            <div className="copyright text-center ptb--30 section-separator">
                                <h5
                                    style={{ color: "#a82502" }}
                                    className="description"
                                >
                                    நல்லதே நினைப்போம்! நல்லதே நடக்கும்!
                                </h5>
                            </div>

                            {/* Footer Logo */}
                            <div className="logo-thumbnail">
                                <img
                                    src="/assets/images/custom/footer-logo.png"
                                    alt="Gopuram Calendar"
                                />
                            </div>

                            {/* Social Icons */}
                            <div className="social-icone-wrapper">
                                <ul
                                    className="social-share d-flex liststyle"
                                    style={{
                                        justifyContent: "center",
                                    }}
                                >

                                    {/* Facebook */}
                                    <li className="facebook">
                                        <a
                                            href="https://www.facebook.com/profile.php?id=61591322018198"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                        >
                                            <i data-feather="facebook"></i>
                                        </a>
                                    </li>


                                    {/* Instagram */}
                                    <li className="instagram">
                                        <a
                                            href="https://www.instagram.com/gopuramtamilcalendar/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                        >
                                            <i data-feather="instagram"></i>
                                        </a>
                                    </li>


                                    {/* YouTube */}
                                    <li className="youtube">
                                        <a
                                            href="https://www.youtube.com/@GopuramTamilCalendarApp"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="YouTube"
                                        >
                                            <i data-feather="youtube"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            {/* Copyright */}
                            <div className="copyright text-center ptb--40 section-separator">
                                <p className="description">
                                    © 2026. All rights reserved by Gopuram Calendar
                                </p>
                            </div>

                            {/* Footer Decorative Image */}
                            <img
                                src="/assets/images/custom/footer.png"
                                className="footer-art"
                                alt=""
                            />

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}