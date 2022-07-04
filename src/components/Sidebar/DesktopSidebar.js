import React from 'react'

import SidebarContent from './SidebarContent'

function DesktopSidebar(props) {
  return (
    <aside className="z-20 flex-shrink-0 hidden w-25 overflow-y-auto bg-dark dark:bg-gray-800 lg:block">
      <h1 className='logo-text'>Sport <br/><span>Time</span> </h1>
      <SidebarContent />
    </aside>
  )
}

export default DesktopSidebar
