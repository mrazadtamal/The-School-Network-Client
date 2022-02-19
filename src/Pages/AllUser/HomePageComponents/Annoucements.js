import React from "react";
import { FcAdvertising } from "react-icons/fc";
import Slider from "react-slick";

const Annoucements = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div className="container mx-auto pr-20 pl-20" data-aos="zoom-in">
      <h2 className="text-center text-5xl pb-2">Annoucements</h2>
      <hr />
      <Slider {...settings}>
        <div>
          <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
            <div className="flex pt-5">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Annoucement Title</h2>
            </div>
            <div>
              <p>
                Tone of voice is extremely important. Educators tend to speak to
                one another with buzzwords, technical terms and a tendency to
                talk down to the general public. The content of web pages and
                blogs should be a one-on-one discussion without the technical
                stuff. Consider improving Point #1. Tone of voice is extremely
                important. Educators tend to speak to one another with
                buzzwords, technical terms and a tendency to talk down to the
                general public. The content of web pages and blogs should be a
                one-on-one discussion without the technical stuff. Consider
                improving Point #1.
              </p>
              <p className="font-bold pt-2">Date:02/09/2022</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
            <div className="flex pt-5">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Annoucement Title</h2>
            </div>
            <div>
              <p>
                Tone of voice is extremely important. Educators tend to speak to
                one another with buzzwords, technical terms and a tendency to
                talk down to the general public. The content of web pages and
                blogs should be a one-on-one discussion without the technical
                stuff. Consider improving Point #1. Tone of voice is extremely
                important. Educators tend to speak to one another with
                buzzwords, technical terms and a tendency to talk down to the
                general public. The content of web pages and blogs should be a
                one-on-one discussion without the technical stuff. Consider
                improving Point #1.
              </p>
              <p className="font-bold pt-2">Date:02/09/2022</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
            <div className="flex pt-5">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Annoucement Title</h2>
            </div>
            <div>
              <p>
                Tone of voice is extremely important. Educators tend to speak to
                one another with buzzwords, technical terms and a tendency to
                talk down to the general public. The content of web pages and
                blogs should be a one-on-one discussion without the technical
                stuff. Consider improving Point #1. Tone of voice is extremely
                important. Educators tend to speak to one another with
                buzzwords, technical terms and a tendency to talk down to the
                general public. The content of web pages and blogs should be a
                one-on-one discussion without the technical stuff. Consider
                improving Point #1.
              </p>
              <p className="font-bold pt-2">Date:02/09/2022</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
            <div className="flex pt-5">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Annoucement Title</h2>
            </div>
            <div>
              <p>
                Tone of voice is extremely important. Educators tend to speak to
                one another with buzzwords, technical terms and a tendency to
                talk down to the general public. The content of web pages and
                blogs should be a one-on-one discussion without the technical
                stuff. Consider improving Point #1. Tone of voice is extremely
                important. Educators tend to speak to one another with
                buzzwords, technical terms and a tendency to talk down to the
                general public. The content of web pages and blogs should be a
                one-on-one discussion without the technical stuff. Consider
                improving Point #1.
              </p>
              <p className="font-bold pt-2">Date:02/09/2022</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
            <div className="flex pt-5">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Annoucement Title</h2>
            </div>
            <div>
              <p>
                Tone of voice is extremely important. Educators tend to speak to
                one another with buzzwords, technical terms and a tendency to
                talk down to the general public. The content of web pages and
                blogs should be a one-on-one discussion without the technical
                stuff. Consider improving Point #1. Tone of voice is extremely
                important. Educators tend to speak to one another with
                buzzwords, technical terms and a tendency to talk down to the
                general public. The content of web pages and blogs should be a
                one-on-one discussion without the technical stuff. Consider
                improving Point #1.
              </p>
              <p className="font-bold pt-2">Date:02/09/2022</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
            <div className="flex pt-5">
              <FcAdvertising className="w-10 h-10" />{" "}
              <h2 className="ml-2 text-2xl">Annoucement Title</h2>
            </div>
            <div>
              <p>
                Tone of voice is extremely important. Educators tend to speak to
                one another with buzzwords, technical terms and a tendency to
                talk down to the general public. The content of web pages and
                blogs should be a one-on-one discussion without the technical
                stuff. Consider improving Point #1. Tone of voice is extremely
                important. Educators tend to speak to one another with
                buzzwords, technical terms and a tendency to talk down to the
                general public. The content of web pages and blogs should be a
                one-on-one discussion without the technical stuff. Consider
                improving Point #1.
              </p>
              <p className="font-bold pt-2">Date:02/09/2022</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
          <div className="flex pt-5">
            <FcAdvertising className="w-10 h-10" />{" "}
            <h2 className="ml-2 text-2xl">Annoucement Title</h2>
          </div>
          <div>
            <p>
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and blogs
              should be a one-on-one discussion without the technical stuff.
              Consider improving Point #1. Tone of voice is extremely important.
              Educators tend to speak to one another with buzzwords, technical
              terms and a tendency to talk down to the general public. The
              content of web pages and blogs should be a one-on-one discussion
              without the technical stuff. Consider improving Point #1.
            </p>
            <p className="font-bold pt-2">Date:02/09/2022</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
          <div className="flex pt-5">
            <FcAdvertising className="w-10 h-10" />{" "}
            <h2 className="ml-2 text-2xl">Annoucement Title</h2>
          </div>
          <div>
            <p>
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and blogs
              should be a one-on-one discussion without the technical stuff.
              Consider improving Point #1. Tone of voice is extremely important.
              Educators tend to speak to one another with buzzwords, technical
              terms and a tendency to talk down to the general public. The
              content of web pages and blogs should be a one-on-one discussion
              without the technical stuff. Consider improving Point #1.
            </p>
            <p className="font-bold pt-2">Date:02/09/2022</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Annoucements;
