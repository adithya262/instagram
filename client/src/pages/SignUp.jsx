import React, { useState } from 'react'
import instagramLogo from '../assets/instagram-logo.svg'

export default function SignUp({ onSignUpSuccess, onBackToLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSignUp(e) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
      const res = await fetch(`${API_BASE}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (data.success) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        onSignUpSuccess(data.user)
      } else {
        setError(data.error || 'Sign up failed')
      }
    } catch (err) {
      setError('Network error')
      console.error(err)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="flex w-full max-w-6xl gap-16 items-center">
          {/* Left side - Decorative Illustration */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="relative w-96 h-96">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-70 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-600 to-blue-500 rounded-full opacity-70 blur-2xl" />
              
              {/* Main phone frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-8 border-gray-900 overflow-hidden">
                  {/* Phone screen content - Instagram feed mockup */}
                  <div className="w-full h-full bg-black p-3 flex flex-col gap-2">
                    {/* Story circles */}
                    <div className="flex gap-2 pb-2 border-b border-gray-800">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-red-500" />
                    </div>
                    
                    {/* Post mockup */}
                    <div className="flex-1 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-red-500 rounded-full opacity-60 blur-xl" />
              <div className="absolute top-12 -right-12 w-24 h-24 bg-purple-600 rounded-full opacity-60 blur-xl" />
              <div className="absolute -bottom-8 left-1/4 w-16 h-16 bg-pink-500 rounded-full opacity-60 blur-xl" />
            </div>
          </div>

          {/* Right side - Sign Up Form */}
          <div className="flex-1 max-w-md">
            <div className="space-y-6">
              {/* Logo */}
              <div className="text-center mb-8">
                <img src={instagramLogo} alt="Instagram" className="h-20 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Sign up to see photos and videos from your friends.</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSignUp} className="space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-600"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-600"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-600"
                  required
                />

                {error && (
                  <div className="text-red-500 text-sm text-center py-2">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded text-sm transition disabled:opacity-50"
                >
                  {loading ? 'Signing up...' : 'Sign up'}
                </button>
              </form>

              {/* Back to Login */}
              <div className="text-center pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Have an account?{' '}
                  <button
                    type="button"
                    onClick={onBackToLogin}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition"
                  >
                    Log in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-4">
            <a href="#" className="hover:text-gray-400">Meta</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Blog</a>
            <a href="#" className="hover:text-gray-400">Jobs</a>
            <a href="#" className="hover:text-gray-400">Help</a>
            <a href="#" className="hover:text-gray-400">API</a>
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Terms</a>
            <a href="#" className="hover:text-gray-400">Locations</a>
            <a href="#" className="hover:text-gray-400">Instagram Lite</a>
            <a href="#" className="hover:text-gray-400">Meta AI</a>
            <a href="#" className="hover:text-gray-400">Threads</a>
          </div>
          <div className="text-center text-xs text-gray-500">
            <p>© 2025 Instagram from Meta</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
