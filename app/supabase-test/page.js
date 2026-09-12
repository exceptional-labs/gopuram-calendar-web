import { getTamilCalendarByDate } from "../../lib/tamil-calendar";

export default async function SupabaseTestPage() {
    const calendar = await getTamilCalendarByDate("2026-06-21");

    return (
        <main style={{ padding: "40px", fontFamily: "Arial" }}>
            <h1>Tamil Calendar Data Test</h1>

            {calendar ? (
                <>
                    <h2>✅ Calendar Data Found</h2>

                    <p>
                        <strong>Date:</strong> {calendar.date}
                    </p>

                    <p>
                        <strong>Tamil Year:</strong> {calendar.tamil_year_name}
                    </p>

                    <p>
                        <strong>Tamil Month:</strong> {calendar.tamil_month_name}
                    </p>

                    <p>
                        <strong>Tamil Date:</strong> {calendar.tamil_date}
                    </p>

                    <p>
                        <strong>Tamil Day:</strong> {calendar.tamil_day_name}
                    </p>

                    <p>
                        <strong>Tithi:</strong> {calendar.tithi_name}
                    </p>

                    <p>
                        <strong>Nakshatram:</strong> {calendar.nakshatram_name}
                    </p>

                    <p>
                        <strong>Festival:</strong> {calendar.festival_name}
                    </p>
                </>
            ) : (
                <h2>❌ No calendar data found</h2>
            )}
        </main>
    );
}