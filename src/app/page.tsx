"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const projects = [
    {
      title: "Showshul - Social Commerce",
      description:
        "Voucher system, multi-step post creation UI, location tagging.",
      tech: ["React Native", "Redux", "Firebase", "Google Place API", 'Amazon IVS', "video-playback"],
      image: "/projects/showshul.jpeg",
    },
    {
      title: "Service Marketplce Mobile App",
      description: "Irantasker is a trusted community platform that connects people who need to outsource tasks and find local services, with people who are looking to earn money and ready to work.",
      tech: ["React Native", "Redux", "RTK Query"],
      image: "/projects/marketplace.webp",
    },
    {
      title: "E-commerce Shopping App",
      description: "Product listing, cart, checkout, Firebase auth.",
      tech: ["React Native", "Firebase", "Stripe"],
      image: "/projects/ecommerce.webp",
    },
    {
      title: "Endoscopy Community Platform",
      description: "Communtiy platform for endoscopy researcher for sharing their research to each other. Post creating with image or video, design a homescreen with listing of pposts, Firebase auth.",
      tech: ["React Native", "Firebase", "Stripe"],
      image: "/projects/ecommerce.webp",
    },
    // add more projects...
  ];

  const openModal = (img: string) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

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
          experiences with React Native. Over the years, I&apos;ve worked on
          everything from e-commerce to chat and video streaming apps. I love
          turning complex problems into elegant UI designs and constantly
          improving my skills.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-0">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="cursor-pointer"
                onClick={() => openModal(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded mb-4 object-cover h-48 w-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-600 text-sm px-3 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
          ariaHideApp={false}
        >
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-white text-xl bg-purple-600 px-3 py-1 rounded"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Project Preview"
              width={800}
              height={500}
              className="rounded shadow-lg"
            />
          </div>
        </Modal>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Contact Me</h2>
        {submitted && (
          <div className="mb-4 text-green-500 bg-green-100 border border-green-400 px-4 py-2 rounded">
            ✅ Message sent successfully!
          </div>
        )}
        <form
          action="https://formsubmit.co/9e9d67fbeea95505c53786ace131c4b5"
          method="POST"
          className="space-y-4"
          onSubmit={() => setSubmitted(true)}
          target="_blank"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Form Message!"
          />
          <input
            type="hidden"
            name="_next"
            value="https://visheshportfolio-vz6w.vercel.app/thanks"
          />
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            rows={4}
            required
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
