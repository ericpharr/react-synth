import React from 'react';
import MonoSynth from './MonoSynth'
import { autorun } from 'mobx'
import { Provider } from 'mobx-react'
import RootStore from './RootStore'
import Tone from 'tone'

const store = RootStore.create({})

const synth = new Tone.MonoSynth().toMaster()

autorun(() => {
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
}, { delay: 300 })

const KeyDown = (e) => {
  if ( !([...store.keyboard.notes.keys()].includes(e.key)) ) {

    return
  } else if (store.isPlaying(e.key)) {
    
    return 
  } else {
    store.noteOn(e.key)
    return synth.triggerAttack(store.getNote(e.key))
  }
  
}

const KeyUp = (e) => {
  if ( !([...store.keyboard.notes.keys()].includes(e.key)) ) {

    return
  } else {
    
    store.noteOff(e.key)

    synth.triggerRelease()
  }
}


class App extends React.Component {

  componentDidMount() {
    window.addEventListener("keydown", (e) => {KeyDown(e)})
    window.addEventListener("keyup", (e) => {KeyUp(e)})
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", (e) => { KeyDown(e) })
    window.removeEventListener("keyup", (e) => { KeyUp(e) })
  }
  
  render() {
    return(
      <Provider store={store}> 
          <MonoSynth />
      </Provider>
    )
  }
}

export default App;
