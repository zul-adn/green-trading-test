export type Shirt = {
    id: string,
    name: string,
    thumbnail: string,
    price: number
  }

export type DiscountGrouping = {
    [key: string]: Shirt[]
  }

export type DiscoountRule = {
    collection: number,
    discount: number
}