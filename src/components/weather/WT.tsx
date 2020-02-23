import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { InputAction } from '../../types/BaseTypes';
import { LocalStorage } from '../../types/LocalStorage';
import { CMGrid } from '../common/CMGrid';
import { Grid } from '@material-ui/core';
import { WTKey } from './content/WTKey';
import { WTCity } from './content/WTCity';
import { WTOption } from './content/WTOption';
import { WTTable } from './content/WTTable';
import { actionsWithService, actions } from './WT-actions';
import { ForecastReq } from '../../types/interface/GetForecast';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

interface Props {
  localStorage: LocalStorage,
  forecast: Store['forecast'],
  saveLocalStorage: (payload: InputAction) => void,
  getForecast: (payload: ForecastReq) => void,
}

interface State {
}

/**
 * Component description
 */
export const WT: React.FC<Props> = connect(
  (store: Store) => ({
    localStorage: store.localStorage,
    forecast: store.forecast,
  }),
  (dispatch: any) => ({
    saveLocalStorage: (payload: InputAction) => dispatch(actions.saveLocalStorageItem(payload)),
    getForecast: (payload: ForecastReq) => dispatch(actionsWithService.getForecast(payload)),
  })
)(class extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  static defaultProps = {
  };

  async componentDidMount() {
    const reqParams: ForecastReq = {
      id: '2038349',
      appid: 'b6907d289e10d714a6e88b30761fae22'
    }
    this.props.getForecast(reqParams);
  }

// {
//   "id": 4705417,
//   "name": "Las Lomas",
//   "country": "US",
//   "coord": {
//     "lon": -98.775299,
//     "lat": 26.36479
//   }
// },

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    // const classes = useStyles();
    // const {} = this.props;
    // const {} = this.state;
    return (
      <CMGrid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <WTKey />
          </Grid>
          <Grid item xs={12}>
            <WTCity />
          </Grid>
          <Grid item xs={12}>
            <WTOption />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <WTTable />
          </Grid>
        </Grid>
      </CMGrid>
    )
  }
});
