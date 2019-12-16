// Refer to setupTests.js for global variables used in testing
import App from '../client/App.jsx';
import MainContainer from '../client/containers/MainContainer.jsx';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  test('App snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  
});

  it('App should render MainContainer', () => {
    expect(wrapper.find(MainContainer)).toHaveLength(1);
  })



