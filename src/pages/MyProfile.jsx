import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {

    const [userData,setUserData] = useState({
        name : 'Prince Mahmood',
        image : assets.profile_pic,
        email : 'prince117@gmail.com',
        phone : '01919191919',
        address : {
            line1 : 'PaterBag Bank Coloney',
            line2 : 'Dania,Dhaka'
        },

        gender: "Male",
        dob : '2001-01-20'
    })

    const [isEdit,setIsEdit] = useState(false)
    return (
        <div className="max-w-lg flex flex-col gap-2 text-sm">
            <img className="" src={userData.image} alt="" />

            {
                isEdit ? <input value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} type="text" /> : <p>{userData.name}</p>
            }

            <hr />

            <div>
                <p>CONTACT INFORMATION</p>

                <div>
                    <p>Email id : </p>
                    <p>{userData.email} </p>
                    <p>Phone : </p>

                    {
                    isEdit ? <input value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} type="text"/> : <p>{userData.phone}</p>
                     }

                     <p>Address : </p>

                     {
                        isEdit ? 
                        <p>

                        <input onChange={(e)=> setUserData(prev => ({...prev, address : {...prev.address, line1:e.target.value}}))} type="text" name="" id="" value={userData.address.line1}/> 
                        <br />
                        <input onChange={(e)=> setUserData(prev => ({...prev, address : {...prev.address, line2:e.target.value}}))} type="text" name="" id="" value={userData.address.line2}/> 
                        
                        </p>  
                        :    
                        <p>
                            {userData.address.line1} <br />
                            {userData.address.line2}
                        </p>
                     }
  
                </div>
            </div>

            <div>
                <p>BASIC INFORMATION</p>

                <div>
                    <p>Gender : </p>
                    {
                        isEdit 
                        ? 
                        <select value={userData.gender} onChange={(e)=> setUserData(prev => ({...prev, gender:e.target.value}))}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select> : <p className="text-xl">{userData.gender}</p>
                    }

                    <p>Birthday : </p>
                     {
                        isEdit ? <input value={userData.dob} onChange={(e)=> setUserData(prev => ({...prev, dob:e.target.value}))} type="date"/> : <p>{userData.dob}</p>
                     }
                </div>
            </div>

            <div>
                {
                    isEdit ? 
                    <button onClick={()=> setIsEdit(false)}>Save Information</button> : 
                    <button onClick={()=> setIsEdit(true)}>Edit</button>
                }
            </div>
        </div>
    );
};

export default MyProfile;