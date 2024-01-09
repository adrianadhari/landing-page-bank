import blog1 from "/blog1.jpg?url";
import blog2 from "/blog2.jpg?url";
import blog3 from "/blog3.jpg?url";

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="container py-20">
        <div
          className="md:w-1/2 mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="font-bold text-color-secondary mb-4">
            Innovation and Quality Improvement
          </h4>
          <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Latest Updates, Solutions, and Company News
          </h1>
        </div>
        <div
          className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="my-8">
            <div className="lg:h-[40vh] rounded-xl overflow-hidden scale-100">
              <img
                src={blog1}
                alt="Blog1"
                className="w-full lg:h-full hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <div className="flex gap-x-5 my-5">
                <p>20 August 2022</p>
                <span>1 min read</span>
              </div>
              <a
                href="#"
                className="text-2xl underline font-bold hover:text-color-secondary hover:no-underline"
              >
                Four ways to cheer yourself up on Blue Monday!
              </a>
              <p className="my-5">
                On the second edition of Serious Business, Inc. editor Jim
                Ledbetter and Fusion editor Salmon Debate...
              </p>
              <a
                href="#"
                className="underline font-bold hover:text-color-secondary transition-all duration-300 ease-in-out hover:no-underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="my-8">
            <div className="lg:h-[40vh] rounded-xl overflow-hidden scale-100">
              <img
                src={blog2}
                alt="Blog1"
                className="w-full lg:h-full hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <div className="flex gap-x-5 my-5">
                <p>20 August 2022</p>
                <span>1 min read</span>
              </div>
              <a
                href="#"
                className="text-2xl underline font-bold hover:text-color-secondary hover:no-underline"
              >
                How to Organize Your Budget for Maximum Productivity?
              </a>
              <p className="my-5">
                Global provider connected products for consumers, and enterprise
                worldwide, supply chain control is everything...
              </p>
              <a
                href="#"
                className="underline font-bold hover:text-color-secondary transition-all duration-300 ease-in-out hover:no-underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="my-8">
            <div className="lg:h-[40vh] rounded-xl overflow-hidden scale-100">
              <img
                src={blog3}
                alt="Blog1"
                className="w-full lg:h-full hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <div className="flex gap-x-5 my-5">
                <p>20 August 2022</p>
                <span>1 min read</span>
              </div>
              <a
                href="#"
                className="text-2xl underline font-bold hover:text-color-secondary hover:no-underline"
              >
                Should Small Business Be Entitled to System?
              </a>
              <p className="my-5">
                Our team provides skilled & experienced managers who know the
                interfaces of this vertical and focus...
              </p>
              <a
                href="#"
                className="underline font-bold hover:text-color-secondary transition-all duration-300 ease-in-out hover:no-underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
