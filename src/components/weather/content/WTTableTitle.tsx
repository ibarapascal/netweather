import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { Grid, Typography } from '@material-ui/core';
import { TimeService } from '../../../services/TimeService';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  title: {
  },
}));

interface Props {
  localStorage: LocalStorage,
  forecast: Store['forecast'],
  saveLocalStorage: (payload: InputAction) => void,
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
    saveLocalStorage: (payload: InputAction) => dispatch({type: 'saveLocalStorageItem', payload}),
  })
)(class extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      timestampNow: Date.now(),
    };
  }
  static defaultProps = {
  };

  // You can use classical life-cycle here
  componentDidMount() {
    setInterval(() => this.setState({timestampNow: Date.now()}), 1000);
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
    const utcValue = forecast.city.timezone/3600;
    const utc = utcValue >= 0 ? `+${utcValue}` : `${utcValue}`;
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {`${forecast.city.name} (UTC ${utc}) - sunrise: ${sunrise} - sunset: ${sunset} - now: ${currentTime}`}
          </Typography>
        </Grid>
      </Grid>
    )
  }
});
