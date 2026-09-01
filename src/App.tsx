import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <main id="top">
      <Header />
      <div className="app-content">
        <HomePage />
      </div>
      <Footer />
    </main>
  )
}

export default App
