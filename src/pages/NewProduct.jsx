import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/axios.services';
import RichEditor from './RichEditor';

const NewProduct = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage ]= useState("");
  const [price, setPrice] = useState(0);
  const [description,setDescription] = useState("")
  const [cato, setCato ] = useState();
  useEffect(() => {
    getCategories().then((category) => {
      // console.log(category.data);
      setCategories(category.data)
    })
  }, [])
  return (
  <>
    <form action="submit">
      <div className='w-full text-xl flex flex-col my-4'>
      <label className='py-2 font-semibold' htmlFor="title">Enter Title</label>
      <input onChange={(e)=>setTitle(e.target.value)} className='border-2 p-2 rounded-xl ' type="text" id='title' name='title' placeholder='Product Title' />
      </div>
      <div className='w-full text-xl flex gap-2 my-4'>
        <div>
          <label className='py-2 font-semibold' htmlFor="image">Product Image</label>
          <input className='border-2 p-2 rounded-xl ' type="file" multiple id='image' name='image' placeholder='Product Image' />
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.IOuitabmr4jhUGcJ6i2bhQHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" srcset="" />
        </div>
      </div>
      <div className='w-full text-xl flex flex-col my-4'>
      <label className='py-2 font-semibold' htmlFor="price">Enter Price</label>
      <input className='border-2 p-2 rounded-xl ' type="number"  id='price' name='price' placeholder='Product Price' />
      </div>
      <div className='w-full text-xl flex flex-col my-4'>
      <label className='py-2 font-semibold' htmlFor="description">Product Descripion</label>
      {/* <textarea className='border-2 p-2 rounded-xl ' type="description"  id='description' name='description' placeholder='Product description' /> */}
      <RichEditor onChange={(e)=>setDescription(e.target.value)}/>
      </div>
      <div className='w-full text-xl flex flex-col my-4'>
      <label className='py-2 font-semibold' htmlFor="category">Category</label>
      <select id='category' name='category'>
        {
          categories?.map((category)=>{
            return <option value={category} onClick={(e)=>{console.log(e)}}>{category}</option>
          })
        }
      
      </select>
      </div>
    </form>
  </>
  )
}

export default NewProduct