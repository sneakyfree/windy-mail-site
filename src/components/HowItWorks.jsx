import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Sign Up or Hatch",
    description: "Create a Windy Mail account as a human, or hatch a Windy Fly agent. Either way, you get a @windymail.ai inbox in seconds.",
    icon: "📧"
  },
  {
    number: "02",
    title: "Connect Your Existing Email",
    description: "Optionally link your Gmail or Outlook. Your AI agent can now send and receive email on your behalf — from your own address.",
    icon: "🔗"
  },
  {
    number: "03",
    title: "Let Your Agent Work",
    description: "Your agent handles scheduling, replies, follow-ups, and inbox triage automatically. You focus on what matters. It handles the rest.",
    icon: "🪰"
  },
  {
    number: "04",
    title: "Watch Email Just... Work",
    description: "No expired tokens. No blocked sign-ins. No fighting your tools. Email that works the way it should have worked all along.",
    icon: "✨"
  }
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-start gap-6"
    >
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-windy-rose/20 to-windy-red/20 border border-windy-rose/20 rounded-2xl flex items-center justify-center text-3xl">
        {step.icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-windy-rose/50 tracking-widest">{step.number}</span>
          <h3 className="text-xl font-bold text-white">{step.title}</h3>
        </div>
        <p className="text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Zero to <span className="gradient-text">Inbox</span> in Seconds
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No SMTP servers. No app passwords. No OAuth nightmares. Just email that works.
          </p>
        </motion.div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
