import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[83vh] bg-gradient-to-r from-indigo-50 to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl px-4"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-bold text-gray-800 mb-6"
        >
          Organize Your Work and Life, Finally.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-gray-600 mb-8"
        >
          Become focused and calm with ToDo tasks. This web app helps you stay
          organized and become more productive.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/todo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300"
        >
          Make ToDo Task
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;
