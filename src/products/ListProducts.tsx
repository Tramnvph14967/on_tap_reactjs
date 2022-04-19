import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../style/ProductsType'

type ListProductsProps = {
  products: ProductType[],
  onRemove: (id: any) => void
}

const ListProducts = (props: ListProductsProps) => {
  return (
    <div>
      <a href="/products/add">Add</a>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Img</th>
            <th scope="col">Price</th>
            <th scope="col">Desc</th>
          </tr>
        </thead>
        <tbody>
          {props.products?.map((item, index) => {
            return <tr key={index}>

              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.img}</td>
              <td>{item.price}</td>
              <td>{item.desc}</td>
              <td>
                <button>
                  <Link to={`/products/${item.id}/edit`}>Edit</Link>
                </button>
                <button onClick={() => props.onRemove(item.id)}>Remove</button>
              </td>

            </tr>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ListProducts