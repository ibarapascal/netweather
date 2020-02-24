import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { InputAction, SelectUnit } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { Grid, Typography } from '@material-ui/core';
import { CMSelectionUnit, CMSelection } from '../../common/CMSelection';
import { CityListPart } from '../../../constants/CityListPart';

// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

interface Props {
  localStorage: LocalStorage,
  saveLocalStorage: (payload: InputAction) => void,
}

interface State {
}

/**
 * Component description
 */
export const WTOption = connect(
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

  handleSelectFilter = (field: string) => (event: CMSelectionUnit | null | undefined) => {
    const payload: InputAction = {item: field, value: event?.value ?? null};
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
    const cityList = CityListPart.map((item: SelectUnit) => ({value: item.id.toString(), label: item.name}));
    return (
      <Grid container spacing={4}>
        <Grid item xs={10}>
          <Typography gutterBottom variant="h5" component="h2">
            Inputable select city
          </Typography>
          <CMSelection
            id='WT_SELECT_01'
            value={cityList.find(x => x.value === localStorage.citySelected)}
            dataList={cityList}
            onChange={this.handleSelectFilter('citySelected')}
          />
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    )
  }
});
