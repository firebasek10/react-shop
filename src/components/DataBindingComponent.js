import CardComponent from './CardComponent'

export default function DataBindingComponent() {

  var products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    },
    {
        id: 2,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 130
        }
      },
      {
        id: 3,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 130
        }
      },
      {
        id: 4,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "images/p1.jpeg",
        "rating": {
          "rate": 4.7,
          "count": 130
        }
      },
      {
        id: 5,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 130
        }
      },
  ];
  return (
    <>
      <div className="container-fluid ">
        <div className="d-flex flex-wrap justify-content-center ">
          {products.map((product) => (
    <CardComponent Name={product.title}  Price={product.price} Photo={product.image} />
            
            // <div key={product.id}className="card m-2  w-25">
            //   <img
            //     alt="Preview"
            //     src={product.image}
            //     className="card-img-top"
            //     height="200"
            //   />
            //   <div className="card-header">
            //     <p>{product.title}</p>
            //   </div>
            //   <div className="card-footer">
            //     <button className="btn btn-danger w-100">
            //       <span className="bi bi-cart4"></span> Add to Cart
            //     </button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
}
