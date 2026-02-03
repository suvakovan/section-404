import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TerminalPrompt from '../components/TerminalPrompt';
import TypingText from '../components/TypingText';
import { contactIcon } from '../utils/asciiArt';

/**
 * Contact page - Display contact information and form
 */
const Contact = () => {
    const [showContent, setShowContent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fade-in">
            {/* Contact Header */}
            <div className="ascii-art mb-3">
                {contactIcon}
            </div>

            <TerminalPrompt command="cat contact_info.txt" />
            <div className="terminal-output mb-3">
                <TypingText
                    text="# CONTACT SECTION-404"
                    speed={40}
                    onComplete={() => setShowContent(true)}
                />
            </div>

            {showContent && (
                <>
                    <div className="terminal-output mb-3 slide-in-left">
                        <p className="text-secondary mb-2">
                            Ready to secure your organization? Get in touch with our security experts.
                            We're available 24/7 for urgent security matters.
                        </p>
                    </div>

                    <TerminalPrompt command="cat contact_details.json" />
                    <div className="terminal-output mb-3 slide-in-right">
                        <h2 className="mb-2">📧 Contact Information</h2>
                        <div className="mb-2">
                            <span className="text-dim">Email: </span>
                            <span className="text-bright">security@kaliorg.com</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-dim">Emergency Hotline: </span>
                            <span className="text-bright">+1 (555) SEC-URITY</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-dim">Office: </span>
                            <span className="text-secondary">+1 (555) 123-4567</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-dim">Address: </span>
                            <span className="text-secondary">123 Security Blvd, Cyber City, CC 12345</span>
                        </div>
                    </div>

                    <TerminalPrompt command="cat social_links.txt" />
                    <div className="terminal-output mb-3 slide-in-left">
                        <h2 className="mb-2">🌐 Social & Professional</h2>
                        <ul className="command-list">
                            <li>
                                <span className="command-name">GitHub:</span>
                                <span className="command-description">github.com/kaliorg</span>
                            </li>
                            <li>
                                <span className="command-name">LinkedIn:</span>
                                <span className="command-description">linkedin.com/company/kaliorg</span>
                            </li>
                            <li>
                                <span className="command-name">Twitter:</span>
                                <span className="command-description">@KaliOrgSec</span>
                            </li>
                            <li>
                                <span className="command-name">Blog:</span>
                                <span className="command-description">blog.kaliorg.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <TerminalPrompt command="nano send_message.sh" />
                    <div className="terminal-output mb-3 slide-in-right">
                        <h2 className="mb-2">📝 Send Us a Message</h2>

                        {submitted ? (
                            <div className="text-bright glow-effect">
                                ✓ Message sent successfully! We'll get back to you within 24 hours.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                                <div className="mb-2">
                                    <label className="text-dim" style={{ display: 'block', marginBottom: '4px' }}>
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="command-input"
                                        style={{
                                            width: '100%',
                                            border: '1px solid var(--text-dim)',
                                            padding: '8px',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="text-dim" style={{ display: 'block', marginBottom: '4px' }}>
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="command-input"
                                        style={{
                                            width: '100%',
                                            border: '1px solid var(--text-dim)',
                                            padding: '8px',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="text-dim" style={{ display: 'block', marginBottom: '4px' }}>
                                        Subject:
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="command-input"
                                        style={{
                                            width: '100%',
                                            border: '1px solid var(--text-dim)',
                                            padding: '8px',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="text-dim" style={{ display: 'block', marginBottom: '4px' }}>
                                        Message:
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="command-input"
                                        style={{
                                            width: '100%',
                                            border: '1px solid var(--text-dim)',
                                            padding: '8px',
                                            borderRadius: '4px',
                                            resize: 'vertical'
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="nav-link"
                                    style={{
                                        cursor: 'pointer',
                                        background: 'transparent'
                                    }}
                                >
                                    Send Message →
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Business Hours */}
                    <TerminalPrompt command="cat business_hours.txt" />
                    <div className="terminal-output mb-3 slide-in-left">
                        <h2 className="mb-2">🕐 Business Hours</h2>
                        <p className="text-secondary mb-1">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p className="text-secondary mb-1">Saturday: 10:00 AM - 4:00 PM EST</p>
                        <p className="text-secondary mb-2">Sunday: Closed (Emergency hotline available)</p>
                        <p className="text-bright">🚨 24/7 Emergency Response Available</p>
                    </div>

                    {/* Navigation */}
                    <div className="nav-links slide-in-right">
                        <Link to="/" className="nav-link">← Home</Link>
                        <Link to="/team" className="nav-link">Team</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Contact;
