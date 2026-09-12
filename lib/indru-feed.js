import { supabase } from "./supabase";


// ============================================================
// GET TODAY'S DATE - INDIA
// ============================================================

function getTodayIndia() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());
}


// ============================================================
// PARSE CONTENT
// ============================================================

function parseContent(content) {

    if (!content) {
        return {};
    }


    // JSON stored as text
    if (typeof content === "string") {

        try {
            return JSON.parse(content);
        } catch {
            return {
                text: content,
            };
        }
    }


    // Already JSON object
    return content;
}


// ============================================================
// GET TODAY'S INDRU FEED
// ============================================================

export async function getTodayIndruFeed() {

    const today = getTodayIndia();


    const { data, error } = await supabase
        .from("indru_feed_v2")
        .select(
            "id, date, category, category_order, content, is_active"
        )
        .eq("date", today)
        .eq("is_active", true)
        .order("category_order", {
            ascending: true,
        });


    if (error) {

        console.error(
            "Indru Feed fetch error:",
            error
        );

        return {
            date: today,
            items: [],
        };
    }


    if (!data || data.length === 0) {

        console.warn(
            "No Indru Feed data found for:",
            today
        );

        return {
            date: today,
            items: [],
        };
    }


    // Parse JSON content
    const items = data.map((row) => {

        return {
            ...row,

            content: parseContent(
                row.content
            ),
        };
    });


    return {
        date: today,
        items,
    };
}