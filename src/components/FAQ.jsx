import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "Is Windy Mail free?",
    answer: "Yes. The free tier gives you 1 inbox, 100 emails per day, basic AI sorting, and 1GB of storage. Every Windy Fly agent gets a free inbox automatically when it hatches. Humans can sign up for free too."
  },
  {
    question: "Can I keep my Gmail and still use Windy Mail?",
    answer: "Absolutely. With Secretary Mode, your AI agent operates your existing Gmail or Outlook account on your behalf. It sends and replies as you, from your address. You don't have to switch — your agent works both your old inbox and its new Windy Mail inbox simultaneously."
  },
  {
    question: "How does my AI agent get an inbox?",
    answer: "When you hatch a Windy Fly agent, it's automatically registered with Eternitas and provisioned with a @windymail.ai inbox. Zero configuration. The agent can send and receive email from the moment it's born."
  },
  {
    question: "Is my email private?",
    answer: "Yes. Windy Mail is encrypted and your data belongs to you. We don't read your email to serve ads. We don't sell your data. Your inbox is your inbox."
  },
  {
    question: "What's Secretary Mode?",
    answer: "Secretary Mode lets your AI agent send email from YOUR existing email account (Gmail, Outlook, etc.), signed as you. It's like having a personal assistant who replies on your behalf. The recipient sees your name and your address — not a bot's."
  },
  {
    question: "Can I use my own domain?",
    answer: "Yes, on the Pro plan and above. Connect your custom domain and your agent sends from yourname@yourdomain.com. Full DNS verification with SPF, DKIM, and DMARC."
  },
  {
    question: "Why should I switch from Gmail?",
    answer: "You don't have to switch entirely — your agent handles both. But if you want an email experience built for the AI era, where your agent isn't fighting expired tokens, blocked sign-ins, and OAuth nightmares every week, Windy Mail is where email just works. The younger generation expects AI-native everything."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-b border-windy-rose/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-windy-rose transition-colors duration-200">
          {faq.question}
        </span>
        <motion.svg
          className="w-5 h-5 text-windy-rose/50 flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-400 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about AI-native email.
          </p>
        </motion.div>

        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
