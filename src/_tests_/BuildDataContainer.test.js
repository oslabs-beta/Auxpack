import BuildData from '../client/content/containers/BuildData.jsx';
import ChangesTable from '../client/content/components/ChangesTable.jsx';
import AssetsTable from '../client/content/components/AssetsTable.jsx';
import ErrorsTable from '../client/content/components/Errors.jsx';
import Modules from '../client/content/components/Modules.jsx';
import Tab from '@material-ui/core/Tab';

describe('BuildData Unit Tests', () => {
  
  let shallow = createShallow();
  const props = {
    build:[{
      timeStamp:1575426090404,
      time:1439,
      hash:"546142ce1b49a6ba7d6f",
      errors:[],
      size:1172113,
      assets:[{"name":"bundle.js","chunks":["main"],"size":1172113}],
      chunks:[{"size":1118609,"files":["bundle.js"],"modules":[{"name":"./client/App.jsx","size":6375,"id":"./client/App.jsx"}]}],
      treeStats:{
        "cjs":[{"name":"./test2.js","size":49,"reasonTypes":[{"name":"./test.js","type":"cjs require"}]},{"name":"./test2.js","size":49,"reasonTypes":[{"name":"./test.js","type":"cjs require"}]}],
        "esm":[{"name":"./client/App.jsx","size":6375,"reasonTypes":[{"name":"./client/index.js","type":"harmony side effect evaluation"}]}],
        "both":[{"name":"./node_modules/react/index.js","size":190,"reasonTypes":[{"name":"./client/App.jsx","type":"harmony side effect evaluation"}]}]}
      }],
    activeBuild: 0,
    getBytes: function() {return},
    dirFinalArray: [],
    dirFinalArrayPrev: []
  }

  describe('BuildData Container', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<BuildData {...props} />)
    });

    it('BuildData snapshot testing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('BuildData should display four Tab components', () => {
      expect((wrapper.find(Tab)).length).toBe(4);
    });

    it('BuildData should render ChangesTable, AssetsTable, ErrorsTable, and Modules components', () => {
      expect((wrapper.find(ChangesTable)).length).toBe(1);
      expect((wrapper.find(AssetsTable).length)).toBe(1);
      expect((wrapper.find(ErrorsTable)).length).toBe(1);
      expect((wrapper.find(Modules)).length).toBe(1);
    });
  });

  describe('ChangesTable', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<ChangesTable {...props} />)
    });

    it('ChangesTable snapshot testing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('ChangesTable should render div with class "cards-container" wrapped around an Expansion Panel', () => {
      expect((wrapper.find('div')).hasClass('cards-container')).toBe(true);
      expect((wrapper.find('SimpleExpansionPanel')).length).toBe(1);
    });
  });

  describe('AssetsTable', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<AssetsTable {...props} />)
    });

    it('AssetsTable snapshot testing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('AssetsTable should render table', () => {
      expect((wrapper.find('table')).length).toBe(1);
    });
  });

  describe('ErrorsTable', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<ErrorsTable {...props} />)
    });

    it('ErrorsTable snapshot testing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('ErrorsTable should render table', () => {
      expect((wrapper.find('table')).length).toBe(1);
    });
  });

  describe('Modules', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Modules {...props} />)
    });

    it('Modules snapshot testing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Modules should render div with class "cards-container" wrapped around an Expansion Panel', () => {
      expect((wrapper.find('div')).hasClass('cards-container')).toBe(true);
      expect((wrapper.find('SimpleExpansionPanel')).length).toBe(1);
    });
  });
})


