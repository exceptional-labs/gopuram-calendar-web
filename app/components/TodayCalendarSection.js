import {
    getTamilCalendarByDate,
    getSpecialEventsByDate,
} from "../../lib/tamil-calendar";

function getTodayIndia() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());
}

function getTamilEnglishDate(dateString, tamilDayName) {
    const [year, month, day] = dateString.split("-");

    const months = [
        "ஜனவரி",
        "பிப்ரவரி",
        "மார்ச்",
        "ஏப்ரல்",
        "மே",
        "ஜூன்",
        "ஜூலை",
        "ஆகஸ்ட்",
        "செப்டம்பர்",
        "அக்டோபர்",
        "நவம்பர்",
        "டிசம்பர்",
    ];

    return `${day} ${months[Number(month) - 1]} ${year} - ${tamilDayName}`;
}

/* =========================================================
   MOON PHASE IMAGE
   ========================================================= */

function getMoonPhaseImage(moonPhase) {
    const value = String(moonPhase || "").trim();

    if (value.includes("அமாவாசை")) {
        return "/assets/images/custom/amavasai.png";
    }

    if (value.includes("பௌர்ணமி") || value.includes("பவுர்ணமி")) {
        return "/assets/images/custom/pournami.png";
    }

    if (value.includes("தேய்பிறை")) {
        return "/assets/images/custom/theipirai.png";
    }

    if (value.includes("வளர்பிறை")) {
        return "/assets/images/custom/valarpirai.png";
    }

    // Safe fallback
    return "/assets/images/custom/valarpirai.png";
}

/* =========================================================
   NOKKU NAAL IMAGE
   ========================================================= */

function getNokkuNaalImage(nokkuNaal) {
    const value = String(nokkuNaal || "").trim();

    if (value.includes("மேல்")) {
        return "/assets/images/custom/mel.png";
    }

    if (value.includes("கீழ்")) {
        return "/assets/images/custom/keel.png";
    }

    if (value.includes("சம")) {
        return "/assets/images/custom/sama.png";
    }

    // Safe fallback
    return "/assets/images/custom/keel.png";
}

