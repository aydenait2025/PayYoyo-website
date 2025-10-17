import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Terms of Use - PayYoyo Smart Gift Card Manager',
  description: 'Terms of Use for PayYoyo AI-powered gift card management platform. Learn about acceptable use policies and user responsibilities.',
  keywords: ['terms of use', 'acceptable use', 'user guidelines', 'PayYoyo usage policy'],
  openGraph: {
    title: 'Terms of Use - PayYoyo Smart Gift Card Manager',
    description: 'Terms of Use for PayYoyo AI-powered gift card management platform. Learn about acceptable use policies and user responsibilities.',
    url: 'https://payyoyo.com/terms-of-use',
    locale: 'en_CA',
    type: 'website'
  }
}

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using the PayYoyo platform, you agree to comply with and be bound by these Terms of Use. These terms govern your use of our website, mobile applications, and related services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Eligibility</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>2.1 Age Requirement:</strong> You must be at least 13 years old to use PayYoyo services. If you are under 18, you must have parental or guardian consent.</p>
                <p><strong>2.2 Geographic Restrictions:</strong> PayYoyo services are available in Canada and may be restricted in other jurisdictions. You are responsible for compliance with local laws.</p>
                <p><strong>2.3 Account Requirements:</strong> You must provide accurate and complete information when creating an account and keep this information updated.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Platform Usage Guidelines</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>3.1 Proper Use:</strong> You agree to use PayYoyo only for lawful purposes and in accordance with these Terms of Use.</p>
                <p><strong>3.2 Prohibited Conduct:</strong> You may not:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Use the platform for any illegal or unauthorized purpose</li>
                  <li>Share your account credentials with others</li>
                  <li>Attempt to reverse engineer or exploit our technology</li>
                  <li>Use automated tools to access our services without permission</li>
                  <li>Upload malicious code or attempt to breach our security</li>
                  <li>Harass, abuse, or harm other users</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gift Card Management</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>4.1 Card Information:</strong> You are responsible for ensuring the accuracy of gift card information you provide to our platform.</p>
                <p><strong>4.2 Balance Monitoring:</strong> While we provide balance information, you should verify balances directly with merchants for critical transactions.</p>
                <p><strong>4.3 Expiration Tracking:</strong> PayYoyo provides expiration reminders as a courtesy, but you are ultimately responsible for using your gift cards before they expire.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Transactions</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>5.1 Transaction Processing:</strong> PayYoyo facilitates gift card transactions but is not responsible for merchant payment processing or policies.</p>
                <p><strong>5.2 Failed Transactions:</strong> If a transaction fails, you should contact the merchant directly. PayYoyo will assist where possible but cannot guarantee transaction success.</p>
                <p><strong>5.3 Refunds and Disputes:</strong> Payment disputes should be resolved directly with the merchant. PayYoyo may provide transaction records to assist in dispute resolution.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data and Privacy</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>6.1 Data Collection:</strong> We collect information necessary to provide our services, including gift card data, location information, and usage analytics.</p>
                <p><strong>6.2 Data Protection:</strong> All data is protected using industry-standard security measures. See our Privacy Policy for detailed information.</p>
                <p><strong>6.3 Data Usage:</strong> Your data is used to improve our services, provide personalized recommendations, and ensure platform security.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content, features, and functionality of PayYoyo are owned by AydenAIT Solutions and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without permission.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>8.1 Service Levels:</strong> While we strive for high availability, PayYoyo services may occasionally be unavailable due to maintenance, technical issues, or factors beyond our control.</p>
                <p><strong>8.2 Beta Features:</strong> Some features may be in beta testing. These features are provided "as is" and may contain bugs or undergo changes.</p>
                <p><strong>8.3 Third-Party Services:</strong> PayYoyo integrates with third-party services. We are not responsible for the availability or performance of these external services.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PayYoyo shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid for our services in the 12 months preceding the claim.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>10.1 Account Termination:</strong> You may terminate your account at any time through your account settings or by contacting support.</p>
                <p><strong>10.2 Service Termination:</strong> We reserve the right to terminate or suspend your access to PayYoyo for violations of these terms or other policies.</p>
                <p><strong>10.3 Effect of Termination:</strong> Upon termination, your right to use PayYoyo ceases immediately. We may delete your data after a reasonable period.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Updates to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update these Terms of Use from time to time. We will notify users of material changes through our platform or by email. Continued use of PayYoyo after changes take effect constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms of Use are governed by the laws of Ontario, Canada. Any disputes arising from these terms or your use of PayYoyo shall be resolved in the courts of Ontario, Canada.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> legal@payyoyo.com<br />
                  <strong>Address:</strong> AydenAIT Solutions, Legal Department<br />
                  <strong>Phone:</strong> Available through support channels<br />
                  <strong>Response Time:</strong> We typically respond within 48 hours
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Questions About Usage Guidelines?</h2>
              <p className="text-xl opacity-90 mb-6">
                We're here to help clarify any questions about how to properly use PayYoyo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@payyoyo.com"
                  className="bg-white text-[#1E40AF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📧 Contact Legal Team
                </a>
                <a
                  href="/terms-of-service"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E40AF] transition-colors"
                >
                  📋 View Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
