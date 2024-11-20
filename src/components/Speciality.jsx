import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Speciality = () => {
    return (
        <div className="flex flex-col items-center gap-4 py-16" id="speciality">

            <h1 className="text-4xl font-medium">Find By Speciality</h1>

            <p className="sm:w-1/2 text-center md:text-lg">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>


            <div className="md:flex sm:justify-center md:justify-center grid grid-cols-3 gap-4 md:gap-3 pt-4 w-full">

                
                {specialityData.map((item,index)=> (

                         <Link onClick={()=> scrollTo(0,0)} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`} title={item.speciality}>
                         <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
                         <p>{item.speciality}</p>

                     </Link>
                )
               
                )}
       

            </div>
            
        </div>
    );
};

export default Speciality;