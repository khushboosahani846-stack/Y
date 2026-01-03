
import React from 'react';
import { Truck, HardHat, Layers, Package, PhoneCall, MapPin } from 'lucide-react';
import { ServiceItem, ContactInfo } from './types';

export const BUSINESS_NAME = "Yashika Enterprises";
export const TAGLINE = "Building the Future with Strength and Integrity";

export const CONTACT_INFO: ContactInfo = {
  phone1: "+91 7084112233",
  phone2: "+91 7052212223",
  address: "Gulharia Thana Road, Gorakhpur, UP - 273013",
  landmark: "200 meters East of Gulharia Thana",
  whatsapp: "917084112233"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'saria',
    title: 'Premium TMT Saria',
    description: 'High-quality iron rods (Saria) for maximum structural strength and earthquake resistance.',
    icon: <Layers className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/saria/600/400'
  },
  {
    id: 'angles-channels',
    title: 'Angles & Channels',
    description: 'Durable MS Angles, Channels, and Beams for industrial and residential fabrication.',
    icon: <Package className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/metal/600/400'
  },
  {
    id: 'construction',
    title: 'Building Construction',
    description: 'Complete building construction services from foundation to finishing with expert supervision.',
    icon: <HardHat className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/construction/600/400'
  },
  {
    id: 'logistics',
    title: 'Fast Delivery',
    description: 'Efficient on-site delivery across Gorakhpur and surrounding regions to keep your projects on schedule.',
    icon: <Truck className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/delivery/600/400'
  }
];
