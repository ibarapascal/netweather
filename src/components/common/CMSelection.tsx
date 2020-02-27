import React from 'react';
import { connect } from 'react-redux';
import Select, { createFilter } from 'react-select';

import { Store } from '../../store';

// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

export class CMSelectionUnit {
  label: string;
  value: string;
  constructor() {
    this.label = '';
    this.value = '';
  }
}

interface Props {
  /**
   * I/O element id
   */
  id?: string,
  /**
   * selected data
   */
  value: CMSelectionUnit | undefined,
  /**
   * selectable data
   */
  dataList: Array<CMSelectionUnit>,
  /**
   * select event
   */
  onChange: Function,
  /**
   * other native props of react-select
   */
  customProps?: any,
}

interface State {
}

/**
 * Common selection component based on react-select
 */
export const CMSelection: React.FC<Props> = connect(
  (store: Store) => ({
  }),
  (dispatch: any) => ({
  })
)(class extends React.Component<Props, State>{
  static defaultProps = {
  };
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    // const classes = useStyles();
    const {
      id,
      value,
      dataList,
      onChange,
      customProps,
    } = this.props;

    const isValidate = true;
    const touched = isValidate && true;
    const valid = isValidate && true;
    const error = isValidate && true;

    return (
      <>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          name="color"
          options={dataList}
          onChange={(e: any) => onChange(e, id)}
          value={value ? value : new CMSelectionUnit()}
          filterOption={createFilter({ignoreAccents: false})}
          {...customProps}
        />
        <div>
          {touched && !valid &&
            <div style={{'fontSize':'12px','color':'rgb(244, 67, 54)'}}>
              {error}
            </div>
          }
        </div>
      </>
    )
  }
});
