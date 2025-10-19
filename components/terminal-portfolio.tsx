"use client"

import { useEffect, useState } from "react"

interface TerminalLine {
  text: string
  type: "command" | "output" | "section" | "empty" | "title" | "tech" | "project-title"
  delay: number
  color?: string
}

export default function TerminalPortfolio() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [cursorVisible, setCursorVisible] = useState(true)

  const terminalContent: TerminalLine[] = [
    { text: "$ whoami", type: "command", delay: 500 },
    { text: "Noureddine Maher", type: "title", delay: 800 },
    { text: "", type: "empty", delay: 200 },

    // BIO SECTION
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-blue-400",
    },
    { text: "$ cat bio.txt", type: "command", delay: 500 },
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-blue-400",
    },
    { text: "", type: "empty", delay: 100 },
    {
      text: "Full Stack Web Developer | React | Node.js | TypeScript | Next.js",
      type: "output",
      delay: 50,
      color: "text-blue-300",
    },
    { text: "", type: "empty", delay: 100 },
    {
      text: "- Passionate about building scalable, modern web applications with clean, maintainable code.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    {
      text: "- Experienced in the conception, analysis, and development of complete web solutions — from seamless user interfaces to robust backend systems.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    { text: "", type: "empty", delay: 300 },

    // EXPERIENCE SECTION
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-purple-400",
    },
    { text: "$ ls experiences/", type: "command", delay: 500 },
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-purple-400",
    },
    { text: "", type: "empty", delay: 100 },

    {
      text: "Full Stack Developer @ Rubicon.ma (Nov 2023 – Present · Casablanca, Morocco · Hybrid)",
      type: "output",
      delay: 50,
      color: "text-purple-300",
    },
    { text: "   • Contribute to the development of scalable business and technology solutions combining modern web technologies and human-centered design principles", type: "output", delay: 50, color: "text-white" },
    {
      text: "   • Develop and maintain full-stack applications using React.js, Node.js, and TypeScript.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    {
      text: "   • Collaborate with cross-functional teams to deliver high-quality, performant web applications.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    {
      text: "   • Participate in project conception and analysis to ensure technical feasibility and optimal architecture.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    { text: "", type: "empty", delay: 150 },

    { text: "Full Stack Developer @ Société Tangéroise de Maintenance (Sep 2022 – Nov 2023 · Tangier, Morocco)", type: "output", delay: 50, color: "text-purple-300" },
    {
      text: "   • Designed and implemented web applications using JavaScript, CSS, and modern frameworks.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    {
      text: "   • Developed and maintained responsive front-end interfaces and RESTful APIs.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    {
      text: "   • Collaborated with team members to enhance user experience and application reliability.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    {
      text: "   • Improved front-end performance and maintainability through modular code and optimization.",
      type: "output",
      delay: 50,
      color: "text-white",
    },
    { text: "", type: "empty", delay: 300 },

    // PROJECTS SECTION
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-amber-400",
    },
    { text: "$ ls projects/", type: "command", delay: 500 },
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-amber-400",
    },
    { text: "", type: "empty", delay: 100 },

    { text: "🚀 E-Commerce Platform", type: "project-title", delay: 50, color: "text-amber-300" },
    { text: "   Tech: Next.js, TypeScript, Stripe, PostgreSQL", type: "output", delay: 50, color: "text-amber-200" },
    {
      text: "   • Full-featured shopping cart with payment integration",
      type: "output",
      delay: 50,
      color: "text-amber-200",
    },
    {
      text: "   • Real-time inventory management and order tracking",
      type: "output",
      delay: 50,
      color: "text-amber-200",
    },
    { text: "", type: "empty", delay: 150 },

    { text: "🚀 Real-time Chat Application", type: "project-title", delay: 50, color: "text-amber-300" },
    { text: "   Tech: React, Node.js, Socket.io, MongoDB", type: "output", delay: 50, color: "text-amber-200" },
    {
      text: "   • Live messaging with user presence and notifications",
      type: "output",
      delay: 50,
      color: "text-amber-200",
    },
    {
      text: "   • End-to-end encryption for secure communications",
      type: "output",
      delay: 50,
      color: "text-amber-200",
    },
    { text: "", type: "empty", delay: 150 },

    { text: "🚀 Task Management Dashboard", type: "project-title", delay: 50, color: "text-amber-300" },
    { text: "   Tech: Next.js, Supabase, Tailwind CSS", type: "output", delay: 50, color: "text-amber-200" },
    { text: "   • Collaborative workspace with real-time updates", type: "output", delay: 50, color: "text-amber-200" },
    { text: "   • Advanced filtering and analytics capabilities", type: "output", delay: 50, color: "text-amber-200" },
    { text: "", type: "empty", delay: 300 },

    // TECHNOLOGIES SECTION
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-emerald-400",
    },
    { text: "$ cat technologies.txt", type: "command", delay: 500 },
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-emerald-400",
    },
    { text: "", type: "empty", delay: 100 },

    { text: "Frontend Stack:", type: "tech", delay: 50, color: "text-emerald-300" },
    {
      text: "  ⚛️  React  •  ▲ Next.js  •  🔷 TypeScript  •  🎨 Tailwind CSS  ",
      type: "output",
      delay: 50,
      color: "text-emerald-200",
    },
    { text: "", type: "empty", delay: 100 },

    { text: "Backend Stack:", type: "tech", delay: 50, color: "text-emerald-300" },
    {
      text: "  🟢 Node.js  •  🚂 Express  •  🐘 PostgreSQL  •  🍃 MongoDB  ",
      type: "output",
      delay: 50,
      color: "text-emerald-200",
    },
    { text: "", type: "empty", delay: 100 },

    { text: "DevOps & Tools:", type: "tech", delay: 50, color: "text-emerald-300" },
    {
      text: "  🐙 Git  •  🐳 Docker  •  ▲ Vercel  •  ⚙️  GitHub Actions",
      type: "output",
      delay: 50,
      color: "text-emerald-200",
    },
    { text: "", type: "empty", delay: 300 },

    // CONTACT SECTION
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-pink-400",
    },
    { text: "$ contact", type: "command", delay: 500 },
    {
      text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      type: "section",
      delay: 300,
      color: "text-pink-400",
    },
    { text: "", type: "empty", delay: 100 },

    { text: "📧 Email:    noureddine@example.com", type: "output", delay: 50, color: "text-pink-300" },
    { text: "🔗 GitHub:   https://github.com/NoureddineMa", type: "output", delay: 50, color: "text-pink-300" },
    { text: "💼 LinkedIn: https://www.linkedin.com/in/noure-ddine-maher-537294231", type: "output", delay: 50, color: "text-pink-300" },
    { text: "", type: "empty", delay: 300 },

    { text: "$ echo 'Ready to build something amazing!'", type: "command", delay: 500 },
    { text: "Ready to build something amazing!", type: "output", delay: 100, color: "text-pink-400" },
    { text: "", type: "empty", delay: 200 },
  ]

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    const addLine = (index: number, delay: number) => {
      const timer = setTimeout(() => {
        if (index < terminalContent.length) {
          setDisplayedLines((prev) => [...prev, terminalContent[index].text])
          if (index + 1 < terminalContent.length) {
            addLine(index + 1, terminalContent[index + 1].delay)
          }
        }
      }, delay)
      timers.push(timer)
    }

    if (terminalContent.length > 0) {
      addLine(0, terminalContent[0].delay)
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="w-full h-screen bg-black p-8 flex flex-col overflow-hidden">
      {/* Terminal Header */}
      <div className="mb-6 pb-4 border-b border-cyan-400/30">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-cyan-400/70 text-xs tracking-wider">terminal — bash — 120x40</p>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto pr-4 font-mono text-sm leading-relaxed">
        {displayedLines.map((line, index) => {
          const lineData = terminalContent.find((item) => item.text === line)
          const type = lineData?.type || "output"
          const color = lineData?.color || "text-green-400"

          const renderLineContent = () => {
    if (line.includes("📧 Email:")) {
      return (
        <span>
          📧 Email:{" "}
          <a
            href="mailto:noureddinemaher13@gmail.com"
            className="underline text-pink-400 hover:text-pink-200 transition-colors"
          >
            noureddinemaher13@gmail.com
          </a>
        </span>
      )
    }

    if (line.includes("🔗 GitHub:")) {
      return (
        <span>
          🔗 GitHub:{" "}
          <a
            href="https://github.com/NoureddineMa"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-pink-400 hover:text-pink-200 transition-colors"
          >
            github.com/NoureddineMa
          </a>
        </span>
      )
    }

    if (line.includes("💼 LinkedIn:")) {
      return (
        <span>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/noure-ddine-maher-537294231"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-pink-400 hover:text-pink-200 transition-colors"
          >
            Noureddine Maher
          </a>
        </span>
      )
    }

    // Default text line
    return line
  }

          return (
            <div
              key={index}
              className={`whitespace-pre-wrap break-words ${
                type === "section"
                  ? `${color} my-1 opacity-70`
                  : type === "command"
                    ? "text-cyan-400 font-semibold my-2"
                    : type === "title"
                      ? "text-white font-bold text-lg my-2"
                      : type === "tech"
                        ? `${color} font-semibold my-1`
                        : type === "project-title"
                          ? `${color} font-bold text-base my-2 px-3 py-2 bg-amber-900/40 border-l-2 border-amber-400 rounded`
                          : type === "empty"
                            ? "h-1"
                            : `${color} my-1`
              }`}
            >
              {type === "command" ? (
        <span>
          <span className="text-cyan-400">$</span>
          <span className="ml-2">{line.slice(2)}</span>
        </span>
      ) : (
        renderLineContent()
      )}
            </div>
          )
        })}

        {/* Blinking Cursor */}
        <div className="text-cyan-400 mt-2">
          <span
            className={`inline-block w-2 h-5 bg-cyan-400 transition-opacity ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          ></span>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="mt-6 pt-4 border-t border-cyan-400/30 text-cyan-400/50 text-xs tracking-wider">
        <p>Scroll to see more • Type 'help' for commands • Press Ctrl+L to clear</p>
      </div>
    </div>
  )
}
