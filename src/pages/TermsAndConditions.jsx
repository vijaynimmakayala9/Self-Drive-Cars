import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      {/* Main Content */}
      <div className="flex-grow-1 container my-5">
        <h1 className="fw-bold text-primary mb-2">Terms and Conditions</h1>
        <p className="text-muted small mb-4">Last updated: 29 September 2025</p>

        <div className="text-dark" style={{ lineHeight: "1.6" }}>
          <p>
            These Terms and Conditions (“Terms”) govern your use of the{" "}
            <strong>Self Drive Cars</strong> application (“App”). By accessing or
            using the App, you agree to comply with these Terms in full.
          </p>

          <h2 className="fw-semibold text-primary mt-4">1. Acceptance of Terms</h2>
          <p>
            By creating an account or using any service within the App, you
            confirm that you have read and accepted these Terms. If you do not
            agree, please discontinue using the App immediately.
          </p>

          <h2 className="fw-semibold text-primary mt-4">2. Eligibility</h2>
          <p>
            You must be at least 18 years old and possess a valid Driving License
            and Aadhar card to use our services.
          </p>

          <h2 className="fw-semibold text-primary mt-4">3. User Responsibilities</h2>
          <ul className="list-disc ps-4">
            <li>You agree to provide accurate and complete details during registration.</li>
            <li>You are responsible for safeguarding your account credentials.</li>
            <li>You must not use the App for any unlawful or unauthorized activity.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">4. Verification & Documents</h2>
          <p>
            Users are required to upload their Driving License and Aadhar for
            identity and driving eligibility verification. These documents are
            stored securely and used solely for verification purposes.
          </p>

          <h2 className="fw-semibold text-primary mt-4">5. Booking & Vehicle Usage</h2>
          <ul className="list-disc ps-4">
            <li>You must handle the booked vehicle with care during the rental period.</li>
            <li>Any damage or misuse may result in additional charges under company policy.</li>
            <li>Location services may be used to suggest vehicles available nearby.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">6. Account Suspension & Termination</h2>
          <p>
            We reserve the right to suspend or permanently terminate your account
            if you violate these Terms or misuse the App. This may be done with
            or without prior notice.
          </p>

          <h2 className="fw-semibold text-primary mt-4">7. Limitation of Liability</h2>
          <p>
            <strong>Self Drive Cars</strong> will not be liable for any indirect,
            incidental, or consequential damages arising from the use of the App
            or its services.
          </p>

          <h2 className="fw-semibold text-primary mt-4">8. Updates to Terms</h2>
          <p>
            These Terms may be updated from time to time. Any continued use of
            the App after updates are published indicates your acceptance of the
            revised Terms.
          </p>

          <h2 className="fw-semibold text-primary mt-4">9. Contact Us</h2>
          <p>
            If you have questions or concerns regarding these Terms, please
            contact us at:{" "}
            <a
              href="mailto:automotives23@gmail.com"
              className="text-primary text-decoration-underline"
            >
              automotives23@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
