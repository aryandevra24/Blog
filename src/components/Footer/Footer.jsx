
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-950 to-indigo-950 text-white mt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-8 py-16">
                <div><h2 className="text-3xl font-bold">Blogify</h2><p className="mt-4 text-slate-300">Read, write and share your thoughts with the world.</p></div>
                <div><h3 className="font-bold mb-3">Quick Links</h3><ul className="space-y-2 text-slate-300"><li>Home</li><li>All Posts</li><li>Add Post</li></ul></div>
                <div><h3 className="font-bold mb-3">Categories</h3><ul className="space-y-2 text-slate-300"><li>Technology</li><li>Travel</li><li>Lifestyle</li></ul></div>
                <div><h3 className="font-bold mb-3">Newsletter</h3><input className="w-full p-3 rounded-xl text-black" placeholder="Enter your email" /></div>
            </div>
            <div className="text-center border-t border-white/10 py-6">© 2026 Blogify. Built with React & Appwrite.</div>
        </footer>)
}
