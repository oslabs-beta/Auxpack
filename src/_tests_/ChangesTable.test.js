import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ChangesTable from '../client/content/components/ChangesTable.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SimpleExpansionPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Additions expansion panel */}
      <ExpansionPanel className="expansionPanel" defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} className="expansion-heading">
            <strong className="centered">Additions</strong>
            {/* Expansion heading */}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDetails">
          {/* Additions Card Panel - content */}
          <AdditionCard />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* Second expansion: defaultExpanded prop set to 'true' for expand on render */}
      <ExpansionPanel className="expansionPanel" defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} className="center-heading" className="expansion-heading">
            <strong className="centered">Removals</strong>
            {' '}
            {/* Expansion heading */}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDetails">
          {/* Removals Card Panel - content */}
          <RemovalCard />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

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

  it('Should render', () => {
    expect(wrapper);
  });

  test('ChangesTable snapshot testing', () => {
    expect(toJson(ChangesTable)).toMatchSnapshot();
  });

  it('Should contain a div with classes cards-container and centered', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('Should render a SimpleExpansionPanel in the div', () => {
    expect(wrapper.find('SimpleExpansionPanel').length).toEqual(1);
  });
});
