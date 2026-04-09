import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "My Windy Fly agent handles 80% of my email now. Scheduling, vendor replies, invoice processing — all automated. I haven't touched my inbox in weeks and somehow nothing falls through the cracks. I just build.",
    name: "Marcus Rivera",
    role: "Founder, Beamlabs",
    avatar: "🚀"
  },
  {
    quote: "I set up Windy Mail for our family and our agent organizes school emails, appointment reminders, and permission slips automatically. My kids think it's magic. Honestly, so do I.",
    name: "Rachel Kim",
    role: "Parent & Teacher",
    avatar: "👩‍👧‍👦"
  },
  {
    quote: "I run five agents, each with its own Windy Mail inbox — one for research papers, one for grant applications, one for conference logistics, one for lab coordination, one for student mentoring. They all just... work. No token expiry. No OAuth nightmares.",
    name: "Dr. Amara Osei",
    role: "AI Researcher, Stanford",
    avatar: "🧪"
  }
];

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-windy-dark/40 backdrop-blur-sm border border-windy-rose/10 rounded-2xl p-8 hover:border-windy-rose/30 transition-all duration-500 card-shimmer"
    >
      <div className="text-windy-rose/30 text-5xl mb-4">"</div>
      <p className="text-gray-300 leading-relaxed mb-6 -mt-4">{testimonial.quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-windy-rose/10 border border-windy-rose/20 rounded-full flex items-center justify-center text-xl">
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
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
            People Who <span className="gradient-text">Stopped Fighting Email</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real people. Real agents. Real inboxes that actually work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
