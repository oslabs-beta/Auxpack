import HistoryCharts from '../client/content/containers/HistoryCharts.jsx';
import SizeChart from '../client/content/components/SizeChart.jsx';
import TimeChart from '../client/content/components/TimeChart.jsx';

describe('HistoryCharts Unit Testing', () => {
  describe('HistoryCharts Container', () => {
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
        treeStats: {
          cjs: [{ name: './test2.js', size: 49, reasonTypes: [{ name: './test.js', type: 'cjs require' }] }, { name: './test2.js', size: 49, reasonTypes: [{ name: './test.js', type: 'cjs require' }] }],
          esm: [{ name: './client/App.jsx', size: 6375, reasonTypes: [{ name: './client/index.js', type: 'harmony side effect evaluation' }] }],
          both: [{ name: './node_modules/react/index.js', size: 190, reasonTypes: [{ name: './client/App.jsx', type: 'harmony side effect evaluation' }] }],
        },
      }],
    };

    beforeAll(() => {
      wrapper = shallow(<HistoryCharts {...props} />);
    });

    it('HistoryCharts snapshot testing', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('HistoryCharts should render SizeChart and TimeChart', () => {
      expect(wrapper.find(SizeChart).length).toBe(1);
      expect(wrapper.find(TimeChart).length).toBe(1);
    });
  });

  describe('SizeChart', () => {
    let wrapper;

    const props = {
      chartData: [{ build: 1, size: 100, time: 3 }, { build: 2, size: 100, time: 3 }, { build: 3, size: 100, time: 3 }],
    };

    beforeAll(() => {
      wrapper = mount(<SizeChart {...props} />);
    });

    it('SizeChart snapshot testing', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('SizeChart should render divs with class "single-chart" and id "size-chart"', () => {
      expect(wrapper.find('div').at(0).hasClass('single-chart')).toBe(true);
      expect(wrapper.find('#size-chart').length).toBe(1);
    });
  });
});
