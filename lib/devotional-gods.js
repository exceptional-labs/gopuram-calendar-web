import { supabase } from "./supabase";

export async function getDevotionalGods() {
    const { data, error } = await supabase
        .from("mantra_books")
        .select("god_name, god_order")
        .eq("is_active", true)
        .not("god_name", "is", null)
        .order("god_order", { ascending: true });

    if (error) {
        console.error("Devotional gods fetch error:", error);
        return [];
    }

    // Remove duplicate god names
    const uniqueGods = [];
    const seen = new Set();

    for (const row of data || []) {
        const godName = row.god_name?.trim();

        if (!godName || seen.has(godName)) {
            continue;
        }

        seen.add(godName);

        uniqueGods.push({
            god_name: godName,
            god_order: row.god_order,
        });
    }

    return uniqueGods;
}