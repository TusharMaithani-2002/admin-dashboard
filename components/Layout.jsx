import { useSession, signIn, signOut } from "next-auth/react";
import NavBar from "../components/NavBar";



export default function Layout({children}) {
  const { data: session } = useSession();
  if(!session) {
    return (
      <div className='bg-blue-900 w-screen h-screen flex flex-col justify-center items-center'>
      <button className="bg-white p- 2 rounded-lg w-1/3 h-[50px] font-bold"
      onClick={()=> signIn('google')}
      >Login with Google</button>
      </div> 
    )
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <NavBar />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
      {children}
      </div>
    </div>
  )
}
