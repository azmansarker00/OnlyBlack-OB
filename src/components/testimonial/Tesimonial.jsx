import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#161616] text-gray-100 sm:px-8 py-12 UpSh">
      <div className="text-center w-full">
        <svg
          className="text-gray-400 h-8 mx-auto"
          fill="currentColor"
          viewBox="0 0 150 29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path d="M76.6605841,24.316569 L76.6605841,6.43875952 L94.3451636,17.7743071 C94.7005374,18.0021643 95.1070794,18.1154024 95.5136215,18.1154024 C95.9201636,18.1154024 96.3267056,18.0021643 96.6820794,17.7743071 L114.366659,6.43875952 L114.366659,24.316569 L76.6605841,24.316569 Z M109.288388,4.65802143 L95.5136215,13.4871405 L81.7388551,4.65802143 L109.288388,4.65802143 Z M114.366659,0.437140476 L76.6605841,0.437140476 L74.5178271,0.437140476 L72.375771,0.437140476 L72.375771,24.316569 L72.375771,28.53745 L76.6605841,28.53745 L114.366659,28.53745 L118.651472,28.53745 L118.651472,24.316569 L118.651472,0.437140476 L116.509416,0.437140476 L114.366659,0.437140476 Z" />
            <path d="M10.224743,18.2356143 L14.5039486,6.60247143 L18.7831542,18.2356143 L10.224743,18.2356143 Z M10.8415654,0.847352381 L0.225911215,27.8822571 L6.89179907,27.8822571 L8.6196028,23.3023286 L20.3875935,23.3023286 L22.074743,27.8822571 L28.7406308,27.8822571 L18.1656308,0.847352381 L10.8415654,0.847352381 Z" />
            <path d="M51.8908879,5.50827381 C54.7303738,5.50827381 57.1990654,7.25103571 58.3507009,9.43984524 L63.3707944,7.0079881 C61.4369159,3.6439881 57.9392523,0.401511905 51.8908879,0.401511905 C43.661215,0.401511905 37.2834112,6.07584524 37.2834112,14.3850357 C37.2834112,22.6942262 43.661215,28.3685595 51.8908879,28.3685595 C57.9392523,28.3685595 61.3955607,25.0853452 63.3707944,21.7213452 L58.3507009,19.3302262 C57.1990654,21.5590833 54.7303738,23.2617976 51.8908879,23.2617976 C46.9121495,23.2617976 43.2911215,19.4917976 43.2911215,14.3850357 C43.2911215,9.27758333 46.9121495,5.50827381 51.8908879,5.50827381" />
            <polygon points="149.674276 5.91365238 149.674276 0.846938095 130.25278 0.846938095 130.25278 27.8825333 149.674276 27.8825333 149.674276 22.815819 136.095771 22.815819 136.095771 16.6954381 149.386192 16.6954381 149.386192 11.6287238 136.095771 11.6287238 136.095771 5.91365238" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-black text-gray-900 sm:rounded-lg shadow-lg">
        <div
          className="absolute right-0 bottom-0 w-64 h-56"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative">
          <h2 className="text-center text-gray-400 text-4xl lg:text-5xl font-bold leading-tight">
            Testimonials
          </h2>
          <div className="my-4 mx-auto w-12 h-2 border-4 border-gray-500"></div>
          <p className="text-center text-gray-400 font-light">
            Here are what some of our amazing customers are saying ...
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
            <div className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-[#161616] text-gray-400 leading-snug flex flex-col justify-between">
              <div className="-ml-4">
                <svg
                  className="w-8 opacity-25 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <p className="mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem."
              </p>
              <div className="mt-6 font-bold">John Doe</div>
              <div className="text-sm text-gray-500">CEO at Example</div>
            </div>

            <div className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-[#161616] text-gray-400 leading-snug flex flex-col justify-between">
              <div className="-ml-4">
                <svg
                  className="w-8 opacity-25 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <p className="mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem."
              </p>
              <div className="mt-6 font-bold">John Doe</div>
              <div className="text-sm text-gray-500">CEO at Example</div>
            </div>

            <div className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-[#161616] text-gray-400 leading-snug flex flex-col justify-between">
              <div className="-ml-4">
                <svg
                  className="w-8 opacity-25 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <p className="mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem."
              </p>
              <div className="mt-6 font-bold">John Doe</div>
              <div className="text-sm text-gray-500">CEO at Example</div>
            </div>

            <div className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-[#161616] text-gray-400 leading-snug flex flex-col justify-between">
              <div className="-ml-4">
                <svg
                  className="w-8 opacity-25 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <p className="mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem."
              </p>
              <div className="mt-6 font-bold">John Doe</div>
              <div className="text-sm text-gray-500">CEO at Example</div>
            </div>

            {/* Add more testimonial cards below if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
