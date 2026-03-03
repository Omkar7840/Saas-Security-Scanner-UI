import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { useAppNavigation } from '../App'

const navItems = [
  'Dashboard',
  'Projects',
  'Scans',
  'Schedule',
  'Notifications',
  'Settings',
  'Support',
]

function LayoutShell({ children, pageTitle, actions }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { goToDashboard } = useAppNavigation()

  return (
    <div className="min-h-screen flex bg-lightBg dark:bg-darkBg">
      {/* sidebar */}
      <div className={`fixed z-20 inset-y-0 left-0 w-64 bg-white dark:bg-darkSurface border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-teal flex items-center justify-center text-slate-900 font-bold">
              a
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">aps</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Security platform</span>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 text-sm">
          {navItems.map((item) => {
            const active = item === 'Dashboard'
            return (
              <button
                key={item}
                onClick={item === 'Dashboard' ? goToDashboard : undefined}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left ${
                  active
                    ? 'bg-teal/10 text-teal'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{item}</span>
                {item === 'Scans' && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    24
                  </span>
                )}
              </button>
            )
          })}
        </nav>
        <div className="border-t border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs">
              AD
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">admin@edu.com</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Security Lead</span>
            </div>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-4 lg:px-8 py-3 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkSurface/80 backdrop-blur">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-md border border-slate-200 dark:border-slate-700"
              onClick={() => setSidebarOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-1">
                <span className="block h-0.5 w-4 bg-slate-600 dark:bg-slate-200" />
                <span className="block h-0.5 w-4 bg-slate-600 dark:bg-slate-200" />
                <span className="block h-0.5 w-4 bg-slate-600 dark:bg-slate-200" />
              </div>
            </button>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Org</div>
              <div className="text-sm font-medium">Project X</div>
            </div>
            <div className="hidden sm:flex flex-col text-xs text-slate-500 dark:text-slate-400">
              <span>Owner: Nammagiri</span>
              <span>Total Scans: 100 · Scheduled: 1000 · Rescans: 100 · Failed: 100</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 px-4 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold">{pageTitle}</h1>
            <div className="flex items-center gap-2">
              {actions}
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}

export default LayoutShell
