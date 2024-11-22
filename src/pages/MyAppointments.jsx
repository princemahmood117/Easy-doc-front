import { useContext } from "react";

import {AppContext} from '../context/AuthContext/ContextProvider'

const MyAppointments = () => {

    const {doctors}  = useContext(AppContext)
    return (
        <div>
            <p className="my-10 text-center font-medium border-b text-3xl pb-3">My Appointments</p>

            <div>
                {
                    doctors.slice(0,2).map((item,index)=> (
                        <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                            <div>
                                <img className="w-32 bg-indigo-100" src={item.image} alt="" />
                            </div>

                            <div className="flex-1">
                                <p className="font-semibold text-neutral-700">{item.name}</p>
                                <p>{item.speciality}</p>
                                <p className="my-1 font-medium">Address</p>
                                <p className="text-sm">{item.address.line1}</p>
                                <p className="text-sm">{item.address.line2}</p>
                                <p className="text-sm"> <span className="font-semibold text-neutral-700">Date & Time</span> 25 july, 2024 | 8:30 pm</p>
                            </div>

                            <div></div>

                            <div className="flex flex-col gap-3 justify-end">
                                <button className="text-center sm:w-48 py-2 border rounded hover:bg-blue-500 hover:text-white transition-all duration-200">Pay Online</button>
                                
                                <button className="text-center sm:w-48 py-2 border rounded hover:bg-blue-500 hover:text-white transition-all duration-200">Cancel Appointment</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyAppointments;