import React, { useEffect, useState } from "react";
import axios from "axios"
import Loading from "./Loading";
const ListBooks = (props) => {
  const [books, setBooks] = useState(null)
  const[categories,setCategories]=useState(null)

  useEffect(() => {
    axios.get("http://localhost:3004/books")
      .then((res) => {
        console.log(res);
        

        setTimeout(()=>{
          setBooks(res.data);
        },500);
        axios
        .get("http://localhost:3004/categories")
        .then((resCat)=>{
          console.log(resCat)
          setCategories(resCat.data);
        })
        .catch((err)=>console.log("catagories error",err));
      })
      .catch((err) => console.log("books error",err));
  }, []);
  if (books ===null  || categories === null) {
    return (
      <Loading/>
    )
  }


  return (
    <div className="container my-5">
      <table className="table">
        <thead>
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Catagories</th>
            <th scope="col">ISBN</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => {
              const category=categories.find(
                (cat)=>cat.id===book.categoryId
                );

              return (
                <tr>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>katagori gelecek</td>
                  <td>{book.isbn }</td>
                </tr>
              )


            })
          }






        </tbody>
      </table>
    </div>
  )
}
export default ListBooks   