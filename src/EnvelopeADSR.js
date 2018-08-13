import React from 'react'
import { inject, observer } from 'mobx-react'

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
            />
        </div>    
    )
}
const EnvelopeADSR = ({ store }) => {
    return (
        <div>
            <Slider
                name="attack"
                step={0.001}
                min={0.005} 
                max={5}
                param={store.monosynth.envelope}
            />
            <Slider
                name="decay"
                step={0.001}
                min={0.005}
                max={5}
                param={store.monosynth.envelope}
            />
            <Slider
                name="sustain"
                step={0.001}
                min={0}
                max={1}
                param={store.monosynth.envelope}
            />
            <Slider
                name="release"
                step={0.001}
                min={0.005}
                max={5}
                param={store.monosynth.envelope}
            />
        </div>
    )
}

export default inject('store')(observer(EnvelopeADSR))