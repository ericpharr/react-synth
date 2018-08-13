import RootStore from './RootStore'

it('can create a RootStore', () => {
    const store = RootStore.create({monosynth: {filter: {rolloff: -12}}})
    
    expect(store).toMatchSnapshot()
})