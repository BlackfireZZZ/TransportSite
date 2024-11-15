import React from 'react';

const DownloadLink = ({pdf_path, text}) => {
    // Укажите путь к вашему PDF-файлу
    const pdfPath = require('../assets/' + pdf_path); // Замените путь на ваш

    return (
        <a
            href={pdfPath}
            download="production_list.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                margin: '0px 20px',
                textDecoration: 'underline',
                color: 'blue',
                cursor: 'pointer',
            }}
        >
            {text}
        </a>
    );
};

export default DownloadLink;
