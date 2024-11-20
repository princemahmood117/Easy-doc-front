import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AuthContext/ContextProvider";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({docId,speciality}) => {

    const {doctors} = useContext(AppContext)

    const [relDoc,setRelDoc] = useState([])

    const navigate = useNavigate()

    useEffect(()=> {
        if(doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    },[doctors,docId,speciality])
    return (
        <div className="flex flex-col items-center gap-4 my-16 md:mx-10">

        <h1 className="text-3xl font-medium">Related Doctors</h1>
        
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
            {
                relDoc.slice(0,5).map((item,index)=>(
                    <div onClick={()=>{ navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="border border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}>
                        <img className="bg-blue-100" src={item.image} alt="" />

                        <div className="p-4">
                            <div className="flex items-center  text-sm text-center text-green-500 gap-2">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p> <p>Available</p>
                            </div>

                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}}  className="btn btn-outline btn-info">View More</button>
        
    </div>
    );
};

export default RelatedDoctors;