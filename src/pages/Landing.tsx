import { motion, useScroll, useTransform, useMotionValue, type Variants, AnimatePresence } from "framer-motion";
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

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

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
            <a href="#intelligence" className="hover:text-foreground transition">Intelligence</a>
            <a href="#why" className="hover:text-foreground transition">Why Synapse</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:+918110929028" className="hidden sm:inline-flex text-sm px-4 py-2 rounded-lg glass hover:bg-white/5 transition">Talk to us</a>
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
function BrainVisual() {
  const nodes = [
    { x: 12, y: 20, icon: MessageSquare, label: "Slack" },
    { x: 85, y: 15, icon: Mail, label: "Gmail" },
    { x: 5, y: 55, icon: FileText, label: "Notion" },
    { x: 90, y: 60, icon: Video, label: "Zoom" },
    { x: 18, y: 85, icon: Code2, label: "GitHub" },
    { x: 78, y: 88, icon: BarChart3, label: "Salesforce" },
    { x: 45, y: 8, icon: Briefcase, label: "Linear" },
    { x: 55, y: 95, icon: Database, label: "Snowflake" },
  ];
  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl aspect-square md:aspect-[16/10]">
      {/* halo */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-70"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,240,255,0.35), transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(110,86,255,0.4), transparent 60%)" }} />
      <div className="relative w-full h-full glass-strong rounded-3xl overflow-hidden">
        {/* grid bg */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* connecting lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6E56FF" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {nodes.map((n, i) => (
            <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="url(#line)" strokeWidth="0.15" strokeDasharray="0.6 0.6">
              <animate attributeName="stroke-dashoffset" from="0" to="12" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
            </line>
          ))}
        </svg>
        {/* central brain */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], filter: ["blur(0px)", "blur(1px)", "blur(0px)"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative w-48 h-48 rounded-full flex items-center justify-center"
            style={{ background: "radial-gradient(circle, rgba(0,240,255,0.4), rgba(110,86,255,0.2) 60%, transparent 80%)" }}>
            <div className="absolute inset-6 rounded-full border border-cyan/30" />
            <div className="absolute inset-10 rounded-full border border-indigo/30" />
            <div className="absolute inset-0 rounded-full animate-[pulse-ring_3s_ease-out_infinite] border border-cyan/40" />
            <Brain className="w-16 h-16 relative z-10" style={{ color: "#00F0FF", filter: "drop-shadow(0 0 12px rgba(0,240,255,0.8))" }} />
          </div>
        </motion.div>
        {/* orbital nodes */}
        {nodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            >
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-white/80" />
              </div>
            </motion.div>
          );
        })}
        {/* corner metric widgets */}
        <div className="absolute top-4 left-4 glass rounded-xl px-3 py-2 text-xs">
          <div className="text-muted-foreground">Signals / min</div>
          <div className="font-mono text-cyan" style={{ color: "#00F0FF" }}>42,891</div>
        </div>
        <div className="absolute bottom-4 right-4 glass rounded-xl px-3 py-2 text-xs">
          <div className="text-muted-foreground">Agents active</div>
          <div className="font-mono" style={{ color: "#6E56FF" }}>1,204</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-[0.2em] font-medium">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00F0FF", boxShadow: "0 0 10px #00F0FF" }} />
            SYNAPSEOS
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            The Intelligence Layer<br />That Makes Companies{" "}
            <span className="text-gradient-brand animate-gradient inline-block">Think</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Your company already has the data. Your company already has the people. Your company already has AI tools.
            What it doesn't have is a system that understands everything together. SynapseOS creates an intelligent layer
            across your entire organization that understands your business, predicts problems, and powers AI employees
            that help your teams execute faster.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:Rehanjoe06@gmail.com" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-black glow-cyan"
              style={{ background: "var(--gradient-brand)" }}>
              Request Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="tel:+918110929028" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold glass hover:bg-white/5 transition">
              Talk To Our Team
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.4}>
        <BrainVisual />
      </Reveal>
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
                The Future Company Runs On Intelligence
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Today, businesses run on hundreds of disconnected tools. Sales lives in CRM. Engineering lives in code.
                Finance lives in spreadsheets. Teams communicate through messages and meetings. Important decisions are
                scattered everywhere. The result? Employees spend more time finding context than creating value.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-3 gap-3">
              {tools.map((t, i) => (
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

/* ===================== SOLUTION ===================== */
function Solution() {
  const items = [
    { icon: Database, title: "Memory", text: "A complete understanding of your company's history." },
    { icon: Brain, title: "Intelligence", text: "The ability to understand why things happen." },
    { icon: Target, title: "Prediction", text: "The ability to identify problems before they grow." },
    { icon: Zap, title: "Execution", text: "AI agents that take action, not just answer questions." },
  ];
  return (
    <section id="platform" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-brand-radial opacity-40" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE SOLUTION</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Introducing SynapseOS: <span className="text-gradient-brand">The Corporate Intelligence Platform</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              SynapseOS connects your company's knowledge, people, decisions, and workflows into one continuously learning intelligence system.
            </p>
          </Reveal>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <motion.div key={it.title} variants={fadeUp}
                className="group glass-strong rounded-2xl p-6 relative overflow-hidden hover:-translate-y-1 transition-transform duration-500">
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition"
                  style={{ background: "radial-gradient(circle, #00F0FF, transparent 70%)" }} />
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" style={{ color: "#00F0FF" }} />
                </div>
                <div className="text-xl font-semibold mb-2">{it.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== THE SHIFT ===================== */
function TheShift() {
  const before = ["Find this document.", "Summarize this meeting.", "Write this email."];
  const after = [
    "Why are sales slowing?",
    "Which customers are at risk?",
    "What decision should we make?",
    "What should happen next?",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 md:gap-12 w-full items-center">
        <div>
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE SHIFT</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              From Information<br />To <span className="text-gradient-brand">Intelligence</span>
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground">
              Traditional AI Finds Answers. SynapseOS Understands Your Business.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 md:mt-10 glass-strong rounded-2xl p-4 md:p-6 hidden sm:block">
              <div className="text-sm text-muted-foreground">Bottom line</div>
              <div className="mt-2 text-lg md:text-xl font-semibold">
                SynapseOS turns company data into <span className="text-gradient-brand">business intelligence.</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">MOST AI TOOLS CAN ANSWER</div>
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
            <div className="text-xs tracking-[0.2em] mb-4" style={{ color: "#00F0FF" }}>BUT BUSINESSES NEED MORE</div>
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

/* ===================== LIVING MODEL ===================== */
function LivingModel() {
  const cards = [
    { icon: Users, title: "People", text: "Who works on what. Who owns what. Who has expertise." },
    { icon: BookOpen, title: "Knowledge", text: "Documents. Meetings. Messages. Research. Decisions." },
    { icon: Building2, title: "Business", text: "Customers. Revenue. Products. Projects. Goals." },
    { icon: Settings2, title: "Operations", text: "Processes. Dependencies. Workflows. Execution." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE LIVING MODEL</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Your Company Has A <span className="text-gradient-brand">Brain</span> Now
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              One Intelligence Layer Across Your Entire Organization. SynapseOS creates a living model of your company. It understands:
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

/* ===================== BENTO ===================== */
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
    <section id="intelligence" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">HOW IT WORKS</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              How SynapseOS Works: A Complete Intelligence System For Your Enterprise
            </h2>
          </Reveal>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-fr">
          {/* 01 */}
          <SpotlightCard className="md:col-span-3 p-8">
            <BentoHeader n="01" icon={Database} title="Enterprise Memory" />
            <h3 className="text-2xl font-semibold mt-4">Your Company's Living Memory.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every important interaction becomes part of your organization's intelligence. SynapseOS understands: Meetings, Emails, Documents, Customer conversations, Projects, Decisions, Code, Business reports.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Unlike traditional storage systems, SynapseOS understands context. It knows: <span className="text-white">What happened. Why it happened. Who was involved. What changed. What matters now.</span>
            </p>
          </SpotlightCard>

          {/* 02 */}
          <SpotlightCard className="md:col-span-3 p-8">
            <BentoHeader n="02" icon={Network} title="Enterprise Knowledge Graph" />
            <h3 className="text-2xl font-semibold mt-4">The Map Of Your Organization.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              SynapseOS connects everything together. It understands relationships between: Employees, Teams, Customers, Products, Projects, Decisions, Goals, Processes.
            </p>
            <div className="mt-4 glass rounded-xl p-4 text-sm">
              <div className="text-muted-foreground text-xs mb-2">EXAMPLE</div>
              <div className="line-through text-muted-foreground">"Show customer complaints."</div>
              <div className="mt-2 text-white">"Enterprise customers are experiencing onboarding problems because implementation takes 40% longer than expected. The main cause is a missing product workflow."</div>
            </div>
          </SpotlightCard>

          {/* 03 */}
          <SpotlightCard className="md:col-span-2 p-8">
            <BentoHeader n="03" icon={Brain} title="Business Reasoning Engine" />
            <h3 className="text-xl font-semibold mt-4">AI That Understands Why.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Numbers tell you what happened. SynapseOS explains why.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="glass rounded-lg p-3">
                <div className="text-xs text-muted-foreground">TRADITIONAL ANALYTICS</div>
                <div>"Revenue dropped 8%."</div>
              </div>
              <div className="glass rounded-lg p-3 border-cyan/30" style={{ borderColor: "rgba(0,240,255,0.3)" }}>
                <div className="text-xs" style={{ color: "#00F0FF" }}>SYNAPSEOS</div>
                <div>"Revenue dropped because enterprise renewals slowed after pricing changes. Three accounts represent most of the risk. Recommended action: executive customer review."</div>
              </div>
            </div>
          </SpotlightCard>

          {/* 04 */}
          <SpotlightCard className="md:col-span-2 p-8">
            <BentoHeader n="04" icon={Cpu} title="Digital Twin" />
            <h3 className="text-xl font-semibold mt-4">A Real-Time AI Model Of Your Company.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Every company operates differently. SynapseOS learns your unique way of working. Your digital twin understands: How decisions happen, How teams collaborate, How customers behave, How work moves through the organization.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              {["Where are we losing efficiency?", "What is blocking growth?", "What happens if we change strategy?"].map((q) => (
                <div key={q} className="glass rounded-lg px-3 py-2 text-muted-foreground">"{q}"</div>
              ))}
            </div>
          </SpotlightCard>

          {/* 05 */}
          <SpotlightCard className="md:col-span-2 p-8">
            <BentoHeader n="05" icon={Bot} title="AI Workforce" />
            <h3 className="text-xl font-semibold mt-4">AI Employees That Actually Understand Your Business.</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Generic AI assistants start from zero. SynapseOS agents start with company intelligence. Every agent has access to:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Company memory", "Business context", "Goals", "Processes", "Permissions", "Historical decisions"].map((t) => (
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
  { name: "Executive Agent", role: "Your AI Chief Of Staff", desc: "Helps leaders make better decisions.", color: "#00F0FF", caps: ["Executive briefings", "Strategic analysis", "Risk detection", "Decision support", "Board preparation"] },
  { name: "Personal Agent", role: "Your AI Work Partner", desc: "Every employee gets an intelligent assistant that understands their role.", color: "#6E56FF", caps: ["Prioritizing work", "Preparing meetings", "Tracking commitments", "Finding important information", "Managing daily execution"] },
  { name: "Sales Agent", role: "Increase Revenue With Intelligence", desc: "Understands: Customers, Deals, Conversations, Competition.", color: "#00F0FF", caps: ["Predict opportunities", "Prepare meetings", "Identify risks", "Create proposals"] },
  { name: "Marketing Agent", role: "Build Better Growth Strategies", desc: "Understands: Customers, Campaigns, Market trends, Brand.", color: "#FF6EC7", caps: ["Create campaigns", "Analyze performance", "Improve messaging"] },
  { name: "Customer Success Agent", role: "Prevent Customer Problems Before They Happen", desc: "Monitors: Customer health, Product usage, Feedback, Sentiment.", color: "#6E56FF", caps: ["Churn risks", "Expansion opportunities", "Customer needs"] },
  { name: "Product Agent", role: "Build Products Customers Need", desc: "Understands: Feedback, Roadmaps, Market demand, Engineering capacity.", color: "#00F0FF", caps: ["Prioritize features", "Create specifications", "Analyze opportunities"] },
  { name: "Engineering Agent", role: "Accelerate Software Development", desc: "Understands: Code, Architecture, Infrastructure.", color: "#7CFF6E", caps: ["Review code", "Generate documentation", "Detect technical risks"] },
  { name: "Finance Agent", role: "Smarter Financial Decisions", desc: "Understands: Revenue, Expenses, Budgets, Forecasts.", color: "#FFB84D", caps: ["Financial insights", "Forecasting", "Business analysis"] },
  { name: "Operations Agent", role: "Make The Company Run Better", desc: "Understands: Workflows, Dependencies, Resources.", color: "#6E56FF", caps: ["Bottlenecks", "Inefficiencies", "Execution risks"] },
];

function Agents() {
  return (
    <section id="agents" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">AI WORKFORCE</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Meet Your <span className="text-gradient-brand">AI Team</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-5 px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pb-6">
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
                <div>
                  <div className="font-semibold">{a.name}</div>
                  <div className="text-xs text-muted-foreground">{a.role}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5 min-h-[3rem]">{a.desc}</p>
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
        </div>
      </div>
    </section>
  );
}

/* ===================== ORCHESTRATOR ===================== */
function Orchestrator() {
  const steps = [
    { label: "Strategy", agent: "Executive Agent", icon: Target },
    { label: "Product Planning", agent: "Product Agent", icon: Boxes },
    { label: "Development", agent: "Engineering Agent", icon: Code2 },
    { label: "Marketing", agent: "Marketing Agent", icon: Rocket },
    { label: "Sales Preparation", agent: "Sales Agent", icon: TrendingUp },
    { label: "Compliance", agent: "Legal Agent", icon: Scale },
    { label: "Budget", agent: "Finance Agent", icon: Wallet },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE ORCHESTRATOR</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              One Goal. Multiple AI Employees. <span className="text-gradient-brand">One Result.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              Instead of opening multiple AI tools, employees simply describe the outcome they want.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 inline-block glass rounded-2xl px-5 py-3 text-left">
              <div className="text-xs text-muted-foreground">EMPLOYEE PROMPT</div>
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

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            className="space-y-4 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} variants={fadeUp}
                  className={`flex items-center gap-4 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
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
          </motion.div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center text-muted-foreground max-w-2xl mx-auto">
            SynapseOS automatically coordinates... The employee sees <span className="text-white">one intelligent plan</span>. The AI workforce handles the coordination.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== INTELLIGENCE MONITORS ===================== */
function Monitors() {
  const monitors = [
    { title: "Sales Intelligence", icon: TrendingUp, items: ["Revenue risks", "Pipeline problems", "Customer opportunities"], value: "$4.2M", trend: "+12%" },
    { title: "Customer Intelligence", icon: Users, items: ["Churn signals", "Satisfaction changes", "Expansion opportunities"], value: "94.2", trend: "NPS" },
    { title: "Product Intelligence", icon: Boxes, items: ["Feature gaps", "Customer needs", "Market opportunities"], value: "38", trend: "signals" },
    { title: "Engineering Intelligence", icon: Code2, items: ["Delivery risks", "Technical debt", "Development blockers"], value: "12", trend: "risks" },
    { title: "Financial Intelligence", icon: Wallet, items: ["Budget issues", "Forecast changes", "Business risks"], value: "$18M", trend: "runway" },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">PROACTIVE AI</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Business Intelligence That Finds Problems <span className="text-gradient-brand">Early</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              Don't Wait For Reports. Know Before Problems Happen. SynapseOS continuously monitors company health.
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

/* ===================== DECISION + KNOWLEDGE ===================== */
function DecisionKnowledge() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 h-full relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: "#00F0FF" }} />
            <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6">
              <GitBranch className="w-5 h-5" style={{ color: "#00F0FF" }} />
            </div>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-2">DECISION INTELLIGENCE</div>
            <h3 className="text-3xl font-semibold tracking-tight">Understand Every Important Decision.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Companies make thousands of decisions. But most lose the reasoning behind them.
            </p>
            <div className="mt-6 space-y-2">
              {["What decision was made.", "Why it was made.", "Who influenced it.", "What data supported it.", "What happened afterward."].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00F0FF" }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-strong rounded-3xl p-8 h-full relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: "#6E56FF" }} />
            <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6">
              <ShieldAlert className="w-5 h-5" style={{ color: "#6E56FF" }} />
            </div>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-2">KNOWLEDGE QUALITY INTELLIGENCE</div>
            <h3 className="text-3xl font-semibold tracking-tight">Know Which Information To Trust.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Enterprise knowledge changes constantly. SynapseOS evaluates information quality. Every document receives a <span className="text-white">Knowledge Score</span> based on:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Accuracy", "Freshness", "Reliability", "Approval", "Usage", "Conflicts"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full glass">{t}</span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Your company knows what information is trustworthy.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== WHY ===================== */
function Why() {
  const items = [
    { title: "Real Enterprise Context", text: "Not isolated AI. A complete understanding of your organization." },
    { title: "AI That Takes Action", text: "Not just suggestions. Real execution." },
    { title: "Organizational Intelligence", text: "Understands how your company works." },
    { title: "Predictive Business Intelligence", text: "Find problems before they become expensive." },
    { title: "Intelligence That Compounds", text: "The longer you use SynapseOS, the smarter your company becomes." },
  ];
  return (
    <section id="why" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">WHY SYNAPSEOS</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            AI Assistants Answer Questions.<br />
            <span className="text-gradient-brand">SynapseOS Understands Companies.</span>
          </h2>
        </Reveal>

        <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-14 divide-y divide-white/5 border-y border-white/5">
          {items.map((it, i) => (
            <motion.li key={it.title} variants={fadeUp}
              className="group py-8 grid grid-cols-[auto_1fr_auto] gap-6 items-center hover:bg-white/[0.02] transition px-4 rounded-2xl -mx-4">
              <div className="font-mono text-sm text-muted-foreground w-12">0{i + 1}</div>
              <div>
                <div className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-gradient-brand transition">
                  {it.title}
                </div>
                <p className="mt-1.5 text-muted-foreground">{it.text}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ===================== STACK + FOOTER ===================== */
function Stack() {
  const layers = ["Company Data", "Enterprise Memory", "Knowledge Graph", "Reasoning Engine", "Digital Twin", "AI Workforce", "Autonomous Execution"];
  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-radial opacity-70" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4">THE NEW ENTERPRISE STACK</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              The New <span className="text-gradient-brand">Enterprise Stack</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              The future company will not be built around disconnected applications. It will operate through intelligence.
            </p>
          </Reveal>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-16 max-w-md mx-auto flex flex-col items-center gap-3">
          {layers.map((l, i) => (
            <div key={l} className="w-full flex flex-col items-center">
              <motion.div variants={fadeUp}
                className="w-full glass-strong rounded-xl py-4 text-center font-medium relative"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
                  boxShadow: i === layers.length - 1 ? "0 0 40px rgba(0,240,255,0.3)" : undefined,
                }}>
                {l}
              </motion.div>
              {i < layers.length - 1 && (
                <motion.div variants={fadeUp} className="py-1">
                  <ArrowDown className="w-4 h-4 animate-bounce" style={{ color: "#00F0FF" }} />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              SynapseOS: <span className="text-gradient-brand">The Intelligence Layer For The AI-Native Company.</span>
            </p>
            <p className="mt-4 text-muted-foreground">
              The next generation of companies will not just use AI. They will operate with intelligence.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-40"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,240,255,0.2), transparent 70%)" }} />
            <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Give Your Company A Brain.<br />
              Build With <span className="text-gradient-brand">SynapseOS</span>.
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:Rehanjoe06@gmail.com" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-black glow-cyan"
                style={{ background: "var(--gradient-brand)" }}>
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="tel:+918110929028" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold glass hover:bg-white/5 transition">
                Talk To Our Team
              </a>
            </div>
          </div>
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
        <Solution />
        <TheShift />
        <LivingModel />
        <Bento />
        <Agents />
        <Orchestrator />
        <Monitors />
        <DecisionKnowledge />
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
