import React, { useState } from 'react';
import '../FeedbackForm.css';
import Header from "./Header";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        reason: '',
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
        console.log('Feedback Submitted:', formData);
    };

    return (
        <div>
            <Header />
            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>Contact us</h2>
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
                <div className="form-group" >
                    <label htmlFor="reason">Reason for Contact</label>
                    <select
                        id="reason"
                        name="reason"
                        style={{width: '100%', borderRadius: '5px'}}
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled >Please select the reason for your inquiry</option>
                        <option value="general">General inquiry</option>
                        <option value="order">Order inquiry</option>
                        <option value="technical">Technical support</option>
                        <option value="complaint">Complaint</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Message</label>
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
