import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostCard from './components/PostCard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { fetchPosts } from './api'

export default function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')
    if (token && storedUser) {
      setUser(JSON.parse(storedUser))
      load()
    }
    setLoading(false)
  }, [])

  async function load() {
    try {
      const res = await fetchPosts()
      if (res.success) setPosts(res.posts)
    } catch (err) { console.error(err) }
  }

  function addPost(post) { setPosts(prev => [post, ...prev]) }

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setPosts([])
  }

  if (loading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>
  }

  if (!user) {
    if (showSignUp) {
      return <SignUp onSignUpSuccess={(userData) => { setUser(userData); load() }} onBackToLogin={() => setShowSignUp(false)} />
    }
    return <Login onLoginSuccess={(userData) => { setUser(userData); load() }} onSignUpClick={() => setShowSignUp(true)} />
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-6">
      <div className="w-full max-w-2xl">
        <Header user={user} onLogout={handleLogout} />
        <CreatePost onNewPost={addPost} />
        <div className="space-y-6">
          {posts.map(p => <PostCard key={p.id} post={p} />)}
          {posts.length === 0 && <div className="text-center text-gray-500">No posts yet — be the first!</div>}
        </div>
      </div>
    </div>
  )
}
