const How = () => {
  return (
    <div className="how bg-color-primary-light" id="how">
      <div className="container py-20">
        <div
          className="md:w-1/2 mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="font-bold text-color-secondary mb-4">How It Works</h4>
          <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Grow Up Your Money Saving
          </h1>
        </div>
        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-x-7 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="py-10 lg:py-20 px-5 cursor-pointer group w-full">
            <div className="bg-color-primary-dark inline-block px-7 py-4 group-hover:bg-color-secondary rounded-xl mb-4 text-5xl font-medium">
              1
            </div>
            <h3 className="font-bold mb-4 text-xl">Install The App</h3>
            <p className="leading-relaxed">
              We use customized application specifically designed
            </p>
          </div>
          <div className="py-10 lg:py-20 px-5 cursor-pointer group w-full">
            <div className="bg-color-secondary inline-block px-7 py-4 group-hover:bg-color-secondary rounded-xl mb-4 text-5xl font-medium">
              2
            </div>
            <h3 className="font-bold mb-4 text-xl">Setup Your Profile</h3>
            <p className="leading-relaxed">
              We use customized application specifically designed
            </p>
          </div>
          <div className="py-10 lg:py-20 px-5 cursor-pointer group w-full">
            <div className="bg-color-primary-dark inline-block px-7 py-4 group-hover:bg-color-secondary rounded-xl mb-4 text-5xl font-medium">
              3
            </div>
            <h3 className="font-bold mb-4 text-xl">Enjoy The Features!</h3>
            <p className="leading-relaxed">
              We use customized application specifically designed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
