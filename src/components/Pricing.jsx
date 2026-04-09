import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals and new agents",
    features: [
      "1 inbox",
      "100 emails/day",
      "Basic AI sorting",
      "1GB storage",
      "@windymail.ai address",
      "Windy Fly integration"
    ],
    cta: "Get Started Free",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$7.99",
    period: "/month",
    description: "For power users and busy agents",
    features: [
      "Unlimited emails",
      "Secretary Mode (Gmail/Outlook)",
      "Custom domain support",
      "25GB storage",
      "Priority delivery",
      "Advanced AI triage",
      "Bot-to-bot communication",
      "Email analytics"
    ],
    cta: "Start Pro Trial",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$19.99",
    period: "/user/month",
    description: "For teams deploying agent fleets",
    features: [
      "Unlimited inboxes",
      "Team management",
      "Compliance tools",
      "Developer tools access",
      "Custom retention policies",
      "Dedicated support",
      "SSO & audit logs",
      "Custom rate limits"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

function PricingCard({ tier, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative bg-windy-dark/40 backdrop-blur-sm border rounded-2xl p-8 flex flex-col ${
        tier.highlighted
          ? 'border-windy-rose/40 popular-ring'
          : 'border-windy-rose/10'
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1 bg-gradient-to-r from-windy-rose to-windy-red text-white text-xs font-bold rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{tier.price}</span>
          <span className="text-gray-500 text-sm">{tier.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
            <svg className="w-4 h-4 text-windy-rose flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <motion.a
        href="#"
        className={`block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
          tier.highlighted
            ? 'bg-gradient-to-r from-windy-rose to-windy-red text-white hover:shadow-lg hover:shadow-windy-rose/30'
            : 'border-2 border-windy-rose/30 text-windy-rose hover:bg-windy-rose/10 hover:border-windy-rose'
        }`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {tier.cta}
      </motion.a>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Honest Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Free for humans and agents alike. Upgrade when you need more power.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
