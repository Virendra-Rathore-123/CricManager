import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-gray-800">
            <Link to="/" className="text-indigo-600 hover:text-indigo-700">CricManager</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 text-lg">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 text-lg">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 text-lg">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 text-lg">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-indigo-600 text-lg">Sign In</Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 rounded-md px-4 py-2 text-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
