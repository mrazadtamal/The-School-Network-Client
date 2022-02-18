import React from "react";
import { FcAdvertising } from "react-icons/fc";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
  return (
    <div className="bg-yellow-300	pt-6 pb-10">
      <h2 className="pt-10 pb-10 text-center text-3xl">
        Important Notices and Information :
      </h2>

      <div
        className="bg-white shadow-lg rounded-lg mt-5 p-5 container mx-auto w-2/3"
        data-aos="zoom-in"
      >
        <div className="flex">
          <div>
            <div className="bg-cyan-600 pl-3 pr-3 text-lime-50">June</div>
            <div className="bg-green-900	 pl-3 pr-3 text-lime-50">03</div>
          </div>

          <div>
            <div className="flex pt-2 pl-4">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Importent Notice :01</h2>
            </div>
            <p className="text-left pl-4">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and
            </p>
          </div>
        </div>
        <div className="border-b-2 border-indigo-500"></div>
        <div className="flex mt-2">
          <div>
            <div className="bg-cyan-600 pl-3 pr-3 text-lime-50">May</div>
            <div className="bg-green-900	 pl-3 pr-3 text-lime-50">13</div>
          </div>

          <div>
            <div className="flex pt-2 pl-4">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Importent Notice :01</h2>
            </div>
            <p className="text-left pl-4">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and
            </p>
          </div>
        </div>
        <div className="border-b-2 border-indigo-500"></div>
        <div className="flex mt-2">
          <div>
            <div className="bg-cyan-600 pl-3 pr-3 text-lime-50">July</div>
            <div className="bg-green-900	 pl-3 pr-3 text-lime-50">05</div>
          </div>

          <div>
            <div className="flex pt-2 pl-4">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Importent Notice :02</h2>
            </div>
            <p className="text-left pl-4">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and
            </p>
          </div>
        </div>
        <div className="border-b-2 border-indigo-500"></div>
        <div className="flex mt-2">
          <div>
            <div className="bg-cyan-600 pl-3 pr-3 text-lime-50">June</div>
            <div className="bg-green-900	 pl-3 pr-3 text-lime-50">03</div>
          </div>

          <div>
            <div className="flex pt-2 pl-4">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Importent Notice :01</h2>
            </div>
            <p className="text-left pl-4">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and
            </p>
          </div>
        </div>
        <div className="border-b-2 border-indigo-500"></div>
        <div className="flex mt-2">
          <div>
            <div className="bg-cyan-600 pl-3 pr-3 text-lime-50">Sep</div>
            <div className="bg-green-900	 pl-3 pr-3 text-lime-50">23</div>
          </div>

          <div>
            <div className="flex pt-2 pl-4">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Importent Notice :05</h2>
            </div>
            <p className="text-left pl-4">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and
            </p>
          </div>
        </div>
        <div className="border-b-2 border-indigo-500"></div>
        <div className="flex mt-2">
          <div>
            <div className="bg-cyan-600 pl-3 pr-3 text-lime-50">Dec</div>
            <div className="bg-green-900	 pl-3 pr-3 text-lime-50">20</div>
          </div>
          <div>
            <div className="flex pt-2 pl-4">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Importent Notice :06</h2>
            </div>
            <p className="text-left pl-4">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-4 text-center ">
        <Link to="/allnotice">
          <button className="bg-emerald-900  p-2 pr-4 rounded-full pl-4 text-cyan-50">
            See All Notice
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoticeBoard;
