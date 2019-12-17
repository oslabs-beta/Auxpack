import Sunburst from '../client/content/components/Sunburst.jsx';

describe('Sunburst Unit Tests', ()=>{
  let wrapper;

  const props = {
    burstData: [
        ["client/Components/AnimalCard.jsx", "795"],
        ["client/Components/AnimalDisplay.jsx", "743"],
        ["client/Components/Form.jsx", "2008"],
        ["client/Components/List.jsx", "3910"],
        ["client/Components/ListItem.jsx", "792"],
        ["client/index.js", "164"],
    ]
  }

  beforeAll(()=>{
      wrapper = shallow(<Sunburst {...props.burstData} />);
  });

  it("Sunburst should render a div with id = main",()=>{
      expect(props.burstData.length).toEqual(6);
      expect(wrapper.find('div#main').length).toEqual(1);
  });

  it('Sunburst div#main should have div#sequence and div#chart as children',()=>{
      const mainDiv =  expect(wrapper.find('div#main'));
      expect(mainDiv.find('div#sequence').length).toEqual(1);
      expect(mainDiv.find('div#chart').length).toEqual(1);
  });

  it('Sunburstdiv#chart should have svg.sunburst and div#explanation as children',()=>{
      
      const mainDiv = expect(wrapper.find('div#main'));
      const chartDiv = expect(mainDiv.find('div#chart'));
      expect(chartDiv.find('svg.sunburst').length).toEqual(1);
      expect(chartDiv.find('div#explanation').length).toEqual(1);
  });
});