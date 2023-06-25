import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/axios.services'

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((category) => {
      // console.log(category.data);
      setCategories(category.data)
    })
  }, [])
  return (
    <>
      <div>
        <table>
          <thead className='font-bold'>
            <tr>
              <td>Category</td>
              <td>Parent Category</td>
            </tr>
          </thead>
          <tbody>
            {
              categories.map((item,index) => {
                return (
                  <tr key={index} >
                    <td>{item}</td>
                    <td>{item.parent ? item.parent : "No Parent"}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Category