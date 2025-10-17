import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Terms of Service - PayYoyo Smart Gift Card Manager',
  description: 'Terms of Service for PayYoyo AI-powered gift card management platform. Learn about our service terms, user responsibilities, and platform usage guidelines.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'PayYoyo terms'],
  openGraph: {
    title: 'Terms of Service - PayYoyo Smart Gift Card Manager',
    description: 'Terms of Service for PayYoyo AI-powered gift card management platform. Learn about our service terms, user responsibilities, and platform usage guidelines.',
    url: 'https://payyoyo.com/terms-of-service',
    locale: 'en_CA',
    type: 'website'
  }
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
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
                By accessing and using PayYoyo ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PayYoyo is an AI-powered gift card management platform that helps users optimize their gift card usage through location-based recommendations, automated card selection, and waste prevention features. The service includes mobile and web applications that provide gift card management, payment processing, and related financial services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>3.1 Account Creation:</strong> To use certain features of our service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.</p>
                <p><strong>3.2 Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                <p><strong>3.3 Account Termination:</strong> We reserve the right to terminate or suspend your account at any time for violations of these terms or for any other reason we deem necessary.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>4.1 Prohibited Activities:</strong> You agree not to use the service to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Violate any local, state, national, or international law or regulation</li>
                  <li>Transmit any material that is unlawful, harmful, threatening, abusive, or objectionable</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Use the service for any commercial purpose without authorization</li>
                  <li>Interfere with or disrupt the service or servers connected to the service</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Gift Card Services</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>5.1 Card Management:</strong> PayYoyo provides tools to manage your gift cards, but we are not responsible for the underlying gift card balances or merchant policies.</p>
                <p><strong>5.2 Balance Accuracy:</strong> While we strive for accuracy, gift card balances displayed in our app may not reflect real-time merchant data and should be verified with the merchant.</p>
                <p><strong>5.3 Transaction Processing:</strong> PayYoyo facilitates gift card transactions but is not a party to the underlying payment transaction between you and the merchant.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The PayYoyo service and its original content, features, and functionality are and will remain the exclusive property of AydenAIT Solutions and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The information on this website and the PayYoyo service is provided on an 'as is' basis. To the fullest extent permitted by law, PayYoyo excludes all representations, warranties, conditions and terms whether express or implied, statutory or otherwise.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In no event shall PayYoyo, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to indemnify and hold harmless PayYoyo and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> legal@payyoyo.com<br />
                  <strong>Address:</strong> AydenAIT Solutions, Legal Department<br />
                  <strong>Response Time:</strong> We typically respond within 48 hours
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="text-xl opacity-90 mb-6">
                We're here to help clarify any questions about our terms of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@payyoyo.com"
                  className="bg-white text-[#1E40AF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📧 Contact Legal Team
                </a>
                <a
                  href="/privacy"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E40AF] transition-colors"
                >
                  🔒 View Privacy Policy
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
