"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

const termsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      title: "How to conclude a contract with us using this website",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Click and collect is available as a FREE delivery option when
              placing your order
            </li>
            <li>
              To find your local store please check our{" "}
              <a href="">store locator</a>
            </li>
            <li>
              When placing an order you can select collect in store as a
              delivery method and will be shown a list of the three nearest
              stores to you (based on your billing address)
            </li>
            <li>
              If you do not wish to collect from any of the three stores shown
              initially simply click on "view all stores" to be shown a full
              list of the stores you can collect from
            </li>
            <li>
              Simply select your chosen store and you will be given an estimated
              time when you will be able to collect your order
            </li>
            <li>
              Once you have completed the purchase online you will receive an
              order confirmation email
            </li>
            <li>
              You will receive another email once your order is available in the
              store to collect
            </li>
            <li>
              You must show identification in store when collecting your order,
              this can be your order conformation email either printed out or
              shown on a mobile device or the credit/debit card you used to
              place your order.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Other information about the contract",
      content: (
        <div className="space-y-4 text-center text-sm">
          <p className="font-semibold">
            Stores available to Click & Collect orders from:
          </p>
          <p>
            Amersham, Chester, Cirencester, Coleraine (Moores), Farnham
            (Elphicks), Gainsborough (Browns), Grantham (Downtown), Harrogate,
            Helmsley (Browns), Henley, Ilkley, Jersey (De Gruchy), Lytham
            (Stringers), Manchester, Marlborough, Marlow, Meadowhall, Morpeth
            (Rutherfords), Southport (Bea), Leeds, Yarm, York, York (Browns).
          </p>

          <p className="font-semibold">
            Stores excluded from the Click & Collect service:
          </p>
          <p>
            Belfast (House of Fraser), Beverley (Browns), Bexleyheath (Morleys),
            Brixton (Morleys), Cardiff (House of Fraser), Darlington (House of
            Fraser), Dundrum (House of Fraser), Enfield (Pearsons), House of
            Fraser (Web), Maidstone (House of Fraser), Manchester (House of
            Fraser), Newcastle (Fenwick), Norwich (House of Fraser), Oxford St
            (House of Fraser), Windsor (Daniel).
          </p>

          <p>
            Unfortunately we are unable to offer click and collect in our
            Republic of Ireland stores at this time.
          </p>
        </div>
      ),
    },
    {
      title: "Our liability to you",
      content: (
        <div className="text-left text-sm">
          <p>
            All items on our website will be available for click and collect
            providing we have stock in our warehouse or in the store you wish to
            collect from.
          </p>
        </div>
      ),
    },

    {
      title: "Cookie Policy",
      content: (
        <div className="text-left text-sm">
          <p>
            Most orders will be available to collect in store anytime from the
            same day to 3-5 working days from placing your order. You will
            receive an email confirmation once your order is ready for
            collection and you have 10 days to collect it from your chosen
            store.
          </p>
        </div>
      ),
    },
    {
      title: "Discounts & Promotion Codes",
      content: (
        <div className="text-left text-sm">
          <p>
            Yes you can return or exchange click and collect orders in store.
            For full details on making a return in store please{" "}
            <a href="">click here.</a>
          </p>
        </div>
      ),
    },
    {
      title: "Affiliate Discounts and Promotions",
      content: (
        <div className="text-left text-sm">
          <p>
            Yes, you must show identification in store when collecting your
            order, this can be your order confirmation email either printed out
            or shown on a mobile device or the credit/debit card you used to
            place your order.
          </p>
        </div>
      ),
    },
    {
      title: "Delivery Information",
      content: (
        <div className="text-left text-sm">
          <p>
            Yes, you must show identification in store when collecting your
            order, this can be your order confirmation email either printed out
            or shown on a mobile device or the credit/debit card you used to
            place your order.
          </p>
        </div>
      ),
    },
    {
      title: "Social Media Competitions",
      content: (
        <div className="text-left text-sm">
          <p>
            Yes, you must show identification in store when collecting your
            order, this can be your order confirmation email either printed out
            or shown on a mobile device or the credit/debit card you used to
            place your order.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="content-container py-10 text-gray-700">
      <h1 className="cormorant text-sm text-center mb-4">
        Moda in Pelle Terms and Conditions
      </h1>

      <p className="f-13 lato text-left mb-4">
        Your use of this website to purchase goods is governed by these terms
        and conditions as well as our <a href="">privacy policy</a> and website terms of use.
        Please read these documents carefully before using our site or placing
        an order. By placing an order you agree to the terms and conditions set
        out below.
      </p>
      <p className="f-13 lato text-left mb-4">
        Information on any guarantees, warranties or after-sales services that
        we provide for the goods you buy is available in our <a href="">FAQ's</a>
      </p>

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
    </div>
  )
}

export default termsPage
