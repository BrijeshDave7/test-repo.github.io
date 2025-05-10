import React from 'react'
import {Headers} from '../Ui/Headers'
import {Footers} from '../Ui/Footers'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div>
      <Headers/>
      <Outlet/>
      <Footers/>
    </div>
  )
}

// export default AppLayout
