import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, TrophyIcon, HeartIcon } from '@heroicons/react/24/outline';

const About = () => {
  const features = [
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: 'Expert Trainers',
      description: 'Our certified trainers are here to guide you through your fitness journey.',
    },
    {
      icon: <TrophyIcon className="h-8 w-8" />,
      title: 'Proven Results',
      description: 'Join thousands of successful members who have achieved their fitness goals.',
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: 'Supportive Community',
      description: 'Be part of a motivating community that helps you stay on track.',
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're more than just a gym. We're a community dedicated to helping you achieve
            your fitness goals through expert guidance and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-light p-8 rounded-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-block p-3 bg-primary bg-opacity-10 rounded-full text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
