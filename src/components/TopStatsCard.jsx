import React from 'react'
import SeverityBadge from './SeverityBadge'

function TopStatsCard({ severity, count, change }) {
  const positive = change > 0
  const neutral = change === 0
  const changeColor = neutral
    ? 'text-slate-500'
    : positive
    ? 'text-green-500'
    : 'text-red-500'

  return (
    <div className="flex flex-col gap-1 rounded-xl bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-slate-500 dark:text-slate-400">Severity</span>
        <SeverityBadge severity={severity} small />
      </div>
      <div className="text-2xl font-semibold mt-1">{count}</div>
      <div className={`text-xs ${changeColor}`}>
        {change > 0 && `+${change}% vs yesterday`}
        {change < 0 && `${change}% vs yesterday`}
        {change === 0 && `No change vs yesterday`}
      </div>
    </div>
  )
}

export default TopStatsCard
