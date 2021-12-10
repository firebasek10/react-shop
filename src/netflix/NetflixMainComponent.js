import NetflixRegisterComponent from "./NetflixRegisterComponent";


export default function NetflixMainComponent()
{
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'500px', textAlign:"center"}}>
           <div>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <NetflixRegisterComponent />
           
           </div>
        </div>
    )
}