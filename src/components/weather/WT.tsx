import React from 'react';
import { connect } from 'react-redux';

import {
  CircularProgress,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Store } from '../../store';
import { InputAction } from '../../types/BaseTypes';
import { ForecastReq } from '../../types/interface/GetForecast';
import { LocalStorage } from '../../types/LocalStorage';
import { CMGrid } from '../common/CMGrid';
import { WTTable } from './content/WTTable';
import {
  actions,
  actionsWithService
} from './WT-actions';

const useStyles = makeStyles((theme) => ({
  loadingBox: {
    width: '100%',
    padding: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

interface Props {
  localStorage: LocalStorage;
  forecast: Store['forecast'];
  saveLocalStorage: (payload: InputAction) => void;
  getForecast: (payload: ForecastReq) => void;
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
)(class extends React.Component<Props, State> {
  static defaultProps = {
  };
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
  }

  async componentDidUpdate(prevProps: Props, prevState: State) {
    const { localStorage } = this.props;
    if (localStorage.citySelected !== prevProps.localStorage.citySelected
      || localStorage.apiKey !== prevProps.localStorage.apiKey) {
      const reqParams: ForecastReq = {
        id: localStorage.citySelected,
        appid: localStorage.apiKey,
      };
      this.props.saveLocalStorage({ item: 'loading', value: true });
      await this.props.getForecast(reqParams);
      this.props.saveLocalStorage({ item: 'loading', value: false });
    }
  }

  render() {
    return <this.functionalRender />;
  }

  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { loading } = this.props.localStorage;
    // const {} = this.state;
    return (
      <CMGrid>
        <Grid container spacing={4}>
          {loading ? (
            <div className={classes.loadingBox}>
              <CircularProgress />
            </div>
          ) : (
            <Grid item xs={12}>
                <WTTable />
              </Grid>
          )}
        </Grid>
      </CMGrid>
    );
  }
});
