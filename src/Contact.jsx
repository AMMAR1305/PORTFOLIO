import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "46dd97b4-9df1-485f-af36-c056e1305ea2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ Error sending message. Please try again.");
      }
    } catch (error) {
      setResult("⚠️ Network error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center px-6"
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Feel free to reach out for{" "}
        <span className="text-cyan-400 font-semibold">collaborations</span>,
        freelance projects, or exciting opportunities. I’ll respond as soon as
        possible 🚀
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/AMMAR1305"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 text-3xl transition transform hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ammar-h-17895a286/?trk=opento_sprofile_details"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 text-3xl transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=md.ammar1305@gmail.com&su=Hi&body=This%20is%20about%20position%20you%20are%20seeking"
          className="text-gray-400 hover:text-blue-400 text-3xl transition transform hover:scale-110"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://leetcode.com/u/Mohammad_ammar1305/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 text-3xl transition transform hover:scale-110"
        >
          <FaCode />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        className="max-w-xl mx-auto space-y-4 bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 rounded-lg font-semibold text-white transition transform hover:scale-105"
        >
          {loading ? "Sending..." : "Send Message ✉️"}
        </button>

        {result && (
          <p className="text-center mt-4 text-cyan-400 font-medium">{result}</p>
        )}
      </motion.form>
    </section>
  );
}
