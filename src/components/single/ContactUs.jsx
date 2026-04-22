"use client";

import React, { useState } from "react";
import Hero from "@/components/shared/Hero";
import Image from "next/image";
import Link from "next/link";

const faqs = [
    {
        question: "What is Djinn and what problem does it solve?",
        answer: "Djinn is an AI-powered platform designed to process unstructured data and extract meaningful insights, helping businesses automate data extraction and analysis.",
    },
    {
        question: "Which industries benefit most from Djinn?",
        answer: "Industries that deal with large volumes of unstructured data, such as finance, healthcare, legal, logistics, and manufacturing, benefit significantly from Djinn.",
    },
    {
        question: "How does Djinn improve accuracy and reduce errors?",
        answer: "By utilizing advanced Machine Learning and AI algorithms, Djinn automates the extraction and categorization of data, reducing the likelihood of human error.",
    },
    {
        question: "Can Djinn integrate with our existing systems?",
        answer: "Yes, Djinn offers seamless integration capabilities via APIs to connect with your existing ERPs, CRMs, and custom workflows.",
    },
    {
        question: "How does Djinn handle large volumes of data?",
        answer: "Djinn is built on a scalable architecture that can process massive amounts of unstructured data efficiently and in real-time.",
    },
    {
        question: "What is 'Democratizing Data Insight' and how does Djinn achieve it?",
        answer: "It means making data accessible and understandable to everyone, not just technical users. Djinn achieves this through intuitive interfaces and automated analysis.",
    },
    {
        question: "How does Djinn provide a Return on Investment (ROI)?",
        answer: "By significantly reducing manual data entry time, minimizing errors, and unlocking valuable insights that drive better business decisions.",
    },
    {
        question: "How does Djinn handle different types of unstructured data?",
        answer: "Djinn leverages advanced AI, including Natural Language Processing (NLP), Computer Vision, and audio analysis, to process a wide variety of unstructured formats. Whether it's text in PDFs, handwritten forms in images, or spoken words in audio files, Djinn can intelligently extract, categorize, and transform this data into a structured, searchable format.",
    },
    {
        question: "Is Djinn secure and compliant with industry regulations?",
        answer: "Absolutely. Djinn employs enterprise-grade security protocols, including data encryption and strict access controls, to ensure compliance with global standards.",
    },
    {
        question: "How quickly can we see results after implementing Djinn?",
        answer: "Many clients experience noticeable improvements in efficiency and accuracy within the first few weeks of implementation.",
    },
    {
        question: "What kind of support does Djinn offer to its users?",
        answer: "We offer comprehensive support, including onboarding assistance, dedicated account managers, and a 24/7 technical support team.",
    },
    {
        question: "Can Djinn handle handwritten documents or varied document layouts?",
        answer: "Yes, our advanced Computer Vision and OCR models are trained to accurately interpret handwritten text and adapt to varying document structures.",
    }
];

const ContactUs = () => {
    const [activeFaq, setActiveFaq] = useState(7); // Open the 8th FAQ by default as seen in design
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", company: "", email: "", phone: "", message: "" });
            } else {
                const data = await response.json();
                setStatus(data.error || "Failed to send message.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <section>
                <Hero
                    title="Innovation in Data Intelligence"
                    description="Need Something Unique?"
                    imageLink="/images/contact-us/contact-us-hero.png"
                    videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Contact+Us+HEro+Section.mp4"
                    ctaText="Get Started"
                    ctaLink="/get-started"
                    btnDark={true}
                />
            </section>
            <section className="contact-us-page">
                <div className="contact-main">
                    {/* Form Section */}
                    <div className="contact-form-container" id="contact-form">
                        <div className="form-header">
                            <h2>Get in Touch</h2>
                            <div className="line-divider"></div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Message</label>
                                <textarea name="message" value={formData.message} onChange={handleInputChange} required></textarea>
                            </div>
                            <button type="submit" className="submit-btn" disabled={status === "Sending..."}>
                                {status === "Sending..." ? "Sending..." : "Let's talk"}
                            </button>
                            {status && status !== "Sending..." && <p className="form-status">{status}</p>}
                        </form>
                    </div>

                    {/* Right Text Section */}
                    <div className="contact-info-container">
                        <h2 className="info-title">We<span>&apos;re All Ears!</span></h2>
                        <p className="info-desc">
                            Tired of your data whispering secrets? Let&apos;s turn up the volume! Whether you&apos;re curious, ready to transform your data, or just want to say hi, we&apos;re here.
                        </p>
                        <div className="direct-contact">
                            <p>Don&apos;t like contact forms?</p>
                            <p>Mail Us: <a href="mailto:info@d-jinn.ai">info@d-jinn.ai</a></p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="faq-header">
                        <h2>Got any questions?</h2>
                        <h3>We&apos;ve got <span>answers</span>.</h3>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${activeFaq === index ? "active" : ""}`} onClick={() => toggleFaq(index)}>
                                <div className="faq-question">
                                    <h4>{faq.question}</h4>
                                    <span className="faq-icon">
                                        {activeFaq === index ? <Image src="/images/contact-us/close.png" alt="Close" width={24} height={24} /> : <Image src="/images/contact-us/open.png" alt="Open" width={24} height={24} />}
                                    </span>
                                </div>
                                {activeFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Call to Action */}
                <div className="contact-footer-cta">
                    <div className="cta-content">
                        <h3>Didn&apos;t find an answer?</h3>
                        <p>Our team is just an email away & ready to answer your question</p>
                        <Link href="#contact-form" className="glowing-btn">Get in touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;