import { FormControlLabel, Switch } from '@material-ui/core'
import React from 'react'
import Circles from './Circles'

function Person({
    id,
    selectedIndex,
    currentIndex,
    image,
    alt,
    setIndex
}) {
    
    return (
        <div id={id} className="module area">
            <div id={id} className="envelope-container-exp">
                <div onClick={() => setIndex(currentIndex)} className="gradient-right-pannel">
                    <img id="1" style={selectedIndex === currentIndex ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src={image} height="350" width="350" alt="Petrie the Powderpuff" />
                </div>
                <FormControlLabel
                    control={<Switch checked={selectedIndex === currentIndex} onChange={() => setIndex(currentIndex)} name="checkedA" />}
                    label={selectedIndex === currentIndex ? "Loaded" : "Click to load"}
                />
                <Circles />
            </div>
        </div>
    )
}

export default Person
