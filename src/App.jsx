import './styles/App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Label from './components/Label'
import Features from './components/Features'
import Playground from './components/Playground'

function App() {
  return (
    <div className='container'>
      <Nav />
      <Header />
      <Label heading='Features' />
      <Features />
      <Label heading='Playground' />
      <Playground />
    </div>
  )
}

export default App
