import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, Sparkles, Brain, Network, Zap, Target, Users, BookOpen, Building2,
  Settings2, Database, GitBranch, Cpu, Boxes, Bot, Check, TrendingUp, ShieldAlert,
  Wallet, Rocket, MessageSquare, Mail, FileText, Video, Code2,
  BarChart3, Briefcase, Scale, ChevronRight, ArrowDown, ArrowUp,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};





function Counter({ value, suffix = '' }: { value: number | string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState('0');
  
  useEffect(() => {
    if (!isInView) return;
    const numValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
    if (isNaN(numValue)) {
      setDisplay(String(value));
      return;
    }
    
    let startTimestamp: number;
    const duration = 2000;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * numValue;
      
      let formatted = current.toFixed(Number.isInteger(numValue) ? 0 : 1);
      if (typeof value === 'string') {
        if (value.startsWith('$')) formatted = '$' + formatted;
        if (value.endsWith('M')) formatted = formatted + 'M';
      }
      
      setDisplay(formatted);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplay(String(value));
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}


function AnimatedGraph() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 10 50 Q 25 20 50 50 T 90 50"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.path
          d="M 20 80 Q 40 40 70 80 T 90 20"
          fill="none"
          stroke="#6E56FF"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 1 }}
        />
        <motion.circle cx="10" cy="50" r="1.5" fill="#00F0FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="50" cy="50" r="1.5" fill="#00F0FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="90" cy="50" r="1.5" fill="#00F0FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }} />
        <motion.circle cx="20" cy="80" r="1.5" fill="#6E56FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx="70" cy="80" r="1.5" fill="#6E56FF" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }} />
      </svg>
    </div>
  );
}

