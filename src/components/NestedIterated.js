export default function NestedIterationsComponent()
{
    var products = [
        {Name: 'JBL Speaker', Price: 4600.55, Photo: 'images/p1.jpeg'},
        {Name: 'Nike Casuals', Price: 6000.55, Photo: 'images/raviresume.png'}
    ]
    return(
        <>
        <div className="container-fluid">
            <table className='table table-hover'> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
{
    products.map(product=>
    <tr>
        <td>{product.Name}</td>
        <td>{product.Price}</td>
        <td>
            <img alt='preview' src={product.Photo} height='100' width='100'/>
        </td>
        </tr>)
}
                </tbody>
            </table>
        </div>
        </>
        )
        }