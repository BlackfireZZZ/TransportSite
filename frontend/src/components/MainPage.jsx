import '../please.css'
import '../App.css';
import '../index.css'
import Header from "./Header";
import Slogan from "./Slogan";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";
import ReviewCarousel from "./ReviewCarousel";
import OurClients from "./OurClients";
import Timeline from "./Timeline";

function MainPage() {
    const events = [
        { year: "2017", title: "Foundation", details: "Foundation year. Establishment of the company and launch of core services (capital repair and spare parts supply). Initial rental fleet: 2 units of specialized machinery." },
        { year: "2018–2019", title: "Service Expansion", details: "Expansion of services with diagnostics and maintenance offerings. Rental fleet grows to 5 units. First long-term rental contracts signed." },
        { year: "2020–2021", title: "Market Presence", details: "Strengthening market presence. Introduction of partnerships with major equipment brands for spare parts supply. Rental fleet reaches 10 units." },
        { year: "2022–2023", title: "Diversification", details: "Diversification of services, including custom leasing solutions and mobile repair teams. Focus on client acquisition in construction and mining sectors. Rental fleet increases to 12 units." },
        { year: "2024", title: "Rebranding", details: "Company rebranding to reflect growth and modernization. Rental fleet expanded to 15 units. Launch of an updated website with streamlined service options and 24/7 customer support." },
    ];

    return (
        <>
            <div className="hfeed site" id="page">
                <Header />
                <h1>DEMO VERSION OF SITE</h1>
                <div id="content" className="site-content">
                    <div className="ast-container">
                            <main id="main" className="site-main">
                                <article
                                    className="post-6 page type-page status-publish ast-article-single"
                                    id="post-6"
                                    itemType="https://schema.org/CreativeWork"
                                    itemScope="itemscope"
                                >
                                    <header className="entry-header ast-no-title ast-header-without-markup"></header>{" "}
                                    {/* .entry-header */}
                                    <div className="entry-content clear" itemProp="text">
                                        <div
                                            data-elementor-type="wp-post"
                                            data-elementor-id={6}
                                            className="elementor elementor-6"
                                            data-elementor-post-type="page"
                                        >
                                            <Slogan />
                                            <WhoWeAre />
                                            <Timeline events={events} />
                                            <OurClients />
                                            <WhyChooseUs />
                                            <ReviewCarousel />
                                        </div>
                                    </div>
                                    {/* .entry-content .clear */}
                                </article>
                                {/* #post-## */}
                            </main>
                            {/* #main */}
                    </div>{" "}
                    {/* ast-container */}
                </div>
                {/* #content */}
                <Footer />
            </div>
        </>
    );
}

export default MainPage;
