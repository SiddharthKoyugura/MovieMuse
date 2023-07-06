import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center py-[10px] relative"
      style={{
        "background-image":
          "linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.7)), url('/banner/banner.jpg')",
      }}
    >
      <div className="backdrop-filter backdrop-blur-3xl">
      </div>
    </div>
  );
};

export default Banner;
