import React from "react";
import '../index.css'


const WhoWeAre = () => {
    const CompanyName = "Transport Site";

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-6c4eb7d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="6c4eb7d"
            data-element_type="section"
            id="about"
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e977dfb"
                    data-id="e977dfb"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-72cfc85 elementor-widget elementor-widget-heading"
                            data-id="72cfc85"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                    Who we are
                                </h2>{" "}
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-8b0587a elementor-widget elementor-widget-text-editor"
                            data-id="8b0587a"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                        >
                            <div className="elementor-widget-container">
                                <p>
                                    <b>{CompanyName}</b> is more than just a supplier -
                                    we are your dedicated partner in success. With an established reputation for
                                    delivering exceptional service, we have earned the trust of clients worldwide.
                                    Our expertise spans beyond logistics, integrating procurement, sales,
                                    and comprehensive maintenance solutions.
                                    This ensures your equipment remains reliable, efficient, and operational throughout
                                    its entire lifecycle, minimizing downtime and maximizing value.
                                </p>
                                <p>
                                    By fostering lasting relationships with our clients, we prioritize their needs at
                                    every stage. Whether it's sourcing the right equipment or ensuring seamless
                                    operation, we are committed to supporting your growth on every step of the way.
                                </p>
                                <p>
                                    Take a closer look at the full range of possibilities we offer, and let us begin
                                    collaborating to achieve your goals. Our expertise and commitment to
                                    excellence will ensure a productive and successful partnership from the very start.
                                </p>{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1ece4b5"
                    data-id="1ece4b5"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-a29ee44 elementor-widget elementor-widget-image"
                            data-id="a29ee44"
                            data-element_type="widget"
                            data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_direction":"negative","motion_fx_translateY_speed":{"unit":"px","size":14,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":50}},"_animation":"none","_animation_delay":800,"motion_fx_devices":["desktop"]}'
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <img
                                    decoding="async"
                                    width={1}
                                    height={1}
                                    src="https://www.ets-trucking.com/wp-content/uploads/2019/06/ETS-Logo.svg"
                                    className="attachment-full size-full wp-image-302"
                                    alt=""
                                />{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default WhoWeAre
