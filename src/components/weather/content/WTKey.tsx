import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { Grid, Typography } from '@material-ui/core';
import { CMTextInput } from '../../common/CMTextInput';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

interface Props {
  /**
   * Props description
   */
  localStorage: LocalStorage,
  /**
   * Props description
   */
  saveLocalStorage: (payload: InputAction) => void,
}

interface State {
}

/**
 * Component description
 */
export const WTKey = connect(
  (store: Store) => ({
    localStorage: store.localStorage,
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

  handleInputApiKey = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload: InputAction = {item: 'apiKey', value: event.target.value};
    this.props.saveLocalStorage(payload);
  };

  render() {
    return <this.functionalRender />
  }
  // You can use hooks here
  functionalRender: React.FC = () => {
    // const classes = useStyles();
    const { localStorage } = this.props;
    // const {} = this.state;
    return (
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Typography gutterBottom variant="h5" component="h2">
            Input your api key
          </Typography>
          <CMTextInput
            id='WT_INPUT_01'
            value={localStorage.apiKey}
            onChange={this.handleInputApiKey()}
            customProps={{
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    )
  }
});