function Magnetic({ children, className = '' }: { children: React.ReactElement, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      className={className}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold tracking-tight">SynapseOS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#platform" className="hover:text-foreground transition">Platform</a>
            <a href="#agents" className="hover:text-foreground transition">AI Workforce</a>
            <a href="#why" className="hover:text-foreground transition">Why SynapseOS</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:Rehanjoe06@gmail.com" className="text-sm px-4 py-2 rounded-lg font-medium text-black relative overflow-hidden group" style={{ background: "var(--gradient-brand)" }}>
              <span className="relative z-10">Request Demo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-[0.2em] font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00F0FF", boxShadow: "0 0 10px #00F0FF" }} />
            SYNAPSEOS
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            The AI Intelligence Layer<br />That Makes Your Company{" "}
            <span className="text-gradient-brand animate-gradient inline-block">Think.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            SynapseOS connects your people, systems, knowledge, and decisions into one living intelligence that understands your business, predicts risks, and helps your organization act faster.
          </p>
          <p className="mt-6 max-w-4xl mx-auto text-base text-muted-foreground leading-relaxed">
            Every company generates enormous amounts of knowledge. Customer conversations. Meetings. Emails. Projects. Financial data. Product decisions. Engineering work. Operational processes. Over time, this knowledge becomes scattered across hundreds of systems and thousands of conversations.
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-base font-medium text-white leading-relaxed">
            Your company has the information. But no one—not even AI—understands how it all connects. SynapseOS changes that.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:Rehanjoe06@gmail.com" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-black glow-cyan"
              style={{ background: "var(--gradient-brand)" }}>
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#platform" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold glass hover:bg-white/5 transition">
              See SynapseOS in Action
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== PROBLEM ===================== */
function Problem() {
  const tools = ["Salesforce", "GitHub", "Slack", "Notion", "Jira", "Zoom", "Gmail", "Figma", "Snowflake", "Linear", "HubSpot", "Asana"];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE PROBLEM</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Your Company Is Losing Millions To Problems It Can't See
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>The biggest threats to your business rarely arrive without warning. They grow quietly. A strategic customer slowly becomes dissatisfied. A product release slips by weeks. A critical dependency blocks multiple teams. Revenue starts slowing. Costs begin increasing. Execution becomes slower every quarter.</p>
                <p>The warning signs already existed. But they were buried inside CRM records, support tickets, Slack conversations, emails, meeting notes, spreadsheets, documents, dashboards, and dozens of disconnected applications. Nobody connected the dots.</p>
                <p>Leadership only discovers the problem after the customer leaves. After revenue declines. After deadlines are missed. After the opportunity is gone.</p>
                <p className="text-white font-medium">The cost isn't missing data. The cost is discovering the truth too late. Every delayed decision becomes lost revenue. Every hidden dependency becomes operational cost. Every missed signal becomes a competitive disadvantage.</p>
                <p>The larger your company becomes, the more invisible these problems become.</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-3 gap-3">
              {tools.map((t) => (
                <motion.div key={t} variants={fadeUp}
                  className="aspect-square glass rounded-2xl flex flex-col items-center justify-center gap-2 grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition">
                  <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${t.toLowerCase()}.svg`} alt={t} className="w-8 h-8 opacity-70 invert" />
                  <div className="text-[10px] text-muted-foreground">{t}</div>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ===================== THE SHIFT ===================== */
function TheShift() {
  const before = ["Find this document.", "Summarize this meeting.", "Write this email.", "Answer questions.", "Find information."];
  const after = [
    "Why did revenue change?",
    "Which customers matter most?",
    "How do our teams work?",
    "Why were decisions made?",
    "What should happen next?",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 md:gap-12 w-full items-center">
        <div>
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE SHIFT</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              AI Was Supposed To Fix This.<br /><span className="text-gradient-brand">It Didn't.</span>
            </h2>
            <div className="mt-4 md:mt-6 space-y-4 text-base md:text-lg text-muted-foreground">
              <p>Companies invested heavily in AI expecting it would transform the business. Instead, most AI tools became better search engines.</p>
              <p>Useful? Absolutely. But they don't understand your company. They don't know why revenue changed. They don't know which customers matter most. They don't know how your teams work. They don't know why previous decisions were made. They don't know what should happen next.</p>
              <p className="font-medium text-white">They have intelligence. They don't have business intelligence.</p>
              <p>What companies actually need isn't another AI assistant. They need an AI system that understands their organization as well as their best executives do.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 md:mt-10 glass-strong rounded-2xl p-4 md:p-6 hidden sm:block">
              <div className="text-sm text-muted-foreground">Bottom line</div>
              <div className="mt-2 text-lg md:text-xl font-semibold">
                Think of SynapseOS as your company's intelligence layer. <span className="text-gradient-brand">Not ChatGPT for everyone. ChatGPT for your company.</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">MOST AI TOOLS DO THIS</div>
            <div className="space-y-3">
              {before.map((q) => (
                <motion.div variants={fadeUp} key={q} className="glass rounded-xl px-5 py-4 flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">"{q}"</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <div className="text-xs tracking-[0.2em] mb-4" style={{ color: "#00F0FF" }}>BUT BUSINESSES NEED THIS</div>
            <div className="space-y-3">
              {after.map((q) => (
                <motion.div variants={fadeUp} key={q} className="glass-strong rounded-xl px-5 py-4 flex items-center gap-3 border-white/10">
                  <Sparkles className="w-4 h-4" style={{ color: "#00F0FF" }} />
                  <span className="font-medium">"{q}"</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===================== GROWING COMPANIES (LIVING MODEL REPLACEMENT) ===================== */
function GrowingCompanies() {
  const cards = [
    { icon: Users, title: "People", text: "Who works on what. Who owns what. Who has expertise." },
    { icon: BookOpen, title: "Company Knowledge", text: "Meetings. Documents. Research. Emails. Decisions. Reports." },
    { icon: Building2, title: "Customers", text: "Relationships. Health. Revenue. Conversations. Opportunities. Risks." },
    { icon: Settings2, title: "Business Operations", text: "Projects. Processes. Dependencies. Approvals. Execution." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE OPERATIONAL CHALLENGE</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Growing Companies Face More Than Just <span className="text-gradient-brand">These Problems</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              As organizations grow, complexity grows even faster. SynapseOS also helps solve the operational challenges that every scaling business faces.
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan shrink-0" style={{ background: "#00F0FF" }} /> Growth becomes difficult to manage because no one has complete visibility.</li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan shrink-0" style={{ background: "#00F0FF" }} /> Valuable knowledge disappears when employees leave.</li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan shrink-0" style={{ background: "#00F0FF" }} /> Every new software tool creates another disconnected source of truth.</li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan shrink-0" style={{ background: "#00F0FF" }} /> Teams duplicate work because information isn't shared.</li>
              <li className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan shrink-0" style={{ background: "#00F0FF" }} /> Leaders spend more time searching for context than making decisions.</li>
            </ul>
            <p className="mt-8 font-medium text-white text-lg">
              Instead of adding another platform, SynapseOS connects everything you already have.
            </p>
          </Reveal>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.title} variants={fadeUp}
                className="glass-strong rounded-2xl p-6 group relative overflow-hidden">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.15), rgba(110,86,255,0.15))" }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-semibold mb-2">{c.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "var(--gradient-brand)", opacity: 0.5 }} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== MEET SYNAPSEOS (BENTO) ===================== */
function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(-200); my.set(-200); }}
      variants={fadeUp}
      className={`relative glass-strong rounded-3xl overflow-hidden group ${className ?? ""}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform([mx, my], ([x, y]: any) =>
            `radial-gradient(400px circle at ${x}px ${y}px, rgba(0,240,255,0.25), transparent 60%)`),
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function Bento() {
  return (
    <section id="platform" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">MEET SYNAPSEOS</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              The Enterprise <span className="text-gradient-brand">Intelligence Platform</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              SynapseOS sits above your existing software. It connects your CRM. ERP. Documents. Meetings. Email. Engineering tools. Communication platforms. Business systems. Instead of replacing your technology, it gives your entire organization one shared understanding of the business.
            </p>
          </Reveal>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-fr">
          {/* 01 */}
          <SpotlightCard className="md:col-span-3 p-8">
            <BentoHeader n="01" icon={Database} title="Enterprise Memory" />
            <h3 className="text-2xl font-semibold mt-4">Every interaction becomes part of your company's memory.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Meetings. Emails. Projects. Source code. Customer conversations. Business reports. Documents.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Unlike traditional storage, SynapseOS remembers: <span className="text-white">What happened. Why it happened. Who made the decision. What changed. Why it matters today.</span>
            </p>
          </SpotlightCard>

          {/* 02 */}
          <SpotlightCard className="md:col-span-3 p-8">
            <BentoHeader n="02" icon={Network} title="Enterprise Knowledge Graph" />
            <h3 className="text-2xl font-semibold mt-4">SynapseOS connects everything together.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Employees. Teams. Customers. Projects. Products. Processes. Goals. Decisions.
            </p>
            <p className="mt-3 text-white font-medium">
              Instead of isolated information, your business becomes one connected intelligence network.
            </p>
          </SpotlightCard>

          {/* 03 */}
          <SpotlightCard className="md:col-span-2 p-8">
            <BentoHeader n="03" icon={Brain} title="Business Reasoning Engine" />
            <h3 className="text-xl font-semibold mt-4">Traditional analytics explain what happened. SynapseOS explains why.</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="glass rounded-lg p-3">
                <div className="text-xs text-muted-foreground">INSTEAD OF:</div>
                <div>"Revenue declined by 8%."</div>
              </div>
              <div className="glass rounded-lg p-3 border-cyan/30" style={{ borderColor: "rgba(0,240,255,0.3)" }}>
                <div className="text-xs" style={{ color: "#00F0FF" }}>SYNAPSEOS EXPLAINS:</div>
                <div>"Enterprise renewals slowed after pricing changes. Three strategic customers now represent most of the revenue risk. Recommended action: Executive outreach within the next seven days."</div>
              </div>
            </div>
          </SpotlightCard>

          {/* 04 */}
          <SpotlightCard className="md:col-span-2 p-8">
            <BentoHeader n="04" icon={Cpu} title="Digital Twin" />
            <h3 className="text-xl font-semibold mt-4">A real-time digital model of your organization.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              It understands: How work flows. How decisions are made. How customers behave. How teams collaborate.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              {["Where are we losing efficiency?", "What's slowing growth?", "What happens if we change pricing?"].map((q) => (
                <div key={q} className="glass rounded-lg px-3 py-2 text-muted-foreground">"{q}"</div>
              ))}
            </div>
          </SpotlightCard>

          {/* 05 */}
          <SpotlightCard className="md:col-span-2 p-8">
            <BentoHeader n="05" icon={Bot} title="AI Workforce" />
            <h3 className="text-xl font-semibold mt-4">Every AI employee works with complete business context.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Not generic AI. Company-aware AI. Every AI agent understands:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Your business", "Your goals", "Your customers", "Your history", "Your processes", "Your permissions"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full glass">{t}</span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}

function BentoHeader({ n, icon: Icon, title }: { n: string; icon: any; title: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
          <Icon className="w-4 h-4" style={{ color: "#00F0FF" }} />
        </div>
        <div className="text-sm text-muted-foreground">{title}</div>
      </div>
      <div className="font-mono text-xs text-muted-foreground">{n}</div>
    </div>
  );
}

/* ===================== AGENTS ===================== */
const agents = [
  { name: "Executive Agent", role: "Strategic planning. Risk monitoring. Board preparation. Executive briefings. Decision support.", color: "#00F0FF", caps: ["Strategic planning", "Risk monitoring", "Decision support"] },
  { name: "Personal Agent", role: "Daily priorities. Meeting preparation. Knowledge retrieval. Task management. Execution tracking.", color: "#6E56FF", caps: ["Daily priorities", "Meeting preparation", "Execution tracking"] },
  { name: "Sales Agent", role: "Pipeline intelligence. Revenue forecasting. Deal preparation. Customer insights. Proposal generation.", color: "#00F0FF", caps: ["Pipeline intelligence", "Revenue forecasting", "Customer insights"] },
  { name: "Marketing Agent", role: "Campaign planning. Performance analysis. Messaging optimization. Market intelligence.", color: "#FF6EC7", caps: ["Campaign planning", "Performance analysis", "Market intelligence"] },
  { name: "Customer Success Agent", role: "Customer health. Churn prediction. Expansion opportunities. Sentiment monitoring.", color: "#6E56FF", caps: ["Customer health", "Churn prediction", "Sentiment monitoring"] },
  { name: "Product Agent", role: "Roadmap planning. Feature prioritization. Customer feedback analysis. Requirements generation.", color: "#00F0FF", caps: ["Roadmap planning", "Feature prioritization", "Requirements generation"] },
  { name: "Engineering Agent", role: "Architecture understanding. Code intelligence. Documentation. Technical risk analysis.", color: "#7CFF6E", caps: ["Code intelligence", "Documentation", "Technical risk analysis"] },
  { name: "Finance Agent", role: "Forecasting. Financial planning. Budget analysis. Performance insights.", color: "#FFB84D", caps: ["Forecasting", "Budget analysis", "Performance insights"] },
  { name: "Operations Agent", role: "Workflow optimization. Execution tracking. Resource planning. Bottleneck detection.", color: "#6E56FF", caps: ["Workflow optimization", "Resource planning", "Bottleneck detection"] },
];

function Agents() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current) {
        // Calculate the maximum scroll distance: track width minus viewport width plus some padding
        const range = trackRef.current.scrollWidth - window.innerWidth + 120;
        setScrollRange(range > 0 ? -range : 0);
      }
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, scrollRange]);

  return (
    <section id="agents" ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 w-full mb-14 shrink-0">
          <div className="max-w-3xl">
            <Reveal>
              <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">AI WORKFORCE</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Meet Your <span className="text-gradient-brand">AI Workforce</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-5 px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] w-max"
        >
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.6 }}
              className="shrink-0 w-[340px] glass-strong rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-40"
                style={{ background: a.color }} />
              <div className="relative flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${a.color}40, ${a.color}10)`, border: `1px solid ${a.color}40` }}>
                  <Bot className="w-5 h-5" style={{ color: a.color }} />
                </div>
                <div className="font-semibold">{a.name}</div>
              </div>
              <p className="text-sm text-muted-foreground mb-5 min-h-[4rem]">{a.role}</p>
              <div className="space-y-2">
                {a.caps.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: `${a.color}20` }}>
                      <Check className="w-3 h-3" style={{ color: a.color }} />
                    </div>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== ORCHESTRATOR ===================== */
function Orchestrator() {
  const steps = [
    { label: "Executive Planning", agent: "Executive Agent", icon: Target },
    { label: "Product Strategy", agent: "Product Agent", icon: Boxes },
    { label: "Engineering", agent: "Engineering Agent", icon: Code2 },
    { label: "Marketing", agent: "Marketing Agent", icon: Rocket },
    { label: "Sales", agent: "Sales Agent", icon: TrendingUp },
    { label: "Finance", agent: "Finance Agent", icon: Wallet },
    { label: "Operations", agent: "Operations Agent", icon: Settings2 },
    { label: "Execution", agent: "Personal Agent", icon: Zap },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE ORCHESTRATOR</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              One Goal. One Request. <span className="text-gradient-brand">One Intelligent Enterprise.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              Employees don't need to coordinate multiple AI tools. They simply describe the outcome.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 inline-block glass rounded-2xl px-5 py-3 text-left">
              <div className="text-xs text-muted-foreground">EXAMPLE</div>
              <div className="mt-1 font-medium">"Launch our new product in 90 days."</div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 relative max-w-2xl mx-auto">
          {/* connecting line + moving pulse */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px overflow-hidden"
            style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)" }}>
            <div className="w-full h-24 animate-flow-down"
              style={{ background: "linear-gradient(180deg, transparent, #00F0FF, #6E56FF, transparent)", boxShadow: "0 0 20px #00F0FF" }} />
          </div>

          <div className="space-y-4 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div 
                  key={s.label} 
                  variants={i % 2 === 0 ? fadeLeft : fadeRight}
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex items-center gap-4 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`glass-strong rounded-2xl px-5 py-4 flex items-center gap-4 w-[280px] ${i % 2 === 0 ? "" : "flex-row-reverse text-right"}`}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.15), rgba(110,86,255,0.15))" }}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{s.label}</div>
                      <div className="text-xs text-muted-foreground">{s.agent}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center text-muted-foreground max-w-2xl mx-auto">
            SynapseOS automatically coordinates. <span className="text-white">Instead of managing AI, employees manage outcomes.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== INTELLIGENCE MONITORS ===================== */
function Monitors() {
  const monitors = [
    { title: "Sales Intelligence", icon: TrendingUp, items: ["Detect revenue risks before sales decline."], value: "$4.2M", trend: "+12%" },
    { title: "Customer Intelligence", icon: Users, items: ["Identify churn before customers leave."], value: "94.2", trend: "NPS" },
    { title: "Operations Intelligence", icon: Boxes, items: ["Find operational bottlenecks before projects fail."], value: "38", trend: "signals" },
    { title: "Engineering Intelligence", icon: Code2, items: ["Discover technical risks before releases slip."], value: "12", trend: "risks" },
    { title: "Financial Intelligence", icon: Wallet, items: ["Spot financial changes before forecasts miss."], value: "$18M", trend: "runway" },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">PROACTIVE AI</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Business Intelligence That <span className="text-gradient-brand">Never Stops Learning</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              SynapseOS continuously monitors your organization for emerging risks and opportunities. The platform doesn't wait for reports. It continuously understands what's happening across the business.
            </p>
          </Reveal>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {monitors.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.title} variants={fadeUp}
                className={`glass-strong rounded-2xl p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                      <Icon className="w-4 h-4" style={{ color: "#00F0FF" }} />
                    </div>
                    <div className="font-medium">{m.title}</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#7CFF6E", boxShadow: "0 0 8px #7CFF6E" }} />
                    Live
                  </div>
                </div>
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <div className="font-mono text-3xl font-semibold">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.trend}</div>
                  </div>
                  {/* mini sparkline */}
                  <svg viewBox="0 0 100 30" className="w-32 h-10">
                    <path d="M0,20 L15,15 L30,22 L45,10 L60,14 L75,6 L100,12"
                      stroke="url(#spark)" strokeWidth="1.5" fill="none" />
                    <defs>
                      <linearGradient id="spark" x1="0" x2="1">
                        <stop offset="0" stopColor="#6E56FF" />
                        <stop offset="1" stopColor="#00F0FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-xs text-muted-foreground mb-2">DETECT</div>
                <div className="flex flex-wrap gap-2">
                  {m.items.map((it) => (
                    <span key={it} className="text-xs px-2.5 py-1 rounded-md glass">{it}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TypewriterText({ text, delay = 0 }: { text: string, delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <motion.span 
      onViewportEnter={() => {
        setTimeout(() => setStarted(true), delay);
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative"
    >
      <span className="opacity-0 pointer-events-none">{text}</span>
      <span className="absolute inset-0 left-0 top-0">{displayed}</span>
    </motion.span>
  );
}

/* ===================== WHY ===================== */
function Why() {
  const items = [
    { title: "Answers prompts", text: "Understands your business" },
    { title: "Searches information", text: "Connects organizational intelligence" },
    { title: "Generates content", text: "Recommends decisions" },
    { title: "Works independently", text: "Coordinates AI teams" },
    { title: "Reacts to requests", text: "Predicts business risks" },
    { title: "Generic knowledge", text: "Company-specific intelligence" },
    { title: "Session-based", text: "Continuously learns" },
  ];
  return (
    <section id="why" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">WHY SYNAPSEOS</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Most AI platforms answer questions.<br />
            <span className="text-gradient-brand">SynapseOS understands companies.</span>
          </h2>
        </Reveal>

        <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-14 divide-y divide-white/5 border-y border-white/5">
          <li className="grid grid-cols-[1fr_1fr] gap-6 items-center px-4 py-4 rounded-2xl text-xs text-muted-foreground tracking-widest font-mono">
            <div>TRADITIONAL AI</div>
            <div style={{ color: "#00F0FF" }}>SYNAPSEOS</div>
          </li>
          {items.map((it, i) => (
            <motion.li key={it.title} variants={fadeUp}
              className="group py-6 grid grid-cols-[1fr_1fr] gap-6 items-center hover:bg-white/[0.02] transition px-4 rounded-2xl -mx-4">
              <div className="text-lg md:text-xl font-medium text-muted-foreground line-through opacity-70">
                <TypewriterText text={it.title} delay={i * 100} />
              </div>
              <div className="text-lg md:text-xl font-semibold tracking-tight text-white group-hover:text-gradient-brand transition">
                <TypewriterText text={it.text} delay={i * 100 + it.title.length * 30 + 100} />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ===================== STACK + FOOTER ===================== */

function Stack() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="demo" className="relative py-32 overflow-hidden" style={{ perspective: "1000px" }}>
      <div className="absolute inset-0 -z-10 bg-brand-radial opacity-70" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE FUTURE</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              The Future Enterprise Runs On <span className="text-gradient-brand">Intelligence</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              Today's companies operate through software. Tomorrow's companies will operate through intelligence. SynapseOS transforms your existing technology into one intelligent operating layer.
            </p>
            <p className="mt-6 text-lg text-white font-medium">
              One that understands your business. Learns continuously. Predicts problems. Coordinates work. And helps every employee make better decisions.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="mt-16 glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 opacity-40"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,240,255,0.2), transparent 70%)" }} />
            <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight" style={{ transform: "translateZ(30px)" }}>
              Give Your Company A Brain.
            </h3>
            <p className="mt-4 text-muted-foreground" style={{ transform: "translateZ(20px)" }}>
              Your business already has the people. The systems. The data. The knowledge. What it's missing is an intelligence layer that brings everything together. Build the next generation of enterprise intelligence with SynapseOS.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3" style={{ transform: "translateZ(40px)" }}>
              <Magnetic><a href="mailto:Rehanjoe06@gmail.com" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-black glow-cyan" style={{ background: "var(--gradient-brand)" }}>Request a Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></a></Magnetic>
              <a href="tel:+918110929028" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold glass hover:bg-white/5 transition">
                Talk to Our Team
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground max-w-xl mx-auto" style={{ transform: "translateZ(10px)" }}>
              See how SynapseOS understands your business, uncovers hidden risks, and enables AI that truly works with your organization. Discover what your company looks like when every decision is powered by complete business intelligence.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-strong border border-white/10 hover:bg-white/10 transition-colors shadow-2xl group"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ===================== ROOT ===================== */
function Landing() {
  return (
    <div className="min-h-screen relative">
      <ScrollToTop />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <TheShift />
        <GrowingCompanies />
        <Bento />
        <Agents />
        <Orchestrator />
        <Monitors />
        <Why />
        <Stack />
      </main>
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-center text-[10px] text-muted-foreground/50">
          <span className="font-semibold text-white/50 mr-1">SynapseOS</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
