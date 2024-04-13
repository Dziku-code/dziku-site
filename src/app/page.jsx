import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col bg-white-500 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row lg:gap-8 ">
      {/* IMAGE CONTAINER - Assuming you want the image to fill half the height of the screen */}
      <div className="relative h-1/2 lg:h-full lg:w-1/2 relative lg:flex-row ">
        <Image
          src="/dziku_page.png"
          alt="boar image"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 ">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold "> Forging a web's masterpieces</h1>
        {/* DESC */}
        <p className="md:text-xl">
          {" "}
          *Growl* Hi! Take a look of my work as full stack developer, digital
          artist and junior game creator *Growl*{" "}
        </p>
        <div className="flex gap-4 lg:w-full md:justify-content">
          <button className=" p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View my work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
