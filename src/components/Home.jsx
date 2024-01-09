import "animate.css";

import hero from "/hero4.png?url";

const Home = () => {
  return (
    <div className="home relative" id="home">
      <div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-2xl rounded-full opacity-30 overflow-hidden"></div>
      <div className="w-80 h-80 bg-color-secondary absolute right-0 bottom-10 -z-10 blur-2xl rounded-full opacity-30 overflow-hidden"></div>
      <div className="container py-20">
        <div className="flex flex-col items-center lg:flex-row z-20">
          <div className="text text-center mb-12 lg:text-start lg:w-1/2 lg:pe-10">
            <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4 animate__animated animate__fadeInUpBig animate__delay-1s">
              Awesome App for Your Financial
            </h1>
            <p className="leading-relaxed mb-10 animate__animated animate__fadeInUpBig animate__delay-1s">
              This should be used to tell a story and let your users know a
              little more about app and it’s use, How can benefit them.
            </p>
            <button className="btn animate__animated animate__fadeInUpBig animate__delay-1s">
              Download App
            </button>
          </div>
          <div className="img lg:w-1/2 animate__animated animate__fadeInUpBig animate__delay-1s">
            <img src={hero} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
