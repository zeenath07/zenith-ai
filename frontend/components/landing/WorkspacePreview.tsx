"use client";

import {
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Sparkles,
} from "lucide-react";

export default function WorkspacePreview() {
  return (
    <section className="bg-[#050816] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Workspace Preview
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            One Dashboard.
            <br />
            Everything You Need.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Chat with AI, organize tasks, remember important information,
            manage documents and stay productive from one intelligent workspace.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

            <div>
              <h3 className="text-xl font-semibold">
                Zenith AI Workspace
              </h3>

              <p className="text-sm text-gray-400">
                Personal Productivity Dashboard
              </p>
            </div>

            <div className="rounded-xl bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
              Online
            </div>

          </div>

          <div className="grid lg:grid-cols-4">

            {/* Sidebar */}

            <div className="border-r border-white/10 bg-black/20 p-6">

              <h4 className="mb-8 text-lg font-semibold">
                Navigation
              </h4>

              <div className="space-y-4">

                <SidebarItem
                  icon={<Bot size={18} />}
                  title="AI Chat"
                />

                <SidebarItem
                  icon={<FileText size={18} />}
                  title="Documents"
                />

                <SidebarItem
                  icon={<CalendarDays size={18} />}
                  title="Planner"
                />

                <SidebarItem
                  icon={<Clock3 size={18} />}
                  title="History"
                />

              </div>

            </div>

            {/* Main */}

            <div className="space-y-6 p-8 lg:col-span-3">

              <div className="rounded-2xl bg-[#0f172a] p-6">

                <p className="font-mono text-cyan-400">
                  You
                </p>

                <p className="mt-3 text-gray-300">
                  Prepare a 30-day roadmap for Amazon SDE interviews.
                </p>

              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

                <div className="mb-4 flex items-center gap-2">

                  <Sparkles
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="font-semibold">
                    Zenith AI
                  </span>

                </div>

                <ul className="space-y-3 text-gray-300">

                  <li>✅ Created interview roadmap</li>

                  <li>✅ Scheduled daily DSA practice</li>

                  <li>✅ Added system design roadmap</li>

                  <li>✅ Generated resume improvement tips</li>

                  <li>✅ Saved everything to Memory</li>

                </ul>

              </div>

              <div className="grid gap-6 md:grid-cols-3">

                <Card
                  title="Today's Tasks"
                  value="12"
                  icon={<CheckCircle2 className="text-green-400" />}
                />

                <Card
                  title="Documents"
                  value="38"
                  icon={<FileText className="text-cyan-400" />}
                />

                <Card
                  title="AI Memories"
                  value="186"
                  icon={<Bot className="text-purple-400" />}
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function SidebarItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-xl p-3 transition hover:bg-white/10">
      {icon}
      <span>{title}</span>
    </div>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="mb-5">{icon}</div>

      <h4 className="text-gray-400">
        {title}
      </h4>

      <p className="mt-2 text-4xl font-bold">
        {value}
      </p>
    </div>
  );
}