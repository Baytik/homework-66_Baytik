import React, {Component} from 'react';
import './Content.css';
import axiosAPI from '../../axiosAPI';
import withErrorHandler from "../../HOC/withErrorHandler";

class Contents extends Component {

    state = {
      page: null
    };

    onePage = async () => {
        const name = this.props.match.params.name;
        const response = await axiosAPI.get(name + '.json');
        this.setState({page: response.data})
    };

    async componentDidMount() {
        this.onePage();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            return this.onePage();
        }
    }

    render() {
        return  this.state.page && (
            <div className="content">
                <h1>{this.state.page.title}</h1>
                <p>{this.state.page.content}</p>
            </div>
        );
    }
}

export default withErrorHandler(Contents, axiosAPI);