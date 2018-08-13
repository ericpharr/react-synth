import { types } from 'mobx-state-tree'

const Oscillator = types
    .model({
        type: types.optional(types.enumeration(['sine', 'square', 'sawtooth', 'triangle', 'fatsawtooth']), 'square'),
    })
    .actions(self => ({
        setType(type) {
            self.type = type
        }
    }))
    
const Filter = types
    .model({
        Q: types.optional(types.number, 6),
        type: types.optional(types.enumeration(['lowpass', 'highpass', 'bandpass']), 'lowpass'),
        rolloff: types.optional(types.union(types.literal(-24), types.literal(-12)), -24)
    })
    .actions(self => ({
        setQ(Q){
            self.Q = Q
        },
        setType(type){
            self.type = type
        },
        setRolloff(rolloff){
            self.rolloff = rolloff
        }
    }))

const FilterEnvelope = types
    .model({
        attack: types.optional(types.number, 0.06),
        decay: types.optional(types.number, 0.2),
        sustain: types.optional(types.number, 0.5),
        release: types.optional(types.number, 2),
        baseFrequency: types.optional(types.number, 200),
        octaves: types.optional(types.number, 7),
        exponent: types.optional(types.number, 2)
    })
    .actions(self => ({
        update(field, value){
            self[field] = value
        },
    }))

const Envelope = types
    .model({
        attack: types.optional(types.number, 0.005),
        decay: types.optional(types.number, 0.1),
        sustain: types.optional(types.number, 0.5),
        release: types.optional(types.number, 1)
    })
    .actions(self => ({
        update(field, value){
            self[field] = value
        },
    }))

const MonoSynth = types
    .model({
        oscillator: types.optional(Oscillator, Oscillator.create({})),
        filter: types.optional(Filter, Filter.create({})),
        filterEnvelope: types.optional(FilterEnvelope, FilterEnvelope.create({})),
        envelope: types.optional(Envelope, Envelope.create({})),
        detune: types.optional(types.number, 0)
    })
    .actions(self => ({
        setDetune(detune){
            self.detune = detune
        }
    }))

export default MonoSynth