function getEventTamilName(eventType) {
    const value = String(eventType || "").trim();

    const eventNameMap = {
        "amavasai": "அமாவாசை",
        "ashtami": "அஷ்டமி",
        "chandra darisanam": "சந்திர தரிசனம்",
        "chathurthi": "சதுர்த்தி",
        "ekadhasi": "ஏகாதசி",
        "karinaal": "கரிநாள்",
        "karthigai": "கார்த்திகை",
        "muhurtham": "சுப முகூர்த்தம்",
        "navami": "நவமி",
        "pournami": "பௌர்ணமி",
        "pradosham": "பிரதோஷம்",
        "sashti": "சஷ்டி",
        "sivarathiri": "மாத சிவராத்திரி",
        "thiruvonam": "திருவோணம்",
        "sankatahara chathurthi": "சங்கடஹர சதுர்த்தி",
    };

    return eventNameMap[value.toLowerCase()] || value;
}
function getEventIcon(eventType) {
    const value = String(eventType || "").trim().toLowerCase();

    const eventIconMap = {
        // English event_type
        "amavasai": "/assets/images/custom/ammavasai.png",
        "pournami": "/assets/images/custom/pournamii.png",
        "ekadhasi": "/assets/images/custom/ekadeshi.png",
        "muhurtham": "/assets/images/custom/subha.png",
        "pradosham": "/assets/images/custom/pradosham.png",
        "sankatahara chathurthi":
            "/assets/images/custom/chadurthi.png",
        "sashti": "/assets/images/custom/sasti.png",
        "karthigai": "/assets/images/custom/karthigai.png",
        "karinaal": "/assets/images/custom/karinaal.png",
        "thiruvonam": "/assets/images/custom/thiruvonam.png",
        "chandra darisanam": "/assets/images/custom/chandra.png",
        "chathurthi": "/assets/images/custom/chadurthi.png",
        "sivarathiri": "/assets/images/custom/siva-rathiri.png",
        "ashtami": "/assets/images/custom/astami.png",
        "navami": "/assets/images/custom/navami.png",

        // Tamil event_type
        "அமாவாசை": "/assets/images/custom/ammavasai.png",
        "பௌர்ணமி": "/assets/images/custom/pournamii.png",
        "ஏகாதசி": "/assets/images/custom/ekadeshi.png",
        "சுப முகூர்த்தம்": "/assets/images/custom/subha.png",
        "பிரதோஷம்": "/assets/images/custom/pradosham.png",
        "சங்கடஹர சதுர்த்தி":
            "/assets/images/custom/chadurthi.png",
        "சஷ்டி": "/assets/images/custom/sasti.png",
        "கார்த்திகை": "/assets/images/custom/karthigai.png",
        "கரிநாள்": "/assets/images/custom/karinaal.png",
        "திருவோணம்": "/assets/images/custom/thiruvonam.png",
        "சந்திர தரிசனம்": "/assets/images/custom/chandra.png",
        "சதுர்த்தி": "/assets/images/custom/chadurthi.png",
        "சிவராத்திரி": "/assets/images/custom/siva-rathiri.png",
        "மாத சிவராத்திரி":
            "/assets/images/custom/siva-rathiri.png",
        "அஷ்டமி": "/assets/images/custom/astami.png",
        "நவமி": "/assets/images/custom/navami.png",
    };

    return (
        eventIconMap[value] ||
        "/assets/images/custom/festival.png"
    );
}
export default async function TodayCalendarSection() {
    const today = getTodayIndia();

    const calendar = await getTamilCalendarByDate(today);
    const specialEvents = await getSpecialEventsByDate(today);

    if (!calendar) {
        return (
            <div className="container">
                <div className="user-info-top text-center">
                    <p className="disc">
                        இன்றைய காலண்டர் தகவல் கிடைக்கவில்லை.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div id="home" className="rn-slide-area">
            <img
                src="/assets/images/custom/left-flower.png"
                className="home-left-flower"
                alt=""
            />

            <img
                src="/assets/images/custom/left-flower.png"
                className="home-right-flower"
                alt=""
            />

            <div className="slide slider-style-3">
                <div className="container">
                    <div className="row slider-wrapper">

                        {/* =========================================================
                            ORIGINAL CARD 1 — TODAY DATE
                        ========================================================= */}

                        <div className="corder-2 order-xl-1 col-lg-12 col-xl-4 mt_lg--50 mt_md--50 mt_sm--50">
                            <div className="slider-info">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                        <div
                                            className="user-info-top text-center today-date-card"
                                            style={{
                                                height: "750px",
                                                overflow: "auto",
                                                background: "#ffe8d4",
                                            }}
                                        >

                                            <img
                                                src="/assets/images/custom/hanger.png"
                                                className="calendar-hanger"
                                                alt=""
                                            />

                                            <div className="user-info-header">

                                                <p className="disc weight-bold">
                                                    இன்றைய தேதி
                                                </p>

                                                <p className="disc">
                                                    {getTamilEnglishDate(
                                                        calendar.date,
                                                        calendar.tamil_day_name
                                                    )}
                                                </p>

                                                <h2 className="title">
                                                    <span>{calendar.date.split("-")[2]}</span>
                                                </h2>

                                                <br />

                                                <p className="disc">
                                                    {calendar.tamil_month_name}{" "}
                                                    {calendar.tamil_date},{" "}
                                                    {calendar.tamil_year_name}
                                                    <br />
                                                    {calendar.ayana}
                                                </p>

                                            </div>

                                            <img
                                                src="/assets/images/custom/border-small.png"
                                                alt="Client-image"
                                            />

                                            <div
                                                className="user-info-header"
                                                style={{ paddingTop: "40px" }}
                                            >
                                                <p className="disc weight-bold">
                                                    இன்று
                                                </p>
                                            </div>

                                            <div className="skill-share-inner text-center">

                                                <div className="row g-2 indru-row text-center">

                                                    {/* =====================================================
                                                        MOON PHASE — DYNAMIC IMAGE
                                                    ===================================================== */}

                                                    <div className="col-3">
                                                        <div className="indru-item">

                                                            <img
                                                                src={getMoonPhaseImage(
                                                                    calendar.tamil_moon_phase
                                                                )}
                                                                className="indru-icon"
                                                                alt={
                                                                    calendar.tamil_moon_phase ||
                                                                    "சந்திர நிலை"
                                                                }
                                                            />

                                                            <p className="indru-title">
                                                                {calendar.tamil_moon_phase || "—"}
                                                            </p>

                                                        </div>
                                                    </div>

                                                    {/* =====================================================
                                                        NOKKU NAAL — DYNAMIC IMAGE
                                                    ===================================================== */}

                                                    <div className="col-3">
                                                        <div className="indru-item">

                                                            <img
                                                                src={getNokkuNaalImage(
                                                                    calendar.nokku_naal
                                                                )}
                                                                className="indru-icon"
                                                                alt={
                                                                    calendar.nokku_naal ||
                                                                    "நோக்கு நாள்"
                                                                }
                                                            />

                                                            <p className="indru-title">
                                                                {calendar.nokku_naal || "—"}
                                                            </p>

                                                        </div>
                                                    </div>

                                                    {/* =====================================================
                                                        NAKSHATRAM
                                                    ===================================================== */}

                                                    <div className="col-3">
                                                        <div className="indru-item">

                                                            <img
                                                                src="/assets/images/custom/star.png"
                                                                className="indru-icon"
                                                                alt="நட்சத்திரம்"
                                                            />

                                                            <p className="indru-title">
                                                                {calendar.nakshatram_name || "—"}
                                                            </p>

                                                        </div>
                                                    </div>

                                                    {/* =====================================================
                                                        TITHI
                                                    ===================================================== */}

                                                    <div className="col-3">
                                                        <div className="indru-item">

                                                            <img
                                                                src="/assets/images/custom/ekadesi.png"
                                                                className="indru-icon"
                                                                alt="திதி"
                                                            />

                                                            <p className="indru-title">
                                                                {calendar.tithi_name || "—"}
                                                            </p>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* =========================================================
                            ORIGINAL CARD 2 — GOOD TIMES
                        ========================================================= */}

                        <div className="corder-2 order-xl-1 col-lg-12 col-xl-4 mt_lg--50 mt_md--50 mt_sm--50">
                            <div className="slider-info">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">

                                        <div className="user-info-top text-center kolam-bg">

                                            <img
                                                src="/assets/images/custom/kolam.png"
                                                className="kolam-bg-image"
                                                alt=""
                                            />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    இன்றைய சிறப்புகள்
                                                </p>
                                            </div>

                                            <div className="row g-2 indru-row text-center">
                                                {specialEvents.length > 0 ? (
                                                    specialEvents.map((event, index) => (
                                                        <div
                                                            className="col-4"
                                                            key={
                                                                event.event_uid ||
                                                                `${event.event_date}-${event.event_type}-${index}`
                                                            }
                                                        >
                                                            <div className="indru-item">
                                                                <img
                                                                    src={getEventIcon(event.event_type)}
                                                                    className="indru-icon"
                                                                    alt={getEventTamilName(event.event_type)}
                                                                />

                                                                <p className="indru-title">
                                                                    {getEventTamilName(event.event_type)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="col-12">
                                                        <p className="indru-title">—</p>
                                                    </div>
                                                )}
                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    இன்றைய நல்ல நேரங்கள்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <img
                                                        src="/assets/images/custom/nalla-neram.png"
                                                        alt="Personal Portfolio Images"
                                                    />

                                                    <span>
                                                        காலை
                                                        <br />
                                                        {calendar.good_time_morning_start || "—"} -{" "}
                                                        {calendar.good_time_morning_end || "—"}
                                                    </span>

                                                    <span>
                                                        மாலை
                                                        <br />
                                                        {calendar.good_time_evening_start || "—"} -{" "}
                                                        {calendar.good_time_evening_end || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    இன்றைய கௌரி நல்ல நேரங்கள்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <img
                                                        src="/assets/images/custom/gowri.png"
                                                        alt="Personal Portfolio Images"
                                                    />

                                                    <span>
                                                        காலை
                                                        <br />
                                                        {calendar.gowri_time_morning_start || "—"} -{" "}
                                                        {calendar.gowri_time_morning_end || "—"}
                                                    </span>

                                                    <span>
                                                        மாலை
                                                        <br />
                                                        {calendar.gowri_time_evening_start || "—"} -{" "}
                                                        {calendar.gowri_time_evening_end || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    இதர நேரங்கள்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <span>
                                                        ராகு
                                                        <br />
                                                        {calendar.rahu_time_start || "—"} -{" "}
                                                        {calendar.rahu_time_end || "—"}
                                                    </span>

                                                    <span>
                                                        எமகண்டம்
                                                        <br />
                                                        {calendar.yemakandam_time_start || "—"} -{" "}
                                                        {calendar.yemakandam_time_end || "—"}
                                                    </span>

                                                </div>

                                                <div className="info">

                                                    <span>
                                                        குளிகை
                                                        <br />
                                                        {calendar.gulika_time_start || "—"} -{" "}
                                                        {calendar.gulika_time_end || "—"}
                                                    </span>

                                                    <span>
                                                        கரணன்
                                                        <br />
                                                        {calendar.karanan_time_start || "—"} -{" "}
                                                        {calendar.karanan_time_end || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* =========================================================
                            ORIGINAL CARD 3 — PANCHANGAM
                        ========================================================= */}

                        <div className="corder-2 order-xl-1 col-lg-12 col-xl-4 mt_lg--50 mt_md--50 mt_sm--50">
                            <div className="slider-info">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">

                                        <div className="user-info-top text-center kolam-bg">

                                            <img
                                                src="/assets/images/custom/pattai.png"
                                                className="kolam-bg-image"
                                                alt=""
                                            />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    சூலம் மற்றும் பரிகாரம்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <span>
                                                        சூலம்
                                                        <br />
                                                        {calendar.soolam_direction || "—"}
                                                    </span>

                                                    <span>
                                                        பரிகாரம்
                                                        <br />
                                                        {calendar.parikaram || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    பஞ்சாங்கம்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <span>
                                                        நட்சத்திரம்
                                                        <br />
                                                        {calendar.nakshatram_name || "—"}
                                                        {calendar.nakshatram_end_time
                                                            ? ` - ${calendar.nakshatram_end_time}`
                                                            : ""}
                                                    </span>

                                                </div>

                                                <div className="info">

                                                    <span>
                                                        திதி
                                                        <br />
                                                        {calendar.tithi_name || "—"}
                                                        {calendar.tithi_end_time
                                                            ? ` - ${calendar.tithi_end_time}`
                                                            : ""}
                                                    </span>

                                                </div>

                                                <div className="info">

                                                    <span>
                                                        சந்திராஷ்டமம்
                                                        <br />
                                                        {calendar.chandra_ashtamam || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    அமிர்தாதி யோகம்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <span>
                                                        {calendar.amirthadhi_yogam || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    நாமயோகம்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <span>
                                                        {calendar.namayogam || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    கரணம்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <span>
                                                        {calendar.karanam || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    லக்னம்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <span>
                                                        {calendar.lagnam || "—"}
                                                    </span>

                                                </div>

                                            </div>

                                            <br />

                                            <div className="user-info-header">
                                                <p className="disc weight-bold">
                                                    சூரியோதயம்
                                                </p>
                                            </div>

                                            <div className="user-info-footer">

                                                <div className="info">

                                                    <span>
                                                        {calendar.sunrise_time || "—"}
                                                    </span>

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