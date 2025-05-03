
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fit-neutral-100 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-fit-neutral-600 mt-2 text-sm">
              Your personalized journey to a healthier lifestyle starts here. Get customized nutrition and workout plans tailored to your goals.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-fit-green-600 hover:text-fit-green-700" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-fit-green-600 hover:text-fit-green-700" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-fit-green-600 hover:text-fit-green-700" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fit-neutral-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-fit-neutral-600 hover:text-fit-green-600 transition">Home</Link>
              </li>
              <li>
                <Link to="/plans" className="text-fit-neutral-600 hover:text-fit-green-600 transition">All Plans</Link>
              </li>
              <li>
                <Link to="/about" className="text-fit-neutral-600 hover:text-fit-green-600 transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-fit-neutral-600 hover:text-fit-green-600 transition">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-fit-neutral-600 hover:text-fit-green-600 transition">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fit-neutral-800">Plans</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plans/nutrition" className="text-fit-neutral-600 hover:text-fit-green-600 transition">Nutrition Plan</Link>
              </li>
              <li>
                <Link to="/plans/workout" className="text-fit-neutral-600 hover:text-fit-green-600 transition">Workout Plan</Link>
              </li>
              <li>
                <Link to="/plans/all-in-one" className="text-fit-neutral-600 hover:text-fit-green-600 transition">All-In-One Plan</Link>
              </li>
              <li>
                <Link to="/download-free" className="text-fit-neutral-600 hover:text-fit-green-600 transition">Free Resources</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fit-neutral-800">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-fit-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-fit-neutral-600">support@fittargethub.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-fit-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-fit-neutral-600">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-fit-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-fit-neutral-600">123 Fitness Street, Health City, HC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fit-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} FitTargetHub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="text-fit-neutral-600 hover:text-fit-green-600 transition">Privacy Policy</Link>
            <Link to="/terms" className="text-fit-neutral-600 hover:text-fit-green-600 transition">Terms of Service</Link>
            <Link to="/cookies" className="text-fit-neutral-600 hover:text-fit-green-600 transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
