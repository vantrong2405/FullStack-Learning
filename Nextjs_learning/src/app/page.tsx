// import { redirect } from "next/navigation";

import { ModeToggle } from "@/components/ui/toggole-darkmode";
import Link from "next/link";

// const auth = false
export default function Home() {
  // if (!auth) {
  //   redirect('/login')
  // }
  return (
    <div>
      <ModeToggle />
      Home page
      <Link href={'/login'} className="px-4 py-2 bg-red-300 block w-28">Logins</Link>
      <Link href={'/register'} className="px-4 py-2 bg-blue-300 block w-28">Registers</Link>
    </div>
  );
}
