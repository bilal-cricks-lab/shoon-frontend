"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

const faqData = [
  {
    title: "PRODUCTS",
    children: [
      {
        question: "Where can I find the style that I am looking for?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If you know the name of the product you are looking for simply
              type this into our search bar and click the search icon. The
              product should appear if it is in stock. Our ranges are
              continually updated so keep an eye on our ‘New Arrivals’ section
              and be the first to shop our new collection.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Why not take a look at our ‘Be Inspired’ section? Explore our
              seasonal trends, how to wear them and lots more! You’re sure to
              find something you like and shop alternative styles if we’ve sold
              out.
            </p>
          </>
        ),
      },
      {
        question: "What size should I order?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Please refer to our size conversion chart that is featured on each
              product page or{" "}
              <a className="underline" href="">
                click here
              </a>
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If you’re still not sure which size to order, our customer
              services team are on hand to give some advice and answer your
              questions. They can be contacted via{" "}
              <a className="underline" href="">
                customerservices@modainpelle.com
              </a>{" "}
              or the{" "}
              <a className="underline" href="">
                Contact us
              </a>{" "}
              page. We aim to respond to your query within 2 working days.
            </p>
          </>
        ),
      },
      {
        question: "How do I know what material has been used?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              All of our styles have a full product description that will
              include this information on the product details page.
            </p>
          </>
        ),
      },
      {
        question: "How do I care for my shoes?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              <a className="underline" href="">
                Please click here to visit our shoe care guide.
              </a>{" "}
              We also have a range of shoe care, which will help keep your new
              purchases in great condition. Available online here and in stores.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "ORDERS",
    children: [
      {
        question: "How can I place an order?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Ordering one of our beautiful products couldn't be easier. Simply
              find the item/s you would like, select your size and colour and
              add to your basket. From your Basket Page, simply follow the steps
              to access your account or register a new account with us and
              proceed to the Checkout Page.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If you experience any problems our Customer Services team will be
              happy to help. Start a live web chat using our service or call on
              0113 2007 310 between Mon-Fri 8am-6pm.
            </p>
          </>
        ),
      },
      {
        question: "Why can’t I place an order online?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Our website is fast, secure, and we update it regularly to
              maintain and improve how our customers are able to use it. Should
              you be having an issue with the website, please try these
              solutions to common issues:
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Unable to log into your Moda in Pelle account?
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o Please request to update or change your password.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Please ensure the captcha security question is answered correctly
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o This feature helps maintain the security of our website and your
              account.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If a payment is not being accepted, please check you have entered
              the correct delivery and billing details.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o The ‘Billing Address’ needs to match the address that is used
              with your bank.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If choosing to pay with Klarna via your card or the buy now pay
              later options, your billing and delivery address must be in the
              same country.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o Please choose an alternative payment method if one of your
              details are not within the same country.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Have you set your address to the correct part of the UK?
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o The options for UK in the Country field when adding or editing
              an address are:
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o UK – Mainland
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o UK – Northern Ireland
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o UK – Channel Islands (Guernsey)
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o UK – Channel Islands (Jersey)
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o UK – Non Mainland
            </p>
          </>
        ),
      },
      {
        question: "What method of payment can I use?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Here at Moda in Pelle we use Klarna as our secure online payment
              gateway, along with PayPal and AmazonPay.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              This gives you the option to pay immediately by credit card, debit
              card, PayPal and AmazonPay, or buy now pay in 30 days or pay in 3
              interest free instalments with Klarna(subject to status).
            </p>
          </>
        ),
      },
      {
        question: "What is Klarna?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Klarna is an online payment method that allows some customers to
              have the option to pay within 30 days of their order. This option
              is not available for all customers, with Klarna making the
              decision whether to offer the buy now pay later option.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If buy now pay later is not available, you are still able to place
              orders as usual using your credit or debit card, PayPal or Amazon
              Pay. You will not receive any follow up emails from Klarna if
              choosing the pay now.
            </p>
          </>
        ),
      },
      {
        question: "How do I make a payment to Klarna?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Once your order has been placed and dispatched, Klarna will
              contact you by email with instructions on how to pay. If for any
              reason you have incorrectly inputted your email address, please
              contact Klarna directly on 0808 189 3333.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Moda in Pelle are unable to take payment directly if payment is
              due with Klarna.
            </p>
          </>
        ),
      },
      {
        question:
          "I want to use Klarna buy now pay later but they are asking for my card details?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Klarna do not offer this service to every customer.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If card details are being requested then Klarna are unable to
              offer you the buy now pay later service at this time.
            </p>
          </>
        ),
      },
      {
        question: "I have a promotional code. How do I redeem it?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              From time to time we run offers and promotional codes. When in the
              My Basket page, enter the promotional code you have in the box
              marked "Redeem Discount Code" and click "Apply". Only one
              promotional code can be redeemed per transaction, and please check
              the terms and conditions of the code you are using for any
              restrictions.
            </p>
          </>
        ),
      },
      {
        question: "How do I cancel/amend my order?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              To cancel an order please reply to your confirmation email with
              your request. Our customer service team will then look into this
              for you and contact you with.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              To amend an order please reply to your confirmation email with
              your request. Once an order has been dispatched no amendments are
              possible, so please bear this in mind if contacting Moda in Pelle
              with an order update.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "DELIVERY",
    children: [
      {
        question: "What are your delivery options?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              We deliver to over 50 countries worldwide and have a range of UK
              and International delivery options; please{" "}
              <a href="">click here</a> for full details and rates.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              All our UK orders are delivered by Hermes, with UPS delivering all
              overseas orders.
            </p>
          </>
        ),
      },
      {
        question: "Has my order been shipped yet?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Once your order has been shipped you will receive an email update
              including tracking details from our courier (where applicable),
              you can use these to track progress of your delivery on the{" "}
              <a href="">Hermes</a>
              or <a href="">UPS</a> website
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If you haven't received a confirmation email when you expected to
              please check your 'junk' email folder in the first instance. If
              you need any further assistance just contact Customer Services on
              <a href="">customerservices@modainpelle.com</a> or via our{" "}
              <a href="">Contact us</a> page
            </p>
          </>
        ),
      },
      {
        question: "How long will my online order take to arrive? (UK orders)",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Standard delivery for the UK is 3-7 working days from your order
              date.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              You will receive an email once your parcel has been dispatched
              from our warehouse and a further email from our delivery company
              Hermes to provide you with your delivery date and scheduled
              delivery time.
            </p>
          </>
        ),
      },
      {
        question: "When will my Click & Collect order be ready?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Click & Collect orders may take between 3-5 days to arrive into
              store. You will receive an email once your item is ready for
              collection.
            </p>
          </>
        ),
      },
      {
        question:
          "My order says it has been dispatched but nothing has been received?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Please use your 16 digit tracking number, which can be found in an
              email sent by Hermes, to check the status of your delivery.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              For any further information please contact our customer service
              team at <a href="">Customerservices@modainpelle.com</a> with your
              order number and query, and they will be happy to investigate and
              will respond within 48 hours.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "RETURN",
    children: [
      {
        question: "How do I return my online order?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Please send returns via post to: Website Returns, Moda in Pelle,
              Enfield Terrace, Leeds LS7 1RG
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o Items purchased online (including sale items, discounted items,
              or any item purchased at a promotional price) can be returned to
              our Head Office for a refund or exchange within 28 days of
              receiving the item, providing you have a returns form or proof of
              purchase, and the item is in perfect unworn condition and in
              original packaging. We'll be happy to offer you a refund, or
              exchange for a different size or colour if possible.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o To return an item via post, please complete the returns form
              enclosed in your order, including reason for return or exchange.
              To help us process your returns and exchanges quickly and
              efficiently, please ensure all requested information is provided.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o If for any reason you did not receive a returns form, you can
              download one <a href="">here</a>. Please make sure you include
              your order reference number (Example: WEB123456 - this can be
              found on your order confirmation email), your name, item(s) to be
              returned or exchanged, and reason for the return.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o Please note: Return postage costs are the responsibility of the
              customer, unless your product is found to be faulty after an
              inspection by our in-house Footwear Technicians. In this case, we
              will refund your postage costs.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o Please contact Customer Services should you believe you have
              received a Faulty Item so we can advise on the Returns Postage
              method most suitable.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o We strongly advise you use a recorded or tracked delivery
              service to post your items, as unfortunately we cannot accept
              responsibility for items lost. Please retain your postage receipt
              or tracking number until your refund has been processed.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o If you have returned your item/s for a refund, this will be
              processed within 10 working days of receipt of your item in our
              warehouse. Once your refund is processed, you will receive a
              notification email. Please note all refunds will be completed to
              the original method of payment. These conditions do not affect
              your statutory rights.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              o You can also return via EVRi. <a href="">Click here</a> to find
              your local EVRi ParcelShop.
            </p>
          </>
        ),
      },
      {
        question: "How should I return my parcel?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              We recommend sending all parcels using a tracked service from one
              of the major couriers, such as Hermes, Parcel Force or DPD, as
              this allows you to track the journey of your return.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If for any reason you did not receive your dispatch form, please
              follow <a href="">this link to download a copy of the form.</a>
            </p>
          </>
        ),
      },
      {
        question: "Do I have to pay for my return?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              The cost of returning an item to is payable by the customer.
            </p>
          </>
        ),
      },
      {
        question: "Can I return my online order to store?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Yes, all online orders can be returned to any one of our Moda in
              Pelle stores or concessions within 28 days of receiving your
              order.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              To locate your nearest store please visit the{" "}
              <a href="">Store Finder</a> section of our website.
            </p>
          </>
        ),
      },
      {
        question: "How long do we have to return an online order?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              You have 28 days from receiving the item to return your order. All
              purchases must be returned in the same condition they were sent,
              including the original box.
            </p>
          </>
        ),
      },
      {
        question: "I made a purchase instore but want to return via the post?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If returning by post please download a <a href="">returns form</a>{" "}
              from the returns section on our website. Please complete the form
              and also include a copy of your store receipt.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If requesting a refund, please provide a contact number as the
              refund will need to be made over the phone by our customer
              services team. The refund will be completed within 10 working days
              from the date your parcel is received.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If requesting an exchange, please indicate on the form the size
              you require and the address you would like the exchange sending
              out to. This will then be completed for you within 10 working days
              from the date your parcel is received.
            </p>
          </>
        ),
      },
      {
        question: "What do I do if I have received or have a faulty item?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              What do I do if I have received or have a faulty item?
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Whilst we do our upmost to ensure all our items are produced to a
              very high standard, it may happen that an item you receive has
              been damaged in transit or does not live up to the standards we
              all expect from Moda in Pelle. If this happens, please contact us
              with pictures of any defects on the item and email them to our
              customer service team with your order number or copy of your
              instore receipts and we will be more than happy to assist you.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Our contact email address is{" "}
              <a href="">customerservices@modainpelle.com</a>
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Will I have my postage refunded if my item is faulty?
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Once photos have been received via email, our customer service
              team will review and advise. If any manufacturing faults are found
              we will be happy to reimburse postage costs.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              How long is the warranty period on Moda in Pelle items?
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              We are very proud of the quality of our shoes and accessories, and
              offer a one-year guarantee on all items purchased directly through
              Moda in Pelle. This warranty is for manufacturing issues only and
              we cannot take responsibility for any fault that may have occurred
              through customary wear and tear.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "REFUNDS",
    children: [
      {
        question: "How long does it take to receive a refund?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Once your parcel is received into our warehouse, a refund or
              exchange will be completed for you within 10 working days. You
              will receive an email to confirm once a refund has been processed
              for you.
            </p>
          </>
        ),
      },
      {
        question: "Do you send an email once my return has arrived?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              We currently do not send an email to advise your parcel has been
              received. Customers can use their tracking information provided by
              the post office or other returns company to confirm the date the
              parcel is received.
            </p>
          </>
        ),
      },
      {
        question:
          "What do I do if I have returned my online order but not received a refund?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              All refunds are completed within 10 days of your returns parcel
              being received by our warehouse. If you have not received your
              refund within 10 days of your parcel being received by us, please
              check with your courier that the return has been successfully
              delivered to us, and if it has and 10 days has elapsed, please
              email our customer service team at
              <a href="">Customerservices@modainpelle.com</a> with your order
              number, the name of the item(s) you have returned and also a copy
              of your postal receipt.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              The customer service team will then investigate this for you and
              get back to you within 48 hours.
            </p>
          </>
        ),
      },
      {
        question:
          "I purchased instore and returned via the post how will I received a refund?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Purchases originally made instore will be refunded to you over the
              phone by our customer service team. A call will be completed for
              you within 10 working days from the date your parcel is received.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "GIFT CARDS",
    children: [
      {
        question: "eGift Card Information",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              You will need to log in to your account using the email address
              the eGift card has been purchased for. Or, alternatively if you
              don't yet have an account with us, you'll need to register using
              the email address the eGift card was purchased for.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              The funds from the eGift card will automatically appear in the
              e-wallet on your account. Simply add the items you wish to
              purchase to your basket, log in to your account at the checkout
              and select 'e-wallet' when asked how you want to pay.
            </p>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              If the items purchased total less than the gift voucher amount the
              remaining funds will stay in the e-wallet to use on the next
              purchase, if the items purchased exceed the gift voucher amount
              the remaining value must be paid by card in order to complete the
              order.
            </p>
          </>
        ),
      },
      {
        question: "How can I find out how much is on my eGgift card?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              You can find out how much is on your eGift card by logging into
              your account and going to your e-wallet, this will tell you your
              balance.
            </p>
          </>
        ),
      },
      {
        question: "How long is my eGift card valid for?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              eGift cards are valid for 12 months from the date of issue.
            </p>
          </>
        ),
      },
      {
        question:
          "What happens when I return items paid for using an eGift card?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              Items bought using an eGift card will be refunded back to your
              e-wallet, the amount will be credited to your e-wallet balance.
              Only additional monies over and above the gift voucher amount will
              be refunded to the original payment method.
            </p>
          </>
        ),
      },
      {
        question: "How do I buy someone an eGift card?",
        answer: (
          <>
            <p className="f-13 lato text-gray-500 text-left mb-4">
              You can purchase an eGift card by clicking here, which will be
              emailed to the recipient specified at the time of purchase.
              Alternatively, visit one of our stores to purchase a gift card.
            </p>
          </>
        ),
      },
    ],
  },
]

