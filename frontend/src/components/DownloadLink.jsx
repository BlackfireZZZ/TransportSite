import React from 'react';

const DownloadLink = ({ pdf_path, text }) => {
    // Укажите путь к вашему PDF-файлу
    const pdfPath = require('../assets/' + pdf_path); // Замените путь на ваш

    return (
        <a
            href={pdfPath}
            download="production_list.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'inline-block',
                backgroundColor: '#fcb900',
                color: '#000000',
                padding: '5px 15px',
                borderRadius: '25px', // Сильно скругленные углы
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                textAlign: 'center',
                cursor: 'pointer',
                margin: '0px 20px',
                width: '160px'
            }}
        >
            {text}
        </a>
    );
};

export default DownloadLink;
