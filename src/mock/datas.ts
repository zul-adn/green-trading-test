import {v4 as uuidv4} from 'uuid';
import {
    Shirt,
    DiscoountRule
} from '../type/type';

export const tshirtCollection: Shirt[] = [
    {
      id: uuidv4(),
      name: "Collection 1",
      thumbnail: 'https://i.pinimg.com/originals/eb/68/62/eb68623245866a82dbdf1f19890132b9.jpg',
      price: 8
    },
    {
      id: uuidv4(),
      name: "Collection 2",
      thumbnail: 'https://i.pinimg.com/564x/1f/d6/13/1fd613f503ddad6ef64a896407edab00.jpg',
      price: 8
    },
    {
      id: uuidv4(),
      name: "Collection 3",
      thumbnail: 'https://i.pinimg.com/originals/08/0c/b0/080cb07a095f93f41a868d78660bdb9b.jpg',
      price: 8
    },
    {
      id: uuidv4(),
      name: "Collection 4",
      thumbnail: 'https://i5.walmartimages.com/asr/0a08ef4c-8cf1-46fe-9529-ed17c4e1b2e1_1.764f4d32b4e6e357db4fc3a9587e4dcd.jpeg',
      price: 8
    },
    {
      id: uuidv4(),
      name: "Collection 5",
      thumbnail: 'https://i5.walmartimages.com/asr/0bf495a0-48b2-4151-9ad7-c415dde6d9e6_1.398f502702d9b4cd4dc8541a05fe4bb5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      price: 8
    },
  ]

  export const discountRule: DiscoountRule[] = [
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