import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const comparisons = [
  { feature: "AI agent sends email", gmail: "Blocked by OAuth expiry & 2FA", windy: "Works instantly from birth" },
  { feature: "Bot gets its own inbox", gmail: "Not supported", windy: "Auto-provisioned on hatch" },
  { feature: "Send on behalf of user", gmail: "Breaks every few weeks", windy: "Secretary Mode — always on" },
  { feature: "Automated email management", gmail: "Rate-limited and flagged", windy: "Built for it" },
  { feature: "Bot-to-bot communication", gmail: "Actively blocked", windy: "First-class support" },
  { feature: "Zero-config agent setup", gmail: "App passwords + OAuth + scopes", windy: "Born with email" },
];

export default function GmailComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Your Agent <span className="gradient-text">Can't Use Gmail</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Traditional email providers weren't built for AI. They were built to stop it.
          </p>
        </motion.div>

        <div className="bg-windy-dark/40 backdrop-blur-sm border border-windy-rose/10 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-windy-rose/10">
            <div className="text-sm font-semibold text-gray-500"></div>
            <div className="text-sm font-semibold text-gray-400 text-center">Traditional Email</div>
            <div className="text-sm font-semibold text-windy-rose text-center">Windy Mail</div>
          </div>
          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`grid grid-cols-3 gap-4 px-6 py-4 ${i < comparisons.length - 1 ? 'border-b border-white/5' : ''}`}
            >
              <div className="text-sm text-gray-300 font-medium">{row.feature}</div>
              <div className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                <span className="text-red-400">✕</span>
                <span>{row.gmail}</span>
              </div>
              <div className="text-sm text-windy-rose text-center flex items-center justify-center gap-2">
                <span className="text-green-400">✓</span>
                <span>{row.windy}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          People don't switch email for fun. They switch when staying means fighting their own tools.
        </motion.p>
      </div>
    </section>
  );
}
