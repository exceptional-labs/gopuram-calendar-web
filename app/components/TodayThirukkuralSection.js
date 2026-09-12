import { getTodayThirukkural } from "../../lib/today-thirukkural";

export default async function TodayThirukkuralSection() {
    const kural = await getTodayThirukkural();

    return (
        <div id="home" className="rn-slide-area">
            <div className="slide slider-style-3">
                <div className="container">
                    <div className="row slider-wrapper">
                        <div className="corder-2 order-xl-1 col-lg-12 col-xl-12 mt_lg--50 mt_md--50 mt_sm--50 mt--30">
                            <div className="slider-info rn-contact-area">
                                <div className="row mt--5k0 mt_md--40 mt_sm--40 mt-contact-sm">
                                    <div className="col-lg-12">
                                        <div className="contact-about-area contact-about-areas">

                                            <div className="title-area">
                                                <h4
                                                    className="title text-center"
                                                    style={{
                                                        color: "var(--color-primary)",
                                                    }}
                                                >
                                                    இன்றைய திருக்குறள்
                                                </h4>
                                            </div>

                                            <br />

                                            {kural ? (
                                                <>
                                                    <div
                                                        className="description thirukkural-text"
                                                        style={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        <span className="phone">
                                                            {kural.line1}
                                                        </span>{" "}
                                                        <span className="mail">
                                                            {kural.line2}
                                                        </span>
                                                    </div>

                                                    <div className="social-area">
                                                        <div className="name">
                                                            விளக்கம்:
                                                        </div>

                                                        <span className="mail">
                                                            {kural.explanation}
                                                        </span>
                                                    </div>

                                                    <br />

                                                    <img
                                                        src="/assets/images/custom/border.png"
                                                        alt="border"
                                                    />

                                                    <div className="social-area">
                                                        <br />

                                                        <div className="name">
                                                            குறள்:{" "}
                                                            {kural.kural_number}
                                                        </div>

                                                        <div className="name">
                                                            அதிகாரம்:{" "}
                                                            {kural.adhikaram_name}
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="text-center">
                                                    <p>
                                                        இன்றைய திருக்குறள் தகவல்
                                                        கிடைக்கவில்லை.
                                                    </p>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}