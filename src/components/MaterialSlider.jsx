import * as React from "react";
import Slider from '@mui/material/Slider'

function MaterialSlider({ sliderValue, onChangeHandler, orientation = 'horizontal' }) {

    const height = orientation == 'horizontal' ? 0 : 'auto'
    const width = orientation == 'vertical' ? 0 : 'auto'

    return (
        <Slider
            className="material-slider"
            orientation={orientation}
            track={false}
            sx={{
                width: { width },
                height: { height },
            }}
            value={sliderValue}
            onChange={onChangeHandler}
        />
    )
}

export default MaterialSlider