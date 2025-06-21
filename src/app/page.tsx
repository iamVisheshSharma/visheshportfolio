"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 md:px-20 py-12 space-y-28">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <Image
          src="/profile.jpg"
          alt="Vishesh Sharma"
          width={128}
          height={128}
          className="w-32 h-32 mx-auto border-4 border-purple-500 shadow-lg object-cover"
          style={{ clipPath: "circle(40%)", shapeOutside: "circle(45%)" }}
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Hello, I&apos;m{" "}
          <span className="text-purple-500">Vishesh Sharma</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A passionate React Native developer with 3 years of experience
          building modern, beautiful mobile apps. Currently diving deeper into
          Node.js and backend development.
        </p>
        <a
          href="/Vishesh_Sharma_Resume.pdf"
          download
          className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-4 py-2 rounded transition"
        >
          📄 Download Resume
        </a>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href="https://github.com/iamVisheshSharma"
            className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-4 py-2 rounded transition"
          >
            <Github className="inline mr-2" /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/sharmavishesh07/"
            className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-4 py-2 rounded transition"
          >
            <Linkedin className="inline mr-2" /> LinkedIn
          </Link>
          <Link
            href="mailto:vishesh@example.com"
            className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-4 py-2 rounded transition"
          >
            <Mail className="inline mr-2" /> Contact
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-400">About Me</h2>
        <p className="text-gray-300">
          I&apos;m a mobile-first developer who crafts smooth, intuitive user
          experiences with React Native. Over the years, I've worked on
          everything from e-commerce to chat and video streaming apps. I love
          turning complex problems into elegant UI designs and constantly
          improving my skills.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-8">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">
              Showshul - Social Commerce
            </h3>
            <p className="text-gray-300 mt-2">
              Redesigned auth flows, integrated voucher system, post creation UI
              with multi-step navigation, and location tagging using Google
              Places API.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">
              AstroTalk Clone
            </h3>
            <p className="text-gray-300 mt-2">
              Built chat and wallet system for astrologer consultations with
              real-time billing based on per-minute pricing.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">
              MELD Calculator
            </h3>
            <p className="text-gray-300 mt-2">
              A medical tool to calculate liver disease severity using a mobile
              app UI and Node.js backend. Hosted with cost-effective AI model
              integration.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">
              Bluetooth Sensor Reader
            </h3>
            <p className="text-gray-300 mt-2">
              Native Android app using Kotlin that connects to Arduino device
              via Bluetooth, reads and displays live sensor data.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">
              Sales & Purchase Ledger
            </h3>
            <p className="text-gray-300 mt-2">
              Full-stack app to manage daily business operations, replacing
              paper ledgers using React Native and Node.js with secure data
              storage.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">
              Chat App with Socket.IO
            </h3>
            <p className="text-gray-300 mt-2">
              Private 1-on-1 real-time chat app using React Native and Node.js
              backend with PostgreSQL, Prisma, and WebSocket integration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
