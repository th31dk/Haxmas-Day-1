"use client";
import Image from "next/image";
import JollyOrpheusClick from "@/components/JollyOrpheusClick";
import {useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-6xl self-center my-10 text-center">Haxmas Day 1</h1>
      <p className="text-3xl font-bold text-center">Count: {count}</p>
      <JollyOrpheusClick onClick={() => {setCount(count + 1)}} />
    </div>
  );
}