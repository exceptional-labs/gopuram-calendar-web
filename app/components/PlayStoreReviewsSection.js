"use client";

const REVIEWS = [
    {
        name: "கார்த்திகேயன்",
        location: "மதுரை",
        image: "g.png",
        review:
            "தினமும் ஆன்மிக விஷயங்களை நினைவூட்டுவது மிகவும் பயனுள்ளதாக இருக்கிறது. அதோடு நமக்குத் தேவையான தனிப்பட்ட நினைவூட்டல்களையும் அமைத்துக்கொள்ள முடிவது சிறப்பு. முக்கியமான விஷயங்களை மறந்துவிடாமல் இருக்க இந்த வசதி எனக்கு மிகவும் உதவுகிறது.",
    },
    {
        name: "மீனாட்சி",
        location: "திருச்சி",
        image: "i.png",
        review:
            "வழிபாட்டிற்கு தேவையான புத்தகங்களும் மந்திரங்களும் ஒரே செயலியில் இருப்பது மிகவும் வசதியாக உள்ளது. தினமும் பூஜை செய்யும்போது தேவையான மந்திரங்களை எளிதாகப் பார்த்துக்கொள்ள முடிகிறது. வீட்டில் பெரியவர்களுக்கும் மிகவும் பயனுள்ள செயலி.",
    },
    {
        name: "சுரேஷ்",
        location: "கோயம்புத்தூர்",
        image: "f.png",
        review:
            "இன்று’ பகுதியில் தினமும் புதிதாக ஏதாவது தெரிந்துகொள்ள முடிகிறது. வரலாற்றில் இன்று, மருத்துவக் குறிப்பு, அழகுக் குறிப்பு, சமையல் குறிப்பு, பழமொழி என பல தகவல்கள் ஒரே இடத்தில் இருப்பது மிகவும் அருமை. தினமும் திறந்து பார்க்கும் பழக்கமாகிவிட்டது.",
    },
    {
        name: "பிரவீன்",
        location: "சேலம்",
        image: "j.png",
        review:
            "காலண்டரில் விளையாடுவதற்கு ஒரு சிறிய கேம் இருப்பது எதிர்பார்க்காத ஒரு நல்ல வசதி. ‘புள்ளிகளை இணை’ விளையாட்டு குழந்தைகளுக்கும் பிடித்திருக்கிறது. நேரம் கிடைக்கும்போது விளையாடுவதற்கு எளிமையாகவும் சுவாரஸ்யமாகவும் இருக்கிறது.",
    },
    {
        name: "லட்சுமி",
        location: "சென்னை",
        image: "h.png",
        review:
            "தினமும் தங்கம் மற்றும் வெள்ளி விலையை உடனுக்குடன் தெரிந்துகொள்ள முடிவது மிகவும் பயனுள்ளதாக இருக்கிறது. குறிப்பாக நகை வாங்கும் முன் விலையைப் பார்த்துக்கொள்வது வழக்கமாகிவிட்டது. காலண்டருடன் இந்த தகவலும் கிடைப்பது மிகவும் வசதியாக உள்ளது.",
    },
];

export default function PlayStoreReviewsSection() {
    return (
        <div
            className="rn-testimonial-area rn-section-gap section-separator"
            id="6"
            style={{ background: "#fff" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area text-center">
                            <h5
                                className="title"
                                style={{
                                    color: "var(--color-primary)",
                                }}
                            >
                                ப்ளே ஸ்டோர் விமர்சனம்
                            </h5>

                            <img
                                src="/assets/images/custom/border-small.png"
                                alt="Client-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonial-activation testimonial-pb mb--30">
                            {REVIEWS.map((review) => (
                                <div
                                    className="testimonial mt--50 mt_md--40 mt_sm--40"
                                    key={review.name}
                                >
                                    <div className="inner">
                                        <div className="card-info">
                                            <div className="card-thumbnail">
                                                <img
                                                    src={`/assets/images/custom/review/${review.image}`}
                                                    alt="Testimonial-image"
                                                />
                                            </div>
                                        </div>

                                        <div className="card-description">
                                            <div className="title-area">
                                                <div className="title-info">
                                                    <h3 className="title">
                                                        {review.name}
                                                    </h3>

                                                    <span className="date">
                                                        {review.location}
                                                    </span>
                                                </div>

                                                <div className="rating">
                                                    <img
                                                        src="/assets/images/icons/rating.png"
                                                        alt="rating-image"
                                                    />
                                                    <img
                                                        src="/assets/images/icons/rating.png"
                                                        alt="rating-image"
                                                    />
                                                    <img
                                                        src="/assets/images/icons/rating.png"
                                                        alt="rating-image"
                                                    />
                                                    <img
                                                        src="/assets/images/icons/rating.png"
                                                        alt="rating-image"
                                                    />
                                                    <img
                                                        src="/assets/images/icons/rating.png"
                                                        alt="rating-image"
                                                    />
                                                </div>
                                            </div>

                                            <div className="seperator"></div>

                                            <p className="discription">
                                                {review.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}