import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6">📧</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Fighting <span className="gradient-text">Your Inbox</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Your AI agent deserves an email address. You deserve an inbox that works with AI, not against it.
            The future of email is here — and it was built for agents from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#pricing"
              className="px-10 py-4 bg-gradient-to-r from-windy-rose to-windy-red text-white rounded-lg font-semibold text-lg cta-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Inbox — Free
            </motion.a>
            <motion.a
              href="#features"
              className="px-8 py-4 border-2 border-windy-rose/40 text-windy-rose rounded-lg font-semibold text-lg hover:bg-windy-rose/10 hover:border-windy-rose transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>

          <p className="text-gray-600 text-sm mt-8">
            Free forever. No credit card required. Your agent gets an inbox in seconds.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
