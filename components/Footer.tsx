import React from 'react';
import { LinkedInIcon, TwitterIcon, GitHubIcon, Logo } from './IconComponents';

export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-teal/20 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <Logo className="h-32 w-auto mb-2 mx-auto md:mx-0" />
            <p className="text-sm text-gray-400 mt-1">Next to Us. From Space to Earth. That’s NEX2US.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-teal transition-colors"><LinkedInIcon /></a>
            <a href="#" className="text-gray-400 hover:text-teal transition-colors"><TwitterIcon /></a>
            <a href="#" className="text-gray-400 hover:text-teal transition-colors"><GitHubIcon /></a>
          </div>
          <div>
            <p className="text-gray-400">© {new Date().getFullYear()} NEX2US. All rights reserved.</p>
            <a href="mailto:contact@nex2us.io" className="text-gray-400 hover:text-teal transition-colors">contact@nex2us.io</a>
          </div>
        </div>
      </div>
    </footer>
  );
}