import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import {
  openSideBar,
  openNavInTopBar,
  changeTheme,
} from '../../store/actions/topBar'

const TopBar = ({ navIndex, openSideBar, openNavInTopBar, changeTheme }) => {
  const topNavRef = useRef(null)
  const topNavRef2 = useRef(null)

  useEffect(() => {
    const handleClick = e => {
      if (
        topNavRef.current.contains(e.target) ||
        topNavRef2.current.contains(e.target)
      ) {
        return
      } else {
        openNavInTopBar(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleTheme = e => {
    if (e.target.value === '1') {
      document.querySelector('html').classList.add('dark')
      localStorage.setItem('theme', e.target.value)
      changeTheme(e.target.value)
    } else if (e.target.value === '0') {
      document.querySelector('html').classList.remove('dark')
      localStorage.setItem('theme', e.target.value)
      changeTheme(e.target.value)
    }
  }

  return (
    <section className="bg-pink-600 dark:bg-gray-900 text-gray-50 border-b border-pink-700 flex justify-between py-2 px-3">
      <button className="ml-1 focus:outline-none" onClick={openSideBar}>
        <svg
          className="w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="flex">
        <form>
          <input
            type="text"
            data-cy="search"
            className="focus:outline-none sm:w-auto w-40 bg-pink-600 dark:bg-gray-900 placeholder-pink-900 dark:gray-900"
            placeholder="Search"
          />
        </form>
        <div className="flex items-center">
          <button className="focus:outline-none cursor-default">
            <svg
              className="w-4 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <input
            type="range"
            id="range"
            onChange={handleTheme}
            className="w-8 h-2 appearance-none rounded-full bg-pink-900 focus:outline-none mx-2"
            min="0"
            max="1"
            defaultValue={localStorage.theme ? localStorage.theme : '0'}
            step="1"
          />

          <button className="focus:outline-none cursor-default">
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>

        <div className="flex">
          <div className="relative flex" ref={topNavRef}>
            <button
              className="ml-2 focus:outline-none"
              onClick={() => openNavInTopBar(navIndex == 1 ? null : 1)}
            >
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <ul
              className={`${
                navIndex === 1 ? 'scale-y-1' : 'scale-y-0'
              } transform origin-top transition duration-150 absolute w-36 top-6 -left-28 bg-gray-50 dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-200 z-50 rounded`}
            >
              <li className="flex hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 cursor-pointer rounded-t">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 self-center text-green-500"
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

                <p>New task</p>
              </li>
              <li className="flex hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 self-center text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>

                <p>Last login</p>
              </li>
              <li className="flex hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 cursor-pointer rounded-b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 self-baseline text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>

                <p>Recent connection</p>
              </li>
            </ul>
          </div>

          <div className="relative flex" ref={topNavRef2}>
            <button
              className="ml-2 focus:outline-none"
              onClick={() => openNavInTopBar(navIndex === 2 ? null : 2)}
            >
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <ul
              className={`${
                navIndex === 2 ? 'scale-y-1' : 'scale-y-0'
              } transform origin-top transition duration-150 absolute w-36 top-6 -left-28 bg-gray-50 dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-200 z-50 rounded`}
              cy-selector="topBarNav"
            >
              <li className="flex hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 cursor-pointer rounded-t">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 self-center"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <p>Profile</p>
              </li>
              <li className="flex hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 self-center"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>

                <p>Settings</p>
              </li>
              <li className="flex hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 cursor-pointer border-t border-gray-200 dark:border-gray-700 rounded-b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 self-center"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>

                <p>Sign out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  navIndex: state.topbarReducer.navIndex,
})

const mapDispatchToProps = dispatch => {
  return {
    openSideBar: () => dispatch(openSideBar()),
    openNavInTopBar: navIndex => dispatch(openNavInTopBar(navIndex)),
    changeTheme: theme => dispatch(changeTheme(theme)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
