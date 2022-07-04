import React, { useEffect, useState } from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}



function SidebarContent() {
  const [routePath, setRoutePath] = useState('');
  useEffect(() => {
    const currentPath = window.location.pathname;
    setRoutePath(currentPath)
  }, []);

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} /> // for submenu option
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                onClick={() => setRoutePath(route.path)}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>

                </Route>
                {route.path === routePath ? (
                <div className='outline-line right'>
                  <div className='sidebar-icon-bg right'>
                    <Icon className="w-8 h-8" aria-hidden="false" icon={route.icon} />
                  </div>
                </div>
                ): (
                  <div className='sidebar-icon-bg right'>
                    <Icon className="w-8 h-8" aria-hidden="false" icon={route.icon} />
                  </div>
                )}
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6">
      <Icons.OptionIcon className='toggle-sidebar-button' onClick={() => alert('colapse sidebar ')} width={100} />
      </div>
    </div>
  )
}

export default SidebarContent
