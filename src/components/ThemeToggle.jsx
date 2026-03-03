import React from 'react'
import { useTheme } from '../App'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 text-xs hover:border-teal hover:text-teal transition-colors"
      aria-label="Toggle theme"
    >
      <span>{theme === 'light' ? 'Light' : 'Dark'} mode</span>
    </button>
  )
}

export default ThemeToggle
