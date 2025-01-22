import React, { useState } from "react";
import {
  Video,
  Scissors,
  Youtube,
  Clock,
  Sparkles,
  ChevronRight,
  Play,
  Check,
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { supabase } from "./lib/supabase";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("waitlist").insert([{ email }]);

      if (error) {
        if (error.code === "23505") {
          toast.success("You're already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        toast.success("You've been added to the waitlist!");
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header/Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={
              process.env.PUBLIC_URL +
              "src/assets/gazon-high-resolution-logo.png"
            }
            alt="Shortsai Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold">Gazon</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-purple-400 transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-purple-400 transition">
            How it Works
          </a>
          <a href="#pricing" className="hover:text-purple-400 transition">
            Pricing
          </a>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Transform Your Videos into
              <span className="text-purple-500"> Viral Shorts</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Automatically generate engaging YouTube Shorts from any video
              using AI. Perfect length, perfect timing, perfect subtitles.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition">
                Start Creating Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-full text-lg font-semibold transition">
                Watch Demo
                <Play className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80"
              alt="Content Creator Setup"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-6">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Youtube className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">YouTube Integration</h3>
            <p className="text-gray-300">
              Simply paste any YouTube URL and let our AI do the magic
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Custom Duration</h3>
            <p className="text-gray-300">
              Choose your preferred length: 15s, 30s, or 60s
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Subtitles</h3>
            <p className="text-gray-300">
              AI-powered stylized subtitles that capture attention
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?auto=format&fit=crop&w=800&q=80"
              alt="AI Video Processing"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-16">How It Works</h2>
            <div className="space-y-12">
              <div className="relative">
                <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Upload or Paste URL
                </h3>
                <p className="text-gray-300">
                  Upload your video or paste a YouTube URL
                </p>
              </div>
              <div>
                <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Choose Settings</h3>
                <p className="text-gray-300">
                  Select duration and subtitle style preferences
                </p>
              </div>
              <div>
                <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Generate & Download
                </h3>
                <p className="text-gray-300">
                  Get your AI-optimized short in minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Success Stories that can be YOURS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
              alt="Client Testimonial"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">John Vaneez</h3>
              <p className="text-gray-300">Content Creator</p>
              <p className="mt-4 text-gray-400">
                "Shortsai has taken my YouTube content to the next level. The
                AI-generated Shorts are perfectly timed!"
              </p>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden">
            <img
              src={
                process.env.PUBLIC_URL +
                "src/assets/pexels-mart-production-7480559.jpg"
              }
              alt="Client Testimonial"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-300">Entrepreneur</p>
              <p className="mt-4 text-gray-400">
                "It’s amazing how quick and easy it is to create engaging
                shorts. Shortsai has saved me hours!"
              </p>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden">
            <img
              src={
                process.env.PUBLIC_URL +
                "src/assets/pexels-cottonbro-6473730.jpg"
              }
              alt="Client Testimonial"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Mikey Johnson</h3>
              <p className="text-gray-300">Influencer</p>
              <p className="mt-4 text-gray-400">
                "Gazon's AI-generated shorts have made my content more
                interactive and engaging. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="bg-gray-900/80 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Join Our Waitlist Now
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to try Shortsai and revolutionize your video content!
          </p>
          <form onSubmit={handleWaitlistSignup}>
            <div className="flex items-center justify-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-4 w-72 rounded-full text-gray-800 focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Please Wait..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Toaster />
    </div>
  );
}

export default App;
