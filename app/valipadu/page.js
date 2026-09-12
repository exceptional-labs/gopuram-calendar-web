import Header from "../components/Header";
import Footer from "../components/Footer";
import { getBooksByGod } from "../../lib/devotional-books";

const BOOK_COLORS = [
    "book-orange",
    "book-blue",
    "book-purple",
    "book-red",
    "book-green",
    "book-brown",
];

export default async function ValipaduPage({ searchParams }) {
    const params = await searchParams;
    const godName = params?.god || "";

    const books = godName
        ? await getBooksByGod(godName)
        : [];

    return (
        <>
            {/* =====================================================
                HEADER
            ===================================================== */}
            <Header />

            {/* =====================================================
                VALIPADU SECTION
            ===================================================== */}
            <div
                className="rn-contact-area rn-section-gap section-separator mt--50"
                id="irai-valipadu"
            >
                <div className="container">

                    {/* Page Heading */}
                    <div className="row">
                        <div className="col-12 text-center mb--50">
                            <div className="section-title">

                                <h5
                                    className="title"
                                    style={{ color: "#000" }}
                                >
                                    {godName || "இறை வழிபாடு"}
                                </h5>

                                <p className="description">
                                    ஆன்மிக நூல்கள் மற்றும் இறை வழிபாட்டு பாடல்கள்
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        BOOKS
                    ================================================= */}
                    <div className="devotional-books">

                        {books.map((book, index) => {

                            const bookColor =
                                BOOK_COLORS[index % BOOK_COLORS.length];

                            return (
                                <div
                                    className="devotional-book-item"
                                    key={book.id}
                                >

                                    <a
                                        href={`/valipadu-details?book=${encodeURIComponent(
                                            book.id
                                        )}`}
                                        className="devotional-book-link"
                                    >

                                        <div
                                            className={`devotional-book ${bookColor}`}
                                        >

                                            {/* Book Spine */}
                                            <div className="book-spine">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>

                                            {/* Page Block */}
                                            <div className="book-pages"></div>

                                            {/* Main Cover */}
                                            <div className="book-cover">

                                                {/* Outer Gold Border */}
                                                <div className="gold-border"></div>

                                                {/* Inner Gold Border */}
                                                <div className="inner-border"></div>

                                                {/* Corner Decorations */}
                                                <div className="corner corner-top-left">
                                                    ❧
                                                </div>

                                                <div className="corner corner-top-right">
                                                    ❧
                                                </div>

                                                <div className="corner corner-bottom-left">
                                                    ❧
                                                </div>

                                                <div className="corner corner-bottom-right">
                                                    ❧
                                                </div>

                                                {/* Book Name */}
                                                <h3 className="book-name">
                                                    {book.book_name}
                                                </h3>

                                                {/* Devotional Image */}
                                                <div className="book-symbol">
                                                    <img
                                                        src="/assets/images/custom/1.png"
                                                        alt={book.book_name}
                                                    />
                                                </div>

                                                {/* Divider */}
                                                <div className="book-divider">
                                                    <span></span>
                                                </div>

                                                {/* Author */}
                                                <div className="book-author">
                                                    {book.author_name || "ஆசிரியர்"}
                                                </div>

                                            </div>
                                        </div>

                                    </a>

                                    {/* Title Below Book */}
                                    <h4 className="book-title">
                                        {book.book_name}
                                    </h4>

                                </div>
                            );
                        })}

                    </div>

                    {/* =================================================
                        NO BOOKS
                    ================================================= */}
                    {books.length === 0 && (
                        <div className="text-center">
                            <p>
                                இந்த இறைவனுக்கான நூல்கள் கிடைக்கவில்லை.
                            </p>
                        </div>
                    )}

                </div>
            </div>

            {/* =====================================================
                FOOTER
            ===================================================== */}
            <Footer />
        </>
    );
}