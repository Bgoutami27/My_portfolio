import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-xl rounded-2xl" style={{ color: "#706D54" }}>
        <h1 className="text-3xl font-bold text-center text-blue-600">
         B.Goutami  – Portfolio
        </h1>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800" style={{ color: "#706D54" }}>
            🚀 Frontend Development
          </h2>
          <div className="mt-2 text-gray-700">
            <p style={{ color: "#A08963" }}>
              <strong>🔹 E-Commerce Website</strong> - Built using{" "}
              <em>HTML, CSS, JavaScript</em>. Features dynamic product display
              and cart system.
            </p>
            <p style={{ color: "#A08963" }}>
              <strong>🔹 Bus Booking System (React.js)</strong> - Frontend for a
              bus management system integrated with a{" "}
              <em>Node.js & MongoDB backend</em>.
            </p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800" style={{ color: "#706D54" }}>
            📊 Data Science & Analysis
          </h2>
          <div className="mt-2 text-gray-700">
            <p style={{ color: "#A08963" }}>
              <strong>🔹 Credit Risk Analysis</strong> - Used{" "}
              <em>Python (Pandas, Matplotlib, Seaborn)</em> to analyze loan
              repayment difficulties with box plot visualizations.
            </p>
            <p style={{ color: "#A08963" }}>
              <strong>🔹 Amazon Scraper</strong> - Developed a web scraper using{" "}
              <em>Python (BeautifulSoup, Selenium)</em> to extract product
              details, prices, and ratings from Amazon.
            </p>
            <p style={{ color: "#A08963" }}>
              <strong>🔹 Amazon Smart TV Scraper</strong> - Built using{" "}
              <em>Node.js, Puppeteer, and Cheerio</em>. Scrapes smart TV product
              details from Amazon India, including:
              <ul className="list-disc pl-6">
                <li>✅ Product Name</li>
                <li>✅ Rating & Number of Ratings</li>
                <li>✅ Selling Price & Total Discount</li>
                <li>✅ Bank Offers (All Details)</li>
                <li>✅ "About This Item" Section</li>
                <li>✅ Technical Specifications ("Product Information")</li>
                <li>✅ Amazon Product Images (Excluding Videos)</li>
                <li>✅ Manufacturer Section Images</li>
                <li>✅ AI-Generated Customer Review Summary</li>
              </ul>
            </p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800" style={{ color: "#706D54" }}>
            🖥 Backend Development
          </h2>
          <div className="mt-2 text-gray-700">
            <p style={{ color: "#A08963" }}>
              <strong>🔹 Bus Booking API</strong> - Backend for bus booking
              system using <em>Node.js, Express, MongoDB, Handlebars</em>.
              Handles authentication and booking.
            </p>
            <p style={{ color: "#A08963" }}>
              <strong>🔹 User Authentication System</strong> -{" "}
              <em>Node.js + MongoDB</em> with JWT-based authentication and
              role-based access control.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
