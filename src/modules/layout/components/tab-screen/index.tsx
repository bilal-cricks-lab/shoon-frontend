import React, { useState } from "react";

const FooterDropdowns = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

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

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
   <div className="w-full hidden  md:flex lg:hidden !justify-center">
  <div className="w-[500px] flex flex-row !items-center  gap-6">
    {sections.map((section) => (
      <div key={section.title} className="w-[200px] sm:w-1/3">
        <button
          onClick={() => toggleSection(section.title)}
          className="text-lg font-como mb-3 text-black w-full flex  items-center focus:outline-none"
        >
          {section.title}
          
        </button>

        <ul
          className={`overflow-hidden transition-all duration-300 ease-in-out text-gray font-light text-sm space-y-2 ${
            openSection === section.title ? "max-h-[500px]" : "max-h-0"
          }`}
        >
        {section.items.map(({ label, href }, i) => (
          <li key={i}>
            <a
               href={href || "#"}
                className="hover:underline block">
              {label}
            </a>
          </li>
    ))}
        </ul>
      </div>
    ))}
  </div>
</div>

  );
};

export default FooterDropdowns;
