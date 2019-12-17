import Sunburst from '../client/content/components/Sunburst.jsx';

describe('Sunburst test', () => {
    let wrapper;

    beforeEach(() => {
        // const sunburstConsumer = new Sunburst();
        wrapper = mount(<Sunburst />);
    })
    xtest('Sunburst snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    xit('should render', () => {
        expect(wrapper);
    })

    xit('Check if consumer cals to constructor and all methods', () => {
        console.log(`SUNBURST`, wrapper)
    })


})