
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import footer from './components/footer'

function App() {
  

  return (
    <>
    <Navbar/><hr/>
    <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6'>
      <Outlet/>
    </main>
    <footer />
    </>
  )
}

export default App
