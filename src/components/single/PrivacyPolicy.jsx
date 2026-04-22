import Hero from '../shared/Hero'

const PrivacyPolicy = () => {
    return (
        <>
            <section>
                <Hero
                    title="Privacy Policy"
                    description="Need Something Unique?"
                    titleHighlight="Transparency is key to building strong relationships. This Privacy Policy explains exactly how Djinn handles your personal information, from collection to usage, ensuring you have a complete understanding of our data practices."
                    imageLink="/images/pp-hero.png"
                    videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Privacy+Policy.mp4"
                    ctaText="Get Started"
                    ctaLink="/get-started"
                    btnDark={true}
                />
            </section>

            <section className="py-16 px-5 max-w-5xl mx-auto text-gray-300">
                <div className="space-y-8 text-[15px] leading-relaxed font-light">
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Effective Date: July 11, 2024</h3>
                        <p>
                            Djinn (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, and share information about you when you use our website, services, and applications (collectively, the &quot;Services&quot;).
                        </p>
                        <p className="mt-2">
                            By accessing or using the Services, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use the Services.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">1. The Commitment to Your Privacy</h4>
                        <p>
                            We prioritize the protection of your personal information. Our systems are designed with security in mind, and we only collect data that is necessary to provide and improve our Services. We are transparent about our practices and give you control over your data.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">2. Information We Collect</h4>
                        <p>We collect several types of information from and about users of our Services, including information:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Information You Provide to Us: We collect information you provide directly to us when you create an account, fill out a form, request support, or communicate with us. This may include your:
                                <ul className="list-circle pl-5 mt-1">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company name and job title</li>
                                    <li>Billing information (e.g., credit card details)</li>
                                    <li>Any other information you choose to provide</li>
                                </ul>
                            </li>
                            <li className="mt-2">Information We Collect Automatically: When you access or use our Services, we automatically collect certain information, including:
                                <ul className="list-circle pl-5 mt-1">
                                    <li>Log Data: Information about your interactions with the Services, such as IP address, browser type, operating system, referring URLs, and pages viewed.</li>
                                    <li>Device Information: Information about the device you use to access the Services, including hardware model, operating system version, and unique device identifiers.</li>
                                    <li>Usage Information: Information about your use of the Services, such as the features you use, the time and duration of your use, and the links you click.</li>
                                    <li>Location Information: We may collect your general location based on your IP address.</li>
                                </ul>
                            </li>
                            <li className="mt-2">Information from Third Parties: We may obtain information from other sources, such as third-party services and organizations. For example, if you access our Services through a third-party application, we may receive information about you from that application.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">3. How We Use Your Information</h4>
                        <p>We use the information we collect for various purposes, including to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Provide, maintain, and improve our Services.</li>
                            <li>Process transactions and send related information.</li>
                            <li>Send administrative messages, technical notices, updates, security alerts, and support and administrative messages.</li>
                            <li>Respond to your comments, questions, and requests, and provide customer service.</li>
                            <li>Communicate with you about products, services, offers, promotions, and events.</li>
                            <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
                            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of Djinn and others.</li>
                            <li>Personalize and improve the Services.</li>
                            <li>Carry out any other purpose described to you at the time the information was collected.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">4. How We Share Your Information</h4>
                        <p>We may share your information as follows or as otherwise described in this Privacy Policy:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
                            <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.</li>
                            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Djinn or others.</li>
                            <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                            <li>Between and among Djinn and our current and future parents, affiliates, subsidiaries, and other companies under common control and ownership.</li>
                            <li>With your consent or at your direction.</li>
                        </ul>
                        <p className="mt-2">We may also share aggregated or de-identified information, which cannot reasonably be used to identify you.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">5. Security of Data</h4>
                        <p>
                            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet or security system can be guaranteed to be 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">6. Data Retention</h4>
                        <p>
                            We store the information we collect about you for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">7. Your Data Protection Rights</h4>
                        <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Access: Request a copy of your personal information.</li>
                            <li>Rectification: Request that we correct inaccuracies in your personal information.</li>
                            <li>Erasure: Request that we delete your personal information.</li>
                            <li>Restriction of Processing: Request that we restrict the processing of your personal information.</li>
                            <li>Data Portability: Request that we transfer your personal information to another organization or directly to you.</li>
                            <li>Object to Processing: Object to our processing of your personal information.</li>
                        </ul>
                        <p className="mt-2">To exercise any of these rights, please contact us using the contact information provided below. We will respond to your request in accordance with applicable laws.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">8. Third-Party Links</h4>
                        <p>
                            Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of such third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">9. Children&apos;s Privacy</h4>
                        <p>
                            Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">10. Changes to This Privacy Policy</h4>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                        <p className="mt-4">
                            Contact Us<br />
                            If you have any questions about this Privacy Policy, please contact us at:<br />
                            <a href="mailto:info@d-jinn.ai" className="text-blue-400 hover:underline">info@d-jinn.ai</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy