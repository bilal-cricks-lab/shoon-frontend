"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

const SecurityPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="content-container py-10">
        <h1 className="cormorant text-3xl font-semibold mb-6 text-center">
          Security & Privacy
        </h1>
        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          We take the safety and security of our users very seriously and want
          to warn you about the potential dangers of fake websites.
        </p>
        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          If you come across a fake website, social media account or
          advertisement related to Moda in Pelle products, please let us know
          and we will report it to the URL Service Provider and NCSC.{" "}
        </p>
        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          Unfortunately, there are malicious individuals and organizations out
          there who create fake websites that look very similar to legitimate
          websites. These fake websites are designed to trick users into
          providing personal information, such as login credentials, credit card
          numbers, or other sensitive data.{" "}
        </p>
        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          To protect yourself from these fake websites and scams, it is
          important to always be vigilant and pay attention to the details. Here
          are some tips to help you stay safe:
        </p>

        <ul className="pl-4 f-13 list-decimal space-y-1">
          <li>
            Check the website URL: Always check the URL of the website you are
            visiting to make sure it is the correct one. Scammers often use
            slightly different URLs that are similar to the real website, but
            with small variations.
          </li>
          <li>
            Look for security indicators: Legitimate websites usually have
            security indicators, such as a lock icon or "https" in the URL,
            indicating that the website is secure. If these indicators are
            missing, it could be a red flag.
          </li>
          <li>
            Don't click on suspicious links: If you receive an email or message
            with a link to a website, be cautious before clicking on it. Check
            the URL and the sender's information to make sure it is legitimate.
          </li>
          <li>
            Keep your software updated: Make sure your computer and browser
            software is up-to-date with the latest security patches to protect
            against known vulnerabilities.
          </li>
          <li>
            Report suspicious activity: If you suspect a website may be fake or
            fraudulent, report it to the appropriate authorities or contact the
            legitimate website's customer service for assistance.
          </li>
        </ul>

        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          At our website, we have implemented various security measures to
          protect our users from these types of threats. We use SSL encryption
          to secure our website and protect user data, and we also have measures
          in place to detect and prevent fake websites from being created.
        </p>

        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          If you believe you have ordered from a fake website, it can be a
          stressful and frustrating experience. However, there are some steps
          that can be taken to minimize the damage and hopefully recover any
          losses:
        </p>

        <ul className="pl-4 f-13 list-decimal space-y-1">
          <li>
            Contact the website: Check to see if there is a customer service
            email or phone number listed on the website. If you can reach
            someone, explain the situation, and ask for a refund. Be sure to
            provide any order information that you have, such as an order number
            or confirmation email.
          </li>
          <li>
            Contact your bank or credit card company: If you are unable to reach
            the website or the website refuses to give you a refund, contact
            your bank or credit card company. Explain the situation and provide
            any documentation you have, such as confirmation emails or receipts.
            They may be able to reverse the charge or issue a chargeback.
          </li>
          <li>
            Check for fraudulent activity: Keep an eye on your bank and credit
            card statements for any unauthorized charges or activity. If you see
            anything suspicious, contact your bank or credit card company
            immediately.
          </li>
          <li>
            Report the website: Report the fake website to the appropriate
            authorities. You can report it to the National Cyber Security Centre
            at{" "}
            <a href="">
              https://www.ncsc.gov.uk/section/about-this-website/report-scam-website
            </a>
            to help prevent others from falling victim to the same scam.
          </li>
        </ul>
        <h1 className="lato text-gray-500 mt-4 mb-2 text-left">
          Privacy Policy
        </h1>
        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          We take your privacy very seriously, and are committed to maintaining
          this.
        </p>
        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          For full details, please read our <a href="">Privacy Policy.</a>
        </p>
        <p className="f-12 lato text-sm text-gray-500 font-medium py-2">
          We take the privacy and security of our customers very seriously and
          are committed to providing a safe and secure online environment. If
          you have any questions or concerns about our security practices,
          please don't hesitate to <a href="">contact us.</a>
        </p>
      </div>
    </>
  )
}

export default SecurityPage
