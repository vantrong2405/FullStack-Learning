'use client'

import { useState } from "react";
import clsx from "clsx";
import custom from './custom.module.css'
import { Button } from "@/components/ui/button";
export default function Home() {
  const [expanding , setExpanding] = useState(false)
  return (
  <div>
    <Button onClick={()=>setExpanding(!expanding)}>Click me</Button>
    <div className={clsx('bg-yellow-500',{
  [  custom.backgroundRed] : expanding
  })}>
       Hello văn trọng
  </div>
  </div>
  );
}
