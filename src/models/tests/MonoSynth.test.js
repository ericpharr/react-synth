import MonoSynth from '../MonoSynth'

jest.mock('tone')

it('creates a synth', () => {
    const synth = MonoSynth.create({})
    
    expect(synth).toMatchSnapshot()
})