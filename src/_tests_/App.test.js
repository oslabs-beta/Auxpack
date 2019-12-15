// Refer to setupTests.js for config
import App from '../client/App.jsx';
import MainContainer from '../client/containers/MainContainer.jsx';
// import renderer from 'react-test-renderer';
// sample test to ensure Jest is working
// describe('Examining the syntax of Jest tests', () => {

//   it('sums numbers', () => {
//     expect(1 + 2).toEqual(3);
//     expect(2 + 2).toEqual(4);
//   });
// });

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  test('App snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('App should render MainContainer', () => {
    expect(wrapper.find(MainContainer)).toHaveLength(1);
  })
})


