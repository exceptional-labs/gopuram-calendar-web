import LegacyScripts from "./components/LegacyScripts";
import Header from "./components/Header";
import TopMarquee from "./components/TopMarquee";
import TodayCalendarSection from "./components/TodayCalendarSection";
import RasiPalanSection from "./components/RasiPalanSection";
import TodayInfoSection from "./components/TodayInfoSection";
import ValipaduSection from "./components/ValipaduSection";
import SoundSection from "./components/SoundSection";
import ApplicationsSection from "./components/ApplicationsSection";
import TodayThirukkuralSection from "./components/TodayThirukkuralSection";
import PlayStoreReviewsSection from "./components/PlayStoreReviewsSection";
import AOSInit from "./components/AOSInit";
import Footer from "./components/Footer";

export default function HomePage() {
    return (
        <>
            <LegacyScripts />

            <AOSInit />

            <Header />

            <TopMarquee />

            <TodayCalendarSection />

            <RasiPalanSection />

            <TodayInfoSection />

            <ValipaduSection />

            <SoundSection />

            {/* <ApplicationsSection /> */}

            <TodayThirukkuralSection />

            <PlayStoreReviewsSection />

            <Footer />
        </>
    );
}