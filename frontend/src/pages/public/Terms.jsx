import { useRef } from 'react';
import { useReveal } from '../../hooks/useReveal';
import './Terms.css';

export default function Terms() {
  const heroRef = useReveal();
  const contentRef = useReveal();

  return (
    <div className="terms-page">
      {/* ── Hero ───────────────────────────────── */}
      <section className="terms-hero" ref={heroRef}>
        <div className="terms-hero__inner">
          <span className="section-tag reveal">Legal</span>
          <h1 className="terms-hero__title reveal reveal-delay-1">
            Terms of <em>Service</em>
          </h1>
          <p className="terms-hero__sub reveal reveal-delay-2">
            Last updated: June 19, 2026
          </p>
        </div>
      </section>

      {/* ── Content ─────────────────────────────── */}
      <section className="terms-content" ref={contentRef}>
        <div className="terms-content__inner">

          <article className="terms-section reveal">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using MHD Store, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>2. Use License</h2>
            <p>
              MHD Store grants you a limited license to access and use our website solely for your personal, non-commercial 
              use or a legitimate business use. You agree not to:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use them for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software on the site</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Use automated scripts or bots to access the site</li>
            </ul>
          </article>

          <article className="terms-section reveal">
            <h2>3. Disclaimer of Warranties</h2>
            <p>
              The materials on MHD Store are provided on an "as is" basis. MHD Store makes no warranties, expressed or implied, 
              and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions 
              of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>4. Limitations of Liability</h2>
            <p>
              In no event shall MHD Store or its suppliers be liable for any damages (including, without limitation, damages for loss 
              of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MHD Store, 
              even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on MHD Store could include technical, typographical, or photographic errors. MHD Store does not 
              warrant that any of the materials on our website are accurate, complete, or current. MHD Store may make changes to the 
              materials contained on our website at any time without notice.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>6. Materials & Links</h2>
            <p>
              MHD Store has not reviewed all of the sites linked to our website and is not responsible for the contents of any such 
              linked site. The inclusion of any link does not imply endorsement by MHD Store of the site. Use of any such linked website 
              is at the user's own risk.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>7. Modifications</h2>
            <p>
              MHD Store may revise these terms of service for our website at any time without notice. By using this website, you are 
              agreeing to be bound by the then current version of these terms of service.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>8. User Accounts</h2>
            <p>
              When you create an account on MHD Store, you agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Maintain the accuracy of your account information</li>
              <li>Accept all responsibility for activities that occur under your account</li>
              <li>Immediately notify us of unauthorized use of your account</li>
            </ul>
          </article>

          <article className="terms-section reveal">
            <h2>9. Acceptable Use Policy</h2>
            <p>
              Users agree not to use the MHD Store platform for:
            </p>
            <ul>
              <li>Posting or uploading illegal content</li>
              <li>Harassment, abuse, or threatening behavior</li>
              <li>Fraud or misrepresentation</li>
              <li>Intellectual property infringement</li>
              <li>Malware, viruses, or malicious code</li>
              <li>Spam or unsolicited communications</li>
              <li>Circumventing security measures</li>
            </ul>
            <p>
              Violations may result in account suspension or permanent termination.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>10. Product & Service Descriptions</h2>
            <p>
              While we strive for accuracy, MHD Store does not warrant that product descriptions, pricing, or availability are 
              accurate, complete, or error-free. We reserve the right to:
            </p>
            <ul>
              <li>Correct any errors or omissions</li>
              <li>Change or update pricing at any time</li>
              <li>Cancel any orders we believe violate these terms</li>
              <li>Limit quantities available</li>
            </ul>
          </article>

          <article className="terms-section reveal">
            <h2>11. Payment & Billing</h2>
            <p>
              By placing an order, you authorize us to charge your payment method for the order total. You agree to:
            </p>
            <ul>
              <li>Pay all charges incurred by your account</li>
              <li>Pay any collection fees or legal costs</li>
              <li>Provide current, valid payment information</li>
            </ul>
          </article>

          <article className="terms-section reveal">
            <h2>12. Shipping & Delivery</h2>
            <p>
              Sellers are responsible for shipping products to the address provided. MHD Store is not responsible for delays, 
              loss, or damage during transit. Buyers should inspect items upon delivery and report issues within 30 days.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>13. Return & Refund Policy</h2>
            <p>
              MHD Store offers a 30-day hassle-free return policy on most items. Items must be:
            </p>
            <ul>
              <li>Unused and in original condition</li>
              <li>In original packaging</li>
              <li>Returned within 30 days of delivery</li>
            </ul>
            <p>
              Refunds are processed within 5-10 business days after return confirmation. Shipping costs are non-refundable 
              unless the item was defective or incorrect.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>14. Intellectual Property</h2>
            <p>
              All content on MHD Store, including text, graphics, logos, images, and software, is the property of MHD Store 
              or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, 
              or transmit any content without permission.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>15. Seller Terms</h2>
            <p>
              Sellers using MHD Store agree to:
            </p>
            <ul>
              <li>Maintain accurate product listings</li>
              <li>Fulfill orders promptly and professionally</li>
              <li>Respect intellectual property and safety laws</li>
              <li>Not use unfair or deceptive practices</li>
              <li>Maintain appropriate business licensing</li>
              <li>Pay applicable platform fees and commissions</li>
            </ul>
            <p>
              Sellers found in violation may have their accounts suspended or terminated.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>16. Dispute Resolution</h2>
            <p>
              Any disputes arising from your use of MHD Store shall be governed by the laws of the United States. 
              Both parties agree to attempt mediation before pursuing legal action. If mediation fails, disputes 
              shall be handled through binding arbitration.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>17. Limitation of Liability</h2>
            <p>
              In no event shall MHD Store be liable for indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of or inability to use the service, even if we have been advised of the possibility of damages.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>18. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless MHD Store from any claims, damages, or costs (including attorney fees) 
              resulting from your violation of these terms or your use of the platform.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>19. Termination</h2>
            <p>
              MHD Store may terminate your account or access to the service at any time for any reason, including violation 
              of these terms. Upon termination, your right to use the service immediately ceases.
            </p>
          </article>

          <article className="terms-section reveal">
            <h2>20. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="terms-contact">
              <p><strong>Email:</strong> support@mhdstore.com</p>
              <p><strong>Address:</strong> MHD Store, Legal Department, [Your Address]</p>
              <p><strong>Phone:</strong> +1 (555) 000-0000</p>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
