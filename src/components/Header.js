import React, { useContext, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import {
  SearchIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from '../icons'
import { Avatar, Input, Dropdown, DropdownItem } from '@windmill/react-ui'

function Header() {
  const { toggleSidebar } = useContext(SidebarContext)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)


  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  return (
    <header className="z-40 py-4 bg-dark shadow-bottom dark:bg-gray-800">
      <div style={{ width: '90%' }} className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <ul className="flex items-right flex-shrink-5 space-x-6 header-components">
          <span className='user-title'>Apiril 18, 2021</span>
          {/* <!-- Search input --> */}
          <div className="flex justify-right flex-1 lg:mr-32">
            <div className="relative max-w-xl mr-6 focus-within:text-purple-500">
              <div className="absolute inset-y-0 flex items-right pl-2">
                <SearchIcon className="w-6 h-6" aria-hidden="true" />
              </div>
              <Input
                className="search-bar"
                placeholder=" Search"
              />
            </div>
          </div>
        </ul>

        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Profile menu --> */}

          <li className="relative">
            <h1 className='user-title'>Eleanor Pena</h1>
            <p className='user-role'>Admin</p>
          </li>
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle"
                src="https://ucarecdn.com/691d736d-81aa-4ab8-92a8-0553c0b4bbae/ProfileImg.png"
                alt=""
                aria-hidden="true"
                style={{ width: '72px', height: '72px' }}

              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#">
                <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert('Log out!')}>
                <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
