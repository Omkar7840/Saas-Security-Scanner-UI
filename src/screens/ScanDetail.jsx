import React, { useState } from 'react'
import LayoutShell from '../components/LayoutShell'
import SeverityBadge from '../components/SeverityBadge'
import { activityLog, findings } from '../mockData'
import { useAppNavigation } from '../App'

const steps = ['Spidering', 'Mapping', 'Testing', 'Validating', 'Reporting']

function ScanDetail() {
  const { goBackToDashboard } = useAppNavigation()
  const [activeTab, setActiveTab] = useState('activity')
  const [activeStep, setActiveStep] = useState('Spidering')
  const [toast, setToast] = useState('')

  const handleExport = () => {
    setToast('Exporting report (mock)...')
    setTimeout(() => setToast(''), 2500)
  }

  const handleStop = () => {
    setToast('Scan stopped (mock).')
    setTimeout(() => setToast(''), 2500)
  }

  const currentProgress = 0 // design shows 0% In Progress

  return (
    <LayoutShell
      pageTitle="Scan Private Assets"
      actions={
        <>
          <button
            onClick={handleExport}
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Export Report
          </button>
          <button
            onClick={handleStop}
            className="inline-flex items-center px-3 py-1.5 text-xs rounded-lg border border-red-400 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            Stop Scan
          </button>
        </>
      }
    >
      {/* top: back + progress + steps + meta */}
      <div className="flex flex-col gap-4 mb-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={goBackToDashboard}
            className="text-xs text-slate-500 hover:text-teal"
          >
            ← Back to all scans
          </button>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 rounded-full border-4 border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full border-4 border-teal"
                  style={{ clipPath: 'inset(0 0 100% 0)' }}
                />
                <div className="text-center text-xs">
                  <div className="font-semibold">{currentProgress}%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">In Progress</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <div className="font-medium text-slate-900 dark:text-slate-100">
                  Live Scan Console
                </div>
                <div>Running...</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 text-[11px]">
              {steps.map((step, index) => {
                const selected = step === activeStep
                return (
                  <div key={step} className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveStep(step)}
                      className={`px-2.5 py-1 rounded-full border text-[11px] ${
                        selected
                          ? 'border-teal text-teal bg-teal/10'
                          : 'border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {step}
                    </button>
                    {index < steps.length - 1 && (
                      <div className="h-px w-4 bg-slate-300 dark:bg-slate-700" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* meta row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-[11px]">
          <div className="rounded-lg bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 px-3 py-2">
            <div className="text-slate-500 mb-1">Scan Type</div>
            <div className="font-medium">Grey Box</div>
          </div>
          <div className="rounded-lg bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 px-3 py-2">
            <div className="text-slate-500 mb-1">Targets</div>
            <div className="font-medium text-teal">google.com</div>
          </div>
          <div className="rounded-lg bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 px-3 py-2">
            <div className="text-slate-500 mb-1">Started At</div>
            <div className="font-medium">Nov 22, 09:00 AM</div>
          </div>
          <div className="rounded-lg bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 px-3 py-2">
            <div className="text-slate-500 mb-1">Credentials</div>
            <div className="font-medium">2 Active</div>
          </div>
          <div className="rounded-lg bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 px-3 py-2">
            <div className="text-slate-500 mb-1">Files</div>
            <div className="font-medium">Control.pdf</div>
          </div>
          <div className="rounded-lg bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 px-3 py-2">
            <div className="text-slate-500 mb-1">Checklists</div>
            <div className="font-medium">403 checks</div>
          </div>
        </div>
      </div>

      {/* main bottom split */}
      <div className="grid lg:grid-cols-[2fr,1.5fr] gap-4 mb-4">
        {/* left live console */}
        <div className="rounded-xl bg-black text-slate-100 border border-slate-800 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 text-[11px]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-2 py-1 rounded-full ${
                  activeTab === 'activity' ? 'bg-teal text-slate-900' : 'text-slate-400'
                }`}
              >
                Activity Log
              </button>
              <button
                onClick={() => setActiveTab('verification')}
                className={`px-2 py-1 rounded-full ${
                  activeTab === 'verification' ? 'bg-teal text-slate-900' : 'text-slate-400'
                }`}
              >
                Verification Loops
              </button>
            </div>
            <span className="text-slate-500">Live output</span>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 text-[11px] leading-relaxed">
            {activeTab === 'activity' &&
              activityLog.map((entry) => (
                <div key={entry.time} className="mb-2">
                  <span className="text-slate-500 mr-2">{entry.time}</span>
                  <span>{highlightConsoleText(entry.text)}</span>
                </div>
              ))}
            {activeTab === 'verification' && (
              <div className="text-slate-400">
                No verification loops started yet for this scan.
              </div>
            )}
          </div>
        </div>

        {/* right findings */}
        <div className="rounded-xl bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 dark:border-slate-700 text-[11px]">
            <span className="font-medium">Finding Log</span>
            <span className="text-slate-500">{findings.length} findings</span>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {findings.map((f) => (
              <div
                key={f.id}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 px-3 py-3 text-[11px]"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <SeverityBadge severity={f.severity} />
                    <span className="text-slate-500">#{f.code}</span>
                  </div>
                  <span className="text-slate-500">{f.time}</span>
                </div>
                <div className="font-medium text-[12px] mb-1">{f.title}</div>
                <div className="text-teal mb-1">{f.path}</div>
                <div className="text-slate-500 dark:text-slate-300">{f.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom status bar */}
      <div className="rounded-xl bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 px-4 py-2 text-[11px] flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-4">
          <span className="text-slate-500">
            Sub-Agents <span className="font-medium text-slate-900 dark:text-slate-100">0</span>
          </span>
          <span className="text-slate-500">
            Parallel Executions{' '}
            <span className="font-medium text-slate-900 dark:text-slate-100">2</span>
          </span>
          <span className="text-slate-500">
            Operations <span className="font-medium text-slate-900 dark:text-slate-100">1</span>
          </span>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-0.5 rounded-full bg-critical text-white">Critical 0</span>
          <span className="px-2 py-0.5 rounded-full bg-high text-white">High 0</span>
          <span className="px-2 py-0.5 rounded-full bg-medium text-slate-900">Medium 0</span>
          <span className="px-2 py-0.5 rounded-full bg-low text-white">Low 0</span>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-4 right-4 rounded-lg bg-slate-900 text-white text-xs px-3 py-2 shadow-lg">
          {toast}
        </div>
      )}
    </LayoutShell>
  )
}

function highlightConsoleText(text) {
  // very simple highlighting: URLs and header-like tokens
  const parts = text.split(' ')
  return parts.map((word, index) => {
    const isUrl = word.includes('.') || word.startsWith('http')
    const isHeader = word.startsWith('X-')
    const content = word + (index < parts.length - 1 ? ' ' : '')
    if (isUrl) {
      return (
        <span key={index} className="text-teal">
          {content}
        </span>
      )
    }
    if (isHeader) {
      return (
        <span key={index} className="text-purple-300">
          {content}
        </span>
      )
    }
    return <span key={index}>{content}</span>
  })
}

export default ScanDetail
