import { types } from 'mobx-state-tree'
import { zipWith, range } from 'lodash'

const Notes = types
    .model({
        key: types.identifier,
        note: types.number,
        on: types.boolean
    })
    .actions(self => ({
        noteOn() {
            self.on = true
        },
        noteOff() {
            self.on = false
        }
    }))

const Keyboard = types
    .model({
        notes: types.map(Notes)
    })
    .actions(self => ({
        afterCreate() {
            const keys = zipWith("awsedftgyhujkolp;'".split(''), range(36,54), (a, b) => { 
                return { key: a, note: b, on: false}
            })

            return keys.map((key) => self.notes.put(key))
        },
        downOctave(){
            if ( self.notes.get('a').note > 24 ) {
                const keys = [ ...self.notes.keys() ]

                keys.map((key) => { return self.notes.get(key).note = self.notes.get(key).note - 12 })
            } else {
                return 
            }
        },
        upOctave(){
            if ( self.notes.get('a').note < 84 ){
                const keys = [ ...self.notes.keys() ]
                keys.map((key) => { return self.notes.get(key).note = self.notes.get(key).note + 12 })
            } else {
                return
            }
        }
    }))

export default Keyboard