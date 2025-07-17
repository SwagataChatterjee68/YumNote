

const Footer = () => {
  return (
    <footer className="bg-white  mt-20 py-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900">YumNote</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Elevating your cooking journey with curated, high-quality recipes for every taste and occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition">About Us</a></li>
              <li><a href="/recipes" className="hover:text-blue-600 transition">Recipes</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h4>
            <p className="text-gray-600">Stay connected through our social platforms.</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()}YumNote. All rights reserved. | Built with passion and precision.
        </div>
      </div>
    </footer>
  )
}

export default Footer



