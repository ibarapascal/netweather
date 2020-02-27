import React from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { TimeService } from '../../../services/TimeService';
import { Store } from '../../../store';
import { LocalStorage } from '../../../types/LocalStorage';
import { WTService } from '../common/WTService';

const useStyles = makeStyles((theme) => ({
  result: {
    margin: 10,
  },
  details: {
    marginLeft: 20,
  },
}));

interface Props {
  localStorage: LocalStorage;
  forecast: Store['forecast'];
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
  }),
)(class extends React.Component<Props, State> {
  static defaultProps = {
  };
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  // You can use classical life-cycle here
  async componentDidMount() {
  }

  render() {
    const { forecast } = this.props;
    return forecast.cod === '200' && <this.functionalRender />;
  }

  // You can use hooks here
  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { loading } = this.props.localStorage;
    const { forecast } = this.props;
    // const {} = this.state;
    const umbrellaDay = TimeService.ts2mmddhhmm(WTService.umbrellaDay(forecast.list), forecast.city.timezone);
    const jacketDay = TimeService.ts2mmddhhmm(WTService.jacketDay(forecast.list), forecast.city.timezone);
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {!loading && (
            <>
              <Typography gutterBottom variant="h5" component="h2" className={classes.result}>
                Sell an umbrella:
                {' '}
                {umbrellaDay}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2" className={classes.details}>
                Based on cloud&apos;s value first max.
              </Typography>
              <Typography gutterBottom variant="h5" component="h2" className={classes.result}>
                Sell a jacket:
                {' '}
                {jacketDay}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2" className={classes.details}>
                Based on temperature feeling&apos;s value first max.
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    );
  }
});
