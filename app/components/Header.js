export default function Header() {
    return (
        <>
            {/* Start Header */}
            <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
                <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">

                    {/* Header Left */}
                    <div className="col-lg-2 col-6">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img
                                        src="/assets/images/logo/logo-dark.png"
                                        alt="Gopuram Calendar"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Header Center */}
                    <div className="col-lg-10 col-6">
                        <div className="header-center">

                            <nav
                                id="sideNav"
                                className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav"
                            >
                                <ul className="primary-menu nav nav-pills">
                                    <li className="nav-item current">
                                        <a className="nav-link smoth-animation" href="#1">
                                            கோபுரம்
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link smoth-animation" href="#portfolio">
                                            இன்று
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link smoth-animation" href="#3">
                                            இறை வழிபாடு
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link smoth-animation" href="#4">
                                            சப்தங்கள்
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link smoth-animation" href="#5">
                                            பயன்பாடுகள்
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link smoth-animation" href="#6">
                                            பதிவுகள்
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            {/* Header Right */}
                            <div className="header-right">
                                <a
                                    className="rn-btn"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://play.google.com/store/apps/details?id=com.gopuram.calendar&pcampaignid=web_share"
                                >
                                    <span>கோபுரம் காலண்டர் செயலி</span>
                                </a>

                                <div className="hamberger-menu d-block d-xl-none">
                                    <i
                                        id="menuBtn"
                                        className="feather-menu humberger-menu"
                                    ></i>
                                </div>

                                <div className="close-menu d-block">
                                    <span className="closeTrigger">
                                        <i data-feather="x"></i>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </header>

            {/* Mobile Menu */}
            <div className="popup-mobile-menu">
                <div className="inner">
                    <div className="menu-top">
                        <div className="menu-header">
                            <a className="logo" href="/">
                                <img
                                    src="/assets/images/logo/logo-dark.png"
                                    alt="Gopuram Calendar"
                                />
                            </a>

                            <div className="close-button">
                                <button className="close-menu-activation close">
                                    <i data-feather="x"></i>
                                </button>
                            </div>
                        </div>

                        <p
                            className="discription"
                            style={{
                                color: "var(--color-primary)",
                                fontWeight: "bold",
                            }}
                        >
                            வாழ்க வளமுடன்!
                        </p>
                    </div>

                    <div className="content">
                        <ul className="primary-menu nav nav-pills onepagenav">
                            <li className="nav-item current">
                                <a className="nav-link smoth-animation" href="#1">
                                    கோபுரம்
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link smoth-animation" href="#portfolio">
                                    இன்று
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link smoth-animation" href="#3">
                                    இறை வழிபாடு
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link smoth-animation" href="#4">
                                    சப்தங்கள்
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link smoth-animation" href="#5">
                                    பயன்பாடுகள்
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link smoth-animation" href="#6">
                                    பதிவுகள்
                                </a>
                            </li>
                        </ul>

                        <a
                            className="rn-btn mt--30"
                            style={{ background: "var(--color-primary)" }}
                            target="_blank"
                            rel="noreferrer"
                            href="https://play.google.com/store/apps/details?id=com.gopuram.calendar&pcampaignid=web_share"
                        >
                            <span>கோபுரம் காலண்டர் செயலி</span>
                        </a>

                        <div className="social-share-style-1 mt--0">
                            <span className="title">
                                கோபுரம் காலண்டர் உடன் இணைந்திருங்கள்!
                            </span>

                            <ul className="social-share d-flex liststyle">
                                <li className="facebook">
                                    <a href="#">
                                        <i data-feather="facebook"></i>
                                    </a>
                                </li>

                                <li className="instagram">
                                    <a href="#">
                                        <i data-feather="instagram"></i>
                                    </a>
                                </li>

                                <li className="linkedin">
                                    <a href="#">
                                        <i data-feather="youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}