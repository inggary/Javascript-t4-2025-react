'use client';

import { useState } from "react";
import { Home_page } from "@/components/home_page.jsx";
import { Navbar } from "@/components/navbar";

export default function Home() {

  const [isLogin, setIsLogin] = useState(true)
  

  return (

    <div>
      <Navbar login={isLogin} />
      <Home_page />
    </div>

  );
}
