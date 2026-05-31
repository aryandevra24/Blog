import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components/index';
import { Outlet } from 'react-router'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(
          login({
            userData: {
              $id: userData.$id,
              name: userData.name,
              email: userData.email,
            },
          })
        )
      } else {
        dispatch(logout())
      }
    }).finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  ) : null
}
export default App
