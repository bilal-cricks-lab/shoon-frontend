"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

const SizePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      title: "Why do some shoes fit differently in the same size?",
      content: (
        <>
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            Why do some shoes fit differently in the same size?
          </h2>
          <p>
            Our shoes are fit tested with our technologist and fit models to fit
            as many people as possible however everybody will have slightly
            different feet. The upper pattern of a shoe can have an impact on
            the fit as well as the material used. A patent or polished leather
            will feel tighter than a soft leather or suede however, leather will
            give and mould to the shape of your foot. We have suggested specific
            fit information on the product details to help you select the best
            size.
          </p>
        </>
      ),
    },
    {
      title:
        "I have a high instep / slim feet - what kind of shoes should I look for?",
      content: (
        <>
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            I have a high instep / slim feet - what kind of shoes should I look
            for?
          </h2>
          <p>
            For a high instep we would suggest pull on styles with a lower cut,
            styles with elastic adjustment / flex or adjustable styles such as
            lace ups which can be personalised over the instep.
          </p>
          <p>
            For slimmer fits we would suggest higher cut flat shoes to give
            extra security, in addition we can also recommend a half insole to
            help keep the foot in the intended position.{" "}
          </p>
        </>
      ),
    },
    {
      title: "Are there any comfortable high heels?",
      content: (
        <>
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            Are there any comfortable high heels?
          </h2>
          <p>
            All of our heeled product is designed with padding underneath the
            ball of the foot and under the arch to provide support and comfort
            when wearing all day. For extra levels of comfort try a wedge or a
            platform style as with these the pitch of the heel is reduced,
            making the foot feel more comfortable and secure.
          </p>
        </>
      ),
    },
    {
      title: "Do you have any slim / wide leg boots?",
      content: (
        <>
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            Do you have any slim / wide leg boots?
          </h2>
          <p>
            Like our foot widths our boots are designed to fit as many legs as
            possible. This means that where we have a more formal, close fitting
            boot we try to incorporate stretch materials to aid leg fitting. We
            have specified some leg fittings on the product details and given
            boot dimensions, these are the measurement of the boot itself, not
            the leg it is intended to fit.
          </p>
          <p>
            As a general rule, we would recommend riding boot styles with back
            stretch for a wider calf and adjustable / lace up designs that can
            be tightened for a slimmer calf.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="content-wrapper py-10 text-gray-700">
      <h1 className="text-3xl md:text-4xl cormorant text-center mb-8">
        Sizing & Fit
      </h1>

      <p className="f-13 lato text-left mb-4">
        This size guide is here to assist you in finding the right shoe size,
        but if you have any questions about fit or sizing on a specific product,
        please contact our wonderful Customer Services team - they have tried on
        90% of our styles for fit advice, and they'll be happy to help.
      </p>
      <p className="f-13 lato text-left mb-4">
        Our footwear is in EU sizing, but we always try to give a conversion to
        UK sizing online.
      </p>

      <h2 className="lato text-gray-500 font-bold text-2xl mb-4">
        WOMEN'S SHOES SIZES
      </h2>

      <table className="table-auto border-collapse text-center text-sm hidden md:table">
        <thead>
          <tr>
            <th className="t1 px-4 py-2 lato f-13 text-black border-0 border-r-[5px] border-r-white align-middle">
              UK SIZE
            </th>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              2
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              3
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              4
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              5
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              6
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              7
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              8
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              9
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="t1 px-4 py-2 lato f-13 text-black border-0 border-r-[5px] border-r-white align-middle">
              EUR SIZE
            </th>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              35
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              36
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              37
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              38
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              39
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              40
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              41
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              42
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table-auto border-collapse text-sm mb-6 w-[80%] md:hidden">
        <thead>
          <tr>
            <th className="t1 px-4 py-2 text-left border-0 border-r-[5px] border-r-white text-black">
              UK SIZE
            </th>
            <th className="t1 px-4 py-2 text-left border-0 border-r-[5px] border-r-white text-black">
              EUR SIZE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="t2 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              2
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              35
            </td>
          </tr>
          <tr className="t1 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              3
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              36
            </td>
          </tr>
          <tr className="t2">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              4
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              37
            </td>
          </tr>
          <tr className="t1 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              5
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              38
            </td>
          </tr>
          <tr className="t2 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              6
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              39
            </td>
          </tr>
          <tr className="t1 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              7
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              40
            </td>
          </tr>
          <tr className="t2 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              8
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              41
            </td>
          </tr>
          <tr className="t1 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              9
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              42
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="lato text-gray-500 font-bold text-2xl mt-4 mb-4">
        MEN'S SHOES SIZES
      </h2>

      <table className="table-auto border-collapse text-center text-sm mb-6 hidden md:table">
        <thead>
          <tr>
            <th className="t1 px-4 py-2 lato f-13 text-black border-0 border-r-[5px] border-r-white align-middle">
              UK SIZE
            </th>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              7
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              8
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              9
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              10
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              11
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              12
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              13
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              14
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="t1 px-4 py-2 lato f-13 text-black border-0 border-r-[5px] border-r-white align-middle">
              EUR SIZE
            </th>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              41
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              42
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              43
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              44
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              45
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              46
            </td>
            <td className="t2 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              47
            </td>
            <td className="t1 px-4 lato f-13 text-black border-0 border-r-[5px] border-r-white py-2">
              48
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto border-collapse text-sm mb-6 w-[80%] md:hidden">
        <thead>
          <tr>
            <th className="t1 px-4 py-2 text-left border-0 border-r-[5px] border-r-white text-black">
              UK SIZE
            </th>
            <th className="t1 px-4 py-2 text-left border-0 border-r-[5px] border-r-white text-black">
              EUR SIZE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="t2 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              7
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              41
            </td>
          </tr>
          <tr className="t1 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              8
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              42
            </td>
          </tr>
          <tr className="t2">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              9
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              43
            </td>
          </tr>
          <tr className="t1 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              10
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              44
            </td>
          </tr>
          <tr className="t2 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              11
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              45
            </td>
          </tr>
          <tr className="t1 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              12
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              46
            </td>
          </tr>
          <tr className="t2 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              13
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              47
            </td>
          </tr>
          <tr className="t1 border-0 border-r-[5px] border-r-white">
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              14
            </td>
            <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
              48
            </td>
          </tr>
        </tbody>
      </table>

      <p className="f-13 lato text-left mb-4">
        Unfortunately we don't make our shoes in half sizes - but if a specific
        product has any sizing suggestions or fitting notes, it will be shown in
        the product description or the 'More Details' tab.
      </p>

      <section className="flex flex-col gap-6 md:flex-row w-full mt-8 mb-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl cormorant text-left mb-6">
            What size should I pick?
          </h2>
          <p className="f-13 lato my-2">
            Using your foot length we can help to select the most appropriate
            size for you. Most Moda in Pelle styles are a standard width
            fitting, but we do offer a limited number of{" "}
            <a href="">Wide Fitting styles</a>, and this is always mentioned in
            the products.
          </p>
          <p className="f-13 lato my-2">
            Below are the basic foot length measurements for each size, should
            you be in between 2 measurements, the larger will provide the most
            comfortable fit. Measurements are given in mm.
          </p>
          <p className="f-13 lato my-2">
            Most people’s feet are slightly different sizes so if you do have
            one foot longer than the other, go with the larger measurement.
          </p>
          <p className="f-13 lato my-2">
            We strive to keep a consistent fit between products, however
            products may feel slightly different depending on the styling. If a
            specific product has any sizing suggestions or fitting notes, it
            will be shown in the product description or the 'More Details' tab.
          </p>
          <p className="f-13 lato my-2">
            If you are unsure, contact our amazing customer service team at
            customerservice@modainpelle.com or on 0113 2007 310.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl cormorant text-left mb-6">
            How to measure your foot length
          </h2>
          <ul className="f-13 lato mb-6">
            <li>• Place your foot flat on a piece of plain paper</li>
            <li>• Make sure you are stood straight and evenly balanced</li>
            <li>
              • Draw around your foot being careful not to tuck the pen
              underneath the toe or heel
            </li>
            <li>
              • Measure the distance between the heel and the longest toe.
            </li>
            <li>• This will give you a foot length, repeat for both feet</li>
          </ul>
          <table className="table-auto border-collapse text-sm mb-6 w-full">
            <thead>
              <tr>
                <th className="t1 px-4 py-2 text-left border-0 border-r-[5px] border-r-white text-black">
                  UK SIZE
                </th>
                <th className="t1 px-4 py-2 text-left border-0 border-r-[5px] border-r-white text-black">
                  EUR SIZE
                </th>
                <th className="t1 px-4 py-2 text-left border-0 border-r-[5px] border-r-white text-black">
                  FOOT LENGTH (MM)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="t2">
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  4
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  37
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  220
                </td>
              </tr>
              <tr className="t1 border-0 border-r-[5px] border-r-white">
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  5
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  38
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  229
                </td>
              </tr>
              <tr className="t2 border-0 border-r-[5px] border-r-white">
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  6
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  39
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  237
                </td>
              </tr>
              <tr className="t1 border-0 border-r-[5px] border-r-white">
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  7
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  40
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  246
                </td>
              </tr>
              <tr className="t2 border-0 border-r-[5px] border-r-white">
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  8
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  41
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  254
                </td>
              </tr>
              <tr className="t1 border-0 border-r-[5px] border-r-white">
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  9
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  42
                </td>
                <td className="px-4 py-2 border-0 border-r-[5px] border-r-white text-black">
                  262
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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

export default SizePage
