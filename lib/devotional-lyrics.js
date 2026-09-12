import { supabase } from "./supabase";

export async function getLyricsByBook(bookId) {
    const { data, error } = await supabase
        .from("mantra_blocks")
        .select(`
            id,
            book_id,
            block_order,
            block_type,
            content,
            gap_height,
            is_bold,
            is_centered
        `)
        .eq("book_id", bookId)
        .order("block_order", { ascending: true });

    if (error) {
        console.error("Devotional lyrics fetch error:", error);
        return [];
    }

    return data || [];
}