import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <div className="container my-5 flex-grow-1">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary">Privacy Policy</h1>
          <p className="text-muted small mt-2">Last updated: 29 September 2025</p>
          <hr className="my-4" />
        </div>

        {/* Content Section */}
        <div className="text-dark" style={{ lineHeight: "1.6" }}>
          <p>
            At <strong>Drive Car Rental</strong>, your privacy is very important to us. This Privacy Policy
            explains how we collect, use, and safeguard your personal information when you access or use our
            App.
          </p>

          <h2 className="fw-semibold text-primary mt-4">1. Information We Collect</h2>
          <p>We may collect personal information that you provide directly to us when you:</p>
          <ul className="list-disc ps-4">
            <li>Create an account on the App</li>
            <li>Complete your profile or registration form</li>
            <li>Upload content such as images or details</li>
            <li>Contact us through phone or email</li>
          </ul>
          <p>The types of personal information may include:</p>
          <ul className="list-disc ps-4">
            <li>Your name, profile photo, and email address</li>
            <li>Your current location (if enabled)</li>
            <li>Other details you choose to share with us</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">2. How We Use Your Information</h2>
          <ul className="list-disc ps-4">
            <li>To provide access to the App and its features</li>
            <li>For account creation, sign-up, and verification</li>
            <li>To display and update your profile information</li>
            <li>To suggest nearby cars based on your location</li>
            <li>To personalize your overall experience</li>
            <li>To respond to customer support requests</li>
            <li>To improve the performance and functionality of the App</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">3. Protection of Your Data</h2>
          <ul className="list-disc ps-4">
            <li>All sensitive data is encrypted during transmission</li>
            <li>Information is stored securely on trusted servers</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">4. Sharing of Information</h2>
          <p>We may share your information with trusted third-party service providers, such as:</p>
          <ul className="list-disc ps-4">
            <li>Cloud hosting and storage providers</li>
            <li>Customer service and support platforms</li>
          </ul>
          <p>Additionally, we may disclose information if required by law or to comply with legal obligations.</p>

          <h2 className="fw-semibold text-primary mt-4">5. Your Rights</h2>
          <ul className="list-disc ps-4">
            <li>You may access the personal information we hold about you</li>
            <li>You can request to deletion or Delete  your Persional account and associated data</li>
          </ul>
          <p>
            For any privacy-related requests, please contact us at:{" "}
            <a
              href="mailto:automotives23@gmail.com"
              className="text-primary text-decoration-underline"
            >
              automotives23@gmail.com
            </a>
          </p>
          <p>
            Or write to us directly via Gmail:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&to=automotives23@gmail.com"
              className="text-primary text-decoration-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to compose
            </a>
          </p>

          <h2 className="fw-semibold text-primary mt-4">6. Updates to This Policy</h2>
          <p>
            We may revise this Privacy Policy from time to time. Significant changes will be notified through
            email or a notice on the App. By continuing to use the App, you agree to the updated terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
