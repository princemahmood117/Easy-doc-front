import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AuthContext/ContextProvider";
import { assets } from "../assets/assets";

const Appointment = () => {

    const {docId} = useParams()

    const {doctors,currencySymbol} = useContext(AppContext)

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
   

    const [docInfo,setDocInfo] = useState(null)

    const [slot,setSlot] = useState([])

    const [slotIndex,setSlotIndex] = useState(0)

    const [slotTime,setSlotTime] = useState('')


    const getAvailableSlots  = async () => {
        setSlot([])

        // getting current date

        let today = new Date()

        for(let i = 0 ; i < 7 ; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index

            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21,0,0,0)


            //setting Hours

            if(today.getDate() === currentDate.getDate()) { 
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0) 
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            

            let timeSlots = []

            while(currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit', minute : '2-digit'})
                
                // add slots to array

                timeSlots.push({
                    datetime : new Date(currentDate),
                    time : formattedTime
                })

                // increase time by 30 minutes

                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setSlot(prev => ([...prev, timeSlots]))
        }


    }


 
    

    const fetchDocInfo = async() => {

        const docInfo = doctors.find(doc => doc._id === docId)
      
        setDocInfo(docInfo)

        console.log(docInfo);
     
    }

    useEffect(() => {
        console.log(slot);
    },[slot])


    useEffect(() => {
        getAvailableSlots()
    },[docInfo])


    useEffect(() => {
        fetchDocInfo()
    },[doctors,docId])



    return (
        <div>
            {/* Check if docInfo is not null */}
            {docInfo ? (
                <div  className="flex flex-col sm:flex-row gap-4">
                    {/* doctor details */}
                    <div>
                        <img className="bg-blue-300 w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="Doctor" />
                    </div>

                        {/* doctor info */}

                    <div className="flex-1 border border-gray-300 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
                        <p className="flex items-center gap-2 text-2xl font-medium">
                            {docInfo.name} <img title="Verified" className="w-4" src={assets.verified_icon} alt="Verified Icon" />
                        </p>

                        {/* doctor degree & speciality */}

                        <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                            <p>{docInfo.degree} - {docInfo.speciality}</p>

                            <button title="experience" className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
                        </div>

                        {/* about doctor  */}

                        <div>
                            <p className="flex items-center  font-medium text-gray-500 mt-4 gap-2">About <img src={assets.info_icon} alt="" /></p>
                            <p className="mt-1 text-gray-600 max-w-[700px]">{docInfo.about}</p>
                        </div>

                        <p className="mt-2 text-sm font-medium">
                            Appointment fee : <span>{currencySymbol}{docInfo.fees}</span>
                        </p>
                    </div>
                </div>


            ) : (
                <p>Loading doctor details... <span className="loading loading-spinner loading-md"></span> </p> // Display a loading state until `docInfo` is populated
            )}

            {/* Booking slots */}

            <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-500">
                <p>Booking Slots</p>

                <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
                    {
                        slot.length > 0 && slot.map((item,index) => (

                            <div onClick={()=> setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-500'}`}>

                                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>

                            </div>
                        ))
                    }
                </div>


                <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
                    {
                        slot.length && slot[slotIndex].map((item,index) => (

                            <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'}`} key={index}>
                                {item.time.toLowerCase()}
                            </p>
                        ))
                    }
                </div>

                <button className="btn btn-wide bg-blue-300 mt-4">Book an appointment</button>




            </div>
        </div>
    );
    
};

export default Appointment;


