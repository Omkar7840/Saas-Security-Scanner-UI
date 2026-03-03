import React, { useMemo, useState } from 'react'
import LayoutShell from '../components/LayoutShell'
import TopStatsCard from '../components/TopStatsCard'
import StatusChip from '../components/StatusChip'
import SeverityBadge from '../components/SeverityBadge'
import { scans, scanTopStats } from '../mockData'
import { useAppNavigation } from '../App'

function Dashboard() {
  const { goToScanDetail } = useAppNavigation()
  const [search, setSearch] = useState('')
  const [toast, setToast] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredScans = useMemo(() => {
    return scans.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.type.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = filterStatus === 'all' ? true : s.status === filterStatus
      return matchesSearch && matchesStatus
    })
  }, [search, filterStatus])

  const handleNewScan = () => {
    setToast('New Scan created (mock).')
    setTimeout(() => setToast(''), 2500)
  }

  const handleFilterClick = () => {
    setFilterStatus((prev) => {
      if (prev === 'all') return 'Completed'
      if (prev === 'Completed') return 'Scheduled'
      if (prev === 'Scheduled') return 'Failed'
      return 'all'
    })
  }

  const handleColumns = () => {
    setToast('Column customisation is not implemented in mock.')
    setTimeout(() => setToast(''), 2500)
  }

  return (
    <LayoutShell
      pageTitle="Dashboard"
      actions={
        <>
          <button
            onClick={handleFilterClick}
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Filter: {filterStatus}
          </button>
          <button
            onClick={handleColumns}
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Column
          </button>
          <button
            onClick={handleNewScan}
            className="inline-flex items-center px-3 py-1.5 text-xs rounded-lg bg-teal text-slate-900 font-medium hover:opacity-90"
          >
            New Scan
          </button>
        </>
      }
    >
      {/* top severity cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <TopStatsCard
          severity="Critical"
          count={scanTopStats.critical.count}
          change={scanTopStats.critical.change}
        />
        <TopStatsCard severity="High" count={scanTopStats.high.count} change={scanTopStats.high.change} />
        <TopStatsCard
          severity="Medium"
          count={scanTopStats.medium.count}
          change={scanTopStats.medium.change}
        />
        <TopStatsCard severity="Low" count={scanTopStats.low.count} change={scanTopStats.low.change} />
      </div>

      {/* toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between mb-3">
        <div className="relative flex-1 max-w-md">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scans by name or type..."
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-darkSurface px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-teal"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400">
            ⌘K
          </span>
        </div>
        <div className="flex sm:hidden gap-2 text-xs">
          <button
            onClick={handleFilterClick}
            className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-1.5"
          >
            Filter: {filterStatus}
          </button>
          <button
            onClick={handleColumns}
            className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-1.5"
          >
            Column
          </button>
        </div>
      </div>

      {/* table */}
      <div className="rounded-xl bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-slate-50 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400">
              <tr>
                <th className="text-left font-medium px-4 py-2">Scan Name</th>
                <th className="text-left font-medium px-4 py-2">Type</th>
                <th className="text-left font-medium px-4 py-2">Status</th>
                <th className="text-left font-medium px-4 py-2">Progress</th>
                <th className="text-left font-medium px-4 py-2">Vulnerability</th>
                <th className="text-left font-medium px-4 py-2">Last Scan</th>
              </tr>
            </thead>
            <tbody>
              {filteredScans.map((scan) => (
                <tr
                  key={scan.id}
                  className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/60 dark:hover:bg-slate-800/60 cursor-pointer"
                  onClick={() => goToScanDetail(scan.id)}
                >
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-[13px]">{scan.name}</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Org Project X
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[13px]">{scan.type}</td>
                  <td className="px-4 py-3">
                    <StatusChip status={scan.status} />
                  </td>
                  <td className="px-4 py-3 text-[13px]">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-teal"
                          style={{ width: `${scan.progress}%` }}
                        />
                      </div>
                      <span>{scan.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1 text-[11px]">
                      <span className="px-1.5 py-0.5 rounded-full bg-critical text-white">
                        {scan.vulns.critical}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-full bg-high text-white">
                        {scan.vulns.high}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-full bg-medium text-slate-900">
                        {scan.vulns.medium}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-full bg-low text-white">
                        {scan.vulns.low}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[13px]">{scan.lastScan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span>Showing {filteredScans.length} of {scans.length} scans</span>
          <span>4d ago last update</span>
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

export default Dashboard
