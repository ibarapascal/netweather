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

const useStyles = makeStyles((theme) => ({
  title: {
  },
}));

interface Props {
  localStorage: LocalStorage;
  forecast: Store['forecast'];
}

interface State {
  timestampNow: number;
}

/**
 * Component description
 */
export const WTTableTitle = connect(
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
      timestampNow: Date.now(),
    };
  }

  // You can use classical life-cycle here
  componentDidMount() {
    setInterval(() => this.setState({ timestampNow: Date.now() }), 1000);
  }

  render() {
    return <this.functionalRender />;
  }

  // You can use hooks here
  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { forecast } = this.props;
    const { timestampNow } = this.state;
    const sunrise = TimeService.ts2hhmmss(forecast.city.sunrise, forecast.city.timezone);
    const sunset = TimeService.ts2hhmmss(forecast.city.sunset, forecast.city.timezone);
    const currentTime = TimeService.ts2hhmmss(timestampNow / 1000, forecast.city.timezone);
    const utcValue = forecast.city.timezone / 3600;
    const utc = utcValue >= 0 ? `+${utcValue}` : `${utcValue}`;
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {`${forecast.city.name} (UTC ${utc}) - sunrise: ${sunrise} - sunset: ${sunset} - now: ${currentTime}`}
          </Typography>
        </Grid>
      </Grid>
    );
  }
});
