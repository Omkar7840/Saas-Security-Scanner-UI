import React, { useEffect, useState, createContext, useContext } from 'react'
import Login from './screens/Login.jsx'
import Dashboard from './screens/Dashboard.jsx'
import ScanDetail from './screens/ScanDetail.jsx'

const ThemeContext = createContext()
const AppNavigationContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useAppNavigation() {
  return useContext(AppNavigationContext)
}

function App() {
  const [theme, setTheme] = useState('light')
  const [screen, setScreen] = useState('login') 
  const [selectedScanId, setSelectedScanId] = useState(null)

  useEffect(() => {
    const saved = window.localStorage.getItem('fenrir-theme')
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem('fenrir-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const goToDashboard = () => {
    setScreen('dashboard')
  }

  const goToScanDetail = (scanId) => {
    setSelectedScanId(scanId)
    setScreen('scan-detail')
  }

  const goBackToDashboard = () => {
    setScreen('dashboard')
  }

  const themeValue = { theme, toggleTheme }
  const navValue = { screen, goToDashboard, goToScanDetail, goBackToDashboard, selectedScanId }

  return (
    <ThemeContext.Provider value={themeValue}>
      <AppNavigationContext.Provider value={navValue}>
        <div className="min-h-screen font-sans bg-lightBg text-slate-900 dark:bg-darkBg dark:text-slate-100 transition-colors">
          {screen === 'login' && <Login />}
          {screen === 'dashboard' && <Dashboard />}
          {screen === 'scan-detail' && <ScanDetail />}
        </div>
      </AppNavigationContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
