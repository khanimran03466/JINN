
"use client";

import { useState } from "react";
import Hero from "../shared/Hero";
import { ResourcesData } from "../../app/data";
import Link from "next/link";

const Resources = () => {
    const [activeTab, setActiveTab] = useState("Case Studies");
    const [searchQuery, setSearchQuery] = useState("");

    const tabs = ["Case Studies", "Whitepapers", "Blogs", "News"];

    const filteredData = ResourcesData.filter(item => {
        const matchesTab = item.category === activeTab;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const getCount = (tab) => {
        return ResourcesData.filter(item => item.category === tab).length;
    };

    const formatCount = (count) => {
        return count < 10 ? `0${count}` : count;
    };

    return (
        <>
            <section>
                <Hero
                    title="Real-World Success with DJINN"
                    description="Need Something Unique?"
                    imageLink="/images/Resources-Hero-Section.png"
                    videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Resources+Hero+Section.mp4"
                    ctaText="Get Started"
                    ctaLink="/get-started"
                    btnDark={true}
                />
            </section>
            <section>
                <div className="page-container">
                    <header className="header-intro">
                        <p className="intro-text">Looking to learn more about the power of AI-driven data processing and how DJINN can transform your business? Our resources section offers valuable insights, practical examples, and answers to frequently asked questions.</p>
                    </header>

                    <nav className="resource-nav">
                        <div className="tabs">
                            {tabs.map(tab => (
                                <span
                                    key={tab}
                                    className={`tab ${activeTab === tab ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab} <sup>{formatCount(getCount(tab))}</sup>
                                </span>
                            ))}
                        </div>
                    </nav>

                    <div className="section-controls">
                        <div className="content-text">
                            <h2>Real-World Success with DJINN</h2>
                            <p className="subtitle">Discover how businesses and organizations across various industries are leveraging DJINN to overcome their data challenges and achieve significant results</p>
                        </div>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search here"
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="search-btn">Search</button>
                        </div>
                    </div>

                    <div className="card-grid">
                        {filteredData.length > 0 ? (
                            filteredData.map(item => (
                                <div className="card" key={item.id}>
                                    <div className="image-box">
                                        <img src={item.thumbnail.url} alt={item.title} className="card-img" />
                                        <span className={`badge ${item.category === "Whitepapers" ? "badge1" : ""}`}>{item.badge}</span>
                                        <div className="overlay-text">
                                            <div className="left-text">
                                                <span className="title-small">Lorem Ipsum</span>
                                                <span className="date-small">Lorem Ipsum</span>
                                            </div>
                                            <div className="right-text">Lorem Ipsum</div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <Link href={`/resources/${item.slug}`} className="read-more">
                                            {item.linkText} ↗
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ color: "#fff", gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
                                No resources found matching your search.
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resources;