import React from 'react';
const styles = {
  prop: 'value'
};
export function withStyles(WrappedComponent) {
  return class extends React.Component {
    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent styles={styles} {...this.props} />;
    }
  };
}
