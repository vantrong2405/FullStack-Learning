'use client'

import { useState } from "react";
import clsx from "clsx";
import custom from './custom.module.css'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import sss from '/public/images/sss.png';
export default function Home() {
  const [expanding, setExpanding] = useState(false)
  return (
    <div>
      <Button onClick={() => setExpanding(!expanding)}>Click me</Button>
      <div className={clsx('bg-yellow-500', {
        [custom.backgroundRed]: expanding
      })}>
        Hello văn trọng
      </div>
      <div className="w-[700px] h-[700px]">
        {/* quality : chất lượng ảnh */}
        <Image src={sss} alt="ảnh văn trọng" width={700} height={700} quality={100} />
        <Image src={'https://fileinfo.com/img/ss/xl/jpg_44-2.jpg'} alt="ảnh văn trọng" width={700} height={700} quality={100} />
      </div>
    </div>
  );
}
