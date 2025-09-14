export default function AboutPage() {
    return (
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">About Us</h1>
  
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/id/1011/600/400"
              alt="About Us"
              className="rounded-xl shadow-lg object-cover w-full h-full"
            />
          </div>
  
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">
              We Craft Quality Products
            </h2>
            <p className="text-gray-600 mb-4">
              Mitansh Enterprises is committed to providing top-quality stationery products that help you stay organized and productive. We combine innovation, quality, and affordability to create an unmatched shopping experience.
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2024, we have grown rapidly while maintaining a focus on customer satisfaction. Our mission is to inspire creativity and productivity in every home, office, and school across India.
            </p>
            <p className="text-gray-600">
              Thank you for trusting us with your stationery needs. We continuously strive to offer the best products and services for our customers.
            </p>
          </div>
        </div>
      </main>
    );
  }
  