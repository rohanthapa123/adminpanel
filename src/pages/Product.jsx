// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { deleteProductById, getCategories, getProducts } from '../services/axios.services';
// import { Rings } from 'react-loader-spinner';
// import { allProduct } from '../constants/products';
// import { useContext } from 'react';
// import ProductProvider, { ProductContext } from '../context/ProductContext';
// import RichEditor from './RichEditor';

// const Product = () => {
//   const {allProducts, setAllProducts} = useContext(ProductContext)
//   const [products, setProducts] = useState();
//   const [loading, setLoading] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [title, setTitle] = useState("");
//   const [image, setImage ]= useState("");
//   const [price, setPrice] = useState(0);
//   const [description,setDescription] = useState("")
//   const [cato, setCato ] = useState();
//   const getProductHere = () =>{
//     // getProducts().then((resp)=>{
//     //   setLoading(true)
//     //   console.log(resp.data)
//     // setProducts(resp.data);
//     // setLoading(false)
//     // })
//     setProducts(allProducts)
//     console.log(allProducts)
//     // setAllProducts(allProduct)
//   }
//   useEffect(() => {
//     getCategories().then((category) => {
//       // console.log(category.data);
//       setCategories(category.data)
//     })
//   }, [])
//   const deleteProduct = (e, id) =>{
//     e.preventDefault();
//     setAllProducts(products.filter((item)=>{
//       return item.id !== id
//     }))
//     console.log(allProducts)
//     // deleteProductById(id);
//   }
//   const editProduct = (e , id) =>{
//     // e.preventDefault();
//     setIsEditing(true);
//     // setProducts(products.map((item)=>{
//     //   if(item.id == id){

//     //   }
//     // }))
    
//   }
//   useEffect(()=>{
//     setLoading(true)
//     getProductHere()
//     setLoading(false)
//   },[allProducts])




//   return (

//     <>
//       <div className="container mt-5">
//         <Link className="bg-blue-700 p-2 rounded-xl text-white cursor-pointer" to={"add"}>Add New Product</Link>
//       </div>
//       <div>
//         <table className=''>
//           <thead className='font-bold'>
//             <tr className=''>
//               <td>Title</td>
//               <td>Image</td>
//               <td>Price</td>
//               <td>Category</td>
//             </tr>
//           </thead>{
//               isEditing?<>
//             {
//               loading ? <Rings
//               height="80"
//               width="80"
//               color="#4fa94d"
//               radius="6"
//               wrapperStyle={{}}
//               wrapperClass=""
//               visible={true}
//               ariaLabel="rings-loading"
//               /> :
//               <tbody>
//             {
//               products?.map((prod)=>{
//                 return <tr key={prod.id}>
//                   <td className='font-semibold'>{prod.title}</td>
                  
//                   <td><img src={prod.image} alt="" /></td>
//                   <td>${prod.price}</td>
//                   <td className='font-bold'>{prod.category}</td>
//                   <td className='gap-2'>
//                     <button onClick={(e)=>{deleteProduct(e,prod.id)}} className='bg-red-700 mb-2 lg:me-2 p-2 text-white rounded-xl'>Delete</button>
//                     <button onClick={(e)=>{editProduct(e,prod.id)}} className='bg-blue-700 p-2 text-white rounded-xl'>Edit</button></td>
//                 </tr>
//               })
//             }
            
//           </tbody>
//       }</>:<form action="submit">
//       <div className='w-full text-xl flex flex-col my-4'>
//       <label className='py-2 font-semibold' htmlFor="title">Enter Title</label>
//       <input onChange={(e)=>setTitle(e.target.value)} className='border-2 p-2 rounded-xl ' type="text" id='title' name='title' placeholder='Product Title' />
//       </div>
//       <div className='w-full text-xl flex gap-2 my-4'>
//         <div>
//           <label className='py-2 font-semibold' htmlFor="image">Product Image</label>
//           <input className='border-2 p-2 rounded-xl ' type="file" multiple id='image' name='image' placeholder='Product Image' />
//         </div>
//         <div>
//           <img src="https://th.bing.com/th/id/OIP.IOuitabmr4jhUGcJ6i2bhQHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" srcset="" />
//         </div>
//       </div>
//       <div className='w-full text-xl flex flex-col my-4'>
//       <label className='py-2 font-semibold' htmlFor="price">Enter Price</label>
//       <input className='border-2 p-2 rounded-xl ' type="number"  id='price' name='price' placeholder='Product Price' />
//       </div>
//       <div className='w-full text-xl flex flex-col my-4'>
//       <label className='py-2 font-semibold' htmlFor="description">Product Descripion</label>
//       {/* <textarea className='border-2 p-2 rounded-xl ' type="description"  id='description' name='description' placeholder='Product description' /> */}
//       <RichEditor onChange={(e)=>setDescription(e.target.value)}/>
//       </div>
//       <div className='w-full text-xl flex flex-col my-4'>
//       <label className='py-2 font-semibold' htmlFor="category">Category</label>
//       <select id='category' name='category'>
//         {
//           categories?.map((category)=>{
//             return <option value={category} onClick={(e)=>{console.log(e)}}>{category}</option>
//           })
//         }
      
