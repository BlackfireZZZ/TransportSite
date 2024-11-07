import React, {useEffect, useState} from "react";
import Config from "../config";



const Header = () => {
    const  baseUrl = Config.baseUrl;

    const [setCurrentPage] = useState(baseUrl); // Начальное значение для Home

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPage(window.location.pathname);
        };

        window.addEventListener("popstate", handleLocationChange);

        return () => {
            window.removeEventListener("popstate", handleLocationChange);
        };
    }, []);

    const handleClick = (path) => {
        setCurrentPage(path);
        window.history.pushState({}, "", path); // Меняем URL без перезагрузки страницы
    };


    return (
        <div
            data-elementor-type="header"
            data-elementor-id={34}
            className="elementor elementor-34 elementor-location-header"
            data-elementor-post-type="elementor_library"
        >
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-ab5a82f elementor-section-content-middle elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="ab5a82f"
                data-element_type="section"
            >
                <div className="elementor-container elementor-column-gap-no">
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d19f116"
                        data-id="d19f116"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-549f2e5 elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                                data-id="549f2e5"
                                data-element_type="widget"
                                data-widget_type="theme-site-logo.default"
                            >
                                <div className="elementor-widget-container">
                                    <a href="https://www.ets-trucking.com">
                                        <img
                                            width={1}
                                            height={1}
                                            src="https://www.ets-trucking.com/wp-content/uploads/2019/06/ETS-Logo-Text-2.svg"
                                            className="attachment-full size-full wp-image-306"
                                            alt=""
                                        />{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-627e83c"
                        data-id="627e83c"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-c457276 elementor-icon-list--layout-inline elementor-mobile-align-center elementor-hidden-phone elementor-align-right elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="c457276"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items elementor-inline-items">
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="tel:+31851122300">
                                                <span>
                                                  +31 (0)85 112 2300
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="mailto:contact@ets-trucking.com">

                                                <span className="elementor-icon-list-text">
                                                  contact@ets-trucking.com
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item elementor-inline-item">

                                            <span className="elementor-icon-list-text">
                                                24 / 7 Available
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-4e07a6f elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                                data-id="4e07a6f"
                                data-element_type="widget"
                                data-settings='{"full_width":"stretch","layout":"horizontal","submenu_icon":{"value":"<i class=\"fa fa-caret-down\"><\/i>","library":"fa-solid"},"toggle":"burger"}'
                                data-widget_type="nav-menu.default"
                            >
                                <div className="elementor-widget-container">
                                    <nav
                                        className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
                                        <ul id="menu-1-4e07a6f" className="elementor-nav-menu">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-44">
                                                <a
                                                    href={baseUrl}
                                                    onClick={() => handleClick(baseUrl)}
                                                    className={`elementor-item menu-link `}
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
                                                <a
                                                    href={`${baseUrl}/services`}
                                                    onClick={() => handleClick({baseUrl} + "/services")}
                                                    className={`elementor-item menu-link `}
                                                >
                                                    Services
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-200">
                                                <a
                                                    href={`${baseUrl}/feedback`}
                                                    onClick={() => handleClick({baseUrl} + "/feedback")}
                                                    className={`elementor-item menu-link `}
                                                >
                                                    Feedback
                                                </a>
                                            </li>
                                        </ul>
                                        {" "}
                                    </nav>
                                    <div
                                        className="elementor-menu-toggle"
                                        role="button"
                                        tabIndex={0}
                                        aria-label="Menu Toggle"
                                        aria-expanded="false"
                                    >
                                        <i
                                            aria-hidden="true"
                                            role="presentation"
                                            className="elementor-menu-toggle__icon--open eicon-menu-bar"
                                        />
                                        <i
                                            aria-hidden="true"
                                            role="presentation"
                                            className="elementor-menu-toggle__icon--close eicon-close"
                                        />{" "}
                                        <span className="elementor-screen-only">Menu</span>
                                    </div>
                                    <nav
                                        className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                                        aria-hidden="true"
                                    >
                                        <ul id="menu-2-4e07a6f" className="elementor-nav-menu">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-44">
                                                <a
                                                    href="https://www.ets-trucking.com/"
                                                    aria-current="page"
                                                    className="elementor-item elementor-item-active menu-link"
                                                    tabIndex={-1}
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-200">
                                                <a
                                                    href="https://www.ets-trucking.com/services/"
                                                    className="elementor-item menu-link"
                                                    tabIndex={-1}
                                                >
                                                    Services
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-289">
                                                <a
                                                    href="https://www.ets-trucking.com/partners/"
                                                    className="elementor-item menu-link"
                                                    tabIndex={-1}
                                                >
                                                    Partners
                                                </a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
                                                <a
                                                    href="https://www.ets-trucking.com/contact/"
                                                    className="elementor-item menu-link"
                                                    tabIndex={-1}
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                        {" "}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header