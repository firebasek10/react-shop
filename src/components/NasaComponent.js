// import axios from "axios";
import React, { useEffect, useState } from "react";
export default function NasaComponent() {
  // const[data, setData]=useState({})
  const [marsrover, setMarsrover] = useState({});

  useEffect(() => {
    // axios
    //   .get(
    //     "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    //   )
    //   .then((response) => {
    //     setMarsrover(response.data);
    //   });
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response=> response.json())
    .then(data=>{
      setMarsrover(data);
      console.log(data.photos)
    })
  }, []);

  return (
      <div className="container-fluid">
        <h3>Mar Rover Photo</h3>
        <table className="table table-hover">

        <thead>
          <tr>
            <th>Photo Id</th>
            <th>Photo</th>
            <th>Camera Name</th>
            <th>Rover Name</th>
          </tr>
        </thead>

        <tbody>

        {
             marsrover.photos.map(item => 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><img alt="preview" src={item.img_src} width='200' height='100'/></td>
                <td>
                  {item.camera.full_name}
                </td>
                <td>{item.rover.name}</td>
                </tr>)

           }
        </tbody>
      </table>
    </div>
  );
}
