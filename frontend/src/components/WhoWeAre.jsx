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
                                    Since 2017, <b>Transport Site</b> has been a trusted partner for
                                    businesses in the construction, mining, and industrial sectors. With over 7 years of
                                    experience, we’ve built a reputation for delivering reliable and tailored solutions
                                    to meet the diverse needs of our clients. Our goal is to not only supply equipment
                                    but to provide comprehensive services that ensure your operations run seamlessly and
                                    efficiently.
                                </p>
                                <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-text">
                                            Capital Repairs
                                        </span>
                                </li>
                                <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-text">
                                            Diagnostics and Maintenance
                                        </span>
                                </li>
                                <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-text">
                                            Spare Parts Supply
                                        </span>
                                </li>
                                <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-text">
                                            Long-Term Rentals
                                        </span>
                                </li>
                                <p> </p>
                                <p>
                                    At Transport Site, we don’t just provide services — we focus on creating long-term
                                    value for your business. Our integrated approach reduces downtime, optimizes costs,
                                    and ensures your equipment remains dependable throughout its lifecycle.
                                </p>
                                <p>
                                    Let us help you achieve your goals with the expertise, commitment, and quality you
                                    can rely on. Explore our full range of solutions, and see how we can work together
                                    to drive your success.
                                </p>{" "}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}


export default WhoWeAre