const DoubleDropdown = () => {
  const [openPrimary, setOpenPrimary] = useState<number | null>(null)
  const [openSecondary, setOpenSecondary] = useState<number | null>(null)

  const togglePrimary = (index: number) => {
    setOpenPrimary(openPrimary === index ? null : index)
    setOpenSecondary(null)
  }

  const toggleSecondary = (index: number) => {
    setOpenSecondary(openSecondary === index ? null : index)
  }

  return (
    <div className="content-container py-10 text-gray-700">
      <h1 className="cormorant text-sm text-center mb-4">Help & Contact</h1>
      <p className="f-16 lato text-gray-500 !font-normal mb-4">
        Please select the subject below and click for more information.
      </p>

      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border-b border-gray-300 py-4">
          {/* Primary dropdown title */}
          <button
            onClick={() => togglePrimary(sectionIndex)}
            className="w-full flex justify-between items-center group"
          >
            <h2 className="text-base font-semibold uppercase text-black group-hover:text-gray-500 transition-colors duration-300">
              {section.title}
            </h2>
            <span className="text-black">
              {openPrimary === sectionIndex ? <FaMinus /> : <FaPlus />}
            </span>
          </button>

          {/* Nested secondary dropdowns */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openPrimary === sectionIndex ? "max-h-[2000px] pt-3" : "max-h-0"
            }`}
          >
            {section.children.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleSecondary(index)}
                  className="w-full text-left text-sm font-medium text-black hover:text-gray-600 transition"
                >
                  {item.question}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSecondary === index
                      ? "max-h-[1000px] pt-3 border-t border-gray-200"
                      : "max-h-0"
                  } text-sm text-gray-600`}
                >
                  <div className="lato">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DoubleDropdown
