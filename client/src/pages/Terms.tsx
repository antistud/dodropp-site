
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function TermsPage() {
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
            Terms of <span className="text-primary">Service</span>
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
      
      {/* Terms Content */}
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
              Welcome to DoDropp. These Terms of Service ("Terms") govern your use of our website located at <a href="https://dodropp.com">dodropp.com</a> and the DoDropp application (together or individually, the "Service") operated by DoDropp Inc.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
            </p>
            
            <h2>2. Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2>3. Service Usage</h2>
            <p>
              Our Service allows you to create, manage, and share checklists and tasks. You are responsible for all data you input into the Service and the activities that occur under your account.
            </p>
            <p>
              The free tier of our Service provides limited functionality, while the Pro Magic tier unlocks all features. You may upgrade or downgrade your plan at any time, subject to the limitations of each plan.
            </p>
            
            <h2>4. User-Generated Content</h2>
            <p>
              The Service may allow you to create, upload, post, send, receive, and store content. By providing User-Generated Content through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and display your User-Generated Content in connection with the operation of the Service.
            </p>
            <p>
              You are solely responsible for your User-Generated Content and the consequences of posting or publishing it. We have no obligation to monitor User-Generated Content, but we may remove any content at our discretion without notice.
            </p>
            
            <h2>5. Prohibited Uses</h2>
            <p>
              You agree not to use the Service:
            </p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To send, knowingly receive, upload, download, use, or re-use any material that violates these Terms.</li>
              <li>To impersonate or attempt to impersonate DoDropp, a DoDropp employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm DoDropp or users of the Service.</li>
              <li>For any purpose that is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, or otherwise objectionable.</li>
            </ul>
            
            <h2>6. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding User-Generated Content), features, and functionality are and will remain the exclusive property of DoDropp and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DoDropp.
            </p>
            
            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or delete your account.
            </p>
            
            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall DoDropp, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
            
            <h2>9. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            
            <h2>10. Privacy Policy</h2>
            <p>
              Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Service is subject to our Privacy Policy.
            </p>
            
            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@dodropp.com.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
