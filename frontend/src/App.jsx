import './please.css'
import './App.css';
import './index.css'
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import ReviewCarousel from "./components/ReviewCarousel";

function App() {
  return (
      <>
        <a
            className="skip-link screen-reader-text"
            href="#content"
            role="link"
            title="Skip to content"
        >
          Skip to content
        </a>
        <div className="hfeed site" id="page">
          <Header />
          <div id="content" className="site-content">
            <div className="ast-container">
              <div id="primary" className="content-area primary">
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
                        <WhyChooseUs />
                        <ReviewCarousel />
                      </div>
                    </div>
                    {/* .entry-content .clear */}
                  </article>
                  {/* #post-## */}
                </main>
                {/* #main */}
              </div>
              {/* #primary */}
            </div>{" "}
            {/* ast-container */}
          </div>
          {/* #content */}
          <Footer />
        </div>
        </>
  );
}

export default App;
