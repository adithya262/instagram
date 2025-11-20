import React, { useState } from 'react'
import instagramLogo from '../assets/instagram-logo.svg'

export default function Login({ onLoginSuccess, onSignUpClick }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (data.success) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        onLoginSuccess(data.user)
      } else {
        setError(data.error || 'Login failed')
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

          {/* Right side - Login Form */}
          <div className="flex-1 max-w-md">
            <div className="space-y-6">
              {/* Logo */}
              <div className="text-center mb-8">
                <img src={instagramLogo} alt="Instagram" className="h-20 mx-auto" />
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-3">
                <input
                  type="email"
                  placeholder="Phone number, username, or email"
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

                {error && (
                  <div className="text-red-500 text-sm text-center py-2">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded text-sm transition disabled:opacity-50"
                >
                  {loading ? 'Logging in...' : 'Log in'}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 h-px bg-gray-700" />
                <span className="text-gray-500 text-xs font-semibold">OR</span>
                <div className="flex-1 h-px bg-gray-700" />
              </div>

              {/* Facebook Login */}
              <button className="w-full py-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Log in with Facebook
              </button>

              {/* Forgot Password */}
              <div className="text-center">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-300 text-xs transition"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign Up */}
              <div className="text-center pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={onSignUpClick}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition"
                  >
                    Sign up
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
