const WhyChooseUs = () => {
  return (
    <div>
      <div className="text-center">
        <p className="uppercase text-3xl font-serif">why choose us ?</p>
      </div>

      <div className="flex flex-col md:flex-row my-20 gap-2">

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[17px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[17px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[17px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
