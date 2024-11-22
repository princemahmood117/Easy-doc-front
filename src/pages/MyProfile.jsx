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

        <div>
            <div className="my-8">
                <h1 className="text-3xl text-center font-serif font-semibold text-gray-600">My Profile</h1>
            </div>

             <div className="max-w-lg flex flex-col gap-2 text-sm">
            <img className="w-36 rounded-full" src={userData.image} alt="" />

            {
                isEdit ? <input className="bg-gray-200 text-2xl font-medium max-w-60 mt-4 rounded-md p-2" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} type="text" /> : <p className="font-medium text-2xl mt-4">{userData.name}</p>
            }

            <hr className="bg-zinc-400 h-[1px] border-none" />

            <div>
                <p className="underline mt-3">CONTACT INFORMATION</p>

                <div className="grid grid-cols-[1fr_3fr] gap-y-5 mt-3 text-neutral-700">
                    <p className="font-medium">Email id : </p>
                    <p className="text-blue-400">{userData.email} </p>
                    <p className="font-medium">Phone : </p>

                    {
                    isEdit ? <input className="bg-gray-200 max-w-52 rounded-md p-2" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} type="text"/> : <p className="text-blue-400">{userData.phone}</p>
                     }

                     <p className="font-medium">Address : </p>

                     {
                        isEdit ? 
                        <p>

                        <input className="bg-gray-200 rounded-md" onChange={(e)=> setUserData(prev => ({...prev, address : {...prev.address, line1:e.target.value}}))} type="text" name="" id="" value={userData.address.line1}/> 
                        <br />
                        <input className="bg-gray-200 rounded-md" onChange={(e)=> setUserData(prev => ({...prev, address : {...prev.address, line2:e.target.value}}))} type="text" name="" id="" value={userData.address.line2}/> 
                        
                        </p>  
                        :    
                        <p className="text-gray-600">
                            {userData.address.line1} <br />
                            {userData.address.line2}
                        </p>
                     }
  
                </div>
            </div>

            <div>
                <p className="underline my-3">BASIC INFORMATION</p>

                <div className="grid grid-cols-[1fr_3fr] gap-y-5 mt-3 text-neutral-700">
                    <p className="font-medium">Gender : </p>
                    {
                        isEdit 
                        ? 
                        <select className="max-w-20 bg-gray-200 p-2" value={userData.gender} onChange={(e)=> setUserData(prev => ({...prev, gender:e.target.value}))}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select> : <p>{userData.gender}</p>
                    }

                    <p className="font-medium">Birthday : </p>
                     {
                        isEdit ? <input className="max-w-28 bg-gray-200 rounded-md" value={userData.dob} onChange={(e)=> setUserData(prev => ({...prev, dob:e.target.value}))} type="date"/> : <p>{userData.dob}</p>
                     }
                </div>
            </div>

            <div className="my-10">
                {
                    isEdit ? 
                    <button className="border border-gray-500 py-2 px-8 rounded-full bg-slate-200 hover:bg-primary hover:text-white transition-all" onClick={()=> setIsEdit(false)}>Save Information</button> : 
                    <button className="border border-gray-500 py-2 px-8 rounded-full bg-slate-200 hover:bg-primary hover:text-white transition-all" onClick={()=> setIsEdit(true)}>Edit</button>
                }
            </div>
        </div>
        </div>
        
       
    );
};

export default MyProfile;