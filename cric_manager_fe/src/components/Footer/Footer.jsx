import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">© 2025 CricManager. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-indigo-500 hover:text-indigo-400 text-sm mx-2">Privacy Policy</a>
          <a href="#" className="text-indigo-500 hover:text-indigo-400 text-sm mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
