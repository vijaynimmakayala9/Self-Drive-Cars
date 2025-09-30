import React from "react";

const CancellationAndRefundPolicy = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <div className="container my-5">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary">Cancellation & Refund Policy</h1>
          <p className="text-muted small mt-2">Last updated: 29 September 2025</p>
          <hr />
        </div>

        {/* Content */}
        <div className="text-dark" style={{ lineHeight: "1.6" }}>
          <p>
            At <strong>Self Drive Cars</strong>, we strive to provide a smooth and reliable car rental experience. 
            This Cancellation & Refund Policy explains the terms for cancelling bookings and requesting refunds.
          </p>

          <h2 className="fw-semibold text-primary mt-4">1. Cancellation Policy</h2>
          <ul className="list-disc ps-4">
            <li>Bookings cancelled at least 24 hours before the scheduled pickup time are eligible for a full refund.</li>
            <li>Cancellations made within 24 hours of the pickup time will incur a 50% cancellation fee.</li>
            <li>No-shows or failure to pick up the vehicle without prior cancellation will not be refunded.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">2. Refund Policy</h2>
          <ul className="list-disc ps-4">
            <li>Refunds will be processed to the original payment method within 7-10 business days.</li>
            <li>If a vehicle is unavailable due to unforeseen circumstances, a full refund will be issued.</li>
            <li>Refunds do not cover services already rendered, such as fuel charges, tolls, or fines incurred during the rental period.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">3. How to Cancel</h2>
          <p>
            To cancel your booking, contact our customer support at{" "}
            <a href="mailto:automotives23@gmail.com" className="text-primary text-decoration-underline">
              automotives23@gmail.com
            </a>{" "}
            or call +91 6303092897. Please provide your booking reference number and reason for cancellation.
          </p>

          <h2 className="fw-semibold text-primary mt-4">4. Force Majeure</h2>
          <p>
            In the event of circumstances beyond our control—such as natural disasters, strikes, or government restrictions—we may cancel bookings without liability. In such cases, a full refund will be provided.
          </p>

          <h2 className="fw-semibold text-primary mt-4">5. Contact Us</h2>
          <p>
            For any questions or concerns regarding this policy, please contact us:
          </p>
          <p>Email: <a href="mailto:automotives23@gmail.com" className="text-primary text-decoration-underline">automotives23@gmail.com</a></p>
          <p>Phone: +91 6303092897</p>
        </div>
      </div>
    </div>
  );
};

export default CancellationAndRefundPolicy;
