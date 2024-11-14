import React, { useState } from 'react';
import '../FeedbackForm.css';
import Header from "./Header";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        feedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the submission (e.g., send data to a server)
        console.log('Feedback Submitted:', formData);
    };

    return (
        <div>
            <Header />
            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>Give us Your Feedback!</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        rows="6"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
