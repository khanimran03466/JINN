import Hero from '../shared/Hero'

const TermsAndConditions = () => {
    return (
        <>
            <section>
                <Hero
                    title="Terms & Conditions"
                    description="Need Something Unique?"
                    titleHighlight="These Terms and Conditions govern your access to and use of Djinn. By accessing or using our services, you agree to be bound by these terms."
                    imageLink="/images/tc-hero.png"
                    videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Terms+%26+conditions.mp4"
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
                            Djinn (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Djinn application and related services (collectively, the &quot;Services&quot;). These Terms and Conditions govern your access to and use of our Services. By accessing or using our Services, you agree to be bound by these Terms and Conditions.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">1. Definitions</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong className="text-white font-medium">&quot;User&quot;</strong> refers to any individual or entity that accesses or uses the Services.</li>
                            <li><strong className="text-white font-medium">&quot;Content&quot;</strong> refers to text, images, audio, video, or other materials generated, uploaded, or transmitted through the Services.</li>
                            <li><strong className="text-white font-medium">&quot;Djinn Platform&quot;</strong> refers to the proprietary software, algorithms, and infrastructure that power the Services.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">2. Use of the Services</h4>
                        <p className="mb-2"><strong className="text-white font-medium">2.1 Eligibility:</strong> You must be at least 18 years old to use the Services. By using the Services, you represent and warrant that you meet this age requirement.</p>
                        <p className="mb-2"><strong className="text-white font-medium">2.2 License:</strong> Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the Services for your personal or internal business purposes.</p>
                        <p><strong className="text-white font-medium">2.3 Restrictions:</strong> You agree not to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Use the Services for any unlawful purpose or in violation of any local, state, national, or international law.</li>
                            <li>Modify, disassemble, decompile, or reverse engineer any part of the Services.</li>
                            <li>Use the Services to transmit any viruses, malware, or other harmful code.</li>
                            <li>Interfere with or disrupt the integrity or performance of the Services.</li>
                            <li>Attempt to gain unauthorized access to the Services or related systems.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">3. User Accounts</h4>
                        <p className="mb-2"><strong className="text-white font-medium">3.1 Registration:</strong> To access certain features of the Services, you may be required to create an account. You must provide accurate and complete information during the registration process.</p>
                        <p><strong className="text-white font-medium">3.2 Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">4. Intellectual Property Rights</h4>
                        <p className="mb-2"><strong className="text-white font-medium">4.1 Djinn Property:</strong> The Services and their original content, features, and functionality are and will remain the exclusive property of Djinn and its licensors. The Services are protected by copyright, trademark, and other laws.</p>
                        <p><strong className="text-white font-medium">4.2 User Content:</strong> You retain ownership of any Content you submit, post, or display on or through the Services. By submitting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such Content in connection with providing the Services.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">5. Payment and Fees</h4>
                        <p className="mb-2"><strong className="text-white font-medium">5.1 Fees:</strong> Certain aspects of the Services may be provided for a fee. If you elect to use paid aspects of the Services, you agree to the pricing and payment terms presented to you at the time of purchase.</p>
                        <p><strong className="text-white font-medium">5.2 Taxes:</strong> You are responsible for any taxes applicable to your use of the Services.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">6. Confidentiality</h4>
                        <p><strong className="text-white font-medium">6.1 Confidential Information:</strong> &quot;Confidential Information&quot; means any non-public information disclosed by either party to the other. Both parties agree to protect the confidentiality of the other party&apos;s Confidential Information and not to disclose it to any third party without prior written consent.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">7. Warranties and Disclaimers</h4>
                        <p className="mb-2"><strong className="text-white font-medium">7.1 No Warranty:</strong> The Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without any warranties of any kind, whether express, implied, or statutory. We specifically disclaim any implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                        <p><strong className="text-white font-medium">7.2 AI Limitations:</strong> You acknowledge that the Services utilize artificial intelligence and machine learning technologies, which may produce outputs that are inaccurate or incomplete. You are solely responsible for verifying any outputs generated by the Services.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">8. Limitation of Liability</h4>
                        <p className="mb-2">
                            To the maximum extent permitted by applicable law, in no event shall Djinn or its affiliates, officers, directors, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Your access to or use of or inability to access or use the Services.</li>
                            <li>Any conduct or content of any third party on the Services.</li>
                            <li>Any content obtained from the Services.</li>
                            <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">9. Indemnification</h4>
                        <p>
                            You agree to defend, indemnify, and hold harmless Djinn and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms and Conditions or your use of the Services.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">10. Termination</h4>
                        <p>
                            We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">11. Governing Law and Dispute Resolution</h4>
                        <p className="mb-2"><strong className="text-white font-medium">11.1 Governing Law:</strong> These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Djinn is established, without regard to its conflict of law provisions.</p>
                        <p><strong className="text-white font-medium">11.2 Dispute Resolution:</strong> Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by binding arbitration in accordance with the applicable arbitration rules.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">12. Miscellaneous</h4>
                        <p className="mb-2"><strong className="text-white font-medium">12.1 Entire Agreement:</strong> These Terms constitute the entire agreement between us regarding our Services and supersede and replace any prior agreements we might have had between us regarding the Services.</p>
                        <p className="mb-2"><strong className="text-white font-medium">12.2 Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
                        <p><strong className="text-white font-medium">12.3 Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-2">13. Contact Us</h4>
                        <p>
                            If you have any questions about these Terms, please contact us at:<br />
                            <a href="mailto:info@d-jinn.ai" className="text-blue-400 hover:underline">info@d-jinn.ai</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsAndConditions