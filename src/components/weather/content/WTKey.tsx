import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
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

  render() {
    return <this.functionalRender />
  }
  // You can use hooks here
  functionalRender: React.FC = () => {
    // const classes = useStyles();
    // const {} = this.props;
    // const {} = this.state;
    return (
      <></>
    )
  }
});
