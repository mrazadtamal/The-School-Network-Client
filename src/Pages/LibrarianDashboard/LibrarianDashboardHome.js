import React from 'react'
import bannarimg from '../../img/librian_dashboard_banner.jpg'
const LibrarianDashboardHome = () => {
 
  return (
      <div className="container mx-auto ">
      <h1 className="text-3xl text-center text-blue-900 mt-4 librian_title">
        <h1>The School Network Library Dashboard</h1>
      </h1>
      <img
        className="rounded-lg mx-auto mt-12 principalhomeimg bg-indigo-500 shadow-lg shadow-indigo-500/50 "
        src={bannarimg}
        alt=""
      />
    </div>
  
  )
}

export default LibrarianDashboardHome
