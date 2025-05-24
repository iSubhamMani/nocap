import { Button } from "@/components/ui/button";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { CompassIcon, TicketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await withAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to RSVPMe</h1>
          <p className="text-lg mb-6">Please sign in to continue.</p>
          <Link href={"/login"}>
            <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="fixed top-1/4 -left-28 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed top-3/4 -right-28 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed top-2/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400">
            RSVPMe
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="#"
              className="text-white/70 text-sm hover:text-white transition-colors"
            >
              <TicketIcon className="inline-block mr-2 h-4 w-4" />
              Events
            </Link>
            <Link
              href="#"
              className="text-white/70 text-sm hover:text-white transition-colors"
            >
              <CompassIcon className="inline-block mr-2 h-4 w-4" />
              Discover
            </Link>
          </nav>
          <nav className="hidden md:flex gap-4 items-center">
            <p className="text-white/70 text-sm transition-colors">
              {new Date().toLocaleDateString()}
            </p>
            <Link href={"/host-event"}>
              <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white text-sm rounded-full">
                Host Event
              </Button>
            </Link>
            <div className="relative w-8 h-8 rounded-full overflow-hidden cursor-pointer">
              <Image
                src={user.profilePictureUrl || "/default-avatar.png"}
                className="object-cover"
                width={40}
                height={40}
                alt="User Profile"
              />
            </div>
          </nav>
        </div>
      </header>

      <div className="w-full max-w-4xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
};

export default RootLayout;
