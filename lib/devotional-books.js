import { supabase } from "./supabase";

export async function getBooksByGod(godName) {
    const { data, error } = await supabase
        .from("mantra_books")
        .select(`
            id,
            book_name,
            author_name,
            god_name,
            description,
            book_color,
            god_order,
            english_book_name
        `)
        .eq("god_name", godName)
        .eq("is_active", true)
        .order("god_order", { ascending: true })
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Devotional books fetch error:", error);
        return [];
    }

    return data || [];
}