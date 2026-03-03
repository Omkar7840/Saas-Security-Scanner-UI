import React from 'react'

function StatusChip({ status }) {
  const base = 'px-2 py-0.5 text-xs rounded-full font-medium'
  if (status === 'Completed') {
    return <span className={`${base} bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300`}>Completed</span>
  }
  if (status === 'Scheduled') {
    return <span className={`${base} bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300`}>Scheduled</span>
  }
  if (status === 'Failed') {
    return <span className={`${base} bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300`}>Failed</span>
  }
  return <span className={base}>{status}</span>
}

export default StatusChip
