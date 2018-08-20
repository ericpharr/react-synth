import React from 'react'
import { observer, inject } from 'mobx-react'
import OscillatorSelect from './OscillatorSelect'
import EnvelopeADSR from './EnvelopeADSR'
import FilterEnvelopeADSR from './FilterEnvelopeADSR'


const MonoSynth = ({ store }) => {
    return (
        <div>
            <h1>Oscillator type: { store.monosynth.oscillator.type }</h1>
            <OscillatorSelect/>
            <EnvelopeADSR/>
            <FilterEnvelopeADSR/>
            <h1>Octave Select</h1>
            <button onClick={ () => store.keyboard.downOctave() }>-</button>
            <button onClick={ () => store.keyboard.upOctave() }>+</button>
        </div>
    )
}

export default inject('store')(observer(MonoSynth))