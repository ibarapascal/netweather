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
export const WT: React.FC<Props> = connect(
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

  async componentDidMount() {
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
