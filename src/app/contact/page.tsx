export default function ContactPage() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-10 text-center text-gray-800">Contact Us</h1>
  
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-xl p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
  
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:depputaragi15@gmail.com" className="text-blue-600 hover:underline">
                  depputaragi15@gmail.com
                </a>
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:9634023965" className="text-blue-600 hover:underline">
                  9634023965
                </a>
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Address</h3>
              <p className="text-gray-600">
                Almora, Uttarakhand, India
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  