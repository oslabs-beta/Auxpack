import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentContainer from '../client/containers/ContentContainer.jsx';

describe('ContentContainer Unit Tests', () => {
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
  };

  beforeEach(() => {
    wrapper = shallow(<ContentContainer {...props} />);
  });

  it('should render', () => {
    expect(wrapper);
  });

  test('ContentContainer snapshot testing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('ContentContainer should render a React Fragment', () => {
    expect(wrapper.find('Fragment').length).toEqual(1);
  });

  it('Fragment should have 1 Switch component', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.find('Switch').length).toEqual(1);
  });

  it('Fragment should have 4 Route components', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.find('Route').length).toEqual(4);
  });
});
