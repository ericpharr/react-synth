import React from 'react'
import { observer, inject } from 'mobx-react'
import Tone from 'tone'
import OscillatorSelect from './OscillatorSelect'
import EnvelopeADSR from './EnvelopeADSR'
import FilterEnvelopeADSR from './FilterEnvelopeADSR'

const synth = new Tone.MonoSynth().toMaster()

const noteOn = (note='C4') => {
    synth.triggerAttack(note)
}

const noteOff = () => {
    synth.triggerRelease()
}

const MonoSynth = ({store}) => {
    synth.oscillator.type = store.monosynth.oscillator.type
    synth.filter.Q.value = store.monosynth.filter.Q
    synth.filter.type = store.monosynth.filter.type
    synth.filter.rolloff = store.monosynth.filter.rolloff
    synth.filterEnvelope.attack = store.monosynth.filterEnvelope.attack
    synth.filterEnvelope.decay = store.monosynth.filterEnvelope.decay
    synth.filterEnvelope.sustain = store.monosynth.filterEnvelope.decay
    synth.filterEnvelope.release = store.monosynth.filterEnvelope.release
    synth.filterEnvelope.octaves = store.monosynth.filterEnvelope.octaves
    synth.filterEnvelope.exponent = store.monosynth.filterEnvelope.exponent
    synth.envelope.attack = store.monosynth.envelope.attack
    synth.envelope.decay = store.monosynth.envelope.decay
    synth.envelope.sustain = store.monosynth.envelope.sustain
    synth.envelope.release = store.monosynth.envelope.release
    synth.detune.value = store.monosynth.detune
    
    // synth.oscillator.type = 'triangle'
    // synth.detune.value = -1200
    // synth.envelope.attack
    // synth.envelope.decay
    // synth.envelope.sustain
    // synth.envelope.release
    // synth.filterEnvelope.attack
    // synth.filterEnvelope.decay
    // synth.filterEnvelope.sustain
    // synth.filterEnvelope.release
    // synth.filterEnvelope.baseFrequency
    // synth.filterEnvelope.octaves
    // synth.filterEnvelope.exponent
    // synth.filter.Q
    // synth.filter.type
    // synth.filter.rolloff

    return (
        <div>
            <h1>Oscillator type: { store.monosynth.oscillator.type }</h1>
            <button
                onMouseDown={() => noteOn()}
                onMouseUp={() => noteOff()}
            >Play</button>
            <OscillatorSelect/>
            <EnvelopeADSR/>
            <FilterEnvelopeADSR/>
        </div>
    )
}

export default inject('store')(observer(MonoSynth))