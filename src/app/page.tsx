'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Main = () => {

  const Router = useRouter();

  useEffect(() => {
    Router.push("/Home");
  }, []);

  return (
    <div>Hello</div>
  )
}

export default Main;