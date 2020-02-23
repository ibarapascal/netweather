import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { Grid, Typography } from '@material-ui/core';
import { TimeService } from '../../../services/TimeService';
import { WTService } from '../common/WTService';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  result: {
    margin: 10,
  },
  details: {
    marginLeft: 20,
  }
}));

interface Props {
  localStorage: LocalStorage,
  forecast: Store['forecast'],
  saveLocalStorage: (payload: InputAction) => void,
}

interface State {
}

/**
 * Component description
 */
export const WTSaleSuggestion = connect(
  (store: Store) => ({
    localStorage: store.localStorage,
    forecast: store.forecast,
  }),
  (dispatch: any) => ({
    saveLocalStorage: (payload: InputAction) => dispatch({type: 'saveLocalStorageItem', payload}),
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
    const { loading } = this.props.localStorage;
    const { forecast } = this.props;
    // const {} = this.state;
    const umbrellaDay = TimeService.ts2mmddhh(WTService.umbrellaDay(forecast.list), forecast.city.timezone);
    const jacketDay = TimeService.ts2mmddhh(WTService.jacketDay(forecast.list), forecast.city.timezone);
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {!loading && <>
          <Typography gutterBottom variant="h5" component="h2" className={classes.result}>
            Sell an umbrella: {umbrellaDay}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h2" className={classes.details}>
            Based on cloud's value first max.
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={classes.result}>
            Sell a jacket: {jacketDay}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h2" className={classes.details}>
            Based on temperature feeling's value first max.
          </Typography>
          </>}
        </Grid>
      </Grid>
    )
  }
});
