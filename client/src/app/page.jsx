'use client';

import { useEffect } from "react";
import { useLogin } from "@/context/login";
import { Home_page } from "@/components/home_page.jsx";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
    const { islogin } = useLogin()
  
    useEffect(() => {
      if (islogin) {
        router.replace("/user")
      }
    }, [islogin, router])
  

  return (

    <div>
      <Home_page />
    </div>

  );
}
