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
          <p className="mb-2 pl-[4px]">
            These are the steps you need to take to conclude a contract with us:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Make sure you have read and understand our terms</li>
          </ul>
          <p className="my-2 pl-[4px]">
            It is your responsibility to read the legal terms on our website
            carefully and to raise any problems with us before you place your
            order. This includes these terms and conditions, our terms and use
            and our privacy policy.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Browse our information</li>
          </ul>
          <p className="my-2 pl-[4px]">
            This website contains information about our goods which you will
            need to know before you place your order including descriptions of
            our goods, current prices (including VAT) and delivery costs. The
            information about the goods on our website constitutes an
            "invitation to treat" and is not a contractual offer from us which
            you may accept. This means that we reserve the right to correct any
            errors in that information without liability to you. It also means
            that in no circumstances will we be contractually bound to supply
            you with goods on the basis of any incorrect information, even if
            that information is repeated in your order.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Select the goods you wish to purchase</li>
          </ul>
          <p className="my-2 pl-[4px]">
            You can select any items you wish to purchase by clicking on the
            "add to bag" button. You will be taken to your shopping bag whenever
            you add a new item, but you can also view the contents of your
            shopping bag by clicking on the "view bag" button. The shopping bag
            screen lists your current selection of items with description, price
            and current subtotal. You can edit the contents of your bag and
            remove any input errors by removing items or changing quantities.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Making a Purchase</li>
          </ul>
          <p className="my-2 pl-[4px]">
            To purchase the items in your bag and proceed with your order using
            our secure online purchasing facility, click on the "proceed to
            checkout" button on the shopping basket screen. You will then be
            transferred to our secure server to complete your order. You will be
            asked to provide certain information we need to enable us to process
            your order such as your preferred delivery address and payment
            details. It is your responsibility to provide us with sufficient
            information to process you order. We may acknowledge receipt of your
            order on our website or by email. This is not our acceptance of your
            order, but confirmation that it has been received.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wait for acceptance of you order</li>
          </ul>
          <p className="my-2 pl-[4px]">
            You may not assume we have accepted your order until we send you an
            acceptance by email. Only if and when you receive our acceptance
            will we have a binding contract between us.
          </p>
          <p className="my-2 pl-[4px]">
            You may receive acknowledgement from our payment processor advising
            you whether or not your credit or debit card payment has been
            authorised. This acknowledgement relates to your payment only and is
            not our acceptance of your order.
          </p>
          <p className="my-2 pl-[4px]">
            We will be entitled to refuse to accept your order if in our sole
            discretion we consider it necessary. In particular we must receive
            payment of the whole of the price for the goods that you order
            before your order can be accepted. If we refuse your order we will
            let you know as soon as we can. If we accept your order we will
            inform you without undue delay.
          </p>
          <p className="my-2 pl-[4px]">
            By making a purchase on site, you're consenting to us creating an
            account on your behalf. We will only use this account to keep you
            updated on the status of your order.
          </p>
          <p className="my-2 pl-[4px]">
            Once we have entered into a contract with you we shall supply you
            with the items specified in your order in accordance with the terms
            of the contract.
          </p>
          <p className="my-2 pl-[4px]">
            We reserve the right to cancel any order where a pricing error has
            occurred, whether or not the order has been confirmed or payment has
            been processed. In such cases, we will notify you and issue a full
            refund.
          </p>
        </>
      ),
    },
    {
      title: "Other information about the contract",
      content: (
        <>
          <p className="mb-2 pl-[4px]">
            We can only conclude the contract with you in English and not in any
            other language.
          </p>
          <p className="mb-2 pl-[4px]">
            The contract between us will consist of (1) these terms and
            conditions together with our terms of use and privacy policy, (2)
            your order and (3) our acceptance. We will not file the concluded
            contract between us online and you should therefore print out and
            retain copies of each element of the contract.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Price</li>
          </ul>
          <p className="my-2 pl-[4px]">
            The prices payable for goods that you order as well as any
            applicable VAT and delivery charges are as set out in our website.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your right to cancel your contract and our returns policy</li>
          </ul>
          <p className="my-2 pl-[4px]">
            If you are a consumer, you may cancel your contract with us for the
            goods you order at any time up to the end of the seventh working day
            from the date you receive the ordered goods. You do not need to give
            us any reason for canceling your contract nor will you have to pay
            any penalty. To cancel your contract you must notify us in writing
            by hand delivered notice, post or email.
          </p>
          <p className="my-2 pl-[4px]">
            If you have received the goods before you cancel your contract then
            you must return the goods in their original condition to us at the
            address above at your own cost and risk. If you cancel your contract
            but we have already processed the goods for delivery you must not
            unpack the goods when they are received by you and you must send the
            goods back to us in their original condition to the address above at
            your own cost and risk as soon as possible.
          </p>
          <p className="my-2 pl-[4px]">
            Once you have notified us that you are canceling your contract, any
            sum debited to us from your credit or debit card will be re-credited
            to your account as soon as possible and in any event within 30 days
            of cancellation provided that the goods in question are returned by
            you and received by us in the condition they were in when delivered
            to you. If you do not return the goods delivered to you or do not
            pay the costs of delivery, we shall be entitled to deduct the direct
            costs of recovering the goods from the amount to be re-credited to
            you.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Our rights to cancel the contract</li>
          </ul>
          <p className="my-2 pl-[4px]">
            We may cancel the contract between us if:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>the goods you have ordered are unavailable for any reason;</li>
            <li>owe do not deliver to your area; or</li>
            <li>
              one or more of the goods you ordered was listed at an incorrect
              price due to a typographical error or an error in the pricing
              information received by us from our suppliers.
            </li>
          </ul>
          <p className="my-2 pl-[4px]">
            If we do cancel your contract we will notify you by e-mail and will
            re-credit to your account any sum deducted by us from your credit or
            debit card as soon as possible but in any event within 30 days of
            your order. We will not be obliged to offer any additional
            compensation for disappointment suffered.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delivery of goods to you</li>
          </ul>
          <p className="my-2 pl-[4px]">
            We will deliver the goods ordered by you to the address you give us
            for delivery at the time you make your order.
          </p>
          <p className="my-2 pl-[4px]">
            Delivery will be made as soon as possible after your order is
            accepted and in any event within 30 days of your order. For the
            avoidance of doubt, time for delivery shall not be of the essence.
          </p>
          <p className="my-2 pl-[4px]">
            You will become the owner of the goods you have ordered when they
            have been delivered to you. Once goods have been delivered to you
            they will be held at your own risk and we will not be liable for
            their loss or destruction.
          </p>
        </>
      ),
    },
    {
      title: "Our liability to you",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your remedy for damaged goods</li>
          </ul>
          <p className="mb-2 pl-[4px]">
            If the goods we deliver are not what you ordered or are damaged or
            defective or the delivery is of an incorrect quantity, you must
            notify us in writing at our contact address of the problem within 10
            working days of the delivery of the goods in question. Otherwise you
            will have no right to any of the remedies set out below.
          </p>
          <p className="mb-2 pl-[4px]">
            If you notify a problem to us, we will, at our option:
          </p>
          <p className="mb-2 pl-[4px]">
            To make good any shortage or non-delivery, replace or repair, at our
            option, any goods that are damaged or defective; or refund to you
            the whole or part of the amount paid by you for the goods in
            question in whatever way we choose.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Limitations on our liability to you</li>
          </ul>
          <p className="my-2 pl-[4px]">
            You are responsible for observing and complying with all applicable
            regulations and legislation which affect your purchase and
            subsequent use of our goods. This includes obtaining all necessary
            customs, import or other permits to purchase goods from our site.
            Certain national laws may prohibit the importation or exportation of
            certain of our goods to you.
          </p>
          <p className="my-2 pl-[4px]">
            We make no representation and accept no liability in respect of the
            export or import of the goods you purchase.
          </p>
          <p className="my-2 pl-[4px]">
            To the extent that law permits us to do so, we exclude all our
            liability to you for any direct, indirect or consequential loss,
            damage or expenses (including loss of profits, business or goodwill)
            howsoever arising out of any problem relating to the goods you buy
            from us, other than the remedies listed in paragraph c above.
          </p>
          <p className="my-2 pl-[4px]">
            If a court does decide we are liable to pay you compensation, that
            compensation will be limited to the amount paid by you for the goods
            in question.
          </p>
          <p className="my-2 pl-[4px]">
            Please note that nothing in this section of these terms and
            conditions (or in any other section) is intended to limit any rights
            you might have as a consumer or other statutory rights that may not
            be excluded by law, nor in any way to exclude or limit our liability
            to you for any death or personal injury resulting from our
            negligence of for fraudulent misrepresentation.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Things you should know</li>
          </ul>
          <p className="my-2 pl-[4px]">a. Events Beyond Our Control</p>
          <p className="my-2 pl-[4px]">
            We shall have no liability to you for any failure to deliver goods
            you have ordered or any delay in doing so or for any damage or
            defect to goods delivered that is caused by any event or
            circumstance beyond our reasonable control including, without
            limitation, strikes, lock-outs and other industrial disputes,
            breakdown of systems or network access, flood, fire, explosion or
            accident.
          </p>
          <p className="my-2 pl-[4px]">b. Invalidity</p>
          <p className="my-2 pl-[4px]">
            If any part of these terms and conditions is unenforceable
            (including any provision in which we exclude our liability to you)
            the enforceability of any other part of these conditions will not be
            affected.
          </p>
          <p className="my-2 pl-[4px]">c. Privacy</p>
          <p className="my-2 pl-[4px]">
            You acknowledge and agree to be bound by the terms of our privacy
            policy.
          </p>
          <p className="my-2 pl-[4px]">d. Third Party Rights</p>
          <p className="my-2 pl-[4px]">
            A person who is not a party to this contract has no right under the
            UK Contracts (Rights of Third Parties) Act 1999 to enforce any term
            of this contract but this does not affect any right or remedy of a
            third party that exists or is available apart from that Act.
          </p>
          <p className="my-2 pl-[4px]">e. Governing Law</p>
          <p className="my-2 pl-[4px]">
            The contract between us shall be governed by and interpreted in
            accordance with English law and the English courts shall have
            jurisdiction to resolve any disputes between us.
          </p>
          <p className="my-2 pl-[4px]">f. Entire Agreement</p>
          <p className="my-2 pl-[4px]">
            These terms and conditions together with our terms of use and
            privacy policy, your order and our acceptance set out the whole of
            our agreement relating to the supply of the goods to you by us.
            Nothing said by any sales person on our behalf should be understood
            as a variation of these terms and conditions or as an authorized
            representation about the nature or quality of any goods offered for
            sale by us. Except for fraud or fraudulent misrepresentation, we
            shall have no liability for any such representation being untrue or
            misleading.
          </p>
        </>
      ),
    },

    {
      title: "Cookie Policy",
      content: (
        <div className="text-left text-sm">
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            Cookie Policy
          </h2>
            <p className="my-2 pl-[4px]">
            Signing up to our emails and interacting with our website is
            agreeing to our cookie policy. For all information{" "}
            <a href="">click here.</a>
          </p>
        </div>
      ),
    },
    {
      title: "Discounts & Promotion Codes",
      content: (
        <div className="text-left text-sm">
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            Discounts & Promotion Codes
          </h2>
          <p className="lato my-2 pl-[4px] f-13 text-gray-500 font-semibold">
            Before using promotion and discount codes please ensure that you
            have read the Terms and Conditions.
          </p>
            <p className="my-2 pl-[4px]">
            Our discount and promotion codes, as advertised on modainpelle.com
            and elsewhere, are applicable to Full Price items only, unless
            otherwise stated on the Terms and Conditions or in the details of
            the discount code or promotion. A discount or promotion code can
            only be redeemed once per customer, unless specifically stated
            otherwise on the Terms and Conditions or in the details of the
            discount code or promotion. Discount and promotion codes cannot be
            used in conjunction with any other offers, unless stated otherwise.
          </p>
          <p className="my-2 pl-[4px]">
            If you have any queries regarding the Terms & Conditions,{" "}
            <a href="">please contact our customer services team</a> who will be
            happy to help.
          </p>
          <p className="my-2 pl-[4px]">
            We reserve the right to change our product prices at any time
            without further notice, including discounted or sale pricing and
            offers.
          </p>
        </div>
      ),
    },
    {
      title: "Affiliate Discounts and Promotions",
      content: (
        <div className="text-left text-sm">
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            Affiliate Discounts and Promotions
          </h2>
          <p className="my-2 pl-[4px]">
            We sometimes offer discounts and promotions through third parties
            and affiliate programs. Specific terms and conditions for each code
            will be noted on the relevant website.
          </p>
          <p className="my-2 pl-[4px]">
            Unless noted otherwise, these offers cannot be used in conjunction
            with any other offers, sales, or discount codes and cannot be
            redeemed after purchase has been made.
          </p>
        </div>
      ),
    },
    {
      title: "Delivery Information",
      content: (
        <div className="text-left text-sm">
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            Delivery Information
          </h2>
          <p className="my-2 pl-[4px]">
            Please note that we cannot be held liable if customers do not make
            us aware address details are incorrectly entered following receipt
            of the confirmation email.
          </p>
          <p className="my-2 pl-[4px]">
            If the address is incorrect, please contact our Customer Services
            team on: 0113 2007 310
          </p>
        </div>
      ),
    },
    {
      title: "Social Media Competitions",
      content: (
        <div className="text-left text-sm">
          <h2 className="md:text-4xl text-[28px] cormorant text-left mb-8">
            Delivery Information
          </h2>
            <p className="my-2 pl-[4px]">Win £200 to spend at Moda in Pelle</p>
            <p className="my-2 pl-[4px]">
              The promoter of Moda in Pelle’s Win £200 to spend at Moda in Pelle
              ("Prize Draw") is www.modeinpelle.com UK Limited of Enfield
              Terrace, Leeds, LS7 1RG ("Promoter").
            </p>
            <p className="my-2 pl-[4px]">1. Eligibility</p>
            <p className="my-2 pl-[4px]">
              1.1. This Prize Draw is open to individuals UK only aged over 16
              years or over, except for employees of the Promoter, their
              immediate family, sponsors of the Prize Draw and their employees
              who are directly associated with the administration of the Prize
              Draw.
            </p>
            <p className="my-2 pl-[4px]">
              1.2. Individuals who are under the age of 18 must have the consent
              of a parent or guardian over 18 to enter the competition. The
              Promoter reserves the right to obtain proof of such consent and to
              refuse entry or to choose another winner if such proof, where
              requested, has not been given.
            </p>
            <p className="my-2 pl-[4px]">
              1.3. All Entries by the entrant must be submitted via Twitter and
              the entrant must have an account with Moda in Pelle.
            </p>
            <p className="my-2 pl-[4px]">2. The Competition</p>
            <p className="my-2 pl-[4px]">
              The title of the competition is Win £200 to spend at Moda in Pelle
            </p>
            <p className="my-2 pl-[4px]">3. How to enter</p>
            <p className="my-2 pl-[4px]">3.1. To enter the Prize Draw entrants must:</p>
            <p className="my-2 pl-[4px]">
              3.1.1. Follow @modainpelle account on Facebook, Instagram or
              Twitter
            </p>
            <p className="my-2 pl-[4px]">
              3.1.2. ‘Like’ the competition post, comment by tagging 2 friends
              and any other entry requirements specified on the competition
              post.
            </p>
            <p className="my-2 pl-[4px]">2.2. Entry dates are dates specified in the post.</p>
            <p className="my-2 pl-[4px]">
              2.3. Entries received after the end of the Prize Draw Period will
              not be valid.
            </p>
            <p className="my-2 pl-[4px]">2.4. No bulk, third party or automated entries are permitted.</p>
            <p className="my-2 pl-[4px]">
              2.5. All entrants (including the winner) must comply with any
              reasonable directions given to him or her by the Promoter in
              connection with the Prize Draw. Failure to comply with such
              directions may result in an invalid Entry and/or withdrawal of the
              Prize.
            </p>
            <p className="my-2 pl-[4px]">3. Winner selection and contact</p>
            <p className="my-2 pl-[4px]">
              3.1. The winners of the Prize Draw will be selected and announced
              within a week after the end date
            </p>
            <p className="my-2 pl-[4px]">
              3.2. The winner will be selected by random selection via
              electronic means. The decision of the Promoter shall be final. No
              correspondence will be entered into in respect of any decision
              made in connection with this Prize Draw.
            </p>
            <p className="my-2 pl-[4px]">
              3.3. The Promoter will contact the winner personally as soon as
              practicable after the Announcement Date, using the email address
              provided with the competition Entry (if provided) OR by tagging
              the winner in the competition post from the Promoter’s account
              (“Winner”). The Promoter will ask the Winner to provide further
              details in relation to the Prize (the “Details”).The Winner must
              provide the Details in order to claim the Prize.
            </p>
            <p className="my-2 pl-[4px]">
              3.4. If any Winner fails to provide their Details to the Promoter
              within 48 hours of the Promoter contacting the winner and asking
              them to provide the Details in accordance with clause 3.3 then the
              Promoter acting in its absolute discretion may:
            </p>
            <p className="my-2 pl-[4px]">3.4.1. make further attempts to contact that Winner; and/or</p>
            <p className="my-2 pl-[4px]">3.4.2. withdraw the Prize from that Winner.</p>
            <p className="my-2 pl-[4px]">
              3.5. If the Prize is declined by a Winner or is withdrawn from a
              Winner by the Promoter, the declining or forfeiting Winner will
              continue to be subject to the provisions of these Terms and
              Conditions; and the Promoter may offer the Prize to a new Winner
              by random selection in accordance with this clause 3.3.
            </p>
            <p className="my-2 pl-[4px]">4. Prize</p>
            <p className="my-2 pl-[4px]">
              4.1. The prize is £200 to spend at Moda in Pelle, which will be
              credited to the winners account and can be redeemed on{" "}
              <a href="https://www.modainpelle.com/">www.modainpelle.com</a>
            </p>
            <p className="my-2 pl-[4px]">4.2. The Prize is subject to availability.</p>
            <p className="my-2 pl-[4px]">
              4.3. The Prize is non-transferable and non-refundable and the
              Winners cannot request any alternative prize (cash or otherwise).
            </p>
            <p className="my-2 pl-[4px]">
              4.4. There will be 1 winner announced on Twitter Instagram and
              Facebook
            </p>
            <p className="my-2 pl-[4px]">5. Winner publicity</p>
            <p className="my-2 pl-[4px]">
              5.1. The Promoter reserves the right to publish each Winner's name
              and Entry on the Promoter’s official social media accounts,
              including Twitter, Instagram and Facebook and on its website found
              at www.modeinpelle.com.
            </p>
            <p className="my-2 pl-[4px]">
              5.2. By entering the Prize Draw, if you are a Winner you agree to
              your Entry being published in accordance with clause 5.1 and to
              take part in and co-operate fully with all reasonable publicity
              accompanying or resulting from this Prize Draw without further
              recompense.
            </p>
            <p className="my-2 pl-[4px]">6. Entry requirements</p>
            <p className="my-2 pl-[4px]">
              6.1. Any Entry that is deemed by the Promoter, in its sole
              discretion, to be unlawful, obscene, vulgar, pornographic,
              hateful, threatening, discriminatory, offensive or which may
              otherwise bring the Prize Draw or Promoter into disrepute will be
              excluded from the Prize Draw and the Promoter reserves the right
              to take any further action in respect of such Entry that it deems
              appropriate.
            </p>
            <p className="my-2 pl-[4px]">
              6.2. The Promoter will fully co-operate with any law enforcement
              authorities or court order requesting or directing the Promoter to
              disclose the identity of or to locate anyone posting or linking
              any content to its Twitter or Instagram pages which infringes any
              third party rights or is in breach of any of these Terms and
              Conditions or any applicable law.
            </p>
            <p className="my-2 pl-[4px]">7. Use and display of Entries and copyright</p>
            <p className="my-2 pl-[4px]">
              7.1. The copyright subsisting in the Entry must belong to the
              entrant. Entrants will retain copyright in the Entries they
              submit. Entrants must not have infringed the rights of any other
              party or breached any laws when submitting their Entries. If an
              Entry contains reference to or images of a person, the consent of
              that person (or their parent or guardian if they are under 18)
              must have been obtained.
            </p>
            <p className="my-2 pl-[4px]">7.2. By submitting an Entry:</p>
            <p className="my-2 pl-[4px]">
              7.2.1. you licence and grant the Promoter, its affiliates and
              sub-licensees an exclusive, royalty free, perpetual, worldwide,
              irrevocable and sub-licensable right to use, reproduce, modify,
              adapt, publish and display such content for any purpose in any
              media including, but not limited to the Promoter’s website, social
              media accounts, marketing materials, newsletters and promotional
              material without further compensation, restriction on use,
              attribution or liability;
            </p>
            <p className="my-2 pl-[4px]">
              7.2.2. you waive any moral rights or similar rights in respect of
              your entry to which you may be entitled (at the time of submission
              or in the future) under the Copyright, Designs and Patents Act
              1988 as amended time to time or under any similar applicable laws
              in force from time to time in force anywhere in the world;
            </p>
            <p className="my-2 pl-[4px]">
              7.2.3. you acknowledge that third parties will have access to and
              will be able to republish your Entry in accordance with the terms
              of use of the social media platform through which your Entry is
              submitted.
            </p>
            <p className="my-2 pl-[4px]">8. Liability</p>
            <p className="my-2 pl-[4px]">
              8.1. Except for death or personal injury caused by negligence of
              the Promoter or its agents or representatives or for fraud or
              fraudulent misrepresentation, neither the Promoter, nor its agents
              or representatives assume responsibility for:
            </p>
            <p className="my-2 pl-[4px]">8.1.1. any Prize that is not redeemed;</p>
            <p className="my-2 pl-[4px]">8.1.2. any personal property;</p>
            <p className="my-2 pl-[4px]">8.1.3. any loss of enjoyment or wasted expenditure;</p>
            <p className="my-2 pl-[4px]">
              8.1.4. any system failures or malfunctions of any third party
              websites;
            </p>
            <p className="my-2 pl-[4px]">8.1.5. any incomplete, lost, delayed or late Entries;</p>
            <p className="my-2 pl-[4px]">
              8.1.6. any failure to fulfil obligations of any third parties
              involved in this Prize Draw;
            </p>
            <p className="my-2 pl-[4px]">
              8.1.7. any fault, malfunction, damage, loss or disappointment
              suffered by the participants in the Prize Draw howsoever arising
              from participating in the Prize Draw;
            </p>
            <p className="my-2 pl-[4px]">
              8.1.8. communications line failure, regardless of cause, with
              regard to any equipment, systems, networks, lines, satellites,
              servers, computers or providers utilised in any aspect of this
              Prize Draw;
            </p>
            <p className="my-2 pl-[4px]">
              8.1.9. inaccessibility or unavailability of the internet, or any
              website (including without limitation any social media web sites)
              or any combination thereof through dial up, broadband, mobile
              internet or WAP connections;
            </p>
            <p className="my-2 pl-[4px]">
              8.1.10. any injury or damage to a participant which may be related
              to or arising from the Prize Draw or the Prize;
            </p>
            <p className="my-2 pl-[4px]">
              8.1.11. if for any reason the Prize Draw or any website in
              connection with the Prize Draw is not capable of running as
              planned for reasons which may include without limitation,
              infection by computer, virus, tampering, unauthorised
              intervention, fraud, technical failures or any other causes which
              may corrupt or affect the administration security, fairness,
              integrity or proper conduct of this promotion; and/or
            </p>
            <p className="my-2 pl-[4px]">8.1.12. any other matter outside of their reasonable control.</p>
            <p className="my-2 pl-[4px]">
              8.2. Nothing in these Terms and Conditions affects your statutory
              rights.
            </p>
            <p className="my-2 pl-[4px]">
              8.3. To the extent permitted by law, all conditions, warranties
              and other terms which might otherwise be implied by statute or
              common law are expressly excluded from these Terms and Conditions.
            </p>
            <p className="my-2 pl-[4px]">
              8.4. The Winners agree to indemnify and keep indemnified the
              Promoter, its group of companies and their officers, employees and
              agents from and against all liabilities, losses, damages and
              expenses (including legal and other professional fees) arising out
              of or in connection with any allegations or claims resulting
              directly or indirectly from:
            </p>
            <p className="my-2 pl-[4px]">8.4.1. their Entry into this Prize Draw; and/or</p>
            <p className="my-2 pl-[4px]">8.4.2. their receipt and use of any Prize.</p>
            <p className="my-2 pl-[4px]">9. General</p>
            <p className="my-2 pl-[4px]">
              9.1. The Promoter reserves the right to cancel or amend the Prize
              Draw or these Terms and Conditions if it has reasonable grounds
              for doing so. Any changes to the Prize Draw or these Terms and
              Conditions will be announced by the Promoter through its Instagram
              accounts.
            </p>
            <p className="my-2 pl-[4px]">
              9.2. By entering the Prize Draw you accept these Terms and
              Conditions as in force at the time you submit your Entry.
            </p>
            <p className="my-2 pl-[4px]">
              9.3. Any person who provides their Details to the Promoter in
              connection with this Prize Draw accepts:
            </p>
            <p className="my-2 pl-[4px]">9.3.1. these Terms and Conditions; and</p>
            <p className="my-2 pl-[4px]">9.3.2. the use of their personal data by the Promoter:</p>
            <p className="my-2 pl-[4px]">
              9.3.2.1. for the purpose of administration of the Prize Draw
              (including publishing the names of the Winners and any
              administration relating to the Prize); and
            </p>
            <p className="my-2 pl-[4px]">9.3.2.2. any other purpose for which they have consented.</p>
            <p className="my-2 pl-[4px]">
              9.4. The use of any personal data by the Promoter shall be in
              accordance with the Promoter's Privacy Policy which can be found
              on the Promoter’s website at
              https://www.modainpelle.com/privacy-policy-i97
            </p>
            <p className="my-2 pl-[4px]">
              9.5. Without prejudice to clause 6.1, the Promoter reserves the
              right to exclude any Entry from the Prize Draw if it deems it to
              be ineligible or otherwise invalid and the Promoter shall have
              complete discretion in this respect.
            </p>
            <p className="my-2 pl-[4px]">
              9.6. No responsibility can be accepted for lost Entries or
              incomplete Entries. Proof of Entry is not proof of receipt.
            </p>
            <p className="my-2 pl-[4px]">
              9.7. If any provision of these Terms and Conditions (or part of
              any provision) is found by any court or other competent authority
              to be invalid, unenforceable or illegal, the other provisions
              shall remain in force.
            </p>
            <p className="my-2 pl-[4px]">
              9.8. If any invalid, unenforceable or illegal provision would be
              valid, enforceable and legal if some part of it were deleted, the
              provision shall apply with whatever modification is necessary to
              give effect to the commercial intention of the Promoter.
            </p>
            <p className="my-2 pl-[4px]">
              9.9. No failure or delay by a party to exercise any right or
              remedy provided under these Terms and Conditions or by law or any
              abandonment of any such right or remedy shall constitute a waiver
              of that or any other right or remedy, nor shall it preclude or
              restrict the further exercise of that or any other right or
              remedy.
            </p>
            <p className="my-2 pl-[4px]">
              9.10. No single or partial exercise of such right or remedy shall
              preclude or restrict the further exercise of that or any other
              right or remedy.
            </p>
            <p className="my-2 pl-[4px]">
              For the names of the Winners or for a copy of these Terms and
              Conditions please send a stamped addressed envelope together with
              your written request Win £100 to spend at Moda in Pelle, Moda in
              Pelle Marketing, Enfield Terrace, Leeds, LS7 1RG.
            </p>
            <p className="my-2 pl-[4px]">
              9.11. The Prize Draw, these Terms and Conditions and any dispute
              or claim arising out of or in connection with them or their
              subject matter or formation (including non-contractual disputes or
              claims) shall be governed by and construed in accordance with the
              law of England and Wales. The courts of England and Wales shall
              have exclusive jurisdiction to settle any dispute or claim which
              may arise out of or in connection with the Prize Draw or these
              terms
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

      <p className="f-13 lato text-gray-500 text-left mb-4">
        Your use of this website to purchase goods is governed by these terms
        and conditions as well as our{" "}
        <a className="text-black" href="">
          privacy policy
        </a>{" "}
        and website terms of use. Please read these documents carefully before
        using our site or placing an order. By placing an order you agree to the
        terms and conditions set out below.
      </p>
      <p className="f-13 lato text-gray-500 text-left mb-4">
        Information on any guarantees, warranties or after-sales services that
        we provide for the goods you buy is available in our{" "}
        <a className="text-black" href="">
          FAQ's
        </a>
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
                openIndex === index ? "max-h-[3000px] pt-3" : "max-h-0"
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
