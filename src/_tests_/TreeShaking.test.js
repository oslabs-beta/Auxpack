import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import TreeShaking from '../client/content/containers/TreeShaking.jsx';
import TreeModule from '../client/content/components/TreeModule.jsx';

describe('TreeShaking Unit Tests', () => {
  describe('TreeShaking Container', () => {
    let shallow;
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
      activeBuild: 0,
    };

    beforeAll(() => {
      shallow = createShallow();
      wrapper = shallow(<TreeShaking {...props} />);
    });

    it('TreeShaking snapshot testing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('TreeShaking should render four TreeModule components', () => {
      expect((wrapper.find(TreeModule)).length).toBe(4);
    });

    it('TreeShaking should display correct module counts inside each TreeModule component', () => {
      // expect total count to be sum of lengths of props.build[0].treeStats
      wrapper.find(TreeModule).forEach((node) => {
        expect(node.prop('totalCount')).toBe(4);
      });
      // expect count displayed in module 1 to be equal to total count
      expect(wrapper.find(TreeModule).at(0).prop('count')).toBe(4);
      // expect count displayed in module 2 to be equal to esm count
      expect(wrapper.find(TreeModule).at(1).prop('count')).toBe(1);
      // expect count displayed in module 3 to be equal to cjs count
      expect(wrapper.find(TreeModule).at(2).prop('count')).toBe(2);
      // expect count displayed in module 4 to be equal to both count
      expect(wrapper.find(TreeModule).at(3).prop('count')).toBe(1);
    });
  });

  describe('TreeModule', () => {
    let shallow;
    let wrapper;
    const props = {
      list: [{ name: 'one' }, { name: 'two' }, { name: 'three' }],
      title: 'total',
      count: 5,
      totalCount: 10,
    };

    beforeAll(() => {
      shallow = createShallow();
      wrapper = shallow(<TreeModule {...props} />);
    });

    it('TreeModule snapshot testing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('TreeModule should render an Expansion Panel element', () => {
      expect((wrapper.find(ExpansionPanel)).length).toBe(1);
    });
  });
});
