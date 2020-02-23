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
  }

  async componentDidUpdate(prevProps: Props, prevState: State) {
    const { localStorage } = this.props;
    if (localStorage.citySelected !== prevProps.localStorage.citySelected
      || localStorage.apiKey !== prevProps.localStorage.apiKey) {
      const reqParams: ForecastReq = {
        id: localStorage.citySelected,
        appid: localStorage.apiKey
      }
      await this.props.getForecast(reqParams);
    }
  }

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
            <WTOption />
          </Grid>
          <Grid item xs={12}>
            <WTCity />
          </Grid>
          <Grid item xs={12}>
            <WTTable />
          </Grid>
        </Grid>
      </CMGrid>
    )
  }
});
