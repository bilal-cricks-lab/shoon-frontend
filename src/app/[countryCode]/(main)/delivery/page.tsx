"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

const DeliveryPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      title: "Click and Collect - FREE",
      content: (
        <>
          <p>
            We offer a free Click and Collect service in our UK stores. Order
            online and select to collect from one of our UK stores free of
            charge. *This service is subject to stock availability in our
            warehouse and in the store you wish to collect from. For full
            details on Click and Collect please{" "}
            <a href="/delivery-areas" className="underline text-blue-600">
              click here.
            </a>
          </p>
        </>
      ),
    },
    {
      title: "UK Standard",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Estimated delivery time is 5 to 7 working days.</li>
          <li>Orders are shipped via EVRi</li>
          <li>
            Once your order is dispatched from our warehouse you will receive an
            e-mail with the tracking information.
          </li>
          <li>
            You will receive emails from EVRi with delivery updates and on the
            day of delivery a 2 hour ETA delivery window
          </li>
          <li>A signature is required upon delivery of your order</li>
          <li>
            If you are not available at your delivery address, the courier will
            leave a calling card and will make a further two attempts at
            delivery before the parcel is returned to Moda in Pelle.
          </li>
          <li>
            Includes Northern Ireland, Jersey, Guernsey and The Channel Islands
          </li>
        </ul>
      ),
    },
    {
      title: "UK Next Working Day",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>This service is a flat rate of £4.95</li>
          <li>
            Orders will be delivered the next working day when ordered by 6pm
            Sunday to Friday
          </li>
          <li>Does not include deliveries on Sunday or Bank Holidays</li>
          <li>
            During Bank Holidays we are unable to dispatch until the first
            working day following the Bank Holiday
          </li>
          <li>
            Applies to most delivery addresses within mainland UK, please find a
            list of postal codes this service is not available on below
          </li>
          <li>
            Only available on products that are stocked in our central warehouse
          </li>
          <li>
            Orders will be shipped via EVRi and a signature will be required
            upon delivery
          </li>
          <li>
            You will receive emails from EVRi with delivery updates and on the
            day of delivery a 2 hour ETA delivery window
          </li>
          <li>
            If delivery is delayed as a result of there being no one available
            to sign for the parcel at your delivery address the delivery charge
            is non-refundable
          </li>
          <li>
            If you are not at your delivery address to sign for your parcel the
            carrier will leave a card with instructions on how you can collect
            it or rearrange delivery.
          </li>
          <li>
            There are a number of UK postcodes excluded from the next day
            service, please <a href="">click here</a> for details, please ensure
            you check this list before proceeding with this service, if your
            post code is excluded from this list and you still opt for the next
            day service you will still receive an express service but it will
            not be guaranteed next day
          </li>
        </ul>
      ),
    },
    {
      title: "Republic of Ireland",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>This service is a flat rate of £9.95.</li>
          <li>Estimated delivery time is 5 to 7 working days</li>
          <li>Orders are shipped via EVRi</li>
          <li>
            Once your order is dispatched from our warehouse you will receive an
            e-mail with the tracking information
          </li>
          <li>
            If you are not at your delivery address to sign for your parcel the
            carrier will leave a card with instructions on how you can collect
            it or rearrange delivery
          </li>
          <li>
            *Please note that due to UK regulations aerosols cannot be shipped
            outside of the UK, as some of our shoe care products are aerosols
            please check the product descriptions before purchasing these items
            if your shipping address is outside of the UK.
          </li>
          <li>
            Please note due to new Brexit regulations, additional duty costs may
            apply.
          </li>
        </ul>
      ),
    },
    {
      title: "European",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Brexit Update: Please note all European and International orders may
            take longer than usual.
          </li>
          <li>
            This service is £9.95 for one item, a surcharge of £5 is added for
            every additional item that is ordered to cover the increased courier
            costs
          </li>
          <li>Estimated delivery time is 5 to 10 working days</li>
          <li>Orders are shipped via UPS</li>
          <li>
            If you are not at your delivery address to sign for your parcel the
            carrier will leave a card with instructions on how you can collect
            it or rearrange delivery
          </li>
          <li>
            *Please note that due to UK regulations aerosols cannot be shipped
            outside of the UK, as some of our shoe care products are aerosols
            please check the product descriptions before purchasing these items
            if your shipping address is outside of the UK.
          </li>
          <li>
            Please note due to new Brexit regulations, additional duty costs may
            apply.
          </li>
        </ul>
      ),
    },
    {
      title: "International",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Brexit Update: Please note all European and International orders may
            take longer than usual.
          </li>
          <li>
            This service is £25.00 for one item, a surcharge of £5 is added for
            every additional item that is ordered to cover the increased courier
            costs
          </li>
          <li>
            This service applies to any delivery address outside of Europe
          </li>
          <li>Estimated delivery time is 7 to 10 working days</li>
          <li>Orders are shipped via UPS</li>
          <li>
            If you are not at your delivery address to sign for your parcel the
            carrier will leave a card with instructions on how you can collect
            it or rearrange delivery
          </li>
          <li>
            *Please note that due to UK regulations aerosols cannot be shipped
            outside of the UK, as some of our shoe care products are aerosols
            please check the product descriptions before purchasing these items
            if your shipping address is outside of the UK.
          </li>
          <li>
            Please note due to new Brexit regulations, additional duty costs may
            apply.
          </li>
        </ul>
      ),
    },
    {
      title: "Where we ship to",
      content: (
        <div className="space-y-1">
          <p>Countries we ship to outside of the UK:</p>
          {[
            "Austria",
            "Belgium",
            "Bulgaria",
            "Canada",
            "China",
            "Czech Republic",
            "Croatia",
            "Cyprus",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Hungary",
            "Hong Kong",
            "Italy",
            "Japan",
            "Latvia",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Netherlands",
            "Norway",
            "Poland",
            "Portugal",
            "Romania",
            "Serbia",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Switzerland",
            "Turkey",
            "USA",
          ].map((country, i) => (
            <p key={i}>{country}</p>
          ))}
          <p>
            *Please note that due to UK regulations aerosols cannot be shipped
            outside of the UK. Some of our shoe care products are aerosol based
            - please check before purchasing these items if your shipping
            address is outside of the UK.
          </p>
        </div>
      ),
    },
  ]

  const deliveryItems = [
    {
      service: "Standard",
      details: "Delivered within 5 to 7 working days",
      cost: "FREE",
      area: "UK Mainland & The Channel Islands",
    },
    {
      service: "Next Working Day",
      details: "Order by 6pm, Sunday through to Friday for delivery next day*",
      cost: "£4.95",
      area: "UK Mainland*",
    },
    {
      service: "Click and Collect",
      details:
        "Order online and collect in store for free within 3 working days*",
      cost: "FREE",
      area: "Moda in Pelle UK stores. For international delivery options please see below.",
    },
    {
      service: "Standard Northern Ireland",
      details: "Delivered within 5 to 7 working days",
      cost: "FREE",
      area: "Northern Ireland",
    },
  ]

  return (
    <div className="content-container py-10 text-gray-700">
      <h1 className="text-3xl md:text-4xl cormorant text-center mb-8">
        Delivery Information
      </h1>

      <p className="f-13 lato text-center mb-4">
        We ship our fabulous shoes and accessories to 50 countries worldwide and
        have a range of delivery options to choose from. This page details
        delivery information for UK, European and International delivery
        addresses.
      </p>
      <p className="f-13 lato text-center mb-4">
        <strong>Brexit Update:</strong> Please note all European and
        International orders may take longer than usual and additional duty
        costs may apply.
      </p>
      <p className="f-13 lato text-center mb-10">
        During the checkout process you will be given a range of delivery
        options. The following information will ensure you choose the delivery
        option that is right for you.
      </p>

      {/* Delivery Table - Desktop */}
      <div className="hidden lg:block overflow-x-auto mb-10">
        <table className="min-w-full text-sm border border-black text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="f-13 lato p-3 border border-black">
                UK Delivery Services
              </th>
              <th className="f-13 lato p-3 border border-black">Details</th>
              <th className="f-13 lato p-3 border border-black">Cost</th>
              <th className="f-13 lato p-3 border border-black">
                Areas Available
              </th>
            </tr>
          </thead>
          <tbody>
            {deliveryItems.map((item, index) => (
              <tr key={index}>
                <td className="f-13 lato p-3 border border-black">
                  {item.service}
                </td>
                <td className="f-13 lato p-3 border border-black">
                  {item.details}
                </td>
                <td className="f-13 lato p-3 border border-black">
                  {item.cost}
                </td>
                <td className="f-13 lato p-3 border border-black">
                  {item.area}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delivery Table - Mobile / Tab */}
      <div className="block lg:hidden space-y-4 mb-10">
        {deliveryItems.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-md shadow-sm ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <div className="mb-2">
              <span className="block font-semibold">UK Delivery Services:</span>
              <span className="f-13 lato">{item.service}</span>
            </div>
            <div className="mb-2">
              <span className="block font-semibold">Details:</span>
              <span className="f-13 lato">{item.details}</span>
            </div>
            <div className="mb-2">
              <span className="block font-semibold">Cost:</span>
              <span className="f-13 lato">{item.cost}</span>
            </div>
            <div>
              <span className="block font-semibold">Areas Available:</span>
              <span className="f-13 lato">{item.area}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Notes */}
      <div className="f-13 lato text-sm space-y-4 mb-10">
        <p>
          Please note it is the responsibility of the customer to check the
          delivery address is correct at time of ordering. If an incorrect
          address is entered then Moda In Pelle and our Delivery supplier cannot
          be held responsible if the delivery is completed.
        </p>

        <h2 className="f-14 lato text-base text-grey-400 font-semibold">
          End of Season Sale Delivery
        </h2>

        <p className="f-13 lato">
          Please note that during Promotion and Sale periods it is likely that
          there will be delays in delivery, due to the increased volume of
          orders that we and our couriers are handling. We will do our best to
          ensure that delivery expectations are met. If you do have any queries,
          please contact customer services team at:{" "}
          <strong>customerservices@modainpelle.com</strong> or{" "}
          <strong>0113 2007 310</strong>
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
    </div>
  )
}

export default DeliveryPage
