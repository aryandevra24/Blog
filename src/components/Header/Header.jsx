
import { Container, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

export default function Header() {
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()
    const nav = [
        { name: 'Home', slug: '/', active: true },
        { name: 'All Posts', slug: '/all-posts', active: authStatus },
        { name: 'Add Post', slug: '/add-post', active: authStatus },
        { name: 'Login', slug: '/login', active: !authStatus },
        { name: 'Signup', slug: '/signup', active: !authStatus },
    ]
    return (
        <header className="sticky top-0 z-50 py-4">
            <Container>
                <nav className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg px-8 py-4 flex items-center justify-between">
                    <Link to="/" className="text-3xl font-bold text-violet-600">🪶 Blogify</Link>
                    <ul className="flex gap-4 items-center">
                        {nav.map(i => i.active && (
                            <li key={i.name}>
                                <button onClick={() => navigate(i.slug)} className="px-4 py-2 rounded-xl hover:bg-violet-50">
                                    {i.name}
                                </button>
                            </li>))}
                        {authStatus && <LogoutBtn />}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
