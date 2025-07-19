import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Checkbox from "@modules/common/components/checkbox"
import Input from "@modules/common/components/input"
import { mapKeys } from "lodash"
import React, { useEffect, useMemo, useState } from "react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"

const ShippingAddress = ({
  customer,
  cart,
  checked,
  onChange,
}: {
  customer: HttpTypes.StoreCustomer | null
  cart: HttpTypes.StoreCart | null
  checked: boolean
  onChange: () => void
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({
    "shipping_address.first_name": cart?.shipping_address?.first_name || "",
    "shipping_address.last_name": cart?.shipping_address?.last_name || "",
    "shipping_address.address_1": cart?.shipping_address?.address_1 || "",
    "shipping_address.company": cart?.shipping_address?.company || "",
    "shipping_address.postal_code": cart?.shipping_address?.postal_code || "",
    "shipping_address.city": cart?.shipping_address?.city || "",
    "shipping_address.country_code": cart?.shipping_address?.country_code || "",
    "shipping_address.province": cart?.shipping_address?.province || "",
    "shipping_address.phone": cart?.shipping_address?.phone || "",
    email: cart?.email || "",
  })

  const countriesInRegion = useMemo(
    () => cart?.region?.countries?.map((c) => c.iso_2),
    [cart?.region]
  )

  const addressesInRegion = useMemo(
    () =>
      customer?.addresses.filter(
        (a) => a.country_code && countriesInRegion?.includes(a.country_code)
      ),
    [customer?.addresses, countriesInRegion]
  )

  const setFormAddress = (
    address?: HttpTypes.StoreCartAddress,
    email?: string
  ) => {
    address &&
      setFormData((prevState: Record<string, any>) => ({
        ...prevState,
        "shipping_address.first_name": address?.first_name || "",
        "shipping_address.last_name": address?.last_name || "",
        "shipping_address.address_1": address?.address_1 || "",
        "shipping_address.company": address?.company || "",
        "shipping_address.postal_code": address?.postal_code || "",
        "shipping_address.city": address?.city || "",
        "shipping_address.country_code": address?.country_code || "",
        "shipping_address.province": address?.province || "",
      }))

    email &&
      setFormData((prevState: Record<string, any>) => ({
        ...prevState,
        email: email,
      }))
  }

  useEffect(() => {
    if (cart && cart.shipping_address) {
      setFormAddress(cart?.shipping_address, cart?.email)
    }

    if (cart && !cart.email && customer?.email) {
      setFormAddress(undefined, customer.email)
    }
  }, [cart])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {customer && (addressesInRegion?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 p-5 border border-gray-300">
          <p className="text-sm">
            {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
          </p>
          <AddressSelect
            addresses={customer.addresses}
            addressInput={
              mapKeys(formData, (_, key) =>
                key.replace("shipping_address.", "")
              ) as HttpTypes.StoreCartAddress
            }
            onSelect={setFormAddress}
          />
        </div>
      )}

      {/* Input fields */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "First name", name: "shipping_address.first_name", required: true },
          { label: "Last name", name: "shipping_address.last_name", required: true },
          { label: "Address", name: "shipping_address.address_1", required: true },
          { label: "Company", name: "shipping_address.company", required: false },
          { label: "Postal code", name: "shipping_address.postal_code", required: true },
          { label: "City", name: "shipping_address.city", required: true },
          { label: "State / Province", name: "shipping_address.province", required: false },
        ].map((field) => (
          <div className="flex items-start gap-6 w-full" key={field.name}>
            <label className="w-40 pt-2 text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="text"
              name={field.name}
              placeholder={field.label}
              className="w-full md:w-[350px] px-3 py-2 text-xs placeholder-gray-500 placeholder:italic border border-black focus:outline-none"
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
            />
          </div>
        ))}


        <div className="flex items-start gap-6 w-full">
          <label className="w-40 pt-2 text-sm font-medium text-gray-700">
            Country <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="w-full md:w-[350px]">
            <div className="relative">
              <CountrySelect
                name="shipping_address.country_code"
                autoComplete="country"
                region={cart?.region}
                value={formData["shipping_address.country_code"]}
                onChange={handleChange}
                required
                data-testid="shipping-country-select"
                
              />

              <div className="absolute inset-0 pointer-events-none border border-black rounded-sm" />
            </div>
          </div>

        </div>
      </div>

      {/* Checkbox */}
      <div className="my-8">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="same_as_billing"
            name="same_as_billing"
            checked={checked}
            onChange={onChange}
            className="mt-1"
            data-testid="billing-address-checkbox"
          />
          <label htmlFor="same_as_billing" className="text-sm mt-3">
            Billing address same as shipping address
          </label>
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {[
          {
            label: "Email",
            name: "email",
            type: "email",
            required: true,
            autoComplete: "email",
          },
          {
            label: "Phone",
            name: "shipping_address.phone",
            type: "tel",
            required: false,
            autoComplete: "tel",
          },
        ].map((field) => (
          <div className="flex items-start gap-6 w-full" key={field.name}>
            <label className="w-40 pt-2 text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              name={field.name}
              autoComplete={field.autoComplete}
              placeholder={field.label}
              className="w-full md:w-[350px] px-3 py-2 text-xs placeholder-gray-500 placeholder:italic border border-black focus:outline-none"
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              data-testid={`shipping-${field.name.replace("shipping_address.", "")}-input`}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ShippingAddress
