import React, { useEffect } from "react";

const Privacy = () => {

useEffect(() => {
    window.scrollTo(0, 0)
}, [] )

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-4">
      <h1 className="text-3xl md:text-4xl font-bold italic">Privacy Policy</h1>
      <p className="text-gray-600 mt-2 mb-6">Effective Date: 03/02/2025</p>

      <h2 className="text-2xl font-bold mb-2">1. <span className="italic">Introduction</span></h2>
      <p className="text-gray-700 mb-6">
        Welcome to <span className="font-semibold">ROHITZ FITTINGS (OPC) PRIVATE LIMITED</span>. 
        We respect your privacy and are committed to protecting it through this Privacy Policy.
      </p>

      <h2 className="text-2xl font-bold mb-2">2. Information We Collect</h2>

      <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
      <p className="text-gray-700">We collect personal information that you voluntarily provide, including:</p>
      <ul className="list-disc list-inside text-gray-700 mt-2 mb-6">
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Mailing Address</li>
        <li>Any other information you provide via forms, emails, or calls</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">2.2 Non-Personal Information</h3>
      <p className="text-gray-700">
        We collect non-personal information automatically when you visit our website, including:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>IP Address</li>
        <li>Browser Type</li>
        <li>Device Information</li>
        <li>Pages Visited</li>
        <li>Time Spent on the Website</li>
      </ul>
    
    <h2 className="text-2xl font-bold mt-2">3. How We Use Your Information</h2>

    <p className="text-gray-700">We use the collected information fot the following purposes:</p>
    <ul className="list-disc list-inside text-gray-700 mt-2 mb-6">
    <li>To respond to your inquiries.</li>
    <li>To provide customer support.</li>
    <li>To improve our website and services.</li>
    <li>To send you promotional offers and newsletters (if opted in).</li>
    <li>To comply with legal obligations.</li>
    </ul>

    <h2 className="text-2xl font-bold mb-2">4. Sharing Your Information</h2>

        <p className="text-gray-700">We do not sell, trade, or rent your personal information. However, we may share your information with:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 mb-6">
        <li>Service providers assisting in operations (e.g., payment processors, shipping companies).</li>
        <li>Legal authorities when required by law.</li>
        <li>Business partners with whom we collaborate.</li>
        </ul>

    <h2 className="text-2xl font-bold mb-2">5. Data Security</h2>

        <p className="text-gray-700">We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>


    <h2 className="text-2xl font-bold mb-2 mt-2">6. Your Rights</h2>

        <p className="text-gray-700">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 mb-6">
        <li>Acess, update, or delete your personal data.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Request a copy of data we hold about you.</li>
        </ul>

    <h2 className="text-2xl font-bold mb-2">7. Cookies and Tracking Technologies</h2>

        <p className="text-gray-700">We use cookies to enhace user experience. You can disable cookies through your browser settings.</p>

    <h2 className="text-2xl font-bold mb-2 mt-2">8. Third-Party Links</h2>

        <p className="text-gray-700">Our website may contain links to third-party sites. We are not responsible forr their privacy policies.</p>

    <h2 className="text-2xl font-bold mb-2 mt-2">9. Chnages to This Privacy Policy</h2>

        <p className="text-gray-700">We may update this privacy policy from time to time. Changes will be posted on this page.</p>
        
    <h2 className="text-2xl font-bold mb-2 mt-2">10. Contact Us</h2>

    <p className="text-gray-700">if you have any questions, contact us at:</p>
    <ul className="list-disc list-inside text-gray-700 mt-2 mb-6">
    <li>Email: rohitpvtltd001@gmail.com</li>
    <li>Phone: +91-9582133503</li>
    <li>Address: ROHITZ FITTINGS (OPC) PRIVATE LIMITED</li>
    </ul>
        
    </div>
  );
};

export default Privacy;
