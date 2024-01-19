import React from 'react';
import logo from "../Images/robot.jpeg";
import "./Style/Profile.css"
export default function Profile() {
  return (
    <div  className='container my-5' style={{padding:"8px 8px 8px 8px ", backgroundColor:"#201e1e", color:"white", display:"flex"}} >
      <div  className='row '>
        {/* First Column */}
        <div className='col-lg-6'>
         


          <div class="container"  style={{padding:"8px 8px 8px 8px ", color:"white", display:"flex"}}>
        <img class="image" src={logo} alt="User Image"/>
        <div class="content mx-4">
            <h3>John Doe</h3>
            <h6 className='my-2'>Computer Science and Engineering </h6>
           
            <div style={{border:"3px solid gray", borderRadius:"10px",  padding: "10px"}} class="variable-container">
            <div className="row">
              <div style={{ height: "20px", width:"25px"}} className='col-lg-4 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                <p>New Messages</p>
                <p  className='my-3'>3</p>
                </div>
              </div>
              <div style={{ height: "20px", width:"35px" }} className='col-lg-4  d-flex justify-content-center align-items-center mx-4'>
                <div className='text-center'>
                <p>Upcoming Deadlines</p>
                <p  className='my-3'>4</p>
                </div>
              </div>
              <div style={{ height: "20px", width:"30px"}} className='col-lg-4 d-flex justify-content-center align-items-center mx-2'>
                <div className='text-center'>
                <p>Achievements</p>
                <p  className='my-3'>10</p>
                </div>
              </div>
            </div>
            </div>
        </div>
        </div>


          <h3 className='mt-5 mb-3'>Notifications</h3>

          <div className='container'>
            <div className="row">
              <div style={{ height: "40px", width:"40px", borderRadius:"5px", backgroundColor: "gray" }} className='col-lg-4 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                <p>New Messages</p>
                <p  className='my-3'>3</p>
                </div>
              </div>
              <div style={{ height: "40px", width:"40px", borderRadius:"5px", backgroundColor: "gray" }} className='col-lg-4 d-flex justify-content-center align-items-center mx-3'>
                <div className='text-center'>
                <p>Upcoming Deadlines</p>
                <p  className='my-3'>4</p>
                </div>
              </div>
              <div style={{ height: "40px", width:"40px", borderRadius:"5px", backgroundColor: "gray" }} className='col-lg-4 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                <p>Achievements</p>
                <p  className='my-3'>10</p>
                </div>
              </div>
            </div>
          </div>


          {/* curently processing */}

          <h3 className='my-5'>Badges</h3>
          <div style={{backgroundColor:"gray", borderRadius:"3px", }} className='container '>
            <div className='row d-flex'> 
                <div className='col-lg-3 d-flex justify-content-center align-items-center' style={{width:"30px", backgroundColor:"black", height:"29px", border:"1.7px solid gray", borderRadius:"5px" }}>
              <div className="text-center" >  <i class="fa-regular fa-hourglass"></i> </div>
                </div>

                <div className='col-lg-9'>
                  
                   <div className='d-flex justify-content-between '>
                    <h3 >Active Learner</h3>
                    <p >3/3</p>
                    </div>
                    <hr />
                    <h5>Maintain a 3 day streak</h5>
                </div>                
            </div>
          </div>


          <div style={{backgroundColor:"gray",borderRadius:"3px",}} className='container my-4'>
            <div className='row'> 
                <div className='col-lg-2 d-flex justify-content-center align-items-center' style={{width:"29px", backgroundColor:"black", height:"29px", border:"1.7px solid gray", borderRadius:"5px" }}>
              <div className="text-center" > <i class="fa-solid fa-trophy"></i> </div>
                </div>


                <div className='col-lg-3 '>
                  
                   <div className='d-flex justify-content-between '>
                    <h3 >Point Progress</h3>
                    <p >2500/3000</p>
                
                    </div>
                    <hr />
                    <h5>Earn 500 more points</h5>
                   
                </div>
            </div>
          </div>  
        </div>





        {/* Second Column */}
        <div className=" col-lg-6 my-3">
        <h3>Projects</h3>
            <div style={{backgroundColor:"gray", borderRadius:"2px"}}>
        
          <div className='my-2'>

            <div style={{border:"thin solid #000  ",  borderRadius: "20px" , }}>
            <h4 width="10px" height="10px"> NAIH  </h4>
            </div>
            <br />
            <div style={{border:"thin solid #000 ", borderRadius: "20px" }}>
            <h4  width="10px" height="10px"> Notebook  </h4>
            </div> 
            <br />
            <div style={{border:"thin solid #000", borderRadius: "20px" }}>
            <h4  width="10px" height="10px"> Hackathon  </h4>
            </div>

           
              </div>
              </div>

              <div className='d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                <button className='my-2' style={{ backgroundColor: "orange", borderRadius:"3px" }}> View all </button>
       
                </div>
            </div>




          <h3>Friends</h3>
          <div>
            Friends all
            <button> View all </button>
          </div>

          <button>Find Friends</button>
          <button>Invite Friends</button>
        </div>
      </div>
    </div>
  );
}
