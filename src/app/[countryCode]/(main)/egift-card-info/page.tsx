"use client"
import { useState } from "react"

const EcardinfoPage = () => {

  return (
    <div className="content-container py-10 text-gray-700">
      <h1 className="cormorant text-[28px] text-left my-8">
        I've received an eGift card, how do I use it?
      </h1>

      <p className="f-13 lato text-left mb-4">
        You will need to log in to your account using the email address the
        eGift card has been purchased for. Or, alternatively if you don't yet
        have an account with us, you'll need to register using the email address
        the eGift card was purchased for.
      </p>
      <p className="f-13 lato text-left mb-4">
        The funds from the eGift card will automatically appear in the e-wallet
        on your account. Simply add the items you wish to purchase to your
        basket, log in to your account at the checkout and select 'e-wallet'
        when asked how you want to pay.
      </p>
      <p className="f-13 lato text-left mb-4">
        If the items purchased total less than the gift voucher amount the
        remaining funds will stay in the e-wallet to use on the next purchase,
        if the items purchased exceed the gift voucher amount the remaining
        value must be paid by card in order to complete the order.
      </p>
      <p className="f-13 lato text-left mb-4">
        For more information about gift cards and eCredit,{" "}
        <a href="">see here.</a>
      </p>

      <h1 className="cormorant text-[28px] text-left my-8">
        How can I find out how much is on my eGift card?
      </h1>

      <p className="f-13 lato text-left mb-4">
        You can find out how much is on your eGift card by logging into your
        account and going to your e-wallet, this will tell you your balance.
      </p>

      <h1 className="cormorant text-[28px] text-left my-8">
        How long is my eGift card valid for?
      </h1>

      <p className="f-13 lato text-left mb-4">
        eGift cards are valid for 12 months from the date of issue.
      </p>

      <h1 className="cormorant text-[28px] text-left my-8">
        What happens when I return items paid for using an eGift card?
      </h1>

      <p className="f-13 lato text-left mb-4">
        Items bought using an eGift card will be refunded back to your e-wallet,
        the amount will be credited to your e-wallet balance. Only additional
        monies over and above the gift voucher amount will be refunded to the
        original payment method.
      </p>

      <h1 className="cormorant text-[28px] text-left my-8">
        How do I buy someone an eGift card?
      </h1>

      <p className="f-13 lato text-left mb-4">
        You can purchase an eGift card by <a href="">clicking here</a>, which will be emailed
        to the recipient specified at the time of purchase. Alternatively, visit
        one of our stores to purchase a gift card.
      </p>
    </div>
  )
}

export default EcardinfoPage
