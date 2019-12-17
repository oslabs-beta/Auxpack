import BottomNavigation from '../src/client/components/BottomNavigation.jsx'

describe('React tests', () => {
    it('renders APP', () => {
        let wrapper = createMount(<BottomNavigation/>)
        expect(wrapper.find({ label: "Overview"})).exists().toBe(true)
    })
    
})