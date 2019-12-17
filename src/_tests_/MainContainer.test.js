import MainContainer from '../client/containers/MainContainer.jsx';
import ContentContainer from '../client/containers/ContentContainer.jsx';
import NavbarContainer from '../client/containers/NavbarContainer.jsx';

describe('MainContainer test', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MainContainer />)
    })

    it('should render', () => {
        expect(wrapper);
    })

    test('App snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('MainContainer should render ContentContainer', () => {
        expect(wrapper.find(ContentContainer)).toHaveLength(1);
    })

    it('MainContainer should render NavbarContainer', () => {
        expect(wrapper.find(NavbarContainer)).toHaveLength(1);
    })


})