import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import LandingCalendarSvg from "./LandingCalendarSvg";

export default function LandingPage() {
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
              className="text-white/70 hover:text-white transition-colors"
            >
              Explore Events
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link href={"/login"}>
              <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full">
                Sign In
              </Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Link href={"/login"}>
              <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400">
                  Unforgettable events
                </span>
                <br />
                <span className="text-white">start here.</span>
              </h1>
              <p className="text-xl mb-8 text-white/80 max-w-xl">
                Create stunning event pages, manage RSVPs, and sell tickets with
                ease. Host memorable events that leave a lasting impression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href={"/home"}>
                  <Button className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]">
                    Create Your Event
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Event Illustration */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              <LandingCalendarSvg />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400">
              RSVPMe
            </div>
            <div className="text-center text-white/40 text-sm">
              <p>
                © {new Date().getFullYear()} RSVPMe. All rights reserved.
                Privacy Policy | Terms of Service
              </p>
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                target="_blank"
                href="https://x.com/manisubham09"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all group"
              >
                <FaXTwitter className="text-white/70 group-hover:text-pink-400 transition-colors" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/subhamxmani"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all group"
              >
                <FaInstagram className="text-white/70 group-hover:text-purple-400 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
