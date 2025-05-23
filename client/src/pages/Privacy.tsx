
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function PrivacyPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Privacy <span className="text-primary">Policy</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Last updated: July 20, 2024
          </motion.p>
        </div>
      </section>
      
      {/* Privacy Content */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>1. Introduction</h2>
            <p>
              At DoDropp, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the service.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We may collect several types of information from and about users of our Service, including:
            </p>
            <ul>
              <li>Personal identifiers such as name and email address when you create an account</li>
              <li>Information that you provide when creating or sharing checklists</li>
              <li>Usage details and analytics data when you interact with our Service</li>
              <li>Device and connection information, including IP address, browser type, and operating system</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect about you or that you provide to us, including any personal information, for the following purposes:
            </p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
            
            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may disclose personal information that we collect or you provide:
            </p>
            <ul>
              <li>To our subsidiaries and affiliates</li>
              <li>To contractors, service providers, and other third parties we use to support our business</li>
              <li>To comply with any court order, law, or legal process</li>
              <li>To enforce our Terms of Service</li>
              <li>If we believe disclosure is necessary to protect the rights, property, or safety of DoDropp, our users, or others</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your personal information for improper purposes.
            </p>
            
            <h2>6. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to or restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
            
            <h2>7. Children's Privacy</h2>
            <p>
              Our Service is not intended for anyone under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us immediately.
            </p>
            
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            
            <h2>9. Third-Party Links</h2>
            <p>
              Our Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@dodropp.com.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
