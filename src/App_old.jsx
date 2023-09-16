import './App.css';
import React, { useState } from 'react';
import BorderRadiusInputBox from './components/BorderRadiusInputBox';
import Slider from '@mui/material/Slider'

function App() {

   const [topLeftBorder, setTopLeftBorder] = useState(0)
   const [topRightBorder, settopRightBorder] = useState(0)
   const [bottomLeftBorder, setBottomLeftBorder] = useState(0)
   const [bottomRightBorder, setBottomRightBorder] = useState(0)
   const [borderRadiusText, setBorderRadiusText] = useState("")

   function handleTopLeftBorderChange(event) {
      setTopLeftBorder(event.target.value)
      return
   }
   function handleTopRightBorderChange(event) {
      settopRightBorder(event.target.value)
      return
   }
   function handleBottomLeftBorderChange(event) {
      setBottomLeftBorder(event.target.value)
      return
   }
   function handleBottomRightBorderChange(event) {
      setBottomRightBorder(event.target.value)
      return
   }

   function handleCopy() {
      navigator.clipboard.writeText("hello my name is cassisus and i for some reason dont wanna use a sword")
         .then(() => {
            console.log("Text successfully copied to clipboard")
         })
   }

   return (
      <div className="App">
         <h1>BORDER-RADIUS-VISUALIZER</h1>
         <div className="main-container">
            {/* <div className="side-panel">
               <BorderRadiusInputBox onChange={handleTopLeftBorderChange} value={topLeftBorder} />
               <BorderRadiusInputBox onChange={handleBottomLeftBorderChange} value={bottomLeftBorder} />
            </div> */}
            {/* <div
               className="box"
               style={{
                  borderTopLeftRadius: topLeftBorder + 'px',
                  borderTopRightRadius: topRightBorder + 'px',
                  borderBottomLeftRadius: bottomLeftBorder + 'px',
                  borderBottomRightRadius: bottomRightBorder + 'px'
               }}
            >
            </div> */}
            <div className='box-container-horizontal'>

               {/* <div className='range-slider vertical'>
               </div> */}
               <div className='vertical-slider-container left'>
                  <Slider />

               </div>

               <div className='box-container-vertical'>

                  <Slider />
                  {/* <input type="range" className='range-slider ' /> */}
                  <div

                     className="box-display"
                     style={{
                        // borderRadius: "100% 0% 100% 0% / 100% 100% 0% 0% "
                        borderRadius: "100% 0% 0% 0% / 100% 0% 0% 0% "
                     }}
                  >
                  </div>
                  <Slider />
                  {/* <input type="range" className='range-slider' /> */}

               </div>

               <div className='vertical-slider-container right'>
                  <Slider />
               </div>

               {/* <div className='range-slider vertical'>
                  <input type="range" />
               </div> */}

            </div>

            {/* <div className="side-panel">
               <BorderRadiusInputBox onChange={handleTopRightBorderChange} value={topRightBorder} />
               <BorderRadiusInputBox onChange={handleBottomRightBorderChange} value={bottomRightBorder} />
            </div> */}
         </div>
         <div className='output-box'>
            <h3>border-radius:</h3>
            <output className='css-output'>50% 50% 0% 100% / 71% 28% 72% 29%</output>
            <button onClick={handleCopy}>Copy</button>
         </div>
      </div >
   );
}

export default App;
