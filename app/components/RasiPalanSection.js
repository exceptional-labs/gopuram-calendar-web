import { getTodayRasiData } from "../../lib/rasi-palan";


// ============================================================
// RASI LIST
// Same order as original HTML
// ============================================================

const RASI_LIST = [
    {
        key: "மேஷம்",
        image: "mesam.png",
        aosDelay: "100",
    },
    {
        key: "ரிஷபம்",
        image: "rishapam.png",
        aosDelay: "300",
    },
    {
        key: "மிதுனம்",
        image: "mithunam.png",
        aosDelay: "500",
    },
    {
        key: "கடகம்",
        image: "kadagam.png",
        aosDelay: "700",
    },
    {
        key: "சிம்மம்",
        image: "simmam.png",
        aosDelay: "100",
    },
    {
        key: "கன்னி",
        image: "kanni.png",
        aosDelay: "300",
    },
    {
        key: "துலாம்",
        image: "thulam.png",
        aosDelay: "500",
    },
    {
        key: "விருச்சிகம்",
        image: "viruchigam.png",
        aosDelay: "700",
    },
    {
        key: "தனுசு",
        image: "dhanusu.png",
        aosDelay: "100",
    },
    {
        key: "மகரம்",
        image: "maharam.png",
        aosDelay: "300",
    },
    {
        key: "கும்பம்",
        image: "kumbam.png",
        aosDelay: "500",
    },
    {
        key: "மீனம்",
        image: "meenam.png",
        aosDelay: "700",
    },
];


// ============================================================
// GROUP PLANETS BY HOUSE
// Same logic as Flutter
// ============================================================

function getHousePlanets(rasiKattam) {

    const grouped = {};

    Object.entries(rasiKattam || {}).forEach(
        ([planet, house]) => {

            const houseNumber = Number(house);

            if (Number.isNaN(houseNumber)) {
                return;
            }

            if (!grouped[houseNumber]) {
                grouped[houseNumber] = [];
            }

            grouped[houseNumber].push(planet);
        }
    );

    return grouped;
}


// ============================================================
// RASI KATTAM HOUSE
// Uses ORIGINAL CSS classes
// ============================================================

function RasiHouse({ number, planets }) {

    return (
        <div className={`rasi-box rasi-${number}`}>

            <span className="rasi-number">
                {number}
            </span>

            <span className="rasi-value">

                {planets && planets.length > 0 ? (
                    planets.map((planet, index) => (
                        <span key={planet + index}>
                            {planet}

                            {index < planets.length - 1 && (
                                <br />
                            )}
                        </span>
                    ))
                ) : (
                    "-"
                )}

            </span>

        </div>
    );
}


// ============================================================
// RASI KATTAM
// EXACT SAME STRUCTURE AS ORIGINAL HTML
// ============================================================

function RasiKattam({
    rasiKattam,
    transitDetails,
}) {

    const housePlanets =
        getHousePlanets(rasiKattam);


    return (

        <div className="rasi-kattam">

            {/* 12 */}

            <RasiHouse
                number="12"
                planets={housePlanets[12]}
            />


            {/* 1 */}

            <RasiHouse
                number="1"
                planets={housePlanets[1]}
            />


            {/* 2 */}

            <RasiHouse
                number="2"
                planets={housePlanets[2]}
            />


            {/* 3 */}

            <RasiHouse
                number="3"
                planets={housePlanets[3]}
            />


            {/* 11 */}

            <RasiHouse
                number="11"
                planets={housePlanets[11]}
            />


            {/* CENTER */}

            <div className="rasi-center">

                {(transitDetails || []).map(
                    (item, index) => (

                        <div key={index}>
                            {item?.line || ""}
                        </div>

                    )
                )}

            </div>


            {/* 4 */}

            <RasiHouse
                number="4"
                planets={housePlanets[4]}
            />


            {/* 10 */}

            <RasiHouse
                number="10"
                planets={housePlanets[10]}
            />


            {/* 5 */}

            <RasiHouse
                number="5"
                planets={housePlanets[5]}
            />


            {/* 9 */}

            <RasiHouse
                number="9"
                planets={housePlanets[9]}
            />


            {/* 8 */}

            <RasiHouse
                number="8"
                planets={housePlanets[8]}
            />


            {/* 7 */}

            <RasiHouse
                number="7"
                planets={housePlanets[7]}
            />


            {/* 6 */}

            <RasiHouse
                number="6"
                planets={housePlanets[6]}
            />

        </div>
    );
}


