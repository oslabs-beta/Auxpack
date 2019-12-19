import ChangesTable from '../client/content/components/ChangesTable.jsx';

describe('ChangesTable Unit Tests', () => {
  let wrapper;

  const props = {
    dirFinalArrayPrev: [
      ['client',
        { filename: 'index.js', size: 164, percentage: '0.01%' },
      ],
      ['client/Components',
        { filename: 'AnimalCard.jsx', size: 795, percentage: '0.07%' },
        { filename: 'AnimalDisplay.jsx', size: 743, percentage: '0.06%' },
        { filename: 'Form.jsx', size: 2008, percentage: '0.17%' },
        { filename: 'List.jsx', size: 3910, percentage: '0.33%' },
        { filename: 'ListItem.jsx', size: 792, percentage: '0.07%' },
      ],
      [
        'client/stylesheets',
        [{ filename: 'styles.css', size: 453, percentage: '0.04%' }],
      ],
      [
        'node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/stylesheets',
        {
          filename: 'styles.css',
          size: 1293,
          percentage: '0.11%',
        },
      ],
      [
        'node_modules/css-loader/dist/runtime',
        { filename: 'api.js', size: 2677, percentage: '0.23%' },
      ],
    ],
    dirFinalArray: [
      ['client',
        { filename: 'index.js', size: 164, percentage: '0.01%' },
      ],
      ['client/Components',
        { filename: 'AnimalCard.jsx', size: 795, percentage: '0.07%' },
        { filename: 'AnimalDisplay.jsx', size: 743, percentage: '0.06%' },
        { filename: 'Form.jsx', size: 2008, percentage: '0.17%' },
        { filename: 'List.jsx', size: 3910, percentage: '0.33%' },
        { filename: 'ListItem.jsx', size: 792, percentage: '0.07%' },
      ],
      [
        'client/stylesheets',
        [{ filename: 'styles.css', size: 453, percentage: '0.04%' }],
      ],
      [
        'node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/stylesheets',
        {
          filename: 'styles.css',
          size: 1293,
          percentage: '0.11%',
        },
      ],
      [
        'node_modules/css-loader/dist/runtime',
        { filename: 'api.js', size: 2677, percentage: '0.23%' },
      ],
    ],
    getBytes(number) {
      if (number < 1000) return `${number} B`;
      if (number < 1000000) return `${(number / 1000).toFixed(2)} KiB`;
      return `${(number / 1000000).toFixed(2)} MiB`;
    },
  };

  beforeEach(() => {
    wrapper = shallow(<ChangesTable {...props} />);
  });

  it('ChangesTable should render', () => {
    expect(wrapper);
  });

  test('ChangesTable snapshot testing', () => {
    expect(toJson(ChangesTable)).toMatchSnapshot();
  });

  it('ChangesTable should contain a div with classes cards-container and centered', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('ChangesTable should render a SimpleExpansionPanel in the div', () => {
    expect(wrapper.find('SimpleExpansionPanel').length).toEqual(1);
  });
});
