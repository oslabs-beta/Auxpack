// Refer to setupTests.js for config
import App from '../client/App.jsx';
import Overview from '../client/content/containers/Overview.jsx';
import SunburstContainer from '../client/content/containers/SunburstContainer.jsx';

// sample test to ensure Jest is working
describe('Examining the syntax of Jest tests', () => {
   
  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});

// sample test to ensure Enzyme is working
it('renders without crashing', () => {
  shallow(<App />);
});

describe('React unit tests', () => {
  describe('Overview', () => {
    let wrapper;

    const props = {
      build:[{
      timeStamp:1575426090404,
      time:1439,
      hash:"546142ce1b49a6ba7d6f",
      errors:[],
      size:1172113,
      assets:[{"name":"bundle.js","chunks":["main"],"size":1172113}],
      chunks:[{"size":1118609,"files":["bundle.js"],"modules":[{"name":"./client/App.jsx","size":6375,"id":"./client/App.jsx"}]}],
      treeStats:{csj:[], esm:[], both:[]}
      }],
      activeBuild: 1
    }

    beforeAll(() => {
      wrapper = shallow(<Overview {...props} />);

    });

    it('Snapshot testing', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("Overview should display all of its build prop inside the SunburstContainer component", () => {
      const propValues = Object.values(props);
      wrapper.find(SunburstContainer).forEach(node => {
        expect(propValues.includes(node.prop("build"))).toBe(true);
      });
    });

  })
});



