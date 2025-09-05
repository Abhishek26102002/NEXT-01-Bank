import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = await getLoggedInUser();
  // console.log(loggedInUser);
  
  if (!loggedInUser) redirect("/sign-in");
  return (
    <main className="flex w-full h-screen font-inter">
      <SideBar user={loggedInUser} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="./icons/logo.svg" alt="logo" width={30} height={30} />
          <div>
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
