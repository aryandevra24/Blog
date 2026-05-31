
import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => { appwriteService.getPosts().then(p => p && setPosts(p.documents)) }, [])

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-100">
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900">
                        Discover <span className="text-violet-600">Amazing</span> Stories
                    </h1>
                    <p className="mt-6 text-xl text-slate-600">
                        Read, write and share your thoughts with the world.
                    </p>
                    <button className="mt-10 px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg">
                        Explore Posts
                    </button>
                </div>
            </section>

            <Container>
                <div className="py-16">
                    <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map(post => <PostCard key={post.$id} {...post} />)}
                    </div>
                </div>
            </Container>
        </>
    )
}
