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

type DiscountGrouping = {
  [key: string]: Shirt[]
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

const discountRule = [
  {
    collection: 2,
    discount: 5
  },
  {
    collection: 3,
    discount: 10
  },
  {
    collection: 4,
    discount: 20
  },
  {
    collection: 5,
    discount: 25
  },
]

const Index = () => {

  const [cart, setCart] = React.useState<Shirt[]>([]);
  const [discountGroup, setDiscountGroup] = React.useState<DiscountGrouping>({})
  const [grandTotal, setGrandTotal] = React.useState<number>(0);
  const [grandTotalAfterDiscount, setGrandTotalAfterDiscount] = React.useState<number>(0);
  const [discount, setDiscount] = React.useState<number>(0);

  const addToCart = (shirt: Shirt) => {
    const newCart: Shirt[] = [...cart];
    newCart.push(shirt);
    setCart(newCart);
    cartGrouping(shirt);
    setGrandTotal(grandTotal + shirt.price)
  }

  const cartGrouping = (item: Shirt) => {

    let newGroup = {...discountGroup}
    let key

    if (Object.keys(discountGroup).length === 0) {
      key = "group1";
      newGroup = { [key]: [item] }
      setDiscountGroup(newGroup)
    } else {
      for (let i = 1; i <= Object.keys(discountGroup).length; i++) {
        console.log(i)
        const check = discountGroup[`group${i}`].some(v => v.name === item.name);
        if (check) {
          console.log("true")
          key = `group${Object.keys(discountGroup).length+1}`;
          newGroup = { [key]: [item] }
          setDiscountGroup({...discountGroup, ...newGroup})
        } else {
          discountGroup[`group${i}`].push(item)
        }
      }
    }

    console.log(discountGroup)
    console.log(Object.keys(discountGroup).length)

    // const group = cart.reduce((v: any, i) => {
    //   [i.name] = [...v[i.name] || [], i];
    //   return v;
    // }, {})

    // const discountCollection = Object.keys(group).length

    // for(let i = 0; i<discountRule.length; i++){
    //   console.log(discountCollection)
    //   if(discountCollection === discountRule[i].collection){
    //     setDiscount(discountRule[i].discount)
    //     calcGrandTotalAfterDiscount(discountCollection)
    //     return
    //   }else{
    //     setDiscount(0)
    //   }
    // }
  }

  const calcGrandTotalAfterDiscount = (total: number) => {
    let calculte
    console.log(cart.length === total)
    if (total === cart.length) {
      calculte = grandTotal - (grandTotal * discount / 100)
    } else {
      const otherShirt = cart.length - total;
      const otherShirtPrice = otherShirt * 8;
      console.log(otherShirtPrice)
      calculte = grandTotal - (grandTotal * discount / 100)
    }

    setGrandTotalAfterDiscount(calculte)
  }


  return (
    <div className="h-full px-40">

      <div className="mt-10 w-full bg-violet-800 rounded px-2 py-3 text-white flex justify-between">
        {cart.length}

        {/* <div onClick={cartGrouping}>Calculate Discount</div> */}

      </div>
      <div id="card-container" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-4 mt-10">

        {tshirtCollection.map((v, i) =>
          <div key={i} onClick={() => addToCart(v)} className="border border-violet-400 shadow rounded-md p-1 w-full mx-auto cursor-pointer hover:bg-violet-200">
            <div className="flex flex-col">
              <div className="rounded bg-teal-400 aspect-square w-full">
                <img
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-41593057/no_brand_kemeja_flanel_pria_lengan_panjang_kemeja_flanel_full01_ptqfwjp.jpg"
                  className="rounded" />
              </div>
              <div className="flex-1 py-2 px-2">
                <div className="text-lg font-bold text-lg truncate">{v.name}</div>
                <div className="text-sm truncate">{v.price}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {/* Real Price {cart.length ? cart.map(v => v.price).reduce((prev, next) => {return prev+next}) : 0} */}
        Grand Total {grandTotal}
      </div>
      <div>
        Discount {discount} % / $ {grandTotal * discount / 100}
      </div>

      <div>
        Total After Discount $ {grandTotalAfterDiscount} / {grandTotal - (grandTotal * discount / 100) + 24}
      </div>

    </div>

  )
}
export default Index;