//       </select>
//       </div>
//     </form>
//     }
//         </table>
//       </div>
//     </>
//   )
// }

// export default Product
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProductById, getCategories, getProducts } from '../services/axios.services';
import { Rings } from 'react-loader-spinner';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import RichEditor from './RichEditor';

const Product = () => {
  const { allProducts, setAllProducts } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [cato, setCato] = useState('');
  const [editingProduct,setEditingProduct] = useState({})
  const getProductHere = () => {
    // getProducts().then((resp)=>{
    //   setLoading(true)
    //   console.log(resp.data)
    // setProducts(resp.data);
    // setLoading(false)
    // })
    setProducts(allProducts);
    console.log(allProducts);
    // setAllProducts(allProduct)
  };

  useEffect(() => {
    getCategories().then((category) => {
      // console.log(category.data);
      setCategories(category.data);
    });
  }, []);

  const deleteProduct = (e, id) => {
    e.preventDefault();
    setAllProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };

  const editProduct = (e, prod) => {
    setIsEditing(true);
    setEditingProduct(prod)
  };

  useEffect(() => {
    setLoading(true);
    getProductHere();
    setLoading(false);
  }, [allProducts]);

  return (
    <>
      <div className="container mt-5">
        <Link className="bg-blue-700 p-2 rounded-xl text-white cursor-pointer" to={"add"}>
          Add New Product
        </Link>
      </div>
      <div>
        <table className={`${isEditing ? "hidden" : "block"}`}>
          <thead className="font-bold">
            <tr className="">
              <td>Title</td>
              <td>Image</td>
              <td>Price</td>
              <td>Category</td>
            </tr>
          </thead>
          
              {loading ? (
                <Rings
                  height="80"
                  width="80"
                  color="#4fa94d"
                  radius="6"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="rings-loading"
                />
              ) : (
                <tbody >
                  {products?.map((prod) => {
                    return (
                      <tr key={prod.id} >
                        <td className="font-semibold">{prod.title}</td>
                        <td className='o'>
                          <img src={prod.image} alt="" className='h-24 m-auto'/>
                        </td>
                        <td>${prod.price}</td>
                        <td className="font-bold">{prod.category}</td>
                        <td className="gap-2">
                          <button
                            onClick={(e) => {
                              deleteProduct(e, prod.id);
                            }}
                            className="bg-red-700 mb-2 lg:me-2 p-2 text-white rounded-xl"
                          >
                            Delete
                          </button>
                          <button
                            onClick={(e) => {
                              editProduct(e, prod);
                            }}
                            className="bg-blue-700 p-2 text-white rounded-xl"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            
          
        </table>
      </div>
      <div className={` ${isEditing ? "block" : "hidden"} absolute top-10 bg-white`}>
      <form action="submit">
      <div className='w-full text-xl flex flex-col my-4'>
      <label className='py-2 font-semibold' htmlFor="title">Enter Title</label>
      <input onChange={(e)=>setTitle(e.target.value)} className='border-2 p-2 rounded-xl ' type="text" id='title' name='title' placeholder='Product Title' value={editingProduct.title} />
      </div>
      <div className='w-full text-xl flex gap-2 my-4'>
        <div>
          <label className='py-2 font-semibold' htmlFor="image">Product Image</label>
          <input className='border-2 p-2 rounded-xl ' type="file" multiple id='image' name='image' placeholder='Product Image' />
        </div>
        <div>
          <img src={editingProduct.image} className='h-40' alt="" srcSet="" />
        </div>
      </div>
      <div className='w-full text-xl flex flex-col my-4'>
      <label className='py-2 font-semibold' htmlFor="price">Enter Price</label>
      <input className='border-2 p-2 rounded-xl ' value={editingProduct.price} type="number"  id='price' name='price' placeholder='Product Price' />
      </div>
      <div className='w-full text-xl flex flex-col my-4'>
      <label className='py-2 font-semibold' htmlFor="description">Product Descripion</label>
      {/* <textarea className='border-2 p-2 rounded-xl ' type="description"  id='description' name='description' placeholder='Product description' /> */}
      <RichEditor onChange={(e)=>setDescription(e.target.value)} value={editingProduct.description}/>
      </div>
      <div className='w-full text-xl flex flex-col my-4'>
      <label className='py-2 font-semibold' htmlFor="category">Category</label>
      <select id='category' name='category' value={editingProduct.category}>
        {
          categories?.map((category , index)=>{
            return <option key={index} value={category} onClick={(e)=>{console.log(e)}}>{category}</option>
          })
        }
      
      </select>
      </div>
    </form>
      </div>
    </>
  );
};

export default Product;
