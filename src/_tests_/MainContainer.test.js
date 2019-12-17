import MainContainer from '../client/containers/MainContainer.jsx';
import ContentContainer from '../client/containers/ContentContainer.jsx';
import NavbarContainer from '../client/containers/NavbarContainer.jsx';

describe('MainContainer Unit Tests', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<MainContainer />)
  });

  test('App snapshot testing', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('MainContainer should render ContentContainer',()=>{
      expect(wrapper.find(ContentContainer)).toHaveLength(1);
  });

  it('MainContainer should render NavbarContainer',()=>{
      expect(wrapper.find(NavbarContainer)).toHaveLength(1);
  });
})