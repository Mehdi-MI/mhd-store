import { useRef } from 'react';
import { useReveal } from '../../hooks/useReveal';
import './Privacy.css';

export default function Privacy() {
  const heroRef = useReveal();
  const contentRef = useReveal();

  return (
    <div className="privacy-page">
      {/* ── Hero ───────────────────────────────── */}
      <section className="privacy-hero" ref={heroRef}>
        <div className="privacy-hero__inner">
          <span className="section-tag reveal">Legal</span>
          <h1 className="privacy-hero__title reveal reveal-delay-1">
            Privacy <em>Policy</em>
          </h1>
          <p className="privacy-hero__sub reveal reveal-delay-2">
            Last updated: June 19, 2026
          </p>
        </div>
      </section>

      {/* ── Content ─────────────────────────────── */}
      <section className="privacy-content" ref={contentRef}>
        <div className="privacy-content__inner">
          
          <article className="privacy-section reveal">
            <h2>1. Introduction</h2>
            <p>
              MHD Store ("we," "us," or "our") operates the MHD Store website and marketplace. 
              This Privacy Policy explains our practices regarding the collection, use, and disclosure 
              of your personal information.
            </p>
            <p>
              We are committed to protecting your privacy and ensuring you have a positive experience 
              on our platform. This policy applies to all visitors and users of our website and services.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> When you register, we collect your name, email address, password, and profile details.</li>
              <li><strong>Seller Information:</strong> Sellers provide store name, business details, bank information, and tax ID.</li>
              <li><strong>Payment Information:</strong> We collect billing address, payment method details (processed via Stripe).</li>
              <li><strong>Communication:</strong> Customer service inquiries, contact forms, and feedback.</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, and search queries.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system.</li>
              <li><strong>Cookies & Tracking:</strong> We use cookies to remember your preferences and track analytics.</li>
              <li><strong>Location Data:</strong> Approximate location based on IP address for shipping and analytics.</li>
            </ul>
          </article>

          <article className="privacy-section reveal">
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To create and maintain your account</li>
              <li>To process orders and payments</li>
              <li>To send order updates and customer service communications</li>
              <li>To improve our website and services</li>
              <li>To prevent fraud and ensure security</li>
              <li>To comply with legal obligations</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To analyze user behavior and trends</li>
            </ul>
          </article>

          <article className="privacy-section reveal">
            <h2>4. Information Sharing</h2>
            <p>
              We do not sell your personal data. We may share information in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Payment processors, email services, hosting providers</li>
              <li><strong>Sellers:</strong> When you purchase from a seller, they receive your shipping address and contact information</li>
              <li><strong>Legal Requirements:</strong> When required by law or court order</li>
              <li><strong>Business Transfers:</strong> In case of acquisition or merger</li>
              <li><strong>With Consent:</strong> When you explicitly agree to share data</li>
            </ul>
          </article>

          <article className="privacy-section reveal">
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul>
              <li>SSL encryption for all data transmission</li>
              <li>Secure password hashing algorithms</li>
              <li>Regular security audits and penetration testing</li>
              <li>Limited employee access to personal data</li>
              <li>Two-factor authentication options</li>
            </ul>
            <p>
              However, no system is completely secure. We cannot guarantee absolute security of your information.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2>6. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li><strong>Access:</strong> You can request a copy of your personal data</li>
              <li><strong>Correction:</strong> You can update or correct your information</li>
              <li><strong>Deletion:</strong> You can request deletion of your data</li>
              <li><strong>Portability:</strong> You can receive your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> You can unsubscribe from marketing communications</li>
            </ul>
          </article>

          <article className="privacy-section reveal">
            <h2>7. Cookies & Tracking</h2>
            <p>
              We use cookies to enhance your experience. You can control cookies through your browser settings. 
              Note that disabling cookies may affect website functionality.
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website function</li>
              <li><strong>Analytics Cookies:</strong> Help us understand user behavior</li>
              <li><strong>Marketing Cookies:</strong> Enable personalized advertising</li>
            </ul>
          </article>

          <article className="privacy-section reveal">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. 
              Please review their privacy policies before sharing information.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect information from children. 
              If we become aware of such collection, we will delete the information promptly.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have different data protection laws. By using our services, you consent to such transfers.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2>11. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide our services and fulfill legal obligations. 
              You can request deletion of your account at any time, subject to legal retention requirements.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or 
              a prominent notice on our website. Your continued use of our services constitutes acceptance of changes.
            </p>
          </article>

          <article className="privacy-section reveal">
            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="privacy-contact">
              <p><strong>Email:</strong> privacy@mhdstore.com</p>
              <p><strong>Address:</strong> MHD Store, Legal Department, [Your Address]</p>
              <p><strong>Phone:</strong> +1 (555) 000-0000</p>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
