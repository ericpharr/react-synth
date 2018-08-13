import React from 'react'
import { observer, inject } from 'mobx-react'

const OscillatorSelect = ({ store }) => {
    return (
        <div>
            <button
            onClick={() => store.monosynth.oscillator.setType('sawtooth')}
            >
            saw
            </button>
            <button
                onClick={() => store.monosynth.oscillator.setType('square')}
            >
            square
            </button>
            <button
                onClick={() => store.monosynth.oscillator.setType('triangle')}
            >
            triangle
            </button>
            <button
                onClick={() => store.monosynth.oscillator.setType('sine')}
            >
            sine
            </button>
            <button
                onClick={() => store.monosynth.oscillator.setType('fatsawtooth')}>
            fatsaw
            </button>
        </div>
    )
}

export default inject('store')(observer(OscillatorSelect))