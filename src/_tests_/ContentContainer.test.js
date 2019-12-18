import ContentContainer from '../client/containers/ContentContainer.jsx';
import Overview from '../client/content/containers/Overview.jsx';
import BuildData from '../client/content/containers/BuildData.jsx'
import Treeshaking from '../client/content/containers/Treeshaking.jsx'

describe('ContentContainer Unit Tests', () => {
    let wrapper;

    const props = {
        build: [{
            timeStamp: 1575426090404,
            time: 1439,
            hash: "546142ce1b49a6ba7d6f",
            errors: [],
            size: 1172113,
            assets: [{ "name": "bundle.js", "chunks": ["main"], "size": 1172113 }],
            chunks: [{ "size": 1118609, "files": ["bundle.js"], "modules": [{ "name": "./client/App.jsx", "size": 6375, "id": "./client/App.jsx" }] }],
            treeStats: { csj: [], esm: [], both: [] }
        }],
    }

    beforeEach(() => {
        wrapper = shallow(<ContentContainer {...props} />);
    })

    it('should render', () => {
        expect(wrapper);
    })

    test('ContentContainer snapshot testing', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    xit('ContentContainer should render Overview', () => {
        //console.log(mount(<ContentContainer />).debug());
        expect(wrapper.find(Overview).length).to.equal(1);
    })
})