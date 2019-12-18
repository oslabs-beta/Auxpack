// Refer to setupTests.js for global variables used in testing
import App from '../client/App.jsx';
import MainContainer from '../client/containers/MainContainer.jsx';

describe('App Unit Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render', () => {
    expect(wrapper);
  });

  test('App snapshot testing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('App should render MainContainer', () => {
    expect(wrapper.find(MainContainer)).toHaveLength(1);
  });
});
