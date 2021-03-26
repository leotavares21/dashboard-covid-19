const SideBar = () => {
  return (
    <nav className="bg-pink-600 text-gray-50 dark:bg-gray-900 lg:h-full py-2">
      <div className="flex justify-between fixed">
        <a href="/" className="pl-3 flex">
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
          <h1 className="font-bold">World Health</h1>
        </a>
      </div>
      <ul className="border-t border-pink-700 mt-2 sticky top-10">
        <li className="py-2 px-3">
          <div className="flex justify-between hover:text-gray-200">
            <a href="/" className="flex items-center">
              <svg
                className="w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Dashboard</span>
            </a>

            <button className="w-4 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-1 py-1">
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </li>
        <li className="py-2 px-3">
          <div className="flex justify-between hover:text-gray-200">
            <a href="/" className="flex items-center">
              <svg
                className="w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span>Forms</span>
            </a>

            <button className="w-4 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-1 py-1">
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </li>
        <li className="py-2 px-3">
          <div className="flex justify-between hover:text-gray-200">
            <a href="/" className="flex items-center">
              <svg
                className="w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Tables</span>
            </a>

            <button className="w-4 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-1 py-1">
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
            <li className="pl-6 pr-1 hover:text-gray-200 cursor-pointer">
              lorem ipsum
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar
