import gplay from "/g-play-dark.png?url";
import ios from "/ios-store-dark.png?url";

const Download = () => {
  return (
    <div className="download bg-color-primary-light" id="download">
      <div className="container h-[50vh] grid place-items-center">
        <div className="text-center md:w-3/4 mx-auto">
          <h1 className="md:text-4xl text-2xl font-bold">
            Download App Now and Save Your Money
          </h1>
          <p className="leading-relaxed mt-5 md:text-base text-sm">
            Serving an impresive lis of long-term money with experience and
            expertise in multiple industries.
          </p>
          <div className="flex md:flex-row flex-col gap-5 justify-center items-center mt-10">
            <a
              href="#"
              className="rounded-lg bg-white w-44 h-16 hover:opacity-70 flex items-center justify-center"
            >
              <img src={gplay} alt="gplay" />
            </a>
            <a
              href="#"
              className="rounded-lg bg-white w-44 h-16 hover:opacity-70 flex items-center justify-center"
            >
              <img src={ios} alt="gplay" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
