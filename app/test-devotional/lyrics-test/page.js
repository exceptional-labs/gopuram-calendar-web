import { getBooksByGod } from "../../../lib/devotional-books";
import { getLyricsByBook } from "../../../lib/devotional-lyrics";

export default async function LyricsTestPage() {
    const books = await getBooksByGod("முருகன்");

    const firstBook = books[0];

    if (!firstBook) {
        return <div style={{ padding: "40px" }}>No books found.</div>;
    }

    const lyrics = await getLyricsByBook(firstBook.id);

    return (
        <div style={{ padding: "40px" }}>
            <h1>{firstBook.book_name}</h1>

            <p>Book ID: {firstBook.id}</p>

            <hr />

            {lyrics.map((row) => (
                <div key={row.id} style={{ marginBottom: "15px" }}>
                    <strong>
                        {row.block_order} — {row.block_type}
                    </strong>

                    <p>{row.content}</p>

                    <small>
                        Gap: {row.gap_height} | Bold:{" "}
                        {String(row.is_bold)} | Center:{" "}
                        {String(row.is_centered)}
                    </small>

                    <hr />
                </div>
            ))}
        </div>
    );
}