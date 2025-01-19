import React from 'react';
import { motion } from 'framer-motion';
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-light pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Transform Your Body,{' '}
              <span className="text-primary">Transform Your Life</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our community and start your fitness journey today. Expert-led
              workouts, personalized plans, and a supportive environment to help
              you achieve your goals.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3"
              alt="Fitness Training"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
