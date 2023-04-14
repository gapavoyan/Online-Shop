import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './store/slices/product.Slice'
function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/profile").then(res => setData(res.data))
    setLoading(false);
  }, [])

  function add(item) {
    dispatch(addToCart(item))
  }
  function remove(id) {
    dispatch(removeFromCart(id))
  }
  if (loading) {
    return <div>
      Loading...
    </div>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 height: min-content;" >
      {
        data.map(el => (
          <div key={el.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden ">
              <img src={el.image} alt={el.name} className="w-full h-full object-cover mt-5" />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">
                  {el.name}
                </h3>
                <p className="text-gray-500 mb-4">${el.price}</p>
                <div className='h-40'>
                  <p className="text-sm">{el.description}</p>
                  <span>Quantity - {el.count}</span>
                </div>
                <div className='flex justify-center items-center'>
                  <button onClick={() => add(el)} className='bg-blue-500 text-white rounded-lg px-2 py-1 mr-5 hover:bg-blue-600'>Add Cart</button>
                  <button onClick={() => remove(el)} className='bg-blue-500 text-white rounded-lg px-2 py-1 mr-5 hover:bg-blue-600'>Remove Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home