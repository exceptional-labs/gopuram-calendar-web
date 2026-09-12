import { getTodayIndruFeed } from "../../lib/indru-feed";


// ============================================================
// CARD CONFIGURATION
// Design/order comes from original HTML
// ============================================================

const INFO_CARDS = [
    {
        category: "மருத்துவ குறிப்பு",
        image: "maruthuva-kurippu.jpg",
        alt: "Maruthuva Kurippu",
        delay: "100",
    },
    {
        category: "அழகு குறிப்பு",
        image: "alagu-kurippu.jpg",
        alt: "Alagu Kurippu",
        delay: "300",
    },
    {
        category: "சமையல் குறிப்பு",
        image: "samayal-kurippu.jpg",
        alt: "Samayal Kurippu",
        delay: "500",
    },
    {
        category: "பழமொழி",
        image: "pala-moli.jpg",
        alt: "proverb",
        delay: "100",
    },
    {
        category: "வரலாற்றில் இன்று",
        image: "varalatril-indru.jpg",
        alt: "history",
        delay: "300",
    },
];


// ============================================================
// FORMAT DATE
// ============================================================

function formatTamilDate(dateString) {

    if (!dateString) {
        return "";
    }


    const date = new Date(
        `${dateString}T00:00:00+05:30`
    );


    return new Intl.DateTimeFormat(
        "ta-IN",
        {
            timeZone: "Asia/Kolkata",
            day: "numeric",
            month: "long",
        }
    ).format(date);
}


// ============================================================
// GET CONTENT TEXTS
// ============================================================

function getContentTexts(content) {

    if (!content) {
        return [];
    }


    // --------------------------------------------------------
    // Timeline
    // --------------------------------------------------------

    if (
        Array.isArray(content.items)
    ) {

        return content.items
            .map((item) => {

                if (
                    item &&
                    typeof item === "object"
                ) {
                    return String(
                        item.text || ""
                    ).trim();
                }

                return String(
                    item || ""
                ).trim();
            })
            .filter(Boolean);
    }


    // --------------------------------------------------------
    // Article / simple text
    // --------------------------------------------------------

    if (content.text) {

        return [
            String(
                content.text
            ).trim(),
        ].filter(Boolean);
    }


    return [];
}


// ============================================================
// CONTENT RENDERER
// ============================================================

function InfoContent({ content }) {
    const texts = getContentTexts(content);

    if (texts.length === 0) {
        return (
            <div style={{ fontSize: "14px", color: "#000" }}>
                தகவல் இல்லை.
            </div>
        );
    }

    return (
        <div style={{ fontSize: "14px", color: "#000" }}>
            {texts.map((text, index) => {
                const cleanText = text
                    .replace(/\r\n/g, "\n")
                    .replace(/\r/g, "\n")
                    .trim();

                const lines = cleanText.split("\n");

                return (
                    <div key={index}>
                        {lines.map((line, lineIndex) => {
                            const isEmpty = line.trim() === "";

                            // Preserve blank lines from \n\n
                            if (isEmpty) {
                                return (
                                    <div
                                        key={lineIndex}
                                        style={{ height: "10px" }}
                                    />
                                );
                            }

                            return (
                                <div
                                    key={lineIndex}
                                    style={{
                                        marginBottom: "8px",
                                    }}
                                >
                                    {line.trim()}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}


// ============================================================
// MAIN SECTION
// ============================================================

export default async function TodayInfoSection() {

    const feed =
        await getTodayIndruFeed();


    const feedItems =
        feed.items || [];


    // --------------------------------------------------------
    // Create category lookup
    // --------------------------------------------------------

    const feedByCategory = {};


    feedItems.forEach((item) => {

        feedByCategory[
            item.category
        ] = item;

    });


    const displayDate =
        formatTamilDate(feed.date);


    return (

        <div
            className="rn-portfolio-area rn-section-gap section-separator"
            id="portfolio"
            style={{
                background: "#fff",
            }}
        >

            {/* ==================================================
                BACKGROUND IMAGE
            ================================================== */}

            <img
                src="/assets/images/custom/indru.png"
                className="today-info-bg"
                alt=""
            />


            <div className="container">


                {/* ==================================================
                    TITLE
                ================================================== */}

                <div className="row">

                    <div className="col-lg-12">

                        <div className="title-area text-center">

                            <h5
                                className="title"
                                style={{
                                    color:
                                        "var(--color-primary)",
                                }}
                            >
                                இன்று ஒரு தகவல்
                            </h5>

                            <img
                                src="/assets/images/custom/border-small.png"
                                alt="Client-image"
                            />

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    FIVE CARDS
                ================================================== */}

                <div
                    className="row row--25 mt--10 mt_md--10 mt_sm--10"
                    style={{
                        justifyContent: "center",
                    }}
                >

                    {INFO_CARDS.map((card) => {

                        const dbItem =
                            feedByCategory[
                            card.category
                            ];


                        return (

                            <div
                                key={card.category}
                                data-aos="fade-up"
                                data-aos-delay={
                                    card.delay
                                }
                                data-aos-once="true"
                                className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                            >

                                <div
                                    className="rn-portfolio"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalCenter"
                                >

                                    <div className="inner">


                                        {/* ==================================================
                                            IMAGE
                                        ================================================== */}

                                        <div className="thumbnail">

                                            <a href="javascript:void(0)">

                                                <img
                                                    src={`/assets/images/custom/${card.image}`}
                                                    alt={card.alt}
                                                />

                                            </a>

                                        </div>


                                        {/* ==================================================
                                            CONTENT
                                        ================================================== */}

                                        <div className="content">

                                            <div className="category-info">


                                                {/* CATEGORY */}

                                                <div className="category-list">

                                                    <a href="javascript:void(0)">

                                                        {card.category}

                                                    </a>

                                                </div>


                                                {/* DATE */}

                                                <div className="meta">

                                                    <span>

                                                        <a href="javascript:void(0)">

                                                            <i className="feather-calendar"></i>

                                                        </a>

                                                        {displayDate}

                                                    </span>

                                                </div>

                                            </div>


                                            {/* ==================================================
                                                DB CONTENT
                                            ================================================== */}

                                            <InfoContent
                                                content={
                                                    dbItem?.content
                                                }
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>
    );
}