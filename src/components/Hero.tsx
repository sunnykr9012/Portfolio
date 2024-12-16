import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain } from 'lucide-react';

const Hero = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const hoverEffect = {
    whileHover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const rotateEffect = {
    animate: {
      rotate: [0, 360],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  };

  const bounceEffect = {
    whileHover: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6 py-20 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeIn}
              whileHover={{ scale: 1.05, color: "#6b46c1" }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <motion.span
                className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                {...hoverEffect}
              >
                Hii I am Sunny Data Analyst
              </motion.span>
              <br />& AI Web Developer
            </motion.h1>
            <motion.p
              variants={fadeIn}
              whileHover={{ scale: 1.05, color: "#6b46c1" }}
              className="text-gray-600 text-lg mb-8"
            >
              Transforming data into insights and ideas into interactive experiences.
              Specializing in AI-driven solutions and modern AI web development.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl overflow-hidden">
              <motion.div {...rotateEffect} className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 gap-8"
                >
                  <motion.div
                    variants={fadeIn}
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 0px 20px rgba(128, 90, 213, 0.5)" }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <Code2 className="w-12 h-12 text-purple-600 mb-4" />
                    <h3 className="font-semibold">Web Dev</h3>
                  </motion.div>
                  <motion.div
                    variants={fadeIn}
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 0px 20px rgba(37, 99, 235, 0.5)" }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <Database className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="font-semibold">Data Analysis</h3>
                  </motion.div>
                  <motion.div
                    variants={fadeIn}
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 0px 20px rgba(128, 90, 213, 0.5)" }}
                    className="bg-white p-6 rounded-xl shadow-lg col-span-2"
                  >
                    <Brain className="w-12 h-12 text-purple-600 mb-4" />
                    <h3 className="font-semibold">AI Solutions</h3>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
