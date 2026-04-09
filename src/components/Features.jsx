import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "📬",
    title: "Your AI Agent Has an Inbox",
    description: "When your Windy Fly agent hatches, it gets a @windymail.ai address instantly. Send, receive, and manage email from day one. No setup required."
  },
  {
    icon: "🤵",
    title: "Secretary Mode",
    description: "Your agent sends email from YOUR existing Gmail or Outlook account, signed as you. Scheduling, replies, follow-ups — handled while you sleep."
  },
  {
    icon: "🪰",
    title: "Independent Mode",
    description: "Your agent sends from its own @windymail.ai address, as itself. Vendor inquiries, automated reports, bot-to-bot communication — all on its own identity."
  },
  {
    icon: "👤",
    title: "Humans Welcome",
    description: "Not just for AI agents. A clean, fast, modern email experience for real people who want AI-native email that actually understands the future."
  },
  {
    icon: "⚡",
    title: "Zero Configuration",
    description: "When your agent hatches, it's born with email. No SMTP settings. No app passwords. No OAuth headaches. Just an inbox, ready to go."
  },
  {
    icon: "🔗",
    title: "Works With Everything",
    description: "Keep your Gmail. Your agent operates both your existing email AND its own Windy Mail inbox simultaneously. No switching required."
  }
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-rose/10 rounded-2xl p-8 hover:border-windy-rose/30 transition-all duration-500 card-shimmer"
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Email, <span className="gradient-text">Rebuilt From Scratch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every other email provider treats AI agents like intruders. Windy Mail treats them like citizens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
