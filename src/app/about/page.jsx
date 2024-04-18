"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*Container*/}
      <div className="flex  flex-row overflow-scroll lg:flex">
        {/*Text Container*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64  lg:w-2/3 xl:w-1/2 lg:p-right-0">
          {/*Biography  Container*/}
          <div className="flex flex-col gap-12 justify-center">
            {/*Biography  Title*/}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/*Biography  Text*/}
            <p className="text-lg">
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym,
              pozostając praktycznie niezmienionym. Spopularyzował się w latach
              60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających
              fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje
              Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na
              komputerach osobistych, jak Aldus PageMaker
            </p>

            <span className="italic">
              Loren impsum dolor sit amet construction
            </span>
            {/*Biography  Signature*/}
            <div className="self-end">
              <svg
                width="350"
                height="100"
                viewBox="0 0 596 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M112 2C105.372 29.4178 93.5677 55.4647 82.2222 81.1667C68.6353 111.946 56.3205 145.042 38 173.444C36.8516 175.225 33.2413 180.433 34.2222 178.556C41.059 165.468 48.3473 153.209 54.5556 139.667C64.5251 117.919 68.895 106.372 76.9444 83.8333C83.8974 64.365 89.1637 43.5821 99.8889 25.6667C108.836 10.7209 120.451 0.576138 138.444 3.22222C157.04 5.95689 174.228 15.1035 176.889 35.5556C182.296 77.1117 155.532 112.947 123.889 136.278C87.164 163.355 44.5513 177.362 2 192"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M140 130C159.607 129.689 178.652 126.772 198.111 125.111C218.787 123.346 159.308 139.858 139.667 146.556C132.889 148.867 123.381 151.661 119 158.111C115.085 163.875 127.761 161.966 129 161.889C156.158 160.196 183.211 154.541 210 150"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M224 108C225.958 122.282 227 136.583 227 151"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M232 90H232"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M280 41C278.96 53.4762 277.061 66.0645 274.667 78.3333C272.227 90.8391 269.13 104.455 264.667 116.444C262.834 121.368 260.579 126.14 258.111 130.778C255.416 135.842 250.631 139.729 248.5 145.056C246.855 149.167 256.062 140.438 259.722 137.944C272.745 129.073 281.234 123.354 295.056 115.111C304.286 109.606 320.475 98 332 98"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M265 138C270.406 144.308 275.429 150.753 283.611 153.667C296.91 158.402 311.818 153.711 321.111 143.444C322.115 142.335 323.347 140.503 323.778 138.889C324.454 136.353 322.771 144.051 322.556 146.667C322.41 148.436 321.848 153.077 322.611 155.111C323.977 158.754 329.427 156.743 332 157"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M318 136C318.429 142.146 322.748 168.581 332.222 163.167C337.644 160.069 357.248 144.871 352 137"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M457 39C450.822 72.7587 451.899 106.958 446.889 140.778C446.776 141.543 446.444 143.829 446.444 143.056C446.444 141.843 446.811 140.655 446.889 139.444C447.599 128.466 447.604 124.215 446.667 112.333C444.88 89.674 439.182 66.9103 446.333 44.5556C449.344 35.1443 457.289 15.6559 469.889 15.4444C488.254 15.1363 503.347 39.0447 505.556 54.6667C510.728 91.2552 480.929 123.705 453.444 142.778C434.301 156.062 413.119 163.145 391 169"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M478 127C483.872 133.655 504.325 125.07 510.056 123.056C515.46 121.155 523.924 117.912 528.944 114.222C529.849 113.558 531.652 112.469 531 111.556C530.276 110.542 528.445 111.453 527.278 111.889C524.423 112.956 521.672 114.348 519.111 116C511.73 120.761 501.874 128.951 496.111 135.444C492.567 139.439 480.887 153.761 494.889 153.667C507.383 153.582 519.541 146.034 530 140"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M544 118C543.485 120.19 542.51 122.271 541.778 124.389C539.964 129.637 533.71 143.179 536.944 148.5C540.667 154.623 587.969 105.165 594 99"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/*Skill Container*/}
          <div className="flex flex-col gap-12 jusify-center">
            {/*SKILLS  Title*/}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/*SKILLS  LIST*/}
            <div className="flex flex-wrap gap-4 hover:bg-white hover:text-black rounded ">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                Tailwind
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ring-1 ring-black-">
                Unity/Unreal
              </div>
            </div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/*Expierance Container*/}
          <div className="flex flex-col gap-12 jusify-center padding-48">
            {/*EXPIERANCE  Title*/}
            <h1 className="font-bold text-2xl">EXPIERANCE</h1>
            {/*EXPIERANCE  List*/}
            <div className="">
              {/*EXPIERANCE  List Item*/}
              <div className="flex justify-betweem h-48">
                {/*LEFT*/}
                <div className="w-1/3">
                  {/*Job tittle*/}
                  <div className="bg-black text-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    FREELANCER{" "}
                  </div>
                  {/*JOB DESC*/}
                  <div className="p-3  text-sm italic">hjdksahdjk</div>
                  {/*JOB TIME*/}
                  <div className="p-3  text-red-400 text-sm italic">
                    2024-present
                  </div>
                  {/*JOB NAME*/}
                  <div className="p-3 text-sm font-semibold w-fit">
                    SELFWORK
                  </div>
                </div>
                {/*CENTER*/}
                <div className="w-1/6">
                  {/*LINE*/}
                  <div className="w-1 h-full bg-black rounded relative">
                    {/*LINE CIRCLE*/}
                    <div className="absolute h-5 w-5 rounded-full ring-4 ring-red-600 -left-2 bg-red-600"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3 bg-red-300">
                  {/*Job tittle*/}
                  <div className="">
                    {/*JOB DESC*/}
                    <div className=""></div>
                  </div>
                </div>
              </div>
              {/*EXPIERANCE  List Item 2*/}
              <div className="flex justify-betweem h-48">
                {/*LEFT*/}
                <div className="w-1/3"></div>
                {/*CENTER*/}
                <div className="w-1/6">
                  {/*LINE*/}
                  <div className="w-1 h-full bg-black rounded relative">
                    {/*LINE CIRCLE*/}
                    <div className="absolute h-5 w-5 rounded-full ring-4 ring-red-600 -left-2 bg-red-600"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3">
                  {/*Job tittle*/}
                  <div className="">FREELANCER </div>
                  {/*JOB DESC*/}
                  <div className="">hjdksahdjk</div>
                  {/*JOB DESC*/}
                  <div className="">hjdksahdjk</div>
                </div>
              </div>
              {/*EXPIERANCE  List Item 3*/}
              <div className="flex justify-betweem h-48">
                {/*LEFT*/}
                <div className="w-1/3">
                  {/*Job tittle*/}
                  <div className="">FREELANCER </div>
                  {/*JOB DESC*/}
                  <div className="">hjdksahdjk</div>
                  {/*JOB DESC*/}
                  <div className="">hjdksahdjk</div>
                </div>
                {/*CENTER*/}
                <div className="w-1/6">
                  {/*LINE*/}
                  <div className="w-1 h-1 bg-black rounded relative">
                    {/*LINE CIRCLE*/}
                    <div className="absolute h-5 w-5 rounded-full ring-4 ring-red-600 -left-2 bg-red-600"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3">
                  {/*Job tittle*/}
                  <div className="">
                    {/*JOB DESC*/}
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
{
          <div className="lg:block w-1/3 xl:w-1/2 ">
            <Image
              src="/brain-rn.png"
              alt="brain image"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>
          }
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
