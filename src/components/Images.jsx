import React from "react";
import Image from "next/image";

const Images = () => {
  return (
    <div>
      <Image
        className="drop-shadow-lg w-full lg:max-w-full lg:h-96  basis-[45%] object-cover object-center mx-auto "
        src={"/image/image.jpg"}
        alt="..."
        width={500}
        height={500}
        priority={true}
      />
    </div>
  );
};

export default Images;
