import React from 'react';
import Layout from './core/Layout';
import Background from './images/fl.jpg'

const App = () => {
    return (
        <Layout>



<div   style={{
      background: `url(${Background})`,

      backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  maxWidth:"100%",
  height:"100vh",
  display:"flex",justifyContent:"center",alignItems:"center" 


    }}  >



            <div className="col-md-6 offset-md-3 text-center">
            <div style={{width:"50%",height:"60vh" ,display:"grid",placeItems:"center",backgroundColor:"hsla(120, 60%, 70%, 0.3)"}}>
     
     <h2    className="text-light" data-aos-easing="linear"
      data-aos-duration="1500"   data-aos="zoom-in">MERN STACK</h2>
                 <hr />
                 <p data-aos="fade-right"   data-aos-duration="1500"   className="text-light text-center">
                     MERN stack login register system with account activation, forgot password, reset password, login
                     with facebook and google as well as private and protected routes for authenticated user and users
                     with the role of admin. Profile update & deployment
                 </p>
      
     </div>
            </div>






            </div>
        </Layout>
    );
};

export default App;
