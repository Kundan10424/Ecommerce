import React, { useEffect } from 'react'

const Order = () => {

  useEffect(() => {
    document.title= "404 Not Found"
    const favicon = document.querySelector("link[rel='icon']")
    if(favicon){
      favicon.href = "data:image/x-icon;,";
    }

    return () => {
      document.title= "ROHITZ FITTINGS (OPC) PRIVATE LIMITED"
      if(favicon){
        favicon.href = "/logo.png"
      }
    }
  },[])

  return (
    <div className='m-3'>
      <h1 className='text-black font-lg text-4xl mb-5'>404 Not Found!</h1>
      <p className='mb-2'>The requested URL was not found on this server.</p>
      <p>Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.</p>
    </div>
  )
}

export default Order