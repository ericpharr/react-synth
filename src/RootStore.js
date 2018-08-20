import MonoSynth from './models/MonoSynth'
import { types } from 'mobx-state-tree'
import Keyboard from './models/Keyboard'
import { Note } from 'tonal'

const RootStore = types
    .model({
        monosynth: types.optional(MonoSynth, MonoSynth.create({})),
        keyboard: types.optional(Keyboard, Keyboard.create({}))
    })
    .actions(self => ({
        noteOn(input) {
            self.keyboard.notes.get(input).noteOn()
        },
        noteOff(input) {
            self.keyboard.notes.get(input).noteOff()
        }
    }))
    .views(self => ({
        isPlaying(input){
            return self.keyboard.notes.get(input).on
        },
        getNote(input){
            return Note.fromMidi(self.keyboard.notes.get(input).note, true)
        }
    }))

export default RootStore 