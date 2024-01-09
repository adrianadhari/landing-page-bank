import { FaBookmark } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="pricing bg-color-primary-light" id="pricing">
      <div className="container py-20">
        <div
          className="md:w-1/2 mx-auto mb-20 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="font-bold text-color-secondary mb-4">Pricing</h4>
          <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Get In Reasonable Price
          </h1>
        </div>

        <div
          className="grid grid-cols-3 gap-5"
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="card relative h-auto w-auto">
            <div className="px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
              <p className="text-6xl pl-2 font-bold">
                20
                <span className="text-sm font-normal tracking-widest">
                  /per month
                </span>
              </p>
              <div className="py-10">
                <h3 className="text-xl font-bold pb-3">Basic</h3>
                <p className="leading-relaxed">
                  For Beginner Who Want To Scale Business Globaly
                </p>
              </div>
              <ul className="space-y-4 pb-10">
                <li className="flex items-center">
                  <FaBookmark className="text-color-secondary" />
                  <span className="pl-4">Expense Management</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-secondary" />
                  <span className="pl-4">Card Management</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Instant Statistics</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Bookmark Function</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Accounting System</span>
                </li>
              </ul>
              <button className="card_btn">Get Started</button>
            </div>
          </div>

          <div className="card relative h-auto w-auto">
            <div
              id="card_2_front"
              className="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full"
            >
              <div className="relative">
                <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                  50
                  <span className="text-sm font-normal tracking-widest">
                    /per month
                  </span>
                </p>
              </div>
              <div className="py-10">
                <h3 className="text-xl font-bold pb-3">Standard</h3>
                <p className="leading-relaxed">
                  For Beginner Who Want To Scale Business Globaly
                </p>
              </div>
              <ul className="space-y-4 pb-10">
                <li className="flex items-center">
                  <FaBookmark className="text-color-secondary" />
                  <span className="pl-4">Expense Management</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-secondary" />
                  <span className="pl-4">Card Management</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Instant Statistics</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Bookmark Function</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Accounting System</span>
                </li>
              </ul>
              <button className="card_btn">Get Started</button>
            </div>
          </div>

          <div className="card relative h-auto w-auto">
            <div
              id="card_3_front"
              className="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full"
            >
              <div className="relative">
                <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                  100
                  <span className="text-sm font-normal tracking-widest">
                    /per month
                  </span>
                </p>
              </div>
              <div className="py-10">
                <h3 className="text-xl font-bold pb-3">Basic</h3>
                <p className="leading-relaxed">
                  For Beginner Who Want To Scale Business Globaly
                </p>
              </div>
              <ul className="space-y-4 pb-10">
                <li className="flex items-center">
                  <FaBookmark className="text-color-secondary" />
                  <span className="pl-4">Expense Management</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-secondary" />
                  <span className="pl-4">Card Management</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Instant Statistics</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Bookmark Function</span>
                </li>
                <li className="flex items-center">
                  <FaBookmark className="text-color-gray" />
                  <span className="pl-4">Accounting System</span>
                </li>
              </ul>
              <button className="card_btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
