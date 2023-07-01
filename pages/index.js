import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

import Image from "next/image";

export default function Home() {
  const {data:session} = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
      <h2>
      Hello! <b>{session?.user?.name}</b>
      </h2>
      <div className="flex gap-1 items-center text-black">
      <img src={session?.user.image} alt="" className="w-8 h-8 rounded-full"/>
      <span>{session?.user.name}</span>
      </div>
      </div>
    </Layout>
  )
}
