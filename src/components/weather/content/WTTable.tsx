import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { TableColumnsUnit } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { Grid, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { WTService } from '../common/WTService';
import { WTConstant } from '../common/WTConstant';
import { makeStyles } from '@material-ui/core/styles';
import { WTTableTitle } from './WTTableTitle';
const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: 20,
  },
}));

interface Props {
  localStorage: LocalStorage,
  forecast: Store['forecast'],
}

interface State {
}

/**
 * Component description
 */
export const WTTable = connect(
  (store: Store) => ({
    localStorage: store.localStorage,
    forecast: store.forecast,
  }),
  (dispatch: any) => ({
  })
)(class extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  static defaultProps = {
  };

  // You can use classical life-cycle here
  async componentDidMount() {
  }

  render() {
    const { forecast } = this.props;
    return forecast.cod === '200' ? <this.functionalRender /> : <></>;
  }
  // You can use hooks here
  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { forecast } = this.props;
    // const {} = this.state;
    const displayData = WTService.generateTableData(forecast);
    const columnsData: Array<TableColumnsUnit> = WTConstant.TABLE_SUBMAP.map(item => ({name: item.attr, label: item.dispName}));
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Weather forecast
          </Typography>
          <MUIDataTable
            title={<WTTableTitle />}
            data={displayData}
            columns={columnsData}
            options={{
              rowsPerPage: 100,
              search: false,
              filter: false,
              download: false,
              print: false,
              viewColumns: false,
              selectableRows: 'none',
            }}
          />
        </Grid>
      </Grid>
    )
  }
});
