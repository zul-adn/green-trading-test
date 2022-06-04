import React from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

type Shirt = {
  id: string,
  name: string,
  // thumbnail: string,
  price: number
}

const tshirtCollection: Shirt[] = [
  {
    id: uuidv4(),
    name: "Collection 1",
    price: 8
  },
  {
    id: uuidv4(),
    name: "Collection 2",
    price: 8
  },
  {
    id: uuidv4(),
    name: "Collection 3",
    price: 8
  },
  {
    id: uuidv4(),
    name: "Collection 4",
    price: 8
  },
  {
    id: uuidv4(),
    name: "Collection 5",
    price: 8
  },
]

const Index = () => {

  const addToCart = () => {

  }

  return (
    <div className="h-full px-40">

      <div className="mt-10 w-full bg-violet-800 rounded px-2 py-3">
        tes
      </div>

      <div id="card-container" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-4 mt-10">

        <div className="border border-violet-400 shadow rounded-md p-1 w-full mx-auto cursor-pointer hover:bg-violet-200">

          <div className="flex flex-col">
            <div className="rounded bg-teal-400 aspect-square w-full">
              <img
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-41593057/no_brand_kemeja_flanel_pria_lengan_panjang_kemeja_flanel_full01_ptqfwjp.jpg"
                className="rounded" />
            </div>
            <div className="flex-1 py-2 px-2">
              {/* <div className="text-lg font-bold text-lg truncate">{v.strMeal}</div>
              <div className="text-sm truncate">{v.strTags}</div> */}
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}
export default Index;
