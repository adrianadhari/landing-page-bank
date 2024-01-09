const Contact = () => {
  return (
    <div className="contact bg-color-primary-light" id="contact">
      <div className="container py-20">
        <div className="text-center mx-auto w-3/4">
          <h3 className="text-color-secondary font-bold text-lg mb-4">
            Have a Question
          </h3>
          <h1 className="text-4xl font-bold">Get In Touch</h1>
        </div>

        <form>
          <div className="mx-auto text-center md:w-3/4 mt-10">
            <div className="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
              <input
                type="text"
                name="name"
                id="name"
                className="p-3 rounded-lg bg-white w-full text-sm focus:outline-none focus:border-color-secondary"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="p-3 rounded-lg bg-white w-full text-sm focus:outline-none focus:border-color-secondary"
                placeholder="Email"
              />
              <input
                type="tel"
                name="tel"
                id="tel"
                className="p-3 rounded-lg bg-white w-full text-sm focus:outline-none focus:border-color-secondary"
                placeholder="Phone"
              />
              <input
                type="text"
                name="company"
                id="company"
                className="p-3 rounded-lg bg-white w-full text-sm focus:outline-none focus:border-color-secondary"
                placeholder="Company"
              />
            </div>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="text-color-primary-dark w-full rounded-lg p-3 bg-white focus:outline-none focus:border-color-secondary"
            ></textarea>
            <button className="btn mt-10">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
