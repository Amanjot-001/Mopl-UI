import './styles/App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Label from './components/Label'
import Features from './components/Features'
import Playground from './components/Playground'
import Result from './components/Result'

function App() {
  return (
    <div className='container'>
      <Nav />
      <Header />
      <Label heading='Playground' rightPart={true} btns={['Run', 'Clear']} />
      <Playground />
      <Label heading='Result' />
      <Result />
      <Label heading='Features' />
      <Features />
    </div>
  )
}

export default App
