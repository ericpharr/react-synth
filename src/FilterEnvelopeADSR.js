import React from 'react'
import { inject, observer } from 'mobx-react'
import Slider from './Slider'

const FilterEnvelopeADSR = ({ store }) => {
    const param = store.monosynth.filterEnvelope
    return (
        <div>
            <h1>Filter Envelope</h1>
            <Slider
                name="attack"
                min={0.005}
                max={5}
                step={0.001}
                param={param}
            />
            <Slider
                name="decay"
                min={0.005}
                max={5}
                step={0.001}
                param={param}
            />
            <Slider
                name="sustain"
                min={0.02}
                max={0.98}
                step={0.01}
                param={param}
            />
            <Slider
                name="release"
                min={0.1}
                max={5}
                step={0.001}
                param={param}
            />
        </div>
    )
}

export default inject('store')(observer(FilterEnvelopeADSR))