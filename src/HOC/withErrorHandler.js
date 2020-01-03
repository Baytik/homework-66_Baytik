import React, {Component} from "react";

const withErrorHandler = (WrappedComponent) => {
  return class extends Component{
      render() {
              return <WrappedComponent {...this.props}/>
      }
  }
};

export default withErrorHandler;