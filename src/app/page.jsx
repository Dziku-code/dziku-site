import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col bg-white-500">
      {/* IMAGE CONTAINER - Assuming you want the image to fill half the height of the screen */}
      <div className="relative h-1/2">
        <Image
          src="/dziku_page.png"
          alt="boar image"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
        {/* Title */}
        <h1 className="text-4xl font-bold"> Forging a web's masterpieces</h1>
        {/* DESC */}
        <p className="">
          {" "}
          *Growl* Hi! Take a look of my work as full stack developer, digital
          artist and junior game creator *Growl*{" "}
        </p>
        <div className="flex gap-4">
          <button className=" p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View my work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
