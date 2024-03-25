import react from 'react'

const ProductsRow = ({ product,id, name, quantity_in_stock, quantity_sold, unit_price, revenue, handleDelete, handleUpdate, handleSupplier}) =>
{
    console.log("products",product)

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{ product.quantity_in_stock}</td>
            <td>{product.quantity_sold}</td>
            <td>{product.unit_price}</td>
            <td>{product.revenue}</td>
            <td>
                <button onClick={() => handleUpdate(product.id)} className="btn btn-outline-info btn-sm ml-1 mr-2">Update</button>
                <button onClick={() => handleSupplier(product.id)} className="btn btn-outline-success btn-sm mr-2">Supplier</button>
                <button onClick={() => handleDelete(product.id)}  className = "btn btn-outline-danger btn-sm mr-2">Delete</button>
            </td>
        </tr>
    );
}

export default ProductsRow