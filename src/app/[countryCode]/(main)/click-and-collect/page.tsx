"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

const CollectPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      title: "How do I use Click and Collect?",
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
      title: "Which stores offer the Click and Collect service?",
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
      title: "What items can be purchased through Click and Collect?",
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
      title: "When can I collect my click and collect order?",
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
      title: "Can I order and return or get a refund in store?",
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
      title: "Do I need to bring I.D when collecting my order in store?",
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
      <h1 className="cormorant text-sm text-left mb-4">Click and Collect</h1>

      <p className="f-13 lato text-left mb-4">
        We are now offering FREE Click and Collect in over 40 of our UK stores,
        purchase online and select to collect your order from one of our UK
        stores for FREE.
      </p>
      <p className="f-13 lato text-left mb-4">
        *This service is subject to stock availability in our warehouse and
        stores.
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

export default CollectPage
