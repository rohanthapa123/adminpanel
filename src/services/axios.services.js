import axios from "axios";

export const getProducts = async () =>{
    const response = await axios.get("https://fakestoreapi.com/products");
    return response
  }
export const deleteProductById = async (id) =>{
    const response = await axios.delete("https://fakestoreapi.com/products/"+ id);
    return response
  }

export const getUser = async () =>{
    const response = await axios.get("https://fakestoreapi.com/users");
    return response;
}
export const deleteUser = async (id) =>{
    const response = await axios.get("https://fakestoreapi.com/users/"+id);
    return response;
}

export const getCategories = async () =>{
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    return response;
}
export const login = async (username, password) =>{
  const response = await axios.post("https://fakestoreapi.com/auth/login",{
    username: username,
    password: password
  })
  
  return response;
}
export const addUser = async () =>{

}
export const editUserById = async ({id,user}) =>{
  const response = await axios.put("https://fakestoreapi.com/users/"+id,user)
  return response;
}
export const deleteUserById = async (id) =>{
  const response = await axios.delete("https://fakestoreapi.com/users/"+id);
  return response;
}