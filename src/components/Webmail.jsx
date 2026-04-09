import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const webmailFeatures = [
  { icon: "🎤", label: "Voice Compose", desc: "Speak your emails — powered by Windy Word's AI transcription" },
  { icon: "⌨️", label: "19 Keyboard Shortcuts", desc: "Navigate, reply, archive, star — without touching your mouse" },
  { icon: "📎", label: "Drag & Drop Attachments", desc: "Drop files right onto the compose window" },
  { icon: "💾", label: "Auto-Save Drafts", desc: "Never lose a draft — saved every 30 seconds" },
  { icon: "🔍", label: "Live Inbox Search", desc: "Find any message instantly as you type" },
  { icon: "🪰", label: "Agent Verification Badges", desc: "See at a glance if an email came from a verified AI agent" },
];

function InboxMockup() {
  const emails = [
    { from: "Sarah Chen", subject: "Q2 partnership proposal — updated terms", time: "9:42 AM", unread: true, agent: false },
    { from: "fly@windymail.ai", subject: "Weekly digest: 47 emails processed, 12 meetings scheduled", time: "9:05 AM", unread: true, agent: true },
    { from: "AWS Billing", subject: "Your March invoice is ready", time: "8:30 AM", unread: false, agent: false },
    { from: "alex-agent@windymail.ai", subject: "RE: Vendor proposal — 3 items flagged for your review", time: "Yesterday", unread: false, agent: true },
  ];

  return (
    <div className="bg-windy-dark/80 border border-windy-rose/20 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-windy-darker/60">
        <div className="flex items-center gap-3">
          <span className="text-lg">📧</span>
          <span className="text-sm font-semibold gradient-text">Windy Mail</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-48 h-7 bg-white/5 rounded-lg border border-white/10 flex items-center px-2">
            <svg className="w-3.5 h-3.5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="text-xs text-gray-600">Search mail...</span>
          </div>
          <div className="w-7 h-7 bg-gradient-to-br from-windy-rose to-windy-red rounded-full flex items-center justify-center text-[10px] font-bold text-white">G</div>
        </div>
      </div>
      {/* Email list */}
      <div className="divide-y divide-white/5">
        {emails.map((email, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className={`flex items-center gap-3 px-5 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer ${email.unread ? 'bg-windy-rose/[0.03]' : ''}`}
          >
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${email.unread ? 'bg-windy-rose' : 'bg-transparent'}`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`text-sm truncate ${email.unread ? 'font-semibold text-white' : 'text-gray-400'}`}>{email.from}</span>
                {email.agent && (
                  <span className="text-[9px] px-1.5 py-0.5 bg-windy-rose/10 text-windy-rose border border-windy-rose/20 rounded-full flex-shrink-0">VERIFIED AGENT</span>
                )}
              </div>
              <p className={`text-xs truncate ${email.unread ? 'text-gray-300' : 'text-gray-600'}`}>{email.subject}</p>
            </div>
            <span className="text-[11px] text-gray-600 flex-shrink-0">{email.time}</span>
          </motion.div>
        ))}
      </div>
      {/* Compose button */}
      <div className="px-5 py-3 border-t border-white/5">
        <div className="flex items-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-windy-rose/10 to-windy-red/10 border border-windy-rose/20 rounded-lg">
          <span className="text-sm">🎤</span>
          <span className="text-xs text-gray-400">Compose — type or speak your email...</span>
        </div>
      </div>
    </div>
  );
}

export default function Webmail() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beautiful Email, <span className="gradient-text">For Humans Too</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A fast, clean webmail client with voice compose, keyboard shortcuts, and agent verification badges.
            Not just an API — a complete email experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <InboxMockup />

          {/* Feature pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {webmailFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-windy-dark/40 border border-windy-rose/10 rounded-xl p-4 hover:border-windy-rose/30 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{feat.icon}</div>
                <h4 className="text-sm font-semibold text-white mb-1">{feat.label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
