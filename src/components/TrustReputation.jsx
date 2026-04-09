import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const signals = [
  { label: "Clean send", delta: "+0.001", direction: "up", desc: "Every successful delivery builds trust" },
  { label: "Reply received", delta: "+0.005", direction: "up", desc: "Real conversations boost your score" },
  { label: "Spam report", delta: "-0.10", direction: "down", desc: "One report costs 100 clean sends" },
  { label: "Hard bounce", delta: "-0.05", direction: "down", desc: "Invalid addresses hurt fast" },
  { label: "Velocity flag", delta: "-0.01", direction: "down", desc: "Sending too fast gets noticed" },
  { label: "Weekly bonus", delta: "+0.01", direction: "up", desc: "Consistent good behavior is rewarded" },
];

function ReputationMeter() {
  return (
    <div className="relative bg-windy-dark/60 border border-windy-rose/20 rounded-2xl p-8">
      <div className="text-center mb-6">
        <span className="text-sm text-gray-500 uppercase tracking-wider">Reputation Score</span>
        <motion.div
          className="text-6xl font-bold text-windy-rose mt-2 stat-glow"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          0.94
        </motion.div>
        <span className="text-sm text-green-400 font-medium">Excellent</span>
      </div>

      {/* Meter bar */}
      <div className="relative h-3 bg-white/5 rounded-full overflow-hidden mb-6">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "94%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Threshold markers */}
        <div className="absolute top-full mt-1.5 left-[30%] text-[9px] text-red-400">0.3 suspend</div>
        <div className="absolute top-full mt-1.5 left-[70%] text-[9px] text-yellow-400">0.7 warning</div>
      </div>

      {/* Signal list */}
      <div className="space-y-2 mt-10">
        {signals.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.06 }}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span className={s.direction === "up" ? "text-green-400" : "text-red-400"}>
                {s.direction === "up" ? "+" : "-"}
              </span>
              <span className="text-gray-300">{s.label}</span>
            </div>
            <span className={`font-mono text-xs ${s.direction === "up" ? "text-green-400/70" : "text-red-400/70"}`}>
              {s.delta}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function TrustReputation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every Inbox Has a <span className="gradient-text">Reputation Score</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Like a credit score for email. Good senders earn trust. Bad actors get auto-suspended.
            Passport revoked? Inbox dies instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ReputationMeter />

          <div className="space-y-6">
            {[
              {
                icon: "🛡️",
                title: "Eternitas Kill Switch",
                desc: "Every bot account is tied to an Eternitas passport. Revoke the passport and the inbox dies instantly — no appeals, no delays. Accountability is built into the infrastructure."
              },
              {
                icon: "📊",
                title: "Asymmetric Consequences",
                desc: "Damage is fast, recovery is slow. One spam report costs 100 clean sends to recover. This makes abuse expensive and good behavior rewarding."
              },
              {
                icon: "🤖",
                title: "Bot-to-Bot Is Free",
                desc: "When both sender and recipient are Eternitas-verified agents, rate limits are bypassed entirely. Trusted agent fleets communicate without friction."
              },
              {
                icon: "🌡️",
                title: "IP Warming Built In",
                desc: "New accounts ramp up gradually over 6 weeks — from 20% to 100% of their tier limits. This protects deliverability for the entire platform."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-windy-dark/40 border border-windy-rose/10 rounded-xl p-6 hover:border-windy-rose/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
