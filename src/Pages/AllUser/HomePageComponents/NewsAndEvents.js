import React from "react";

const NewsAndEvents = () => {
  return (
    <div className="pr-20 pl-20">
      <h2 className="text-left font-bold text-5xl	pl-10">
        The Scool Network News and Events
      </h2>
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-5 lg:mt-15 mx-auto">
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img src="https://i.ibb.co/THdB458/Rectangle-1.png" className="" />
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h3>FEATURED</h3>
          <h6>
            Dr. Clarita G Adalem receives highest and prestigious award at Royal
            Institution, Singapore
          </h6>
          <p>
            The event’s highlight was the Conferment of HON. FDR. DR. CLARITA G.
            ADALEM, HFRI, DFRIEDR, DFRIM, President, St. Clare College of
            Caloocan, and Chairperson of the Board of Trustees, St. Clare Group
            of Schools as... Read more
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
