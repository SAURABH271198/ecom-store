"use client";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Heading */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need help? Reach out and we’ll get back to you as soon as possible.
        </p>
      </header>

      {/* Layout: Form + Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Tell us what you're thinking..."
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Customer Support</h2>
            <p className="text-gray-600">support@estore.com</p>
            <p className="text-gray-600">+1 (800) 123-4567</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Our Office</h2>
            <p className="text-gray-600">
              123 E-Store Street<br />
              Commerce City, CA 90210<br />
              United States
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Hours</h2>
            <p className="text-gray-600">
              Monday - Friday: 9am – 6pm<br />
              Saturday: 10am – 4pm<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
