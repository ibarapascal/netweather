import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { Grid, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

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
export const WTCity = connect(
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
    // const classes = useStyles();
    const { forecast } = this.props;
    // const {} = this.state;
    console.log(forecast);
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" component="h2">
            City info
          </Typography>
        </Grid>
      </Grid>
    )
  }
});
