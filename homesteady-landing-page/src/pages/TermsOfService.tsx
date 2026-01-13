import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { APP_NAME } from '../lib/constants';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-12">Last Updated: January 13, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-gray-600 leading-relaxed">
              Welcome to {APP_NAME}. These Terms of Service ("Terms") govern your access to and use of our mobile application and related services (collectively, the "Service"). Please read these Terms carefully before using the Service.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By creating an account or using the Service, you represent that you are at least 13 years of age and have the legal capacity to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {APP_NAME} is a mobile application designed to help homesteaders track livestock, plan gardens, manage tasks, and organize their homestead operations. The Service includes features for record-keeping, reminders, seasonal planning, and other tools to support sustainable living practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              3. User Accounts
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To access certain features of the Service, you may need to create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              4. Acceptable Use
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
              <li>Use the Service to infringe on the rights of others</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              5. User Content
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You retain ownership of any content you create, upload, or store using the Service ("User Content"). By using the Service, you grant us a limited license to store, process, and display your User Content solely for the purpose of providing the Service to you.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              You are solely responsible for your User Content and represent that you have all necessary rights to use and share such content through the Service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content (excluding User Content), features, and functionality are owned by {APP_NAME} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. Our trademarks may not be used without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              7. Subscriptions and Payments
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Certain features of the Service may require a paid subscription. By subscribing, you agree to pay all applicable fees. Subscription fees are billed in advance on a recurring basis. You may cancel your subscription at any time, but no refunds will be provided for partial billing periods.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We reserve the right to change subscription fees upon reasonable notice. Continued use of the Service after a fee change constitutes acceptance of the new fees.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The information provided through the Service, including plant toxicity data, care recommendations, and seasonal guidance, is for informational purposes only and should not be considered professional veterinary, agricultural, or horticultural advice. Always consult qualified professionals for specific guidance regarding your animals and plants.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {APP_NAME.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our total liability for any claims arising from your use of the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              10. Indemnification
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless {APP_NAME}, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              11. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              You may terminate your account at any time by contacting us or using the account deletion feature in the app. We will delete your data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms and updating the "Last Updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              13. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Vermont, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              14. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Email:</strong> legal@homesteady.app
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
