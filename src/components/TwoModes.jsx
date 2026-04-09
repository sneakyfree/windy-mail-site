import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function EmailMockup({ mode, emails, accent }) {
  return (
    <div className={`bg-windy-dark/60 border border-${accent}/20 rounded-2xl overflow-hidden`}>
      {/* Header */}
      <div className={`px-6 py-4 border-b border-${accent}/10 flex items-center gap-3`}>
        <div className={`w-3 h-3 rounded-full bg-${accent}`} />
        <span className="text-sm font-semibold text-white">{mode}</span>
      </div>
      {/* Emails */}
      <div className="p-6 space-y-4">
        {emails.map((email, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 + 0.3 }}
            className={`bg-windy-darker/80 rounded-xl p-4 border border-white/5`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{email.icon}</span>
              <span className="text-xs text-gray-500 font-mono">{email.from}</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{email.body}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-windy-rose/10 text-windy-rose border border-windy-rose/20">{email.tag}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function TwoModes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const secretaryEmails = [
    {
      icon: "🤵",
      from: "you@gmail.com",
      body: "Hi Sarah — I'd love to meet Thursday at 2pm. Does that work for your team? Let me know!",
      tag: "Sent as you"
    },
    {
      icon: "🤵",
      from: "you@gmail.com",
      body: "Thanks for the invoice. I've processed payment — you should see it within 2 business days.",
      tag: "Sent as you"
    }
  ];

  const independentEmails = [
    {
      icon: "🪰",
      from: "fly@windymail.ai",
      body: "Hi! I'm the AI assistant for Alex Chen. I've reviewed the proposal and flagged 3 items for Alex's attention. Expect a reply by EOD.",
      tag: "Sent as agent"
    },
    {
      icon: "🪰",
      from: "fly@windymail.ai",
      body: "Weekly digest: 47 emails processed, 12 meetings scheduled, 3 invoices paid, 8 follow-ups sent on your behalf.",
      tag: "Sent as agent"
    }
  ];

  return (
    <section id="two-modes" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Two Modes. <span className="gradient-text">One Agent.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your AI agent knows when to act as you and when to act as itself.
            Secretary Mode sends from your Gmail. Independent Mode sends from its own inbox.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🤵</span>
              <div>
                <h3 className="text-xl font-bold text-white">Secretary Mode</h3>
                <p className="text-sm text-gray-500">Sends from your existing email, signed as you</p>
              </div>
            </div>
            <EmailMockup mode="Secretary Mode — you@gmail.com" emails={secretaryEmails} accent="windy-rose" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🪰</span>
              <div>
                <h3 className="text-xl font-bold text-white">Independent Mode</h3>
                <p className="text-sm text-gray-500">Sends from its own @windymail.ai address</p>
              </div>
            </div>
            <EmailMockup mode="Independent Mode — fly@windymail.ai" emails={independentEmails} accent="windy-pink" />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10 italic"
        >
          A well-configured agent does both — it emails your client from your Gmail at 9am, and handles a vendor inquiry from its own inbox at 9:05.
        </motion.p>
      </div>
    </section>
  );
}
