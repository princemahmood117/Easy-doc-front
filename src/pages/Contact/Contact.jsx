import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center">
        <p className="uppercase text-3xl font-serif">Contact Us</p>
      </div>

      <div className="flex flex-col justify-center md:flex-row gap-8 mb-28 text-sm my-10">
         
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">

          <p className="text-xl">OUR OFFICE</p>

          <div className="flex justify-center items-center gap-3">
            <FaLocationArrow></FaLocationArrow>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </div>

          <div className="flex justify-center items-center gap-3">
          <FaPhoneAlt/>
           Tel: (415) 555‑0132 <br />  greatstackdev@gmail.com
          </div>

          <p className="text-xl">Careers at EasyDoc</p>

          <p className="text-sm">Learn more about our teams and job openings.</p>

          <button className="btn  sm:btn-sm md:btn-md lg:btn-lg bg-blue-400 hover:bg-blue-500 text-white">Explore Job</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
