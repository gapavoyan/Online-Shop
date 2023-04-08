import React, { useEffect, useState } from 'react'
import axios from "axios"
function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5174/profile").then(res => setData(res.data))
    console.log(data);
  }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 height: min-content;" >
      {
        data.map(el => (
          <div>
            <div key={el.id} className="bg-white rounded-lg shadow-md overflow-hidden h-screen">
              <img src={el.image} alt={el.name} className="w-full h-48 object-cover mt-5" />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">
                  {el.name}
                </h3>
                <p className="text-gray-500 mb-4">${el.price}</p>
                <div className='h-40'>
                  <p className="text-sm">{el.description}</p>
                </div>
                <div className='flex justify-center items-center'>
                  <button className='bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-600'>Add Cart</button>
                  <span>{el.count}</span>
                  <button className='bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-600'>Remove Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //   {
    //     data.map((el) => {
    //       return (
    //         <div className='p-5 shadow'>
    //           <div>

    //             <img src={el.image} className="w-full h-48 object-cover" />
    //           </div>
    //           <div>

    //           <h2 className="text-lg font-medium mb-2">{el.name}</h2>
    //           </div>
    //           <p className="text-sm">{el.description}</p>
    //           <p className="text-gray-500 mb-4">{el.price}</p>
    //           <span>{el.count}</span>
    //           <div>
    //             <button>Add</button>
    //             <button>Remove</button>
    //           </div>
    //         </div>
    //       )
    //     })
    //   }
    // </div>
  )
}

export default Home