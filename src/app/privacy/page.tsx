import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - PayYoyo Smart Gift Card Manager',
  description: 'Privacy Policy for PayYoyo AI-powered gift card management platform. Learn how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'personal information', 'PayYoyo privacy'],
  openGraph: {
    title: 'Privacy Policy - PayYoyo Smart Gift Card Manager',
    description: 'Privacy Policy for PayYoyo AI-powered gift card management platform. Learn how we collect, use, and protect your personal information.',
    url: 'https://payyoyo.com/privacy',
    locale: 'en_CA',
    type: 'website'
  }
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At PayYoyo ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered gift card management platform.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>2.1 Personal Information:</strong> When you create an account, we may collect:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment information for premium services</li>
                  <li>Communication preferences</li>
                </ul>

                <p><strong>2.2 Gift Card Information:</strong> To provide our services, we collect:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Gift card numbers and balances</li>
                  <li>Transaction history and merchant information</li>
                  <li>Card expiration dates and usage patterns</li>
                </ul>

                <p><strong>2.3 Technical Information:</strong> We automatically collect:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Usage analytics and feature interaction data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>3.1 Service Provision:</strong> We use your information to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide and maintain our gift card management services</li>
                  <li>Process transactions and update card balances</li>
                  <li>Send expiration reminders and usage recommendations</li>
                  <li>Provide customer support and technical assistance</li>
                </ul>

                <p><strong>3.2 Platform Improvement:</strong> Your data helps us:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Analyze usage patterns and improve features</li>
                  <li>Develop new services and functionality</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Conduct research and analytics</li>
                </ul>

                <p><strong>3.3 Communication:</strong> We may use your information to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Send service updates and security notifications</li>
                  <li>Provide personalized recommendations</li>
                  <li>Respond to your inquiries and feedback</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>4.1 Third-Party Service Providers:</strong> We may share your information with trusted partners who help us operate our platform, including:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Payment processors for secure transactions</li>
                  <li>Cloud hosting providers for data storage</li>
                  <li>Analytics services for platform optimization</li>
                  <li>Customer support tools for assistance</li>
                </ul>

                <p><strong>4.2 Legal Requirements:</strong> We may disclose your information if required by law or if we believe such action is necessary to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Comply with legal obligations or court orders</li>
                  <li>Protect and defend our rights or property</li>
                  <li>Prevent fraud or security issues</li>
                  <li>Protect the personal safety of users or the public</li>
                </ul>

                <p><strong>4.3 Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>5.1 Security Measures:</strong> We implement industry-leading security measures including:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure tokenization for payment information</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>PCI DSS Level 1 compliance for payment processing</li>
                  <li>Multi-factor authentication for admin access</li>
                </ul>

                <p><strong>5.2 Data Protection:</strong> Your personal information is protected through:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Encrypted databases with access controls</li>
                  <li>Secure API endpoints with authentication</li>
                  <li>Regular backups with encryption at rest</li>
                  <li>Intrusion detection and monitoring systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>6.1 Access and Control:</strong> You have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain data processing</li>
                  <li>Data portability to another service</li>
                </ul>

                <p><strong>6.2 Marketing Communications:</strong> You can opt out of marketing communications at any time through your account settings or by contacting us directly.</p>

                <p><strong>6.3 Cookies:</strong> You can control cookie preferences through your browser settings or our cookie consent banner.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>7.1 Retention Periods:</strong> We retain your information for as long as necessary to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide our services and fulfill transactions</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our services and develop new features</li>
                </ul>

                <p><strong>7.2 Account Deletion:</strong> When you delete your account, we will remove your personal information within 30 days, except where retention is required for legal compliance.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PayYoyo operates in Canada and may transfer data to other countries. When we transfer personal information internationally, we ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PayYoyo is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website and services may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party services you use.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@payyoyo.com<br />
                  <strong>Address:</strong> AydenAIT Solutions, Privacy Officer<br />
                  <strong>Phone:</strong> Available through support channels<br />
                  <strong>Response Time:</strong> We typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
              <p className="text-xl opacity-90 mb-6">
                We're committed to transparency and protecting your personal information. Contact our privacy team for any concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@payyoyo.com"
                  className="bg-white text-[#1E40AF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📧 Contact Privacy Team
                </a>
                <a
                  href="/cookie-policy"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E40AF] transition-colors"
                >
                  🍪 View Cookie Policy
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
