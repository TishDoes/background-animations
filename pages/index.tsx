import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <>
        <div className="w-[1000px] h-[1000px] rounded-full rotate-[0deg] hover:rotate-[450deg] hover:scale-[1.6] transition-transform duration-700 mt-60">
          <>
            <div className="rounded-xl w-[340px] h-60 absolute left-[280px] top-[76px]">
              <Image
                src="/images/tempo-image-20240608T045246388Z.png"
                alt="Pasted Image"
                width={1892}
                height={1336}
                className="w-full h-full"
              />
            </div>
          </>
          <>
            <div className="w-60 rounded-xl h-[227px] absolute left-[120px] top-[336px]">
              <Image
                src="/images/tempo-image-20240608T045737329Z.png"
                alt="Pasted Image"
                width={1336}
                height={1264}
                className="w-full h-full"
              />
            </div>
          </>
          <>
            <div className="rounded-xl w-48 h-[222px] absolute left-[168px] top-[585px]">
              <Image
                src="/images/tempo-image-20240608T045641287Z.png"
                alt="Pasted Image"
                width={1068}
                height={1236}
                className="w-full h-full"
              />
            </div>
          </>
          <>
            <div className="w-60 h-[340px] rounded-xl absolute top-[336px] left-[380px]">
              <Image
                src="/images/tempo-image-20240608T043936807Z.png"
                alt="Pasted Image"
                width={1336}
                height={1892}
                className="w-full h-full"
              />
            </div>
          </>
          <>
            <div className="w-60 rounded-xl h-[227px] absolute left-[380px] top-[696px]">
              <Image
                src="/images/tempo-image-20240608T045518380Z.png"
                alt="Pasted Image"
                width={1336}
                height={1264}
                className="w-full h-full"
              />
            </div>
          </>
          <>
            <div className="rounded-xl h-[170px] w-48 left-[640px] absolute top-[146px]">
              <Image
                src="/images/tempo-image-20240608T045324077Z.png"
                alt="Pasted Image"
                width={1068}
                height={948}
                className="w-full h-full"
              />
            </div>
          </>
          <>
            <div className="rounded-xl h-[170px] w-48 left-[640px] absolute top-[336px]">
              <Image
                src="/images/tempo-image-20240608T045338376Z.png"
                alt="Pasted Image"
                width={1068}
                height={948}
                className="w-full h-full"
              />
            </div>
          </>
          <>
            <div className="w-60 rounded-xl h-[265px] absolute left-[640px] top-[526px]">
              <Image
                src="/images/tempo-image-20240608T045504880Z.png"
                alt="Pasted Image"
                width={1336}
                height={1476}
                className="w-full h-full"
              />
            </div>
          </>
        </div>
      </>
    </div>
  );
}
