import MonoSynth from '../MonoSynth'

it('creates a synth', () => {
    const synth = MonoSynth.create({})
    
    expect(synth).toMatchSnapshot()
})