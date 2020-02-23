import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { Grid } from '@material-ui/core';
import { WTKey } from '../../weather/content/WTKey';
import { WTOption } from '../../weather/content/WTOption';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   }
// }));

interface Props {
}

interface State {
}

/**
 * Common sidebar component
 */
export const CMGridSidebar: React.FC<Props> = connect(
  (store: Store) => ({
  }),
  (dispatch: any) => ({
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
  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    // const classes = useStyles();
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <WTKey />
        </Grid>
        <Grid item xs={12}>
          <WTOption />
        </Grid>
      </Grid>
    )
  }
});
