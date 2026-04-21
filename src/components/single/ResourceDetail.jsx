"use client";

import Link from "next/link";
import VideoPlay from "../shared/VideoPlay";
import { ResourcesData } from "../../app/data";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const ResourceDetail = ({ data }) => {
    if (!data) return null;

    const similarReads = ResourcesData.filter(
        (item) => item.category === data.category && item.id !== data.id
    ).slice(0, 2);

    // React Icons
    const Icons = {
        Linkedin: FaLinkedin,
        Github: FaGithub,
        Twitter: FaTwitter,
        Facebook: FaFacebook
    };

    return (
        <div className="resource-detail-page">
            <div className="page-container">
                {/* Breadcrumbs */}
                <nav className="breadcrumbs">
                    <div className="crumb-path">
                        <Link href="/resources">Resources</Link> |
                        <span> {data.category}</span> |
                        <span className="active"> {data.title}</span>
                    </div>
                    <div className="share-actions">
                        <Link href="#"><Icons.Linkedin /></Link>
                        <Link href="#"><Icons.Twitter /></Link>
                        <Link href="#"><Icons.Facebook /></Link>
                    </div>
                </nav>

                {/* Header Information */}
                <header className="detail-header">
                    <div className="header-main">
                        <h1>{data.title}</h1>
                        <p className="description">{data.description}</p>
                    </div>
                    <div className="header-meta">
                        <div className="meta-inner">
                            <div className="meta-info-row">
                                <span className="label">By {data.author}</span>
                                <span className="date">{data.date}</span>
                            </div>
                            <div className="meta-time-row">
                                <span className="time">{data.readingTime}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <div className="detail-hero">
                    {data.thumbnail.type === "video" ? (
                        <VideoPlay videoUrl={data.thumbnail.url} className="hero-img" />
                    ) : (
                        <img src={data.thumbnail.url} alt={data.title} className="hero-img" />
                    )}
                </div>

                {/* Content Sections */}
                <article className="detail-content">
                    <div className="content-grid">
                        <div className="main-body">
                            {data.content.map((section, idx) => {
                                switch (section.type) {
                                    case "paragraph":
                                        return <p key={idx}>{section.text}</p>;
                                    case "heading": {
                                        const Tag = `h${section.level || 2}`;
                                        return <Tag key={idx}>{section.text}</Tag>;
                                    }
                                    case "list":
                                        return (
                                            <ul key={idx}>
                                                {section.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        );
                                    case "quote":
                                        return (
                                            <blockquote key={idx} className="content-quote">
                                                <p>{section.text}</p>
                                            </blockquote>
                                        );
                                    case "image":
                                        return <img key={idx} src={section.url} alt="Content" className="content-img" />;
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                        <aside className="sidebar">
                            <div className="sidebar-card">
                                <h3>CloudMojo Tech Pvt. Ltd., in collaboration with Newgen Software Technologies Ltd.</h3>
                                <p>Optimizing Digital Transformation for the Indore Municipal Corporation</p>
                                <ul>
                                    <li>Optimize operational efficiency</li>
                                    <li>Ensure Data Accuracy</li>
                                    <li>Enhance Scalability</li>
                                    <li>Promote Environmental Sustainability</li>
                                </ul>
                                <div className="attribution">
                                    <p>A statement from Mr. A. Parvez Banatwala, CEO & Founder of CloudMojo Tech Pvt. Ltd.</p>
                                    <p>Project Implications and Future Outlook</p>
                                    <p>About CloudMojo Tech Pvt. Ltd.</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </article>

                {/* Similar Reads */}
                <section className="similar-reads">
                    <h2 className="section-title">Similar Reads</h2>
                    <div className="card-grid">
                        {similarReads.map((item) => (
                            <Link href={`/resources/${item.slug}`} key={item.id} className="card-link">
                                <div className="card">
                                    <div className="image-box">
                                        {item.thumbnail.type === "video" ? (
                                            <VideoPlay videoUrl={item.thumbnail.url} className="card-img" />
                                        ) : (
                                            <img src={item.thumbnail.url} alt={item.title} className="card-img" />
                                        )}
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
                                        <span className="read-more">{item.linkText} ↗</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>


        </div>
    );
};

export default ResourceDetail;
