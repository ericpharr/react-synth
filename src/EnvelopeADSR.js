import React from 'react'
import { inject, observer } from 'mobx-react'
import Slider from './Slider'

const EnvelopeADSR = ({ store }) => {
    return (
        <div>
            <h1>Envelope</h1>
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