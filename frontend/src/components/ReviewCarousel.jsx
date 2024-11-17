import React, { useState } from 'react';
import '../ReviewCarousel.css'

const reviews = [
    {
        text: `"I contacted NK Lojistik for a non-standard order. The managers approached the issue very carefully, developing an individual plan. In the end, everything went smoothly. Thank you for your professionalism!"`,
        author: "Net Reynolds",
        image: "/path/to/image1.jpg", // Путь к изображению
    },
    {
        text: `"There was a difficult situation with the delivery of large-sized special equipment with another company. We turned to NK Lojistik hoping for a miracle. And it happened! The company found the optimal solution, and the equipment arrived on time. Thank you very much!"`,
        author: "Nina Perry",
        image: "/path/to/image2.jpg",
    },
    {
        text: `"At the beginning we were consulted on the requested type of equipment, several alternatives were presented to us. After importing the equipment, we were provided with after-sales assistance (translation of documents, service). Appreciate your cooperation"`,
        author: "Ahmet Yılmaz",
        image: "/path/to/image2.jpg",
    },
    {
        text: `"Alle Vertragsbedingungen wurden von der Firma pünktlich erfüllt, wir haben keine Klagen."`,
        author: "Leyla Demir",
        image: "/path/to/image2.jpg",
    },
    {
        text: `"Yakın zamanda Avrupa'dan bir teslimatı geldi ve her şey umduğumuz üzereydi. Bu şirketi bizzati sizlere tavsiye ederim. Saygılarımla..."`,
        author: "Mehmet Kaya",
        image: "/path/to/image2.jpg",
    },
];

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const { text, author, image } = reviews[currentIndex];

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-1ec27f8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="1ec27f8"
            data-element_type="section"
        >
            <div style={{height: '450px'}}>
                <section className="review-carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="content-wrapper">
                                <div className="image-section" style={{ backgroundImage: `url(${image})` }} />
                                <div className="text-section" style={{display: 'block', alignItems: 'center', justifyContent: 'center'}} >
                                    <h2 className="title">Client Reviews</h2>
                                    <span className="quote-symbol">“</span>
                                    <p className="review-text">{text}</p>
                                    <h5 className="review-author">{author}</h5>
                                </div>

                            </div>
                        </div>
                        <button className="carousel-control prev" onClick={handlePrev}>‹</button>
                        <button className="carousel-control next" onClick={handleNext}>›</button>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ReviewCarousel;
