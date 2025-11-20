import React from 'react'

export default function Header({ user, onLogout }) {
  return (
    <header className="flex items-center justify-between py-4 px-4 bg-white shadow-sm rounded-xl mb-6">
      <div className="text-4xl" style={{ fontFamily: "'Billabong', cursive", fontWeight: '400', letterSpacing: '0.5px' }}>Instagram</div>
      <div className="flex items-center gap-4">
        {user && (
          <>
            <span className="text-sm text-gray-600">{user.email}</span>
            <button className="px-3 py-1 rounded hover:bg-gray-100">Explore</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">Profile</button>
            <button 
              onClick={onLogout}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  )
}
