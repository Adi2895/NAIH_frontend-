import React from 'react';
import logo from "../Images/robot.jpeg";
import "./Style/Profile.css"
export default function Profile() {
  return (
    <div className='container my-5'>
      <div className='row'>
        {/* First Column */}
        <div className='col-lg-6'>
         
          <div class="container">
        <img class="image" src={logo} alt="User Image"/>
        <div class="content mx-4">
            <h3>John Doe</h3>
            <h6 className='my-2'>Computer Science and Engineering </h6>
           
            <div style={{border:"3px solid gray", borderRadius:"10px",  padding: "10px"}} class="variable-container">
            <div className="row">
              <div style={{ height: "20px", width:"25px"}} className='col-lg-2 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                <p>New Messages</p>
                <p  className='my-3'>3</p>
                </div>
              </div>
              <div style={{ height: "20px", width:"35px" }} className='col-lg-2  d-flex justify-content-center align-items-center mx-4'>
                <div className='text-center'>
                <p>Upcoming Deadlines</p>
                <p  className='my-3'>4</p>
                </div>
              </div>
              <div style={{ height: "20px", width:"30px"}} className='col-lg-2 d-flex justify-content-center align-items-center mx-2'>
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
              <div style={{ height: "40px", width:"40px", borderRadius:"5px", backgroundColor: "gray" }} className='col-lg-2 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                <p>New Messages</p>
                <p  className='my-3'>3</p>
                </div>
              </div>
              <div style={{ height: "40px", width:"40px", borderRadius:"5px", backgroundColor: "gray" }} className='col-lg-2 d-flex justify-content-center align-items-center mx-3'>
                <div className='text-center'>
                <p>Upcoming Deadlines</p>
                <p  className='my-3'>4</p>
                </div>
              </div>
              <div style={{ height: "40px", width:"40px", borderRadius:"5px", backgroundColor: "gray" }} className='col-lg-2 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                <p>Achievements</p>
                <p  className='my-3'>10</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className='my-3'>Badges</h3>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-2' style={{width:"20px", height:"20px"}}>
                <i class="fa-regular fa-hourglass"></i>
                </div>
                <div className='col-lg-4'>
                   <div className='d-flex'>
                    <h6>Active Learner</h6>
                    <p style={{float:"right"}}></p>
                   </div>
                </div>

                <hr />
                <h5>Maintain a 3 day streak</h5>
            </div>
            Active learner
          </div>
          <div className='container'>
            Point Progress
          </div>
        </div>





        {/* Second Column */}
        <div className="col-lg-6">
          <h3>Projects</h3>
          <div className='my-2'>
            <img style={{ borderRadius: "40px" }} width="10px" height="10px" src={logo} alt="" />
            <hr />
            <img style={{ borderRadius: "40px" }} width="10px" height="10px" src={logo} alt="" />
            <button className='my-2' style={{ backgroundColor: "white" }}> View all </button>
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
