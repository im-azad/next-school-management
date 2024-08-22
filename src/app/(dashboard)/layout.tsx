import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left Sidebar Menu*/}
      <div className="w-[15%] md:w-[10%] lg:w-[18%] xl:w-[15%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={34} height={34} />
          <span className="hidden lg:block font-bold">Our School</span>
        </Link>
        {/* Menu Items */}
        <Menu />
      </div>
      {/* Main Content */}
      <div className="w-[85%] md:w-[90%] lg:w-[82%] xl:w-[85%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        {/* Top Navbar */}
        <Navbar />
        {/* Main Page Content */}
        {children}
      </div>
    </div>
  ); 
}
