import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../../lib/supabase";
import { getLyricsByBook } from "../../lib/devotional-lyrics";

export default async function ValipaduDetailsPage({ searchParams }) {
    const params = await searchParams;
    const bookId = params?.book || "";

    // =========================================================
    // NO BOOK ID
    // =========================================================

    if (!bookId) {
        return (
            <>
                <Header />

                <main className="main-page-wrapper rn-contact-area rn-section-gap section-separator">
                    <div className="container">
                        <div className="text-center">
                            <h1>நூல் கிடைக்கவில்லை</h1>
                            <p>நூல் ID வழங்கப்படவில்லை.</p>
                        </div>
                    </div>
                </main>

                <Footer />
            </>
        );
    }

    // =========================================================
    // GET BOOK DETAILS
    // =========================================================

    const { data: book, error: bookError } = await supabase
        .from("mantra_books")
        .select(`
            id,
            book_name,
            author_name,
            god_name,
            description,
            book_color,
            english_book_name
        `)
        .eq("id", bookId)
        .single();

    // =========================================================
    // BOOK NOT FOUND
    // =========================================================

    if (bookError || !book) {
        console.error("Book fetch error:", bookError);

        return (
            <>
                <Header />

                <main className="main-page-wrapper rn-contact-area rn-section-gap section-separator">
                    <div className="container">
                        <div className="text-center">
                            <h1>நூல் கிடைக்கவில்லை</h1>
                            <p>இந்த நூல் கிடைக்கவில்லை.</p>
                        </div>
                    </div>
                </main>

                <Footer />
            </>
        );
    }

    // =========================================================
    // GET LYRICS
    // =========================================================

    const lyrics = await getLyricsByBook(bookId);

    // =========================================================
    // PAGE
    // =========================================================

    return (
        <>
            {/* =====================================================
                HEADER
            ===================================================== */}

            <Header />

            {/* =====================================================
                MAIN PAGE
            ===================================================== */}

            <main className="main-page-wrapper rn-contact-area rn-section-gap section-separator">

                {/* =================================================
                    DEVOTIONAL READING
                ================================================= */}

                <div
                    className="devotional-reading-area"
                    id="contacts"
                >

                    <div className="container">

                        <div className="row justify-content-center">

                            <div className="col-lg-10 col-md-11 col-sm-12 col-12">

                                <div className="devotional-reading-card">

                                    {/* =================================
                                        TITLE
                                    ================================= */}

                                    <div className="devotional-title-area">

                                        <h1>
                                            {book.book_name}
                                        </h1>

                                        <div className="devotional-divider">
                                            <span></span>
                                        </div>

                                    </div>

                                    {/* =================================
                                        BOOK DESCRIPTION
                                    ================================= */}

                                    {book.description && (
                                        <div
                                            className="text-center"
                                            style={{
                                                marginBottom: "0px",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: "#000",
                                                    marginBottom: "0px",
                                                }}
                                            >
                                                {book.description}
                                            </p><br />

                                            {book.author_name && (
                                                <p
                                                    style={{
                                                        color: "#000",
                                                    }}
                                                >
                                                    {book.author_name}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {/* =================================
                                        LYRICS
                                    ================================= */}

                                    <div className="devotional-content">

                                        {lyrics.map((row) => {

                                            // ---------------------------------
                                            // GAP
                                            // ---------------------------------

                                            if (
                                                row.block_type === "gap"
                                            ) {
                                                return (
                                                    <div
                                                        key={row.id}
                                                        style={{
                                                            height: `${row.gap_height || 20}px`,
                                                        }}
                                                    />
                                                );
                                            }

                                            // ---------------------------------
                                            // HEADING
                                            // ---------------------------------

                                            if (
                                                row.block_type === "heading"
                                            ) {
                                                return (
                                                    <p
                                                        key={row.id}
                                                        style={{
                                                            textAlign:
                                                                row.is_centered
                                                                    ? "center"
                                                                    : "left",

                                                            fontWeight:
                                                                row.is_bold
                                                                    ? "700"
                                                                    : "600",
                                                        }}
                                                    >
                                                        {row.content}
                                                    </p>
                                                );
                                            }

                                            // ---------------------------------
                                            // NORMAL LINE
                                            // ---------------------------------

                                            return (
                                                <p
                                                    key={row.id}
                                                    style={{
                                                        textAlign:
                                                            row.is_centered
                                                                ? "center"
                                                                : "left",

                                                        fontWeight:
                                                            row.is_bold
                                                                ? "700"
                                                                : "400",
                                                    }}
                                                >
                                                    {row.content}
                                                </p>
                                            );
                                        })}

                                    </div>

                                    {/* =================================
                                        BOTTOM DIVIDER
                                    ================================= */}

                                    <div className="devotional-bottom-divider">
                                        <span></span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* =================================================
                    BACK TO TOP
                ================================================= */}

                <div className="backto-top">
                    <div>
                        <i data-feather="arrow-up"></i>
                    </div>
                </div>

            </main>

            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />
        </>
    );
}