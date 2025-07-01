"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

const klarnaPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
}

export default klarnaPage