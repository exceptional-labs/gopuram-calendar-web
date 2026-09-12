import { supabase } from "./supabase";

function getTodayIndia() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());
}

export async function getTodayRasiData() {
    const today = getTodayIndia();

    const { data, error } = await supabase
        .from("tamil_calendar")
        .select("date, rasi_palan, rasi_kattam, transit_details")
        .eq("date", today)
        .maybeSingle();

    if (error) {
        console.error("Rasi data fetch error:", error);
        return null;
    }

    if (!data) {
        console.warn("No Rasi data found for:", today);
        return null;
    }

    let rasiPalan = data.rasi_palan || {};
    let rasiKattam = data.rasi_kattam || {};
    let transitDetails = data.transit_details || [];

    // Handle JSON stored as text as well
    if (typeof rasiPalan === "string") {
        try {
            rasiPalan = JSON.parse(rasiPalan);
        } catch {
            rasiPalan = {};
        }
    }

    if (typeof rasiKattam === "string") {
        try {
            rasiKattam = JSON.parse(rasiKattam);
        } catch {
            rasiKattam = {};
        }
    }

    if (typeof transitDetails === "string") {
        try {
            transitDetails = JSON.parse(transitDetails);
        } catch {
            transitDetails = [];
        }
    }

    return {
        date: data.date,
        rasiPalan,
        rasiKattam,
        transitDetails,
    };
}