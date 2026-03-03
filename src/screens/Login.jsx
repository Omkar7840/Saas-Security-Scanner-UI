import React, { useState } from 'react'
import { useTheme } from '../App'
import { useAppNavigation } from '../App'

function Login() {
  const { theme, toggleTheme } = useTheme()
  const { goToDashboard } = useAppNavigation()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agree: false,
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.agree) {
      setError('Please fill all fields and accept terms.')
      return
    }
    setError('')
    goToDashboard()
  }

  const handleSocial = (provider) => {
    alert(`Mock ${provider} login clicked`)
  }

  return (
    <div className="min-h-screen flex bg-darkBg text-slate-100">
      {/* left info */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 px-12 py-10 bg-gradient-to-b from-slate-900 via-black to-slate-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-teal flex items-center justify-center text-slate-900 font-bold">
              a
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">aps</span>
              <span className="text-xs text-slate-400">Expert level Cybersecurity</span>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-full border border-slate-700 text-xs hover:border-teal hover:text-teal transition-colors"
          >
            {theme === 'light' ? 'Light' : 'Dark'} mode
          </button>
        </div>

        <div className="max-w-md">
          <h1 className="text-3xl font-semibold mb-3">
            Expert level cybersecurity in hours, not weeks.
          </h1>
          <p className="text-sm text-slate-300 mb-6">
            Effortlessly spider and map targets to uncover hidden security flaws. Deliver validated
            findings and generate enterprise-grade reports automatically.
          </p>
          <ul className="space-y-2 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal" />
              <span>Automated recon, mapping, and testing flows.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal" />
              <span>Human-like exploitation logic with verification loops.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal" />
              <span>Production-ready security reports for your clients.</span>
            </li>
          </ul>
        </div>

        <div className="text-xs text-slate-400">
          <span className="font-semibold">Trustpilot</span> Rated 4.5 / 5.0 · 100k reviews
        </div>
      </div>

      {/* right form */}
      <div className="flex-1 flex items-center justify-center bg-lightBg dark:bg-darkBg">
        <div className="w-full max-w-md px-6 py-8">
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-teal flex items-center justify-center text-slate-900 font-bold">
                a
              </div>
              <span className="text-base font-semibold">aps</span>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 text-xs"
            >
              {theme === 'light' ? 'Light' : 'Dark'} mode
            </button>
          </div>

          <div className="rounded-2xl bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 px-6 py-7 shadow-sm">
            <h2 className="text-xl font-semibold mb-1">Sign up</h2>
            <p className="text-xs text-slate-500 mb-5">
              Already have an account?{' '}
              <span className="text-teal cursor-pointer hover:underline">Log in</span>
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1">First name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Last name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal"
                  placeholder="At least 8 characters"
                />
              </div>
              <div className="flex items-start gap-2 text-xs">
                <input
                  id="agree"
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 dark:border-slate-600"
                />
                <label htmlFor="agree">
                  I agree to Aps&apos;s Terms &amp; Conditions and acknowledge the Privacy Policy.
                </label>
              </div>
              {error && <p className="text-xs text-red-500">{error}</p>}

              <button
                type="submit"
                className="w-full mt-2 rounded-lg bg-teal text-slate-900 text-sm font-medium py-2.5 hover:opacity-90 transition-opacity"
              >
                Create account
              </button>
            </form>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              <span className="text-[11px] text-slate-500">OR</span>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <button
                onClick={() => handleSocial('Apple')}
                className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 py-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span></span>
                <span>Apple</span>
              </button>
              <button
                onClick={() => handleSocial('Google')}
                className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 py-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span>G</span>
                <span>Google</span>
              </button>
              <button
                onClick={() => handleSocial('Meta')}
                className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 py-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span>M</span>
                <span>Meta</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
