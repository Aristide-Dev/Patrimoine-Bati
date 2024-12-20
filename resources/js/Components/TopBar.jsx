import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const TopBar = () => (
  <div className="bg-white text-primary-800 py-2">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex flex-col md:flex-row items-center space-x-4">
        <div className="flex items-center">
          <Phone size={16} className="mr-2" />
          <span className="text-sm">(+224) 629 00 13 79</span>
        </div>
        <div className="flex items-center">
          <Mail size={16} className="mr-2" />
          <span className="text-sm">contacts@mamri.gov.gn</span>
        </div>
      </div>
    </div>
  </div>
);