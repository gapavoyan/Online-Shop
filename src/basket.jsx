import React from 'react'
import { useSelector } from 'react-redux'
function Basket() {
  const select = useSelector((store) => store.product.product)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 height: min-content">
      {
        select.map((el) => {
          // console.log(x);
          return (
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
                    <p>Quantity -  {el.quantity}</p>
                    <span>Price - ${el.quantity * el.price}</span>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Basket