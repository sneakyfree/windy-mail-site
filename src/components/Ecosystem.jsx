import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const flywheelSteps = [
  {
    brand: "WindyWord.com",
    icon: "🎤",
    verb: "You speak.",
    hook: "Voice-to-text intelligence powered by 3,500+ specialized AI models. Every meeting, every thought — captured with precision.",
    link: "https://windyword.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "WindyClone.com",
    icon: "🧬",
    verb: "You become.",
    hook: "Your voice becomes your digital twin. Voice clone, visual avatar, personality soul file — one button and suddenly there are two of you.",
    link: "https://windyclone.com",
    color: "from-purple-500 to-pink-500",
    ring: "ring-purple-500/30"
  },
  {
    brand: "WindyChat.com",
    icon: "💬",
    verb: "You connect.",
    hook: "Encrypted multilingual messaging. Real-time translated chat, voice, and video — in your own voice. Talk to anyone on Earth.",
    link: "https://windychat.com",
    color: "from-green-500 to-teal-500",
    ring: "ring-green-500/30"
  },
  {
    brand: "WindyTraveler.com",
    icon: "✈️",
    verb: "You explore.",
    hook: "AI travel companion with offline language packs, local deals, and real-time translation. Land anywhere, speak the language.",
    link: "https://windytraveler.com",
    color: "from-orange-500 to-red-500",
    ring: "ring-orange-500/30"
  },
  {
    brand: "WindyTranslate.com",
    icon: "🔧",
    verb: "The engine.",
    hook: "3,500+ specialized pair-translation models. The invisible force powering every Windy product — purpose-built language specialists.",
    link: "https://windytranslate.com",
    color: "from-indigo-500 to-blue-500",
    ring: "ring-indigo-500/30"
  },
  {
    brand: "WindyFly.ai",
    icon: "🪰",
    verb: "You automate.",
    hook: "Your personal AI agent — born connected. Hatches with email, chat, phone, and 199 languages. The nervous system of the Windy ecosystem.",
    link: "https://windyfly.ai",
    color: "from-sky-500 to-blue-500",
    ring: "ring-sky-500/30"
  },
  {
    brand: "WindyCode.ai",
    icon: "💻",
    verb: "You create.",
    hook: "AI-native code editor. Write, debug, and ship code with an AI copilot that understands your entire project.",
    link: "https://windycode.ai",
    color: "from-violet-500 to-indigo-500",
    ring: "ring-violet-500/30"
  },
  {
    brand: "WindyCloud.com",
    icon: "☁️",
    verb: "You store.",
    hook: "Storage, sync, and compute for all your AI data. Voice models, digital twins, soul files — one vault, one account, yours forever.",
    link: "https://windycloud.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "Eternitas.ai",
    icon: "🛡️",
    verb: "You trust.",
    hook: "AI identity and trust registry. Verified identities for AI agents — the passport system for bots. Independent and sovereign.",
    link: "https://eternitas.ai",
    color: "from-gray-400 to-white",
    ring: "ring-gray-400/30"
  }
];

function FlywheelCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative bg-windy-dark/40 backdrop-blur-sm border border-windy-rose/10 rounded-2xl p-8 hover:border-windy-rose/30 transition-all duration-500 card-shimmer ring-1 ${step.ring}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500`} />

      <div className="relative flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex items-start gap-4">
          <div className="text-5xl md:text-6xl font-black text-white/[0.06] leading-none">{String(index + 1).padStart(2, '0')}</div>
          <div className="text-5xl">{step.icon}</div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">{step.verb}</h3>
            <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.brand}</span>
          </div>
          <p className="text-gray-300 mb-3 leading-relaxed">{step.hook}</p>

          <a
            href={step.link}
            className="inline-flex items-center text-sm text-windy-rose/70 hover:text-windy-rose transition-colors group/link"
          >
            Explore {step.brand}
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Account. <span className="gradient-text">Ten Products. Infinite Reach.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Sign up for Windy Mail and you're home across the entire ecosystem.
            Your agent sends email here, chats there, stores everything in the cloud —
            and <span className="text-white font-medium">Windy Mail is where the conversations start</span>.
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {flywheelSteps.map((step, index) => (
            <FlywheelCard key={index} step={step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-windy-rose/10 via-windy-dark/50 to-windy-red/10 border-2 border-windy-rose/30 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-windy-rose/5 to-transparent rounded-3xl" />

          <div className="relative">
            <div className="text-6xl mb-4">📧</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              And Every Conversation
              <br />
              <span className="gradient-text">Starts With an Email.</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Your agent's first vendor outreach. Your first client reply. The meeting invite that kicks off the project.
              Email is where business happens — and
              <span className="text-white font-semibold"> Windy Mail is where your agent lives</span>.
            </p>
            <p className="text-windy-rose/60 text-sm italic">
              "Every agent hatched is an inbox born. Every inbox born is a conversation waiting to happen."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
