import MonoSynth from './models/MonoSynth'
import { types } from 'mobx-state-tree'

const RootStore = types
    .model({
        monosynth: types.optional(MonoSynth, MonoSynth.create({}))
    })

export default RootStore 