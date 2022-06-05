import React from 'react';
import './App.css';

import {
  tshirtCollection,
  discountRule
} from './mock/datas';

import {
  Shirt,
  DiscountGrouping
} from './type/type';


const Index = () => {

  const [cart, setCart] = React.useState<Shirt[]>([]);
  const [discountGroup, setDiscountGroup] = React.useState<DiscountGrouping>({});
  const [shirtNoDiscount, setShirtNoDiscount] = React.useState<number>(0)
  const [grandTotal, setGrandTotal] = React.useState<number>(0);
  const [totalAfterDiscount, setTotalAfterDiscount] = React.useState<number[]>([]);

  const addToCart = (shirt: Shirt) => {
    const newCart: Shirt[] = [...cart];
    newCart.push(shirt);
    setCart(newCart);
    cartGrouping(shirt);
    setGrandTotal(grandTotal + shirt.price)
  }

  const cartGrouping = (item: Shirt) => {

    let newGroup = { ...discountGroup }
    let key

    if (Object.keys(discountGroup).length === 0) {
      key = "group1";
      newGroup = { [key]: [item] }
      setDiscountGroup(newGroup)
    } else {
      for (let i = 1; i <= Object.keys(discountGroup).length; i++) {
        const checkIfExist = discountGroup[`group${i}`].some(v => v.name === item.name);
        if (checkIfExist) {
          key = `group${i + 1}`;
          console.log(key)
          newGroup = { [key]: [item] }
          setDiscountGroup({ ...discountGroup, ...newGroup })
        } else {
          let newArr2 = [...discountGroup[`group${i}`]]
          newArr2.push(item)
          key = `group${i}`;
          newGroup = { [key]: newArr2 }
          setDiscountGroup({ ...discountGroup, ...newGroup })
          return
        }
      }
    }
  }

  const calculateDiscount = () => {

    const newGrandTotal = [...totalAfterDiscount]

    for (let i = 0; i < Object.keys(discountGroup).length; i++) {
      if (discountGroup[`group${i + 1}`].length > 0) {
        const length = discountGroup[`group${i + 1}`].length
        for (let j = 0; j < discountRule.length; j++) {
          if (length === discountRule[j].collection) {
            console.log(`${length} === ${discountRule[j].collection} => same`)
            const calculateDisc = calculateGrandTotal(discountRule[j].discount, length)
            newGrandTotal.push(calculateDisc)
            setTotalAfterDiscount(newGrandTotal)
          }
        }
      } else {
        setShirtNoDiscount(shirtNoDiscount + 1)
      }
    }
  }

  const calculateGrandTotal = (discountTotal: number, totalItem: number) => {

    const newPriceAfterDiscount = totalItem * (8 - (discountTotal / 100 * 8))
    return newPriceAfterDiscount

  }

  return (
    <div className="h-full px-40">

      <div className="mt-10 w-full bg-violet-800 rounded px-2 py-2 text-white flex justify-between items-center ">
        Shoping Cart {cart.length}
        <div onClick={calculateDiscount} className="px-2 bg-violet-900 py-2 rounded cursor-pointer hover:bg-violet-800">Calculate Discount</div>
      </div>
      <div id="card-container" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-4 mt-10">

        {tshirtCollection.map((v, i) =>
          <div key={i} onClick={() => addToCart(v)} className="border border-violet-400 shadow rounded-md p-1 w-full mx-auto cursor-pointer hover:bg-violet-200">
            <div className="flex flex-col">
              <div className="rounded bg-teal-400 aspect-square w-full">
                <img
                  src={v.thumbnail}
                  className="rounded" />
              </div>
              <div className="flex-1 py-2 px-2">
                <div className="text-lg font-bold text-lg truncate">{v.name}</div>
                <div className="text-sm font-bold truncate">$ {v.price}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 w-full bg-violet-800 rounded px-2 py-2 text-white flex justify-between">
        <div>
          Total <span className="text-lg font-bold"> $ {grandTotal}</span>
        </div>
        <div className={``}>
          After Discount Price <span className="text-lg font-bold"> $ {totalAfterDiscount.length ? totalAfterDiscount.reduce((prev, next) => prev + next) : 0} </span>
        </div>
      </div>
    </div>

  )
}
export default Index;
