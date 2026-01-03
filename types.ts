
// Import React to resolve the 'React' namespace for React.ReactNode
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  address: string;
  landmark: string;
  whatsapp: string;
}
