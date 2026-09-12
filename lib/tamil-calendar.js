import { supabase } from "./supabase";

export async function getTamilCalendarByDate(date) {
    const { data, error } = await supabase
        .from("tamil_calendar")
        .select("*")
        .eq("date", date)
        .single();

    if (error) {
        console.error("Tamil Calendar fetch error:", error);
        return null;
    }

    return data;
}


// ============================================================
// TODAY'S SPECIAL EVENTS
// ============================================================

export async function getSpecialEventsByDate(date) {
    const { data, error } = await supabase
        .from("special_event_dates")
        .select("*")
        .eq("event_date", date)
        .eq("is_deleted", false)
        .order("event_uid");

    if (error) {
        console.error("Special Events fetch error:", error);
        return [];
    }

    return data || [];
}