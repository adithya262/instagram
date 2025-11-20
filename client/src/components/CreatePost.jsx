import React, { useRef, useState } from 'react'
import { createPost } from '../api'

export default function CreatePost({ onNewPost }) {
  const [caption, setCaption] = useState('')
  const [loading, setLoading] = useState(false)
  const fileRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const file = fileRef.current?.files?.[0] || null
    if (!caption.trim() && !file) return alert('Add a caption or image')
    setLoading(true)
    try {
      const res = await createPost({ caption, imageFile: file })
      if (res.success) {
        setCaption('')
        if (fileRef.current) fileRef.current.value = ''
        onNewPost(res.post)
      } else alert('Error: ' + (res.error || 'unknown'))
    } catch (err) { console.error(err); alert('Network error') }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <div className="flex gap-3 items-start">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div className="flex-1">
          <textarea
            className="w-full resize-none border-0 focus:ring-0 text-sm"
            placeholder="Write a caption..."
            rows={3}
            value={caption}
            onChange={e => setCaption(e.target.value)}
          />

          <div className="mt-3 flex items-center justify-between">
            <div>
              <input ref={fileRef} type="file" accept="image/*" />
            </div>
            <div>
              <button disabled={loading} type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{loading ? 'Posting...' : 'Post'}</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
