import React, {Component, Fragment} from "react";
import Spinner from "../Components/UI/Spinner/Spinner";
import Modal from "../Components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class WithError extends Component{
      constructor(props) {
          super(props);

          this.state = {
              error: null,
              loading: false,
          };

          axios.interceptors.request.use(req => {
              this.setState({loading: true});
             return req;
          });

         axios.interceptors.response.use(res => {
             this.setState({loading: false});
             return res;
          }, error => {
              this.setState({error});
              throw error;
          });
      }

      dismissError = () => {
        this.setState({error: null})
      };

      dismissErrorClick = () => {
          this.setState({error: null})
      };

      render() {
              return (
                  <Fragment>
                      {this.state.loading && <Spinner/>}
                      <WrappedComponent {...this.props}/>
                      <Modal show={!!this.state.error} close={this.dismissError}>
                          {this.state.error && String(this.state.error)}
                          <button className="close-btn" onClick={this.dismissErrorClick}>Close</button>
                      </Modal>
                  </Fragment>
              )
      }
  }
};

export default withErrorHandler;