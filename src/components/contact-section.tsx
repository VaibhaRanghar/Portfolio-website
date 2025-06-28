"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    ("error" | "success") | null
  >(null);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vaibhav-ranghar-355081294/",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/VaibhaRanghar",
      color: "hover:text-gray-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/vaibhav.12r/",
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:vaibhavranghar150@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      console.error("Error. Enter your details carefully");
      return;
    }
    console.log(formData);
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        console.log(result);
      } else {
        setSubmitStatus("error");
        console.error("Error:", result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
    if (submitStatus === "error") {
      toast.error(" Failed to send message. Please try again.");
    } else {
      toast.success(" Message sent successfully!");
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mb-32 mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {"Let's"} Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {"You've"} got the <span className="text-blue-400">vision.</span>{" "}
            {"I've"} got the <span className="text-yellow-400">skills.</span>{" "}
            {"Let's"} build something remarkable{" "}
            <span className="text-red-400">together.</span>
          </p>

          {/* Prominent CTA Button */}
          {/*<motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
          </motion.div>*/}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            id="contact-form"
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="bg-gray-800/50 border-gray-600 focus:border-blue-400 text-white placeholder-gray-400"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="bg-gray-800/50 border-gray-600 focus:border-blue-400 text-white placeholder-gray-400"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="bg-gray-800/50 border-gray-600 focus:border-blue-400 text-white placeholder-gray-400 resize-none"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 glass-effect rounded-xl transition-all duration-300 ${social.color} group cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="glass-effect p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-xl font-bold mb-4">
                {"Let's"} Build Something Amazing
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {"I'm"} always excited to work on new projects and collaborate
                with passionate individuals. Whether you have a specific project
                in mind or just want to explore possibilities, {"I'd"} love to
                hear from you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
