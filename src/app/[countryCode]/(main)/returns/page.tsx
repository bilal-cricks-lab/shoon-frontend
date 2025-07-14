"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

const ReturnPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      title: "Return or exchange via post",
      content: (
        <>
          <h2 className="text-3xl md:text-4xl cormorant text-left mb-8">
            Return or exchange via post
          </h2>
          <p>
            Please send returns via post to: Website Returns, Moda in Pelle,
            Enfield Terrace, Leeds LS7 1RG
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Items purchased online (including sale items, discounted items, or
              any item purchased at a promotional price) can be returned to our
              Head Office for a refund or exchange within 28 days of receiving
              the item, providing you have a returns form or proof of purchase,
              and the item is in perfect unworn condition and in original
              packaging. We'll be happy to offer you a refund, or exchange for a
              different size or colour if possible.{" "}
            </li>
            <li>
              To return an item via post, please complete the returns form
              enclosed in your order, including reason for return or exchange.
              To help us process your returns and exchanges quickly and
              efficiently, please ensure all requested information is provided.
            </li>
            <li>
              If for any reason you did not receive a returns form, you can
              download one here. Please make sure you include your order
              reference number (Example: WEB123456 - this can be found on your
              order confirmation email), your name, item(s) to be returned or
              exchanged, and reason for the return.
            </li>
            <li>
              We would also recommend you take a photo or photocopy of the
              returns form/proof of purchase for your records.
            </li>
            <li>
              Return postage costs are the responsibility of the customer,
              unless you find your item is faulty. If you believe you have
              received a faulty item, please email our Customer Service team
              with images displaying the fault. Our team will have the images
              checked by our in house footwear technicians and if the item does
              look to be faulty, you will be provided with a free returns code.{" "}
            </li>
            <li>
              On the rare occasion that you receive a faulty or incorrect item,
              please ensure that you email customerservices@modainpelle.com
              prior to sending the item back. Please attach images where
              possible of the fault in your initial email, as this will help
              speed up the exchange or refund. We cannot refund postage costs
              for a faulted item which we have not been informed about prior to
              receiving the returns.
            </li>
            <li>
              We strongly advise you use a recorded or tracked delivery service
              to post your items, as unfortunately we cannot accept
              responsibility for items lost. Please retain your postage receipt
              or tracking number until your refund has been processed.{" "}
            </li>
            <li>
              If you have returned your item/s for a refund, this will be
              processed within 14 days of receipt of your item in our warehouse.
              Once your refund is processed, you will receive a notification
              email. Please note all refunds will be completed to the original
              method of payment. These conditions do not affect your statutory
              rights.
            </li>
            <li>You can also return via EVRi.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Free returns or exchanges in store",
      content: (
        <>
          <h2 className="text-3xl md:text-4xl cormorant text-left mb-8">
            Free returns or exchanges in store
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Items purchased online (including sale items, discounted items, or
              any item purchased at a promotional price) can be returned for a
              full refund or exchange in any Moda store or concession (Browns,
              Elphicks, Morleys, Rutherfords, Stringers, Oldrids, Moores and De
              Gruchy) within 28 days of receiving the item, providing you have a
              returns form or proof of purchase, and the item is in perfect
              unworn condition and in original packaging. We'll be happy to
              offer you a refund, or exchange for a different size or colour if
              possible.
            </li>
            <li>
              Orders purchased online cannot be returned to John Lewis
              concessions.
            </li>
            <li>
              In order to make a return in store, please bring the returns form
              provided with each order. Please fill out the form including
              reason for return or exchange. To help us process your returns and
              exchanges quickly and efficiently, please ensure all requested
              information is provided.
            </li>
            <li>
              If purchased in a concession (John Lewis, Browns, Elphicks,
              Morleys, Rutherfords, Stringers, Oldrids, Moores and De Gruchy)
              this has to be returned to the same concession within 28 days of
              the date of purchase, providing you have a receipt or proof of
              purchase, and the item is in perfect unworn condition and in
              original packaging.
            </li>
            <li>
              For all purchases made in a John Lewis store, please refer to the
              returns terms and conditions of John Lewis PLC.
            </li>
            <li>
              If for any reason you did not receive a returns form, you can
              download one here. In this case, you will additionally need to
              provide either your order confirmation email or proof of purchase.
            </li>
            <li>
              If you have returned your item(s) for a refund this will be
              processed within 14 days of receipt of your item in our warehouse.
              Please note all refunds will be completed to the original method
              of payment. These conditions do not affect your statutory rights.
            </li>
          </ul>
        </>
      ),
    },
  ]

  const faqData1 = [
    {
      title: "Return or exchange item via post",
      content: (
        <>
          <h2 className="text-3xl md:text-4xl cormorant text-left mb-8">
            Return or exchange via post
          </h2>
          <p>
            Please send returns via post to: Website Returns, Moda in Pelle,
            Enfield Terrace, Leeds LS7 1RG
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Items purchased online (including sale items, discounted items, or
              any item purchased at a promotional price) can be returned to our
              Head Office for a refund or exchange within 28 days of receiving
              the item, providing you have a returns form or proof of purchase,
              and the item is in perfect unworn condition and in original
              packaging. We'll be happy to offer you a refund, or exchange for a
              different size or colour if possible.{" "}
            </li>
            <li>
              To return an item via post, please complete the returns form
              enclosed in your order, including reason for return or exchange.
              To help us process your returns and exchanges quickly and
              efficiently, please ensure all requested information is provided.
            </li>
            <li>
              If for any reason you did not receive a returns form, you can
              download one here. Please make sure you include your order
              reference number (Example: WEB123456 - this can be found on your
              order confirmation email), your name, item(s) to be returned or
              exchanged, and reason for the return.
            </li>
            <li>
              We would also recommend you take a photo or photocopy of the
              returns form/proof of purchase for your records.
            </li>
            <li>
              Return postage costs are the responsibility of the customer,
              unless you find your item is faulty. If you believe you have
              received a faulty item, please email our Customer Service team
              with images displaying the fault. Our team will have the images
              checked by our in house footwear technicians and if the item does
              look to be faulty, you will be provided with a free returns code.{" "}
            </li>
            <li>
              On the rare occasion that you receive a faulty or incorrect item,
              please ensure that you email customerservices@modainpelle.com
              prior to sending the item back. Please attach images where
              possible of the fault in your initial email, as this will help
              speed up the exchange or refund. We cannot refund postage costs
              for a faulted item which we have not been informed about prior to
              receiving the returns.
            </li>
            <li>
              We strongly advise you use a recorded or tracked delivery service
              to post your items, as unfortunately we cannot accept
              responsibility for items lost. Please retain your postage receipt
              or tracking number until your refund has been processed.{" "}
            </li>
            <li>
              If you have returned your item/s for a refund, this will be
              processed within 14 days of receipt of your item in our warehouse.
              Once your refund is processed, you will receive a notification
              email. Please note all refunds will be completed to the original
              method of payment. These conditions do not affect your statutory
              rights.
            </li>
            <li>
              You can also return via EVRi. Please note any queries in regards
              to returns using this method will be direct with EVRi.{" "}
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Free returns or exchanges in store",
      content: (
        <>
          <h2 className="text-3xl md:text-4xl cormorant text-left mb-8">
            Free returns or exchanges in store
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Full price items purchased in a stand alone Moda store can be
              returned for a refund or exchange in any Moda stand alone store.
            </li>
            <li>
              If purchased in a concession (John Lewis, Browns, Elphicks,
              Morleys, Rutherfords, Stringers, Oldrids, Moores and De Gruchy)
              this has to be returned to the same concession within 28 days of
              receiving the item, providing you have a receipt or proof of
              purchase, and the item is in perfect unworn condition and in
              original packaging.
            </li>
            <li>
              For all purchases made in a John Lewis store, please refer to the
              returns terms and conditions of John Lewis PLC.
            </li>
            <li>
              Returns of items that were purchased at a concession may have a
              different returns policy, dependent on the store. Please check
              your receipt, or with the staff at the concession for more
              information.
            </li>
            <li>
              If you have returned your item/s for a refund this will be
              processed straight away in-store. Please note all refunds will be
              completed to the original method of payment. These conditions do
              not affect your statutory rights.
            </li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <div className="content-container py-10 text-gray-700">
      <h1 className="text-3xl md:text-4xl cormorant text-center mb-8">
        Returns
      </h1>

      <p className="f-13 lato text-center mb-4">
        Thank you for shopping with Moda in Pelle. We hope you love your new
        purchase! However, if you are not completely satisfied, we'll be happy
        to offer you a refund or exchange.
      </p>
      <p className="f-13 lato text-center mb-4">
        Please note: Return postage costs are the responsibility of the
        customer, unless you find your item is faulty. If you believe you have
        received a faulty item, please email our{" "}
        <a href="">Customer Services Team</a> with images displaying the fault.
        Our team will have the images checked by our in house footwear
        technicians and if the item does look to be faulty, you will be provided
        with a free returns code.
      </p>
      <p className="f-13 lato text-center mb-10">
        We would advise to try your shoes on in a carpeted room while you are
        deciding if they are for you, to minimise damage to the soles and heel.
      </p>

      {/* Notes */}
      <div className="f-13 lato text-sm space-y-4 mt-10 mb-10">
        <h2 className="text-3xl md:text-4xl cormorant text-left mb-8">
          I purchased online
        </h2>

        <p className="text-center">
          If you made your purchase online at modainpelle.com, it can be
          returned one of two ways:
        </p>
      </div>

      {/* FAQ Accordion Section */}
      <div className="divide-y divide-gray-300">
        {faqData.map((item, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center group"
              onClick={() => toggle(index)}
            >
              <h2 className="text-base uppercase font-medium text-black group-hover:text-[#7d7d7d] transition-colors duration-300">
                {item.title}
              </h2>
              <span className="text-black">
                {openIndex === index ? (
                  <FaMinus className="w-4 h-4" />
                ) : (
                  <FaPlus className="w-4 h-4" />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[1000px] pt-3" : "max-h-0"
              } text-sm text-[#7d7d7d]`}
            >
              <div className="pb-3">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Notes */}
      <div className="f-13 lato text-sm space-y-4 mt-10 mb-10">
        <h2 className="text-3xl md:text-4xl cormorant text-left mb-8">
          I purchased in store
        </h2>
        <p className="text-center">
          If you made your purchase in any of our Moda in Pelle stores or
          concessions, it can be returned one of two ways:
        </p>
      </div>
      {/* FAQ Accordion Section */}
      <div className="divide-y divide-gray-300">
        {faqData1.map((item, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center group"
              onClick={() => toggle(index)}
            >
              <h2 className="text-base uppercase font-medium text-black group-hover:text-[#7d7d7d] transition-colors duration-300">
                {item.title}
              </h2>
              <span className="text-black">
                {openIndex === index ? (
                  <FaMinus className="w-4 h-4" />
                ) : (
                  <FaPlus className="w-4 h-4" />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[1000px] pt-3" : "max-h-0"
              } text-sm text-[#7d7d7d]`}
            >
              <div className="pb-3">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReturnPage
