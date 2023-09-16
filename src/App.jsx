import './App.css';
import React, { useState } from 'react';
import CustomSizeNumericInput from './components/CustomSizeNumericInput';
import MaterialSlider from './components/MaterialSlider';
import Switch from '@mui/material/Switch'

function App() {

   const [leftSliderValue, setLeftSliderValue] = useState(70)
   const [topSliderValue, setTopSliderValue] = useState(30)
   const [rightSliderValue, setRightSliderValue] = useState(70)
   const [bottomSliderValue, setBottomSliderValue] = useState(30)

   const [topLeftRadiusH, setTopLeftRadiusH] = useState(30)
   const [topLeftRadiusV, setTopLeftRadiusV] = useState(30)

   const [topRightRadiusH, setTopRightRadiusH] = useState(70)
   const [topRightRadiusV, setTopRightRadiusV] = useState(30)

   const [botRightRadiusH, setBotRightRadiusH] = useState(70)
   const [botRightRadiusV, setBotRightRadiusV] = useState(70)

   const [botLeftRadiusH, setBotLeftRadiusH] = useState(30)
   const [botLeftRadiusV, setBotLeftRadiusV] = useState(70)

   const [showCopySuccessPopup, setShowCopySuccessPopup] = useState(false)
   const [copySucceeded, setCopySucceeded] = useState(false)
   const [copyButtonClicked, setCopyButtonClicked] = useState(false)

   const [customSizeEnabled, setCustomSizeEnabled] = useState(false)

   const borderRadiusText = `${topLeftRadiusH}% ${topRightRadiusH}% ${botRightRadiusH}% ${botLeftRadiusH}% / ${topLeftRadiusV}% ${topRightRadiusV}% ${botRightRadiusV}% ${botLeftRadiusV}%`

   const [customWidth, setCustomWidth] = useState(0)
   const [customHeight, setCustomHeight] = useState(0)

   function handleLeftSliderValueChange(event) {
      setLeftSliderValue(event.target.value)
      setTopLeftRadiusV(100 - event.target.value)
      setBotLeftRadiusV(event.target.value)
      return
   }

   function handleTopSliderValueChange(event) {
      setTopSliderValue(event.target.value)
      setTopLeftRadiusH(event.target.value)
      setTopRightRadiusH(100 - event.target.value)
      return
   }

   function handleRightSliderValueChange(event) {
      setRightSliderValue(event.target.value)
      setBotRightRadiusV(event.target.value)
      setTopRightRadiusV(100 - event.target.value)
      return
   }

   function handleBottomSliderValueChange(event) {
      setBottomSliderValue(event.target.value)
      setBotLeftRadiusH(event.target.value)
      setBotRightRadiusH(100 - event.target.value)
      return
   }

   function handleCopy() {

      function showCopyStatusPopup() {

         setShowCopySuccessPopup(true)
         setCopyButtonClicked(true)

         setTimeout(() => {
            setShowCopySuccessPopup(false)
            setCopyButtonClicked(false)
         }, 2000)
      }

      navigator.clipboard.writeText(borderRadiusText)
         .then(() => {
            setCopySucceeded(true)
            showCopyStatusPopup()
         })
         .catch(() => {
            setCopySucceeded(false)
            showCopyStatusPopup()
         })
      return
   }

   function submitNewWidthValue(newValue) {
      setCustomWidth(newValue)
      return
   }

   function submitNewHeightValue(newValue) {
      setCustomHeight(newValue)
      return
   }

   function handleCustomSizeSwitch(event) {
      setCustomSizeEnabled(event.target.checked)
      setCustomHeight(document.getElementById("shape-container").offsetHeight)
      setCustomWidth(document.getElementById("shape-container").offsetWidth)
      return
   }

   return (
      <div className="app">
         <main className='content'>

            <div className={showCopySuccessPopup ? 'success-popup' : 'success-popup hidden'} >
               {copySucceeded ? 'Copied to Clipboard 👍' : 'Error copying to clipboard 💔'}
            </div>

            <h1 className="title">hacky/budget border-radius</h1>

            <div
               style={customSizeEnabled ? { height: `${customHeight}px`, } : null}
               className="shape-overall-container">

               <div
                  id='shape-container'
                  style={
                     customSizeEnabled ? {
                        width: `${customWidth}px`,
                     } : null
                  }
                  className='shape-container-horizontal'
               >
                  {/* left slider */}
                  <MaterialSlider
                     sliderValue={leftSliderValue} onChangeHandler={handleLeftSliderValueChange}
                     orientation={'vertical'}
                  />
                  <div className='shape-container-vertical'>
                     {/* top slider */}
                     <MaterialSlider
                        sliderValue={topSliderValue} onChangeHandler={handleTopSliderValueChange}
                        orientation={'horizontal'}
                     />

                     <div
                        className="shape"
                        style={{
                           borderRadius: borderRadiusText
                        }}
                     >
                     </div>
                     {/* Bottom slider */}
                     <MaterialSlider
                        sliderValue={bottomSliderValue} onChangeHandler={handleBottomSliderValueChange}
                        orientation={'horizontal'}
                     />
                  </div>
                  {/* right slider */}
                  <MaterialSlider
                     sliderValue={rightSliderValue} onChangeHandler={handleRightSliderValueChange}
                     orientation={'vertical'}
                  />
               </div>

            </div>

            <div className='output-container'>

               <div className='output'>

                  <div className='output-label'>Border-radius:</div>

                  <div className='border-radius-output-container'>

                     <span className='css-output'>{borderRadiusText}</span>
                     <button className={copyButtonClicked ? 'copy-button copy-button-clicked' : 'copy-button'} onClick={handleCopy}>COPY</button>

                  </div>

               </div>

               <div className='output' id='custom-size-container'>

                  <div className='output-label'>Custom Size:</div>
                  <div className='custom-size-controls'>
                     <Switch
                        checked={customSizeEnabled}
                        onChange={handleCustomSizeSwitch}
                        sx={{
                           '& .MuiSwitch-switchBase': {
                              '&.Mui-checked': {
                                 color: '#FF0099',
                                 '& + .MuiSwitch-track': {
                                    backgroundColor: 'pink',
                                    opacity: 1,
                                    border: 0,
                                 },
                              },
                              color: 'black',
                           },
                           '& .MuiSwitch-track': {
                              opacity: 1,
                              backgroundColor: '#D0D0D6'
                           },
                        }}
                     />
                     {customSizeEnabled &&
                        <div className='width-height-container'>
                           <div className='custom-size-value-container'>
                              <label className='settings-label'>Width :</label>
                              <CustomSizeNumericInput
                                 startingValue={customWidth}
                                 submitNewValue={submitNewWidthValue}
                              />
                           </div>
                           <div className='custom-size-value-container'>
                              <label className='settings-label'>Height :</label>
                              <CustomSizeNumericInput
                                 startingValue={customHeight}
                                 submitNewValue={submitNewHeightValue}
                              />
                           </div>
                        </div>
                     }
                  </div>
               </div>
            </div>

         </main>
         <footer className='signature'>
            <p>Copied with MUCH hardship and error by SkipperShark &#128049;, all rights and credits to <a href="https://9elements.github.io/fancy-border-radius/" target="_blank">9elements</a>. I just wanted to brush up my front end skills.</p>
         </footer>
      </div >
   );
}

export default App;
