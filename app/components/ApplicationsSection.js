export default function ApplicationsSection() {
    const spiritualInfo = [
        "சுப முகூர்த்த நாட்கள்",
        "தங்கம் வாங்க நாட்கள்",
        "முக்கிய விரத நாட்கள்",
        "இராகு / குளிகை / எம",
        "கிரக ஓரை",
        "கரி நாட்கள்",
        "கௌரி பஞ்சாங்கம்",
        "அரசு விடுமுறை",
    ];

    const astrologyVastu = [
        "திருமண பொருத்தம்",
        "எண் கணிதம்",
        "வயது கணிக்க",
        "வயது வித்தியாசம்",
        "ராசி கட்டம்",
        "குடிபுக சிறந்த மாதங்கள்",
        "வாஸ்து நாட்கள்",
        "மனையடி சாஸ்திரம்",
    ];

    return (
        <div
            className="rn-resume-area rn-section-gap section-separator"
            id="5"
        >
            <div className="container">

                {/* =================================================
                    SECTION TITLE
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
                                உங்கள் பயன்பாடுகள்
                            </h5>

                            <img
                                src="/assets/images/custom/border-small.png"
                                alt="border"
                            />

                        </div>

                    </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="row mt--45">

                    <div className="col-lg-12">

                        <div
                            className="rn-nav-content tab-content"
                            id="myTabContents"
                        >

                            <div
                                className="tab-pane show active fade single-tab-area"
                                id="education"
                                role="tabpanel"
                            >

                                <div className="personal-experience-inner mt--40">

                                    <div className="row">

                                        {/* =================================
                                            COLUMN 1
                                        ================================= */}

                                        <div className="col-lg-4 col-md-4 col-12">

                                            <div className="content">

                                                <h6
                                                    className="text-center"
                                                    style={{
                                                        color: "#000",
                                                    }}
                                                >
                                                    ஆன்மிக தகவல்கள்
                                                </h6>

                                                <div className="experience-list">

                                                    {spiritualInfo.map(
                                                        (item) => (
                                                            <div
                                                                className="resume-single-list"
                                                                key={item}
                                                            >

                                                                <a href="#">

                                                                    <div className="inner">

                                                                        <div className="heading">

                                                                            <div className="title">
                                                                                <h4>
                                                                                    {item}
                                                                                </h4>
                                                                            </div>

                                                                            <div className="date-of-time">

                                                                                <img
                                                                                    src="/assets/images/custom/muhurtham.png"
                                                                                    alt={item}
                                                                                />

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </a>

                                                            </div>
                                                        )
                                                    )}

                                                </div>

                                            </div>

                                        </div>

                                        {/* =================================
                                            COLUMN 2
                                        ================================= */}

                                        <div className="col-lg-4 col-md-4 col-12 mt_md--60 mt_sm--60">

                                            <div className="content">

                                                <h6
                                                    className="text-center"
                                                    style={{
                                                        color: "#000",
                                                    }}
                                                >
                                                    ஜோதிட கணக்கீடு மற்றும் வாஸ்து
                                                </h6>

                                                <div className="experience-list">

                                                    {astrologyVastu.map(
                                                        (item) => (
                                                            <div
                                                                className="resume-single-list"
                                                                key={item}
                                                            >

                                                                <a href="#">

                                                                    <div className="inner">

                                                                        <div className="heading">

                                                                            <div className="title">
                                                                                <h4>
                                                                                    {item}
                                                                                </h4>
                                                                            </div>

                                                                            <div className="date-of-time">

                                                                                <img
                                                                                    src="/assets/images/custom/muhurtham.png"
                                                                                    alt={item}
                                                                                />

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </a>

                                                            </div>
                                                        )
                                                    )}

                                                </div>

                                            </div>

                                        </div>

                                        {/* =================================
                                            COLUMN 3
                                        ================================= */}

                                        <div className="col-lg-4 col-md-4 col-12 mt_md--60 mt_sm--60">

                                            <div className="content">

                                                <h6
                                                    className="text-center"
                                                    style={{
                                                        color: "#000",
                                                    }}
                                                >
                                                    ஸ்தலங்கள்
                                                </h6>

                                                <div className="experience-list">

                                                    {/* =================================
                                                        STHALA VARALARU
                                                    ================================= */}

                                                    <div className="resume-single-list">

                                                        <a href="#">

                                                            <div className="inner">

                                                                <div className="card-thumbnail">

                                                                    <img
                                                                        src="/assets/images/custom/sthala-varalaru.jpg"
                                                                        alt="ஸ்தல வரலாறு"
                                                                    />

                                                                </div>

                                                                <div className="heading">

                                                                    <div className="title">

                                                                        <h4 className="text-center mt--10">
                                                                            <strong>
                                                                                ஸ்தல வரலாறு
                                                                            </strong>
                                                                        </h4>

                                                                        <p>
                                                                            ஒவ்வொரு மாவட்டத்திலும் அமைந்துள்ள சிறப்புமிக்க ஸ்தலங்கள், அவற்றின் தொன்மையான வரலாறு, பெருமை, மகத்துவம், சிறப்புகள், பலன்கள் மற்றும் புனிதத்தன்மை ஆகியவற்றை இந்தப் பகுதியில் விரிவாக அறிந்துகொள்ளலாம்.
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </a>

                                                    </div>

                                                    {/* =================================
                                                        DOSHA NIVARTHI
                                                    ================================= */}

                                                    <div className="resume-single-list">

                                                        <a href="#">

                                                            <div className="inner">

                                                                <div className="card-thumbnail">

                                                                    <img
                                                                        src="/assets/images/custom/dosha-nivarthi-kovilgal.jpg"
                                                                        alt="தோஷ நிவர்த்தி கோயில்கள்"
                                                                    />

                                                                </div>

                                                                <div className="heading">

                                                                    <div className="title">

                                                                        <h4 className="text-center mt--10">
                                                                            <strong>
                                                                                தோஷ நிவர்த்தி கோயில்கள்
                                                                            </strong>
                                                                        </h4>

                                                                        <p>
                                                                            ஒவ்வொரு தோஷத்திற்கும் நிவர்த்தி செய்யக்கூடிய சிறப்புமிக்க திருத்தலங்கள், அவற்றின் வரலாறு, தலப்பெருமை, மகத்துவம், கிடைக்கக்கூடிய பலன்கள், பரிகார முறைகள் மற்றும் புனிதத்தன்மை ஆகிய அனைத்தையும் இப்பகுதியில் விரிவாக அறிந்துகொள்ளலாம்.
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </a>

                                                    </div>

                                                </div>

                                            </div>

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