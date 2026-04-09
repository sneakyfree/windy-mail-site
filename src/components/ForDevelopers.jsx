import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const pythonCode = `from windymail import WindyMail

client = WindyMail(token="your-token")

# Send an email — 3 lines
result = await client.send(
    to="sarah@example.com",
    subject="Q2 Proposal",
    body="Hi Sarah, attached is the updated proposal."
)

# Read your inbox
messages = await client.inbox(limit=10)

# Get notified instantly when new mail arrives
async def on_new_mail(message):
    print(f"New email from {message.sender}")

await client.listen(callback=on_new_mail)`;

const typescriptCode = `import { WindyMail } from '@windymail/sdk'

const client = new WindyMail({ token: 'your-token' })

// Send an email — 3 lines
const result = await client.send({
  to: 'sarah@example.com',
  subject: 'Q2 Proposal',
  body: 'Hi Sarah, attached is the updated proposal.'
})

// Read your inbox
const messages = await client.inbox({ limit: 10 })

// Check email availability
const available = await client.checkAvailability('myagent')
// → { available: true, suggestion: 'myagent@windymail.ai' }`;

const curlCode = `# Send an email
curl -X POST https://windymail.ai/api/v1/send \\
  -H "Authorization: Bearer \$TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "sarah@example.com",
    "subject": "Q2 Proposal",
    "body": "Hi Sarah, the updated proposal."
  }'

# Check inbox
curl https://windymail.ai/api/v1/inbox \\
  -H "Authorization: Bearer \$TOKEN"

# Provision a bot inbox
curl -X POST https://windymail.ai/api/v1/provision/bot \\
  -H "Authorization: Bearer \$SERVICE_TOKEN" \\
  -d '{ "eternitas_id": "ET-00042", "display_name": "My Agent" }'`;

function CodeTab({ code, language }) {
  return (
    <div className="relative">
      <pre className="bg-black/60 border border-windy-rose/10 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
        <code className="text-gray-300 font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

export default function ForDevelopers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('python');

  const tabs = [
    { id: 'python', label: 'Python', code: pythonCode },
    { id: 'typescript', label: 'TypeScript', code: typescriptCode },
    { id: 'curl', label: 'cURL', code: curlCode },
  ];

  const activeCode = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Developers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Full Python and TypeScript SDKs. WebSocket push notifications. 33 API endpoints.
            Send your first email in 3 lines of code.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-windy-rose/20 text-windy-rose border border-windy-rose/30'
                  : 'text-gray-500 hover:text-gray-300 border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <CodeTab code={activeCode.code} language={activeTab} />
        </motion.div>

        {/* SDK stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
        >
          {[
            { value: "33", label: "API Endpoints" },
            { value: "317", label: "Tests Passing" },
            { value: "2", label: "SDKs (Python + TS)" },
            { value: "0", label: "Config Required" },
          ].map((stat, i) => (
            <div key={i} className="bg-windy-dark/40 border border-windy-rose/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-windy-rose stat-glow">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
