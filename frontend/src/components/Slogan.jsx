import React from "react";


const Slogan = () => {

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-19123a4 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
            data-id="19123a4"
            data-element_type="section"
            data-settings='{"background_background":"classic","background_motion_fx_motion_fx_scrolling":"yes","background_motion_fx_translateY_effect":"yes","background_motion_fx_translateY_direction":"negative","background_motion_fx_translateY_speed":{"unit":"px","size":5,"sizes":[]},"background_motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"background_motion_fx_devices":["desktop","tablet","mobile"]}'
            style={{backgroundImage: `url(${require(`../assets/8.jpg`)})`}}
        >
            <div className="elementor-background-overlay"/>
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8794994"
                    data-id={8794994}
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-6c633aa elementor-widget elementor-widget-heading"
                            data-id="6c633aa"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-xl">
                                    SAFE &amp; ON TIME
                                </h2>{" "}
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-acc9707 elementor-widget elementor-widget-heading"
                            data-id="acc9707"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                        >
                            <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title elementor-size-large">
                                    ETS EUROPEAN TRUCKING SERVICES
                                </h1>{" "}
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-433248ce elementor-widget elementor-widget-text-editor"
                            data-id="433248ce"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                        >
                            <div className="elementor-widget-container">
                                <p className="MsoNormal">
                                <span lang="EN-GB">
                                  Your trusted expert in special equipment. With our in-depth knowledge of the market,
                                    we offer a wide range of services related to machinery.
                                </span>
                                </p>{" "}
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-18708522 elementor-align-left elementor-tablet-align-center elementor-mobile-align-center elementor-invisible elementor-widget elementor-widget-button"
                            data-id={18708522}
                            data-element_type="widget"
                            data-settings='{"_animation":"fadeIn","_animation_delay":800}'
                            data-widget_type="button.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a
                                        className="elementor-button elementor-button-link elementor-size-sm"
                                        href="#about"
                                    >
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-icon elementor-align-icon-right">
                                      <i
                                          className="fa fa-caret-down"
                                          aria-hidden="true"
                                      />
                                    </span>
                                    <span className="elementor-button-text">
                                      About ets
                                    </span>
                                  </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Slogan