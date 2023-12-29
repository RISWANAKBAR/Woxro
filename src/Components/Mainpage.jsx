import React from "react";

export default function Mainpage() {
  return (
    <>
      <div className="  min-h-screen bg-black ">
        <button className="absolute top-0 right-0 m-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 transform hover:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* first section*/}
        <div className="  min-h-screen flex flex-col justify-center items-center p-8 lg:p-16 font-sans ">
          <h1 className="text-2xl lg:text-4xl  mb-6 text-center text-white ">
            Epic Games: An American video game and software developer and
            publisher based in Cary, North Carolina.
          </h1>
          <img
            src="images/img1.png"
            alt="Large Image"
            className="max-w-full h-auto mb-6 rounded-lg shadow-lg"
          />
          <p className="text-sm lg:text-base text-center text-white">
            Create, play, and battle with friends for free in Fortnite. Be the
            last player standing in Battle Royale and Zero Build, experience a
            concert or live event, or discover over a million creator-made
            games, including racing, parkour, zombie survival, and more. Each
            Fortnite island has an individual age rating so you can find the one
            that's right for you and your friends. Find it all in Fortnite ...
            Drop In.
          </p>
          <button className="bg-white text-black py-4 px-4 lg:px-32 mt-4">
            View Website
          </button>
        </div>
        {/* second section */}
        <div className="flex flex-col lg:flex-row justify-around items-center mt-8">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 max-w-6xl mt-8">
            <div className="overflow-hidden w-82 ">
              <img
                src="images/img2.png"
                alt="Card 1"
                className="w-full h-96 object-cover rounded-md"
              />
              <p className="text-sm lg:text-base text-center text-white p-4">
                Team up with friends by sprinting, climbing and smashing your
                way to earn your Victory Royale
              </p>
            </div>

            <div className="overflow-hidden w-82">
              <img
                src="images/img3.png"
                alt="Card 2"
                className="w-full  h-96 object-cover rounded-md"
              />
              <p className="text-sm lg:text-base text-center text-white p-4">
                Team up with friends by sprinting, climbing and smashing your
                way to earn your Victory Royale
              </p>
            </div>

            <div className="overflow-hidden w-82">
              <img
                src="images/img4.png"
                alt="Card 3"
                className="w-full  h-96 object-cover rounded-md"
              />
              <p className="text-sm lg:text-base text-center text-white p-4">
                Team up with friends by sprinting, climbing and smashing your
                way to earn your Victory Royale
              </p>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className=" p-24 text-white text-center justify-center">
          <h2 className="text-2xl lg:text-4xl mb-4">Our Contribution</h2>
          <p className="text-sm lg:text-base lg:px-32">
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>

        {/* fourth section*/}
        <div className="flex flex-col lg:flex-row justify-around items-center  text-white">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16 max-w-6xl ">
            <div className="overflow-hidden w-82">
              <p className="text-4xl lg:text-8xl text-center py-8">5M</p>
              <p className="text-xl  lg:text-2xl lg:text-base text-center">
                Daily User Engagements
              </p>
            </div>

            <div className="overflow-hidden w-82">
              <p className="text-4xl lg:text-8xl text-center py-8">$500K</p>
              <p className="text-xl  lg:text-2xl lg:text-base text-center">
                Revenue Surge for an platform{" "}
              </p>
            </div>

            <div className="overflow-hidden w-82">
              <p className="text-4xl lg:text-8xl text-center py-8">10X</p>
              <p className="text-xl  lg:text-2xl lg:text-base text-center">
                ROAS on all our marketing campaigns
              </p>
            </div>
          </div>
        </div>

        {/* fifth section*/}
        <div className="p-24 text-white text-center justify-center">
          <h2 className="text-4xl lg:text-4xl mb-4">
            Interested in delving deeper into the project?
          </h2>
          <p className="text-xl lg:text-base lg:px-72">
            If you'd like to explore further details about our initiatives or
            any of our affiliated brands, don't hesitate to connect. You can
            reach out to us via email at{" "}
            <span style={{ fontWeight: "bold" }}>hello@abc.com</span> or give us
            a call at{" "}
            <span style={{ fontWeight: "bold" }}>+91 480 20802730</span>.
          </p>

          <div className="mt-8 flex justify-center">
            <button className=" border border-white  text-white py-2 px-4 lg:px-24 mr-4  ">
              Ring us on Skype
            </button>
            <button className="bg-white text-black py-2 px-4 lg:px-24 ">
              Contact Us
            </button>
          </div>
        </div>

        {/* footer*/}
        <div className=" text-white text-xm text-center py-4">
          <p>
            © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
