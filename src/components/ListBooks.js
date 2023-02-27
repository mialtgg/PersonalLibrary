import React, { useEffect,useState } from "react";
import axios from "axios";
const ListBooks =(props)=>{
    const[books,setBooks]= useState(null)
    const[catagories ,setCatagories]=useState()
    useEffect(()=>{
    },[]);


    return(
        <div className="container my-5">
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">ISBN</th>
            <th scope="col">Catagories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
}
export default  ListBooks   