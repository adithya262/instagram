import React from 'react'
import { API_BASE } from '../api'

export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 p-3">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <div>
          <div className="text-sm font-semibold">User</div>
          <div className="text-xs text-gray-500">{new Date(post.created_at).toLocaleString()}</div>
        </div>
      </div>
      {post.image_path && (
        <img src={`${API_BASE}${post.image_path}`} alt="post" className="w-full max-h-[600px] object-cover" />
      )}
      <div className="p-3">
        <div className="text-sm">{post.caption}</div>
      </div>
    </article>
  )
}
