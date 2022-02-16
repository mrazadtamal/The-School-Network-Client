import React from "react";

const BLogPosts = () => {
  return (
    <div className="pr-20 pl-20">
      <h2 className="text-center text-5xl pt-16">Our Blogs</h2>

      <div className="container mx-auto pt-5 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:place-content-center sm:place-items-center">

        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 ">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img-user"
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              The School Network
            </h2>
            <p className="mt-2 text-gray-600">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and blogs
              should be a one-on-one discussion without the technical stuff.
              Consider improving Point #1.
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-indigo-500">
              MD WAHID
            </a>
          </div>
        </div>

        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img-user"
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              The School Network
            </h2>
            <p className="mt-2 text-gray-600">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and blogs
              should be a one-on-one discussion without the technical stuff.
              Consider improving Point #1.
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-indigo-500">
              Azad Tomal
            </a>
          </div>
        </div>

        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img-user"
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              The School Network
            </h2>
            <p className="mt-2 text-gray-600">
              Tone of voice is extremely important. Educators tend to speak to
              one another with buzzwords, technical terms and a tendency to talk
              down to the general public. The content of web pages and blogs
              should be a one-on-one discussion without the technical stuff.
              Consider improving Point #1.
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-indigo-500">
              Abdul Al Jobayer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLogPosts;
