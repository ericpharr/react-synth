import React from 'react'

const Slider = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>
                {props.name}
            </label>
            <input
                name={props.name}
                type="range"
                min={props.min}
                max={props.max}
                step={props.step}
                defaultValue={props.param[props.name]}
                onChange={event => {props.param.update(props.name, parseFloat(event.target.value))}}
                onInput={event => {props.param.update(props.name, parseFloat(event.target.value))}}
            />
        </div>    
    )
}

export default Slider 