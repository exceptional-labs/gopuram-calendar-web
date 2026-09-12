import { getBooksByGod } from "../../lib/devotional-books";

export default async function TestDevotionalPage() {
    const books = await getBooksByGod("முருகன்");

    return (
        <div style={{ padding: "40px" }}>
            <h1>முருகன் - Books</h1>

            {books.map((book) => (
                <div key={book.id} style={{ marginBottom: "20px" }}>
                    <h2>{book.book_name}</h2>
                    <p>Author: {book.author_name || "—"}</p>
                    <p>{book.description}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}