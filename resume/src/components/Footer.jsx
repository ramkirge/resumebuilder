import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Project Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Resume Builder</h3>
          <p className="text-sm text-gray-400">
            Build professional resumes in minutes with easy-to-use templates.
          </p>
        </div>

        {/* Team Members */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Team Members</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>👤 Ram Kirge</li>
            <li>👤 Abhishek Nage</li>
            <li>👤 Om Lokhande</li>
            <li>👤 Rohan Gaikwad</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="https://github.com/ramkirge" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/ram-kirge-770130249/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Resume Builder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


