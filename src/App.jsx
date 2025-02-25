import React from 'react'
import Navbar from "./components/Navbar"
import './App.css'
import Cards from "./components/Cards"
import HooksANDstarte from "./components/HooksANDstarte"
// import UseEffectS from "./components/UseEffectS"
import UseREFf from "./components/useREFf"
import RenderX from "./components/RenderX"
import Exercise from "./components/Exercise"
import Counter from "./components/Counter"
import RealTimeChange from "./components/RealTimeChange"
import DisplayListItem from "./components/DisplayListItem" 
import Toggle from "./components/Toogle"
import FetchData  from './components/FetchData'
import Timer from './components/Timer'
import BgChange from './components/BgChange'
import Routing from './components/Routing'
import RandomQ from './components/RandomQ'
import UploaderFiles from './components/UploaderFiles'
import WeatherLocation from './components/WeatherLocation'
import SearchBarFilter from './components/SearchBarFilter'
import Paging from  './components/Paging'
import ColorPicker from './components/ColorPicker'
import Cart from './components/Cart'
import Pagination from './components/Pagination'
import ProgressBar from './components/PracticeQNA/ProgressBar'
function App() {
  const items =['item1','item2','item3','Another item','Anoter item 2'];

  return (
    <>
      <Navbar />
      <p className="component-title">This is Component Cards example</p>
      <div className="Cards">
        <Cards title='Card1' description='Card 1 description' />
        <Cards title='Card1' description='Card 1 description' />
        <Cards title='Card1' description='Card 1 description' />
        <Cards title='Card1' description='Card 1 description' />
      </div>
      <p className="component-title">This is Hooks and State Example</p>
      <HooksANDstarte />
      {/* <p className="component-title">This is useEffect Example</p>
      <UseEffectS /> */}
      <p className="component-title">This is useref example</p>
      <UseREFf />

      <p className="component-title">This is Rendering and rendering list example</p>
      <RenderX />
      <p className="component-title">fetch data from API example</p>
      <Exercise />
      <p className="component-title">Counter using useState example</p>
      <Counter />
      <p className="component-title">Real time change Input box example</p>
      <RealTimeChange />
      <p className="component-title">Displaying the items from the list or array on listexample</p>
      <DisplayListItem /> 
      <p className="component-title">Toggle the button example</p>
      <Toggle />
      <p className="component-title">fetch data from API then props gettingexample</p>
      <FetchData />
      <Timer/>
      <BgChange/>
      <Routing />
      <RandomQ/>
      <UploaderFiles/>
      <WeatherLocation/>
      <SearchBarFilter items={items}/>
      <Paging/>
      <ColorPicker/>
      <Cart/>
      <Pagination/>
      <ProgressBar/>
    </>
  )
}

export default App
