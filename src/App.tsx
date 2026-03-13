const skills = [
  'Cloud Infrastructure (AWS, Azure)',
  'Network Security & Monitoring',
  'CI/CD Automation',
  'Linux & Windows Server Administration',
  'Incident Response & Root Cause Analysis',
  'Python, PowerShell, and Bash Scripting',
];

const projects = [
  {
    title: 'Enterprise Monitoring Dashboard',
    description:
      'Built a centralized monitoring platform that reduced incident resolution time by 35% through proactive alerting and service health analytics.',
    stack: 'React, TypeScript, Grafana, Prometheus',
  },
  {
    title: 'Zero-Trust Access Rollout',
    description:
      'Led implementation of role-based access controls and MFA across 4 business units, improving security compliance posture.',
    stack: 'Okta, Azure AD, Terraform',
  },
  {
    title: 'Automated Patch Management Pipeline',
    description:
      'Designed an automated deployment workflow to patch critical infrastructure weekly with verification checks and rollback support.',
    stack: 'GitHub Actions, Ansible, PowerShell',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold text-cyan-400">
            Jordan Reed
          </a>
          <ul className="flex gap-5 text-sm font-medium text-slate-300">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="home" className="mx-auto w-full max-w-6xl space-y-16 px-6 py-16">
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-cyan-500/40 px-3 py-1 text-xs uppercase tracking-wider text-cyan-300">
              IT Specialist • Systems & Security
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Building resilient, secure, and scalable IT ecosystems.
            </h1>
            <p className="text-slate-300">
              I help organizations modernize infrastructure, automate operations, and strengthen security.
              With 7+ years in enterprise IT, I deliver dependable solutions that align technology with business goals.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
                View Projects
              </a>
              <a href="#contact" className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-300">
                Contact Me
              </a>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
            <h2 className="mb-4 text-xl font-semibold text-cyan-300">Quick Snapshot</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>📍 Based in Austin, TX</li>
              <li>🏆 CompTIA Security+ | AWS Solutions Architect Associate</li>
              <li>⚙️ Focused on infrastructure reliability, automation, and security.</li>
              <li>🤝 Open to Senior IT Engineer and DevOps opportunities.</li>
            </ul>
          </aside>
        </section>

        <section id="about" className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">About Me</h2>
          <p className="text-slate-300">
            I am an IT professional with a background in enterprise operations, cloud migrations, and cybersecurity.
            I enjoy transforming manual processes into reliable automated systems and building clear documentation
            that supports both technical teams and leadership.
          </p>
        </section>

        <section id="skills">
          <h2 className="mb-5 text-2xl font-semibold text-white">Core Skills</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-slate-200">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="mb-5 text-2xl font-semibold text-white">Featured Projects</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-semibold text-cyan-300">{project.title}</h3>
                <p className="mb-4 text-sm text-slate-300">{project.description}</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">{project.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Experience</h2>
          <p className="text-slate-300">
            <span className="font-semibold text-slate-100">Senior IT Engineer</span> • NexaCore Solutions (2020 – Present)
            <br />
            Lead infrastructure reliability initiatives, oversee cloud resource governance, and mentor junior IT staff.
          </p>
        </section>

        <section id="contact" className="rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">Let&apos;s Connect</h2>
          <p className="mb-4 text-slate-300">
            If you&apos;re looking for an IT professional to strengthen operations, security, and automation, feel free to reach out.
          </p>
          <a href="mailto:jordan.reed.it@example.com" className="font-semibold text-cyan-300 hover:text-cyan-200">
            jordan.reed.it@example.com
          </a>
        </section>
      </main>
    </div>
  );
}