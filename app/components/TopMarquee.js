"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";

// ============================================================
// DATE / TIME HELPERS
// ============================================================

function getTodayIndia() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());
}

function getIndiaNowParts() {
    const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
    });

    const parts = formatter.formatToParts(new Date());

    const get = (type) =>
        Number(parts.find((p) => p.type === type)?.value || 0);

    return {
        year: get("year"),
        month: get("month"),
        day: get("day"),
        hour: get("hour"),
        minute: get("minute"),
        second: get("second"),
    };
}

function getDateString(year, month, day) {
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
        2,
        "0"
    )}`;
}

function addDays(dateString, amount) {
    const [year, month, day] = dateString.split("-").map(Number);

    const date = new Date(Date.UTC(year, month - 1, day));

    date.setUTCDate(date.getUTCDate() + amount);

    return getDateString(
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
        date.getUTCDate()
    );
}

// ============================================================
// TIME PARSER
//
// Supports:
//
// 6:15
// 7:15
// 7:30 AM
// 9:00 PM
// 16:45
// 16:45:00
// ============================================================

function parseTimeToMinutes(value) {
    if (!value) return null;

    const text = String(value).trim().toUpperCase();

    const match = text.match(
        /^(\d{1,2})(?::(\d{2}))?(?::(\d{2}))?\s*(AM|PM)?$/
    );

    if (!match) {
        return null;
    }

    let hour = Number(match[1]);
    const minute = Number(match[2] || 0);
    const period = match[4];

    if (period === "PM" && hour !== 12) {
        hour += 12;
    }

    if (period === "AM" && hour === 12) {
        hour = 0;
    }

    if (hour > 23 || minute > 59) {
        return null;
    }

    return hour * 60 + minute;
}

// ============================================================
// FORMAT TIME
// ============================================================

function formatTime(value) {
    if (!value) return "";

    const minutes = parseTimeToMinutes(value);

    if (minutes === null) {
        return String(value);
    }

    let hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    const period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;

    if (hour === 0) {
        hour = 12;
    }

    return `${hour}:${String(minute).padStart(2, "0")} ${period}`;
}

function formatTimeRange(start, end) {
    if (!start || !end) {
        return "";
    }

    return `${formatTime(start)} - ${formatTime(end)}`;
}

// ============================================================
// CHECK CURRENT TIME
// ============================================================

function isCurrentTimeInRange(start, end, nowMinutes) {
    const startMinutes = parseTimeToMinutes(start);
    const endMinutes = parseTimeToMinutes(end);

    if (startMinutes === null || endMinutes === null) {
        return false;
    }

    // Normal same-day range
    if (startMinutes < endMinutes) {
        return (
            nowMinutes >= startMinutes &&
            nowMinutes < endMinutes
        );
    }

    // Range crossing midnight
    if (startMinutes > endMinutes) {
        return (
            nowMinutes >= startMinutes ||
            nowMinutes < endMinutes
        );
    }

    return false;
}

// ============================================================
// ADD DATABASE TIME ITEM IF CURRENTLY ACTIVE
// ============================================================

function addTimeItem({
    items,
    row,
    type,
    label,
    startKey,
    endKey,
    nowMinutes,
}) {
    if (!row) {
        return;
    }

    const start = row[startKey];
    const end = row[endKey];

    if (!start || !end) {
        return;
    }

    if (
        !isCurrentTimeInRange(
            start,
            end,
            nowMinutes
        )
    ) {
        return;
    }

    items.push({
        type,
        text: `${label} ${formatTimeRange(
            start,
            end
        )}`,
    });
}

// ============================================================
// ORAI PLANET DATA
//
// Same calculation used in your Flutter OraiMarquee.
//
// Sunday = 0
// Monday = 1
// Tuesday = 2
// Wednesday = 3
// Thursday = 4
// Friday = 5
// Saturday = 6
// ============================================================

const KIRAGA_DAY_DATA = {
    0: [
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
    ],

    1: [
        "சந்திரன்",
        "சனி",
        "குரு",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
    ],

    2: [
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
    ],

    3: [
        "புதன்",
        "சந்திரன்",
        "சனி",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
    ],

    4: [
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
    ],

    5: [
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
    ],

    6: [
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
        "சனி",
        "குரு",
        "செவ்வாய்",
        "சூரியன்",
        "சுக்கிரன்",
        "புதன்",
        "சந்திரன்",
    ],
};

const BAD_PLANETS = new Set([
    "செவ்வாய்",
    "சூரியன்",
    "சனி",
]);

// ============================================================
// CURRENT ORAI
//
// Orai is calculated exactly from the Flutter logic.
// ============================================================

function getCurrentOrai() {
    const now = getIndiaNowParts();

    const dayIndex = new Date(
        Date.UTC(
            now.year,
            now.month - 1,
            now.day
        )
    ).getUTCDay();

    const totalMinutes =
        now.hour * 60 + now.minute;

    let oraiIndex =
        Math.floor(
            (totalMinutes - 180) / 60
        ) % 24;

    if (oraiIndex < 0) {
        oraiIndex += 24;
    }

    const planet =
        KIRAGA_DAY_DATA[dayIndex]?.[oraiIndex];

    if (!planet) {
        return null;
    }

    const from =
        (3 + oraiIndex) % 24;

    const to =
        (from + 1) % 24;

    function formatHour(hour) {
        const period =
            hour >= 12 ? "PM" : "AM";

        let h = hour % 12;

        if (h === 0) {
            h = 12;
        }

        return `${h}:00 ${period}`;
    }

    return {
        planet,
        isBad: BAD_PLANETS.has(planet),
        timeText: `${formatHour(from)} - ${formatHour(to)}`,
    };
}

// ============================================================
// MOON EVENT PARSER
//
// Example:
//
// இன்று காலை 11:50 முதல் நாளை காலை 09:27 வரை
//
// நேற்று இரவு 09:53 முதல் இன்று இரவு 09:34 வரை
// ============================================================

function getPeriodAdjustment(period) {
    if (!period) {
        return null;
    }

    switch (period) {
        case "அதிகாலை":
            return "AM";

        case "காலை":
            return "AM";

        case "மதியம்":
            return "PM";

        case "பிற்பகல்":
            return "PM";

        case "மாலை":
            return "PM";

        case "இரவு":
            return "PM";

        default:
            return null;
    }
}

function convertTime(hour, minute, period) {
    const meridiem =
        getPeriodAdjustment(period);

    let h = hour;

    if (
        meridiem === "PM" &&
        h !== 12
    ) {
        h += 12;
    }

    if (
        meridiem === "AM" &&
        h === 12
    ) {
        h = 0;
    }

    return h * 60 + minute;
}

function extractMoonTime(
    text,
    occurrenceIndex
) {
    if (!text) {
        return null;
    }

    const regex =
        /(நேற்று|இன்று|நாளை)?\s*(அதிகாலை|காலை|மதியம்|பிற்பகல்|மாலை|இரவு)?\s*(\d{1,2}):(\d{2})/g;

    const matches = [
        ...String(text).matchAll(regex),
    ];

    if (!matches[occurrenceIndex]) {
        return null;
    }

    const match =
        matches[occurrenceIndex];

    return {
        relativeDay:
            match[1] || "இன்று",

        period:
            match[2] || null,

        hour:
            Number(match[3]),

        minute:
            Number(match[4]),
    };
}

function getRelativeDate(
    baseDate,
    relativeDay
) {
    if (relativeDay === "நேற்று") {
        return addDays(baseDate, -1);
    }

    if (relativeDay === "நாளை") {
        return addDays(baseDate, 1);
    }

    return baseDate;
}

function parseMoonEventWindow(
    event,
    baseDate
) {
    if (!event?.text_ta) {
        return null;
    }

    const start =
        extractMoonTime(
            event.text_ta,
            0
        );

    const end =
        extractMoonTime(
            event.text_ta,
            1
        );

    if (!start || !end) {
        return null;
    }

    const startDate =
        getRelativeDate(
            baseDate,
            start.relativeDay
        );

    const endDate =
        getRelativeDate(
            baseDate,
            end.relativeDay
        );

    const startMinutes =
        convertTime(
            start.hour,
            start.minute,
            start.period
        );

    const endMinutes =
        convertTime(
            end.hour,
            end.minute,
            end.period
        );

    return {
        startDate,
        endDate,
        startMinutes,
        endMinutes,
    };
}

function isMoonEventActive(
    event,
    today
) {
    const window =
        parseMoonEventWindow(
            event,
            today
        );

    if (!window) {
        return false;
    }

    const now =
        getIndiaNowParts();

    const currentDate =
        getDateString(
            now.year,
            now.month,
            now.day
        );

    const currentMinutes =
        now.hour * 60 + now.minute;

    const {
        startDate,
        endDate,
        startMinutes,
        endMinutes,
    } = window;

    if (
        currentDate < startDate ||
        currentDate > endDate
    ) {
        return false;
    }

    if (
        currentDate === startDate &&
        currentMinutes < startMinutes
    ) {
        return false;
    }

    if (
        currentDate === endDate &&
        currentMinutes >= endMinutes
    ) {
        return false;
    }

    return true;
}

// ============================================================
// COMPONENT
// ============================================================

export default function TopMarquee() {
    const [calendar, setCalendar] =
        useState(null);

    const [moonEvents, setMoonEvents] =
        useState([]);

    const [goldPrice, setGoldPrice] =
        useState(null);

    const [nowTick, setNowTick] =
        useState(0);

    // ========================================================
    // LOAD SUPABASE DATA
    // ========================================================

    useEffect(() => {
        let cancelled = false;

        async function loadMarqueeData() {
            const today =
                getTodayIndia();

            const yesterday =
                addDays(today, -1);

            const tomorrow =
                addDays(today, 1);

            // ------------------------------------------------
            // TODAY CALENDAR
            // ------------------------------------------------

            const {
                data: calendarData,
                error: calendarError,
            } = await supabase
                .from("tamil_calendar")
                .select("*")
                .eq("date", today)
                .maybeSingle();

            if (calendarError) {
                console.error(
                    "Top marquee calendar error:",
                    calendarError
                );
            }

            // ------------------------------------------------
            // MOON EVENTS
            //
            // Yesterday + today + tomorrow
            // because an event may cross midnight.
            // ------------------------------------------------

            const {
                data: moonData,
                error: moonError,
            } = await supabase
                .from("moon_events")
                .select("*")
                .gte(
                    "event_date",
                    yesterday
                )
                .lte(
                    "event_date",
                    tomorrow
                )
                .order("event_date");

            if (moonError) {
                console.error(
                    "Top marquee moon event error:",
                    moonError
                );
            }

            // ------------------------------------------------
            // GOLD / SILVER
            // ------------------------------------------------

            const {
                data: goldData,
                error: goldError,
            } = await supabase
                .from("gold_prices")
                .select("*")
                .eq("date", today)
                .maybeSingle();

            if (goldError) {
                console.error(
                    "Top marquee gold price error:",
                    goldError
                );
            }

            if (!cancelled) {
                setCalendar(
                    calendarData || null
                );

                setMoonEvents(
                    moonData || []
                );

                setGoldPrice(
                    goldData || null
                );
            }
        }

        loadMarqueeData();

        // Gold price can update during the day.
        // Refresh DB every 5 minutes.
        const dataTimer =
            setInterval(
                loadMarqueeData,
                5 * 60 * 1000
            );

        return () => {
            cancelled = true;
            clearInterval(dataTimer);
        };
    }, []);

    // ========================================================
    // CURRENT TIME REFRESH
    //
    // Every 30 seconds.
    //
    // This makes time-based items disappear
    // without waiting for another DB request.
    // ========================================================

    useEffect(() => {
        const timer =
            setInterval(() => {
                setNowTick(
                    (value) => value + 1
                );
            }, 30 * 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    // ========================================================
    // BUILD ALL ACTIVE ITEMS
    // ========================================================

    const activeItems = useMemo(() => {
        // Force recalculation every 30 seconds.
        void nowTick;

        const items = [];

        const today =
            getTodayIndia();

        const now =
            getIndiaNowParts();

        const nowMinutes =
            now.hour * 60 +
            now.minute;

        // ====================================================
        // 1. CURRENT ORAI
        //
        // Orai comes from the same Flutter calculation.
        // ====================================================

        const orai =
            getCurrentOrai();

        if (orai) {
            items.push({
                type: orai.isBad
                    ? "asuba-orai"
                    : "suba-orai",

                text: orai.isBad
                    ? `இப்பொழுது அசுப ஓரை ${orai.timeText}`
                    : `இப்பொழுது சுப ஓரை ${orai.timeText}`,
            });
        }

        // ====================================================
        // 2. GOOD TIME - MORNING
        //
        // EXACT DB COLUMNS:
        // good_time_morning_start
        // good_time_morning_end
        // ====================================================

        if (calendar) {
            addTimeItem({
                items,
                row: calendar,

                type: "good-time-morning",

                label: "இப்பொழுது நல்ல நேரம்",

                startKey:
                    "good_time_morning_start",

                endKey:
                    "good_time_morning_end",

                nowMinutes,
            });

            // =================================================
            // 3. GOOD TIME - EVENING
            //
            // EXACT DB COLUMNS:
            // good_time_evening_start
            // good_time_evening_end
            // =================================================

            addTimeItem({
                items,
                row: calendar,

                type: "good-time-evening",

                label: "இப்பொழுது நல்ல நேரம்",

                startKey:
                    "good_time_evening_start",

                endKey:
                    "good_time_evening_end",

                nowMinutes,
            });

            // =================================================
            // 4. RAHU KALAM
            //
            // EXACT DB COLUMNS:
            // rahu_time_start
            // rahu_time_end
            // =================================================

            addTimeItem({
                items,
                row: calendar,

                type: "rahu",

                label:
                    "இப்பொழுது ராகு காலம்",

                startKey:
                    "rahu_time_start",

                endKey:
                    "rahu_time_end",

                nowMinutes,
            });

            // =================================================
            // 5. YEMAKANDAM
            //
            // EXACT DB COLUMNS FROM YOUR SQL:
            //
            // yemakandam_time_start
            // yemakandam_time_end
            // =================================================

            addTimeItem({
                items,
                row: calendar,

                type: "yemakandam",

                label:
                    "இப்பொழுது எமகண்டம்",

                startKey:
                    "yemakandam_time_start",

                endKey:
                    "yemakandam_time_end",

                nowMinutes,
            });

            // =================================================
            // 6. GULIKAI
            //
            // EXACT DB COLUMNS:
            // gulika_time_start
            // gulika_time_end
            // =================================================

            addTimeItem({
                items,
                row: calendar,

                type: "gulika",

                label:
                    "இப்பொழுது குளிகை",

                startKey:
                    "gulika_time_start",

                endKey:
                    "gulika_time_end",

                nowMinutes,
            });
        }

        // ====================================================
        // 7. AMAVASAI / POURNAMI
        //
        // IMPORTANT:
        //
        // filter() is used.
        //
        // Therefore ALL active moon events are displayed.
        // ====================================================

        const activeMoonEvents =
            moonEvents.filter(
                (event) =>
                    isMoonEventActive(
                        event,
                        today
                    )
            );

        activeMoonEvents.forEach(
            (event, index) => {
                const title =
                    event.title_ta || "";

                const text =
                    event.text_ta || "";

                items.push({
                    type: `moon-${event.id || index}`,

                    text:
                        `${title} ${text}`.trim(),
                });
            }
        );

        // ====================================================
        // 8. GOLD + SILVER
        //
        // Always show today's DB price.
        //
        // If the DB price changes at 11 AM,
        // the 5-minute refresh picks up the new value.
        // ====================================================

        if (goldPrice) {
            const gold22k =
                Number(
                    goldPrice.gold_22k || 0
                );

            const silverPerGram =
                Number(
                    goldPrice.silver_per_g || 0
                );

            const goldText =
                gold22k > 0
                    ? `தங்கம் 22K ₹${gold22k.toLocaleString(
                        "en-IN"
                    )} / g`
                    : "";

            const silverText =
                silverPerGram > 0
                    ? `வெள்ளி ₹${silverPerGram.toLocaleString(
                        "en-IN"
                    )} / g`
                    : "";

            const priceText =
                [
                    goldText,
                    silverText,
                ]
                    .filter(Boolean)
                    .join(" | ");

            if (priceText) {
                items.push({
                    type: "price",

                    text:
                        `இன்றைய ${priceText}`,
                });
            }
        }

        return items;
    }, [
        calendar,
        moonEvents,
        goldPrice,
        nowTick,
    ]);

    // ============================================================
    // NOTHING TO DISPLAY
    // ============================================================

    if (activeItems.length === 0) {
        return null;
    }

    // ============================================================
    // MARQUEE
    // ============================================================

    return (
        <div className="rn-experience-area section-separator rn-section-gap">
            <div className="container">
                <div className="row mt--10">
                    <div className="col-12 mt_experience">
                        <div
                            className="experience-style-two"
                            style={{
                                background:
                                    "var(--color-primary)",
                            }}
                        >
                            <div className="experience-left">
                                <div className="experience-center">
                                    <p
                                        className="disc"
                                        style={{
                                            fontWeight:
                                                "bold",
                                        }}
                                    >
                                        <marquee
                                            style={{
                                                color: "#fff",
                                            }}
                                        >
                                            {activeItems.map(
                                                (
                                                    item,
                                                    index
                                                ) => (
                                                    <span
                                                        key={`${item.type}-${index}`}
                                                        style={{
                                                            color: "#fff",
                                                        }}
                                                    >
                                                        {
                                                            item.text
                                                        }

                                                        {index <
                                                            activeItems.length -
                                                            1 && (
                                                                <>
                                                                    &emsp;|&emsp;
                                                                </>
                                                            )}
                                                    </span>
                                                )
                                            )}
                                        </marquee>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}