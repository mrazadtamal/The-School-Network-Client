import React from "react";
import { Link } from "react-router-dom";

const SingleVideoData = ({ video }) => {
  return (
    <>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div class="flex items-center">
            <div class="ml-3">
              <p class="text-gray-900 whitespace-no-wrap">
                {video.video_title}
              </p>
            </div>
          </div>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{video.author_email}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">
            {video.date.slice(0, 10)}
          </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{video.target_class}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <Link
              to={`/StudentDashboard/watchVideo/${video._id}`}
              class="relative"
            >
              Watch
            </Link>
          </span>
        </td>
      </tr>
    </>
  );
};

export default SingleVideoData;
