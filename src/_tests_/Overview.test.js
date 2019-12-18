import Overview from '../client/content/containers/Overview.jsx';
import SunburstContainer from '../client/content/containers/SunburstContainer.jsx';

describe('Overview Unit Tests', () => {
  let wrapper;

  const props = {
    build: [{
      timeStamp: 1575426090404,
      time: 1439,
      hash: '546142ce1b49a6ba7d6f',
      errors: [],
      size: 1172113,
      assets: [{ name: 'bundle.js', chunks: ['main'], size: 1172113 }],
      chunks: [{ size: 1118609, files: ['bundle.js'], modules: [{ name: './client/App.jsx', size: 6375, id: './client/App.jsx' }] }],
      treeStats: { csj: [], esm: [], both: [] },
    }],
    activeBuild: 1,
  };

  beforeEach(() => {
    wrapper = shallow(<Overview {...props} />);
  });

  it('should render', () => {
    expect(wrapper);
  });

  test('Snapshot testing Overview component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Overview should render a div with id of 'container'", () => {
    expect(wrapper.find('#container').length).toEqual(1);
  });

  it('Overview should render a div wrapped around SunburstContainer', () => {
    const div = wrapper.find('#container');
    expect(div.find(SunburstContainer).length).toEqual(1);
  });
});
