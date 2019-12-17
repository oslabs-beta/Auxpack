import BuildData from '../client/content/containers/BuildData.jsx';


describe('BuildData', () => {
  beforeEach(() => {
    wrapper = shallow(<BuildData />);
  });

  it('should render', () => {
    expect(wrapper);
  })
  it('Snapshot testing BuildData component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  // Need to mock props/ Parse function
  it('Should render div with className of "content-card"', () => {
    expect(wrapper.find('div.content-card').length).toEqual(1);
  })
})