import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaAngleRight,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="desc">
            <h3 className="font-bold text-xl">About App</h3>
            <p className="leading-relaxed my-5">
              This should be used to tell a story and include any testimonials
              you might have about your product or service for your cients
            </p>
            <div className="flex gap-5 items-center">
              <p>Follow Us</p>
              <FaInstagram className="cursor-pointer scale-100 hover:scale-125 transition duration-300 ease-in-out hover:text-color-secondary" />
              <FaXTwitter className="cursor-pointer scale-100 hover:scale-125 transition duration-300 ease-in-out hover:text-color-secondary" />
              <FaFacebookF className="cursor-pointer scale-100 hover:scale-125 transition duration-300 ease-in-out hover:text-color-secondary" />
              <FaYoutube className="cursor-pointer scale-100 hover:scale-125 transition duration-300 ease-in-out hover:text-color-secondary" />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-10 md:justify-around">
            <div className="links">
              <h3 className="font-bold text-xl">Quick Links</h3>
              <ul className="mt-5 grid gap-y-3">
                <li>
                  <a
                    href="#home"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#review"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Testimonial
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="help">
              <h3 className="font-bold text-xl">Help</h3>
              <ul className="mt-5 grid gap-y-3">
                <li>
                  <a
                    href="#"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline hover:text-color-secondary hover:no-underline"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="newsletter">
            <h3 className="font-bold text-xl">Newsletter</h3>
            <p className="leading-relaxed my-5">
              Subscribe with email and loads of news will be sent to you
            </p>
            <form className="flex items-center">
              <input
                type="email"
                name="email"
                id="email"
                className="p-3 rounded-lg rounded-e-none border-0 text-color-primary-dark bg-white focus:outline-none w-3/4 h-14"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                className="bg-color-secondary px-5 py-3 h-14 w-14 rounded-e-lg hover:opacity-80"
              >
                <FaAngleRight className="mx-auto" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center pt-10 border-t border-color-gray">
          <p>{new Date().getFullYear()} &copy; zetCoder. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
