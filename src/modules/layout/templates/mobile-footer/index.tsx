"use client";
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';

const FooterLinks = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

const sections = [
  {
    title: "Help",
    items: [
      { label: "Contact Us", href: "/contact" },
      { label: "Delivery", href: "/delivery" },
      { label: "Click & Collect", href: "/click-and-collect" },
      { label: "Make A Return", href: "/returns" },
      { label: "Security & Privacy", href: "/security-privacy" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Klarna FAQs", href: "/klarna-faqs" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        label: "Celebrate 50 Years With Moda In Pelle",
        href: "/50-years",
      },
      {
        label: "Serenade of Summer Spring Summer 2025",
        href: "/serenade-2025",
      },
      { label: "Shoon", href: "/shoon" },
      { label: "Pink Ribbon", href: "/pink-ribbon" },
      { label: "eGift Cards", href: "/egift-cards" },
      { label: "eGift Card Information", href: "/egift-card-info" },
      { label: "Discount Codes", href: "/discount-codes" },
      {
        label: "Healthcare & Key Worker Discount",
        href: "/keyworker-discount",
      },
      { label: "Student Discount", href: "/student-discount" },
      { label: "Our Heritage", href: "/heritage" },
    ],
  },
  {
    title: "More Information",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Store Finder", href: "/store-finder" },
      { label: "Wholesale", href: "/wholesale" },
      { label: "Affiliates & Influencers", href: "/affiliates" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Careers", href: "/careers" },
      { label: "Sitemap", href: "/sitemap" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Shoe Care Guide", href: "/shoe-care" },
    ],
  },
]

  return (
    <div className="w-full px-4 sm:block md:hidden">
      <div className="space-y-6">

        {/* Newsletter Sign Up at the top */}
        <div className="mt-6 text-center w-full mx-auto !items-center">
          <h4 className="mobfooter font-como mb-3  text-center">Newsletter Sign Up</h4>
          <div className="flex items-center border border-gray-300 overflow-hidden mb-2 w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-3 py-3 w-full text-lg focus:outline-none"
            />
            <button className="text-black px-4 py-2">✓</button>
          </div>
          <p className="-mt-2 text-center mb-2 text-xs text-gray">
            To see how we process your data view our{' '}
            <a href="#" className="underline">Privacy Policy</a>.
          </p>
          <p className="text-xs mt-1 font-light">
            By entering your email address you are consenting to subscribe to marketing emails and acknowledge that you consent to our Terms and Conditions and Privacy Policy.
          </p>
          
        </div>

        {/* Accordion Sections */}
        {sections.map(({ title, items }) => (
          <div key={title} className="border-t mobfooter border-black">
            <button
              onClick={() => toggleSection(title)}
              className="w-full flex justify-center items-center text-left"
            >
              <h4 className="text-lg mb-1 text-black mobfooter font-como">{title}</h4>
              <span>
                {openSection === title ?
                 <FaChevronUp className="mt-2 w-4 h-3 !strokeWidth={1}"  /> 
                : <FaChevronDown  className=" mt-2 w-4 h-3 !strokeWidth={1}" />}
              </span>
            </button>

      <ul className={`space-y-2 text-gray text-center font-light text-sm mt-2 ${openSection === title ? 'block' : 'hidden'}`}>
        {items.map(({ label, href }, i) => (
            <li key={i}>
              <Link href={href} className="hover:underline block">
                {label}
              </Link>
            </li>
          ))}
      </ul>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FooterLinks;
