import { getTamilCalendarByDate } from "../../lib/tamil-calendar";

export default async function TodayCalendarCard() {
    // Get today's date in India
    const today = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());

    const calendar = await getTamilCalendarByDate(today);

    if (!calendar) {
        return (
            <div className="user-info-top today-date-card">
                <p>இன்றைய காலண்டர் தகவல் கிடைக்கவில்லை.</p>
            </div>
        );
    }

    return (
        <div
            className="user-info-top text-center today-date-card"
            style={{
                height: "750px",
                overflow: "auto",
                background: "#ffe8d4",
            }}
        >
            {/* Hanging Wall Calendar */}
            <img
                src="/assets/images/custom/hanger.png"
                className="calendar-hanger"
                alt=""
            />

            {/* Today Date Content */}
            <div className="user-info-header">
                <p className="disc weight-bold">இன்றைய தேதி</p>

                <p className="disc">
                    {calendar.date} - {calendar.tamil_day_name}
                </p>

                <h2 className="title">
                    <span>{calendar.tamil_date}</span>
                </h2>

                <br />

                <p className="disc">
                    {calendar.tamil_month_name} {calendar.tamil_date},{" "}
                    {calendar.tamil_year_name}
                    <br />
                    {calendar.ayana}
                </p>
            </div>

            {/* Border */}
            <img
                src="/assets/images/custom/border-small.png"
                alt="border"
            />

            {/* Today's Highlights */}
            <div
                className="user-info-header"
                style={{ paddingTop: "40px" }}
            >
                <p className="disc weight-bold">இன்றைய சிறப்புகள்</p>
            </div>

            <div className="skill-share-inner text-center">
                <div className="row g-2 indru-row text-center">

                    <div className="col-3">
                        <div className="indru-item">
                            <img
                                src="/assets/images/custom/valarpirai.png"
                                className="indru-icon"
                                alt="வளர்"
                            />
                            <p className="indru-title">
                                {calendar.tamil_moon_phase || "—"}
                            </p>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="indru-item">
                            <img
                                src="/assets/images/custom/keel.png"
                                className="indru-icon"
                                alt="கீழ்"
                            />
                            <p className="indru-title">
                                {calendar.nokku_naal || "—"}
                            </p>
                        </div>
                    </div>

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
    );
}