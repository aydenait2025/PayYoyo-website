'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function APIPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const codeExamples = {
    overview: `# PayYoYo API Overview
# Autonomous Payment Platform API

# Base URL: https://api.payyoyo.com/v1
# Authentication: Bearer Token Required
# Rate Limits: 1000 requests/hour per API key

# Key Endpoints:
/payments          # Create and manage payments
/transactions      # View transaction history
/optimization      # Get AI optimization recommendations
/webhooks          # Configure event notifications
/accounts         # Manage merchant accounts`,

    authentication: `# API Authentication Example
import requests

# Get your API key from the PayYoYo dashboard
API_KEY = 'your_api_key_here'
BASE_URL = 'https://api.payyoyo.com/v1'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Test authentication
response = requests.get(f'{BASE_URL}/accounts', headers=headers)
print(response.json())`,

    payments: `# Create Autonomous Payment
import requests

API_KEY = 'your_api_key_here'
BASE_URL = 'https://api.payyoyo.com/v1'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Create payment with AI optimization enabled
payment_data = {
    "amount": 50.00,
    "currency": "CAD",
    "merchant_id": "MERCHANT_123",
    "customer_id": "CUSTOMER_456",
    "autonomous_mode": True,  # Enable AI optimization
    "location": {
        "lat": 43.6532,
        "lng": -79.3832
    },
    "payment_methods": ["visa", "mastercard", "gift_card"]
}

response = requests.post(
    f'{BASE_URL}/payments',
    json=payment_data,
    headers=headers
)

print("Payment Created:", response.json())`,

    webhooks: `# Webhook Configuration
import requests

API_KEY = 'your_api_key_here'
BASE_URL = 'https://api.payyoyo.com/v1'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Configure webhook for payment events
webhook_data = {
    "url": "https://your-app.com/webhooks/payyoyo",
    "events": [
        "payment.created",
        "payment.completed",
        "payment.failed",
        "optimization.suggested"
    ],
    "secret": "your_webhook_secret"
}

response = requests.post(
    f'{BASE_URL}/webhooks',
    json=webhook_data,
    headers=headers
)

print("Webhook Configured:", response.json())`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-[#1E40AF]/10 text-[#1E40AF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Developer API
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Integrate AI-Powered <br />
              <span className="text-transparent bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] bg-clip-text">
                Payment Automation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build with our comprehensive API to integrate autonomous payment capabilities into your applications. Access real-time transaction data, AI optimization insights, and seamless payment processing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">API Documentation</h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: 'overview', label: 'Overview', icon: '📚' },
                { id: 'authentication', label: 'Authentication', icon: '🔐' },
                { id: 'payments', label: 'Payments', icon: '💳' },
                { id: 'webhooks', label: 'Webhooks', icon: '🪝' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-[#1E40AF] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Display */}
            <div className="bg-gray-900 rounded-xl p-8 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                {codeExamples[activeTab as keyof typeof codeExamples]}
              </pre>
            </div>
          </motion.div>

          {/* API Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Real-Time Processing',
                description: 'Sub-200ms response times with 99.99% uptime SLA for mission-critical payment processing.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'AI Optimization API',
                description: 'Access our proprietary AI algorithms for payment optimization, spending analysis, and fraud prevention.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'RESTful Design',
                description: 'Industry-standard REST API with comprehensive documentation, SDK libraries, and Postman collections.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1E40AF]/10 text-[#1E40AF] rounded-xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete reference for all available API endpoints and methods.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Endpoint</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rate Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { endpoint: '/payments', method: 'POST', description: 'Create new payment with AI optimization', rateLimit: '100/min' },
                    { endpoint: '/payments/{id}', method: 'GET', description: 'Retrieve payment details', rateLimit: '500/min' },
                    { endpoint: '/transactions', method: 'GET', description: 'List merchant transactions', rateLimit: '200/min' },
                    { endpoint: '/optimization', method: 'POST', description: 'Get AI spending recommendations', rateLimit: '50/min' },
                    { endpoint: '/webhooks', method: 'POST', description: 'Configure webhook endpoints', rateLimit: '10/min' },
                    { endpoint: '/accounts', method: 'GET', description: 'Get account information', rateLimit: '100/min' },
                    { endpoint: '/reports', method: 'GET', description: 'Generate transaction reports', rateLimit: '20/min' }
                  ].map((endpoint, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">{endpoint.endpoint}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                          endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {endpoint.method}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{endpoint.description}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{endpoint.rateLimit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E40AF]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Integrate?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your API keys and start building with autonomous payment technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1E40AF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Get API Access
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1E40AF] transition-colors duration-300"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
