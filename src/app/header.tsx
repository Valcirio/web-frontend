'use client'
import React, { Fragment, useState } from 'react'

// Icons
import { FaPhoneAlt, FaBars, FaChevronDown, FaMousePointer, FaArrowAltCircleUp } from 'react-icons/fa'
import { IoClose, IoAtCircle, IoPieChart, IoFingerPrint, IoSquare } from 'react-icons/io5'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: IoPieChart },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: FaMousePointer },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: IoFingerPrint },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: IoSquare },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: FaArrowAltCircleUp }
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: IoAtCircle },
  { name: 'Contact sales', href: '#', icon: FaPhoneAlt }
]

export default function Header () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <section className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button onClick={() => { setDropDownOpen((prev) => !prev) }} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <FaChevronDown className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </button>
            {dropDownOpen
              ? (
                    <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                        {products.map((item) => (
                            <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                            >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                            </div>
                            <div className="flex-auto">
                                <a href={item.href} className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                            >
                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            {item.name}
                            </a>
                        ))}
                        </div>
                    </div>
                )
              : <></>}
            </div>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </section>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <section className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}
            >
              <span className="sr-only">Close menu</span>
              <IoClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                    <>
                      <button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <FaChevronDown/>
                      </button>
                      <div className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </>
                </div>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
