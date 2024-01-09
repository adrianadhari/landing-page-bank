import { FaCalendar } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="features bg-color-primary-light" id="features">
      <div className="container py-20">
        <div
          className="text-center mb-20 md:w-1/2 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h4 className="font-bold text-color-secondary mb-4">Our Feature</h4>
          <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Easy to Manage Your All Payments by Our App
          </h1>
        </div>

        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="border-2 border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
            <div className="bg-color-secondary inline-block py-5 px-6 rounded-2xl">
              <FaCalendar className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold py-4">Expense Trackering</h3>
            <p className="leading-relaxed">
              We use application designed a testing gnose to keep away
            </p>
          </div>
          <div className="border-2 border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer bg-color-primary-dark ease-in duration-200">
            <div className="bg-color-secondary inline-block py-5 px-6 rounded-2xl">
              <FaCalendar className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold py-4">Finance Snapshot</h3>
            <p className="leading-relaxed">
              We use application designed a testing gnose to keep away
            </p>
          </div>
          <div className="border-2 border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
            <div className="bg-color-secondary inline-block py-5 px-6 rounded-2xl">
              <FaCalendar className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold py-4">Support 24/h</h3>
            <p className="leading-relaxed">
              We use application designed a testing gnose to keep away
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
