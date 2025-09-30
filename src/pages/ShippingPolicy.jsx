import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <div className="container my-5">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary">Shipping Policy</h1>
          <p className="text-muted small mt-2">Last updated: 29 September 2025</p>
          <hr />
        </div>

        {/* Content */}
        <div className="text-dark" style={{ lineHeight: "1.6" }}>
          <p>
            At <strong>Self Drive Cars</strong>, we are committed to ensuring your bookings are
            delivered smoothly and on time. This Shipping Policy outlines the terms
            regarding vehicle delivery and pick-up services.
          </p>

          <h2 className="fw-semibold text-primary mt-4">1. Delivery Options</h2>
          <ul className="list-disc ps-4">
            <li>Vehicles can be delivered to the location specified during booking within our service area.</li>
            <li>Any delivery charges will be communicated at the time of booking.</li>
            <li>Delivery times are estimated and may be affected by traffic or unforeseen circumstances.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">2. Pick-Up & Return</h2>
          <ul className="list-disc ps-4">
            <li>Vehicles must be returned to the agreed location at the end of the rental period.</li>
            <li>Late returns may incur additional charges as per company policy.</li>
            <li>Report any damage or issues immediately upon return.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">3. Shipping Restrictions</h2>
          <ul className="list-disc ps-4">
            <li>Delivery and pick-up services are available only within our operational zones.</li>
            <li>We do not provide international delivery or services outside authorized areas.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">4. Your Responsibility</h2>
          <p>
            You are responsible for inspecting the vehicle upon delivery and reporting any
            pre-existing damage immediately. Failure to report may result in liability for damages.
          </p>

          <h2 className="fw-semibold text-primary mt-4">5. Contact Us</h2>
          <p>
            For any questions or concerns regarding delivery or pick-up, please contact us at:{" "}
            <a href="mailto:automotives23@gmail.com" className="text-primary text-decoration-underline">
              automotives23@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
