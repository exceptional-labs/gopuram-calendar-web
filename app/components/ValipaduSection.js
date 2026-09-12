import { getDevotionalGods } from "../../lib/devotional-gods";

const GOD_IMAGES = {
    "முருகன்": "murugan.png",
    "அம்பாள்": "ambal.png",
    "சிவன்": "sivan.png",
    "விநாயகர்": "vinayagar.png",
    "நவகிரகங்கள்": "navagraha.png",
    "ராமர்": "ramar.png",
    "அனுமன்": "anuman.png",
    "கிருஷ்ணர்": "krishnar.png",
    "கருப்பசாமி": "karuppasamy.png",
    "சமஸ்கிருதப் பாடல்": "samaskirutham.png",
    "ஸ்ரீ ஐயப்பன்": "iyappan.png",
    "மற்றவை": "matravai.png",
};

const GOD_COLORS = {
    "முருகன்": "#8C0053",
    "அம்பாள்": "#0842A0",
    "சிவன்": "#753402",
    "விநாயகர்": "#562AA4",
    "நவகிரகங்கள்": "#115123",
    "ராமர்": "#D36D01",
    "அனுமன்": "#495b77",
    "கிருஷ்ணர்": "#03b5d9",
    "கருப்பசாமி": "#23272b",
    "சமஸ்கிருதப் பாடல்": "#0a1e65",
    "ஸ்ரீ ஐயப்பன்": "#9D4B06",
    "மற்றவை": "#bd0012",
};

export default async function ValipaduSection() {
    const gods = await getDevotionalGods();

    return (
        <div
            className="rn-portfolio-area rn-section-gap section-separator"
            id="3"
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area text-center">
                            <h5
                                className="title"
                                style={{ color: "var(--color-primary)" }}
                            >
                                இறை வழிபாடு
                            </h5>

                            <img
                                src="/assets/images/custom/border-small.png"
                                alt="Client-image"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="row row--25 mt--10 mt_md--10 mt_sm--10"
                    style={{ justifyContent: "center" }}
                >
                    {gods.map((god) => {
                        const image = GOD_IMAGES[god.god_name];
                        const background = GOD_COLORS[god.god_name];

                        if (!image) {
                            return null;
                        }

                        return (
                            <div
                                key={god.god_name}
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-once="true"
                                className="col-lg-2 col-xl-2 col-md-3 col-12 mt--50 mt_md--30 mt_sm--30"
                            >
                                <div
                                    className="rn-portfolio"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalCenter"
                                    style={{ background }}
                                >
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <a href={`/valipadu?god=${encodeURIComponent(god.god_name)}`}>
                                                <img
                                                    src={`/assets/images/custom/gods/${image}`}
                                                    alt={god.god_name}
                                                />
                                            </a>
                                        </div>

                                        <div className="content">
                                            <div
                                                className="category-info"
                                                style={{
                                                    justifyContent:
                                                        "space-around",
                                                }}
                                            >
                                                <h6 className="text-center">
                                                    {god.god_name}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}