'use client';
import { useState } from "react";
import Scene from "@/components/Layout/ImageDistortion/Scene";
import Projects from "@/components/Layout/ImageDistortion/Projects";

export default function ImageProject() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <main>
      <div className="h-[50vh]"></div>
      <Projects setActiveMenu={setActiveMenu} />
      <Scene activeMenu={activeMenu} />
      <div className="h-[50vh]"></div>
    </main>
  );
}
