import React from "react";
import '../index.css'
import '../OurClients.css'



const OurClients = () => {
    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-f1a793d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="f1a793d"
            data-element_type="section"
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-78eae9c"
                    data-id="78eae9c"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-e1cbdad elementor-widget elementor-widget-heading"
                            data-id="e1cbdad"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default" style={{color: '#3a3a3a'}}>
                                    <b>Some of our clients</b>
                                </h2>{" "}
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-cbe60ce elementor-widget elementor-widget-global elementor-global-420 elementor-widget-image-carousel"
                            data-id="cbe60ce"
                            data-element_type="widget"
                            data-settings='{"slides_to_show":"4","slides_to_show_tablet":"3","slides_to_show_mobile":"1","slides_to_scroll":"1","slides_to_scroll_tablet":"1","navigation":"none","autoplay_speed":0,"speed":3000,"image_spacing_custom":{"unit":"px","size":100,"sizes":[]},"autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","infinite":"yes","image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]}}'
                            data-widget_type="image-carousel.default"
                        >
                            <div className="elementor-widget-container">
                                <div
                                    className="elementor-image-carousel-wrapper swiper-container"
                                    dir="ltr"
                                >
                                    <div
                                        className="elementor-image-carousel swiper-wrapper"
                                        aria-live="off"
                                    >
                                        <div
                                            className="swiper-slide"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="1 of 16"
                                        >
                                            <figure className="swiper-slide-inner">
                                                <img
                                                    decoding="async"
                                                    className="swiper-slide-image"
                                                    src={require("../assets/logo1.jpg")}
                                                    alt="Logo-DHL"
                                                />
                                            </figure>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="2 of 16"
                                        >
                                            <figure className="swiper-slide-inner">
                                                <img
                                                    decoding="async"
                                                    className="swiper-slide-image"
                                                    src={require("../assets/logo2.jpg")}
                                                    alt="Logo-DFDS"
                                                />
                                            </figure>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="3 of 16"
                                        >
                                            <figure className="swiper-slide-inner">
                                                <img
                                                    decoding="async"
                                                    className="swiper-slide-image"
                                                    src={require("../assets/logo3.png")}
                                                    alt="Logo-DSV"
                                                />
                                            </figure>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="4 of 16"
                                        >
                                            <figure className="swiper-slide-inner">
                                                <img
                                                    decoding="async"
                                                    className="swiper-slide-image"
                                                    src={require("../assets/logo4.png")}
                                                    alt="Logo-Cargo-Care"
                                                />
                                            </figure>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="13 of 16"
                                        >
                                            <figure className="swiper-slide-inner">
                                                <img
                                                    decoding="async"
                                                    className="swiper-slide-image"
                                                    src={require("../assets/logo3.png")}
                                                    alt="vlt-cargo"
                                                />
                                            </figure>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            role="group"
                                            aria-roledescription="slide"
                                            aria-label="14 of 16"
                                        >
                                            <figure className="swiper-slide-inner">
                                                <img
                                                    decoding="async"
                                                    className="swiper-slide-image"
                                                    src={require("../assets/logo4.png")}
                                                    alt="freja"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default OurClients
