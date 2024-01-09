import hero from "/hero3.png?url";

const Saving = () => {
  return (
    <div className="saving relative" id="saving">
      <div className="w-80 h-80 bg-color-blob absolute top-10 left-20 -z-10 blur-2xl rounded-full opacity-30 overflow-hidden"></div>
      <div className="w-80 h-80 bg-color-secondary absolute right-20 bottom-5 -z-10 blur-2xl rounded-full opacity-30 overflow-hidden"></div>
      <div className="container py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className="md:w-1/2 w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={hero} alt="Hero" className="sm:w-3/4 sm:mx-auto" />
          </div>
          <div
            className="md:w-1/2 w-full md:text-start text-center md:ms-20"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h4 className="font-bold text-color-secondary mb-4">
              Saving Money
            </h4>
            <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
              Best Finance App To Save Your Money
            </h1>
            <p className="leading-relaxed mb-10">
              Best financing app ever in the world. Easy to use and very user
              friendly for mobile banking. You can control your card easily and
              send money some one just one click
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saving;
