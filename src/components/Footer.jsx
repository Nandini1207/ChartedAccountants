import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Navigation Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 ">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white text-lg">Home</a></li>
            <li><a href="/profile" className="hover:text-white text-lg">Profiles</a></li>
            <li><a href="/contact" className="hover:text-white text-lg">Contact</a></li>
          </ul>
        </div>

        {/* Column 2: Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="d-flex gap-5">
           <a href="https://linkedin.com" className="text-white hover:text-primary" target="_blank" rel="noopener noreferrer">
               <i className="bi bi-linkedin p-1" style={{ fontSize: '1.5rem' }}></i>
           </a>
           <a href="https://twitter.com" className="text-white hover:text-primary" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter p-1" style={{ fontSize: '1.5rem' }}></i>
            </a>
          <a href="https://facebook.com" className="text-white hover:text-primary" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook p-1" style={{ fontSize: '1.5rem' }}></i>
          </a>
           <a href="mailto:info@eliteca.com" className="text-white hover:text-primary">
              <i className="bi bi-envelope-fill p-1" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
        </div>

        {/* Column 3: Additional Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className='text-lg'>Accounting Wiz Headquarters</p>
          <p className='text-lg'>123 Hyderabad, Financial Dist</p>
          <p className='text-lg'>Email: cont@Accounting Wiz.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-lg">
        <p>&copy; 2025 Accounting Wiz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
