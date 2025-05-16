import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, LinkIcon, Smartphone, ChevronDown } from "lucide-react";
import { FaXTwitter, FaInstagram, FaChartSimple } from "react-icons/fa6";
import AuthCard from "./AuthCard";

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
            NoCap
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="#features"
              className="text-white/70 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="text-white/70 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              About
            </Link>
            <AuthCard initialFormState="login">
              <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full">
                Login
              </Button>
            </AuthCard>
          </nav>
          <AuthCard initialFormState="login">
            <Button className="md:hidden bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full">
              Login
            </Button>
          </AuthCard>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400 tracking-tight">
            NoCap
          </h1>
          <p className="text-xl md:text-3xl mb-10 max-w-2xl font-medium">
            Ask. Spill. Repeat. All anonymous.{" "}
            <span className="text-pink-400 animate-pulse">NoCap.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <AuthCard initialFormState="register">
              <Button className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]">
                Drop Your Link <LinkIcon className="ml-2" />
              </Button>
            </AuthCard>
          </div>

          {/* Mockup */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div className="text-lg font-medium">Anonymous asked:</div>
              </div>
              <p className="text-lg mb-4">
                lowkey, what&apos;s your biggest hot take that would get you
                canceled? spill the tea ☕
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60">2h ago</span>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="#features"
              className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors"
            >
              <span className="mb-2">Vibe check the features</span>
              <ChevronDown className="animate-bounce" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 py-20 bg-black/30 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            No cap, just <span className="text-pink-400">straight facts</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
                <MessageSquare className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Fully anonymous replies
              </h3>
              <p className="text-white/70">
                Spill your thoughts without the fear. Your identity stays
                locked, fr fr.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all">
                <LinkIcon className="text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Custom link for your socials
              </h3>
              <p className="text-white/70">
                Drop your unique link anywhere. Let the tea flow straight to
                your inbox.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
                <FaChartSimple className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Drip Worthy Dashboards</h3>
              <p className="text-white/70">
                Track your vibes with our dope analytics. See what your hood is
                saying.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
                <Smartphone className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile-first design</h3>
              <p className="text-white/70">
                Tell your secret confession from anywhere. Perfect mobile
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get real?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Create your anonymous link and let people drop their truth bombs.
            </p>
            <Button className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]">
              Start Your Vibe Check
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="relative z-10 py-20 bg-black/30 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked <span className="text-pink-400">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto grid gap-6">
            {/* FAQ Item 1 */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">
                Is it really anonymous?
              </h3>
              <p className="text-white/70">
                Deadass. We don&apos;t store IP addresses or any identifying
                info. Your tea stays between you and them.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">Is NoCap free to use?</h3>
              <p className="text-white/70">
                Basic features are free. Premium features like custom themes and
                priority support are available for a small monthly fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400">
              NoCap
            </div>

            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/60">Built for chaos. NoCap.</p>
            </div>

            <div className="flex gap-4">
              <Link
                target="_blank"
                href="https://x.com/manisubham09"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all group"
              >
                <FaXTwitter className="text-white/70 group-hover:text-pink-400 transition-colors" />
              </Link>
              <Link
                target="_blank"
                href="https://instagram.com/subhamxmani"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all group"
              >
                <FaInstagram className="text-white/70 group-hover:text-purple-400 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>
              © {new Date().getFullYear()} NoCap. All rights reserved. Privacy
              Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
