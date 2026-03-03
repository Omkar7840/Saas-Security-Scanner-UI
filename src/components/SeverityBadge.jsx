import React from 'react'

function getColor(severity) {
  switch (severity) {
    case 'Critical':
      return 'bg-critical text-white'
    case 'High':
      return 'bg-high text-white'
    case 'Medium':
      return 'bg-medium text-slate-900'
    case 'Low':
      return 'bg-low text-white'
    default:
      return 'bg-slate-500 text-white'
  }
}

function SeverityBadge({ severity, small }) {
  const size = small ? 'text-xs px-2 py-0.5' : 'text-xs px-3 py-1'
  return (
    <span className={`${size} rounded-full font-semibold ${getColor(severity)}`}>
      {severity}
    </span>
  )
}

export default SeverityBadge
