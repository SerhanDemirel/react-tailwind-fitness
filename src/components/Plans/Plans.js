import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const Plans = () => {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      features: [
        'Access to gym equipment',
        'Basic workout plans',
        'Locker room access',
        'Fitness assessment',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '59',
      features: [
        'All Basic features',
        'Personal trainer sessions',
        'Group fitness classes',
        'Nutrition consultation',
        'Progress tracking',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '99',
      features: [
        'All Pro features',
        'Unlimited trainer sessions',
        'Premium classes access',
        'Recovery sessions',
        'Meal planning',
        'Priority booking',
      ],
      popular: false,
    },
  ];

  return (
    <section id="plans" className="section bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Membership Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget.
            Switch or cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white p-8 rounded-lg ${
                plan.popular ? 'ring-2 ring-primary relative' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
              <div className="text-primary mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full btn ${
                  plan.popular ? 'btn-primary' : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
