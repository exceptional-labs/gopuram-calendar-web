import { supabase } from "./supabase";

function getTodayIndia() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());
}

export async function getTodayThirukkural() {
    const today = getTodayIndia();

    const { data, error } = await supabase
        .from("today_thirukkural")
        .select(`
            id,
            kural_number,
            line1,
            line2,
            explanation,
            adhikaram_name,
            updated_for_date
        `)
        .eq("updated_for_date", today)
        .limit(1)
        .maybeSingle();

    if (error) {
        console.error("Today Thirukkural fetch error:", error);
        return null;
    }

    return data;
}