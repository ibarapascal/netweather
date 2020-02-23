import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { CardMedia, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  font: {
    position: 'absolute',
    top: '20%',
    width: '100%',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'none',
    fontFamily: 'Comic Sans MS'
  }
}));

interface Props {
}

interface State {
}

/**
 * Common header component
 */
export const CMGridHeader: React.FC<Props> = connect(
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
    const classes = useStyles();
    return (
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://openweathermap.org/themes/openweathermap/assets/img/new-history-forecast-bulk.png"
          title="Contemplative Reptile"
        />
        <Typography gutterBottom variant="h1" component="h1" className={classes.font}>
          Weather
        </Typography>
      </Card>
    )
  }
});
