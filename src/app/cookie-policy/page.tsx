import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Cookie Policy - PayYoyo Smart Gift Card Manager',
  description: 'Learn about how PayYoyo uses cookies and similar technologies to enhance your experience and provide personalized services.',
  keywords: ['cookie policy', 'privacy policy', 'data protection', 'cookies', 'PayYoyo privacy'],
  openGraph: {
    title: 'Cookie Policy - PayYoyo Smart Gift Card Manager',
    description: 'Learn about how PayYoyo uses cookies and similar technologies to enhance your experience and provide personalized services.',
    url: 'https://payyoyo.com/cookie-policy',
    locale: 'en_CA',
    type: 'website'
  }
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are essential for the website to function properly. These cookies do not store any personally identifiable information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies may be used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some cookies are placed by third party services that appear on our pages. These may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>Payment processors for secure transactions</li>
                <li>Customer support chat widgets</li>
                <li>Social media integration buttons</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent popup when you first visit our website.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Can I Control Cookies?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most browsers automatically accept cookies, but you can modify your browser setting to decline cookies if you prefer. For more information about how to manage and delete cookies, visit <a href="https://www.aboutcookies.org/" className="text-blue-600 hover:text-blue-800 underline">aboutcookies.org</a>.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the &quot;Last updated&quot; date at the top of this policy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Cookie Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@payyoyo.com<br />
                  <strong>Address:</strong> AydenAIT Solutions, Privacy Team<br />
                  <strong>Response Time:</strong> We typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Questions About Our Privacy Practices?</h2>
              <p className="text-xl opacity-90 mb-6">
                We&apos;re committed to transparency and protecting your privacy. Contact our privacy team for any concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@payyoyo.com"
                  className="bg-white text-[#1E40AF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📧 Contact Privacy Team
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
