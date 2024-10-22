import Navbar from "./components/Navbar"
import './App.css'
import Cards from "./components/Cards"
import HooksANDstarte from "./components/HooksANDstarte"
import UseEffectS from "./components/UseEffectS"
import UseREFf from "./components/useREFf"
import RenderX from "./components/RenderX"
import Exercise from "./components/Exercise"
import Counter from "./components/Counter"
import RealTimeChange from "./components/RealTimeChange"
function App() {


  return (
    <>
      <Navbar/>
      <p className="component-title">This is Component Cards example</p>
      <div className="Cards">
        <Cards title='Card1'  description='Card 1 description'/>
        <Cards title='Card1'  description='Card 1 description'/>
        <Cards title='Card1'  description='Card 1 description'/>
        <Cards title='Card1'  description='Card 1 description'/>
      </div>
      <p className="component-title">This is Hooks and State Example</p>
      <HooksANDstarte/>
      <p className="component-title">This is useEffect Example</p>

      <UseEffectS/>
      <p className="component-title">This is useref example</p>
      <UseREFf/>

      <p className="component-title">This Renderering and rendering list  example</p>
      <RenderX/>
      <p className="component-title">fetch data from API example</p>
      <Exercise/>
      <Counter/>
      <RealTimeChange/>
    </>
  )
}

export default App
