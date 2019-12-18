import { Tab, Tabs } from '@material-ui/core';
import BuildData from '../client/content/containers/BuildData.jsx';
import ChangesTable from '../client/content/components/ChangesTable.jsx';
import AssetsTable from '../client/content/components/AssetsTable.jsx';
import ErrorsTable from '../client/content/components/Errors.jsx';
import Modules from '../client/content/components/Modules.jsx';


describe('BuildData', () => {
  let wrapper; let
    shallow;

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

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<BuildData {...props} />);
  });

  it('should render', () => {
    expect(wrapper);
  });
  it('Snapshot testing BuildData component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  // Need to mock props/ Parse function
  it('Should render a div"', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('Should render 1 Tabs component', () => {
    const div = wrapper.find('div');
    expect(div.find(Tabs).length).toEqual(1);
  });

  it('Tabs component should contain 4 Tab components, with theses texts: Changes, Assets, Errors, Modules', () => {
    const div = wrapper.find('div');
    const TabsComponent = div.find(Tabs);
    expect(TabsComponent.find(Tab).length).toEqual(4);
  });

  it('BuildData should have a ChangesTable component', () => {
    expect(wrapper.find(ChangesTable).length).toEqual(1);
  });

  it('BuildData should have a AssetsTable component', () => {
    expect(wrapper.find(AssetsTable).length).toEqual(1);
  });

  it('BuildData should have a ErrorsTable component', () => {
    expect(wrapper.find(ErrorsTable).length).toEqual(1);
  });
  it('BuildData should have a Modules component', () => {
    expect(wrapper.find(Modules).length).toEqual(1);
  });
});
