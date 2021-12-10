import NetflixMainComponent from './NetflixMainComponent';
// import NetflixRegisterComponent from './NetflixRegisterComponent';

import './NetflixIndex.css';
import NetflixHeaderComponent from './NetflixHeaderComponent';

export default function NetflixIndexComponent()
{
    return(
        <div className="backimage" style={{width:'100%'}}>
           <div>
               <NetflixHeaderComponent />
           </div>
           <div className="backcolor">
               <NetflixMainComponent />
           </div>
        </div>
    )
}