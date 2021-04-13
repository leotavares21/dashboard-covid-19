import React from 'react'
import Collapsible from 'react-collapsible'

const SideBar = props => {
  return (
    <nav
      className={`bg-pink-600 text-gray-50 dark:bg-gray-900 pb-2 lg:min-h-full lg:block ${
        props.open ? 'block' : 'hidden'
      }`}
    >
      <div className="flex justify-between">
        <a href="/" className="pl-3 py-2 flex">
          <svg
            className="w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1
            className={`${props.open ? 'lg:hidden' : 'lg:block'} font-semibold`}
          >
            World Health
          </h1>
        </a>
      </div>
      <div
        className={`${
          props.open
            ? 'lg:absolute lg:left-0 lg:transform lg:-translate-x-full lg:opacity-0'
            : 'lg:opacity-1 transition duration-200 ease-out lg:delay-200 '
        } Collapsible-container border-t border-pink-700 px-3 pt-1`}
      >
        <span className="text-pink-200 dark:text-pink-600 font-light">Main</span>
        <Collapsible
          trigger="Dashboard"
          transitionTime="200"
          easing="ease-in-out"
        >
          <ul className="py-1" cy-selector="sideBarSubNav">
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </Collapsible>
        <Collapsible trigger="Forms" transitionTime="200" easing="ease-in-out">
          <ul className="py-1" cy-selector="sideBarSubNav">
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </Collapsible>
        <Collapsible trigger="Tables" transitionTime="200" easing="ease-in-out">
          <ul className="py-1" cy-selector="sideBarSubNav">
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </Collapsible>

        <span className="text-pink-200 dark:text-pink-600 font-light">Elements</span>

        <Collapsible trigger="Charts" transitionTime="200" easing="ease-in-out">
          <ul className="py-1" cy-selector="sideBarSubNav">
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </Collapsible>
        <Collapsible trigger="Maps" transitionTime="200" easing="ease-in-out">
          <ul className="py-1" cy-selector="sideBarSubNav">
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </Collapsible>
        <Collapsible trigger="Pages" transitionTime="200" easing="ease-in-out">
          <ul className="py-1" cy-selector="sideBarSubNav">
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-pink-900 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </Collapsible>
      </div>
    </nav>
  )
}

export default SideBar