// ============================================================
// MAIN RASI PALAN SECTION
// Original HTML structure preserved
// ============================================================

export default async function RasiPalanSection() {

    const data = await getTodayRasiData();


    // --------------------------------------------------------
    // If no data
    // --------------------------------------------------------

    if (!data) {

        return (

            <div
                className="user-info-top text-center rasi-main-section"
                style={{
                    background: "none",
                    boxShadow: "none",
                    border: "none",
                }}
            >

                <div className="title-area">

                    <h5
                        className="title"
                        style={{
                            color: "var(--color-primary)",
                        }}
                    >
                        ராசி பலன் மற்றும் ராசி கட்டம்
                    </h5>

                    <img
                        src="/assets/images/custom/border-small.png"
                        alt="Client-image"
                    />

                </div>

                <div className="user-info-footer">

                    <div className="info">

                        <p>
                            ராசி தகவல் கிடைக்கவில்லை.
                        </p>

                    </div>

                </div>

                <br />

            </div>
        );
    }


    // --------------------------------------------------------
    // Rasi Palan
    // --------------------------------------------------------

    const rasiPalan =
        data.rasiPalan || {};


    return (

        <div
            className="user-info-top text-center rasi-main-section"
            style={{
                background: "none",
                boxShadow: "none",
                border: "none",
            }}
        >

            {/* ==================================================
                TITLE
            ================================================== */}

            <div className="title-area">

                <h5
                    className="title"
                    style={{
                        color: "var(--color-primary)",
                    }}
                >
                    ராசி பலன் மற்றும் ராசி கட்டம்
                </h5>

                <img
                    src="/assets/images/custom/border-small.png"
                    alt="Client-image"
                />

            </div>


            {/* ==================================================
                ORIGINAL FOOTER WRAPPER
            ================================================== */}

            <div className="user-info-footer">

                <div className="info">

                    {/* ==================================================
                        ORIGINAL RASI CLIENT SECTION
                    ================================================== */}

                    <div
                        id="client"
                        className="rn-client-area rn-client-style-2 rn-sexction-gap section-separator"
                    >

                        <div className="container">

                            <div
                                className="row"
                                style={{
                                    alignItems: "center",
                                }}
                            >

                                {/* ==================================================
                                    LEFT - RASI PALAN
                                    ORIGINAL BOOTSTRAP RESPONSIVE CLASSES
                                ================================================== */}

                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">

                                    <div className="skill-style-1">

                                        <div className="client-card">

                                            {RASI_LIST.map(
                                                (rasi) => (

                                                    <div
                                                        key={rasi.key}
                                                        data-aos="fade-up"
                                                        data-aos-duration="500"
                                                        data-aos-delay={rasi.aosDelay}
                                                        data-aos-once="true"
                                                        className="main-content"
                                                    >

                                                        <div className="inner text-center">

                                                            {/* RASI IMAGE */}

                                                            <div className="thumbnail">

                                                                <img
                                                                    src={`/assets/images/custom/rasi/${rasi.image}`}
                                                                    alt="Client-image"
                                                                />

                                                            </div>


                                                            {/* SEPARATOR */}

                                                            <div className="seperator"></div>


                                                            {/* RASI PALAN */}

                                                            <div className="client-name">

                                                                <span>
                                                                    {
                                                                        rasiPalan[
                                                                        rasi.key
                                                                        ] || "-"
                                                                    }
                                                                </span>

                                                            </div>

                                                        </div>

                                                    </div>

                                                )
                                            )}

                                        </div>

                                    </div>

                                </div>


                                {/* ==================================================
                                    RIGHT - RASI KATTAM
                                    ORIGINAL RESPONSIVE CLASSES
                                ================================================== */}

                                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div className="rasi-section">

                                        {/* Rasi Kattam */}

                                        <RasiKattam
                                            rasiKattam={
                                                data.rasiKattam
                                            }
                                            transitDetails={
                                                data.transitDetails
                                            }
                                        />

                                    </div>


                                    {/* ==================================================
                                        APP INSTALL BANNER
                                    ================================================== */}

                                    <div className="inner text-center">

                                        <div className="thumbnail">

                                            <a
                                                href="https://play.google.com/store/apps/details?id=com.gopuram.calendar"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="/assets/images/custom/app-install.jpg"
                                                    alt="Install Gopuram Calendar App"
                                                    style={{
                                                        borderRadius: "10px",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <br />

        </div>
    );
}