
import appwriteService from '../appwrite/config'
import { Link } from 'react-router'

export default function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <span className="px-3 py-1 rounded-full text-xs bg-violet-100 text-violet-700">
            Article
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">{title}</h2>
          <p className="mt-3 text-slate-500">
            Explore insights, stories and ideas from our community.
          </p>
          <div className="mt-5 text-violet-600 font-semibold">
            Read More →
          </div>
        </div>
      </div>
    </Link>
  )
}
