import React, {Component} from 'react';
import './Edit.css';
import axiosAPI from "../../axiosAPI";
import withErrorHandler from "../../HOC/withErrorHandler";

class Edit extends Component {

    state = {
        categories: null,
        title: '',
        content: '',
        category: ''
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    async componentDidMount() {
        const response = await axiosAPI.get('.json');
        this.setState({title: response.data.title, content: response.data.content, categories: response.data})
    }

    ButtonClick = async (e) => {
        const edit = {
            title: this.state.title,
            content: this.state.content,
        };
        await axiosAPI.put(this.state.category + '.json', edit);
        this.props.history.push(this.state.category);
    };

    render() {
        return this.state.categories && (
            <div className="edit">
                <div>
                <select name="category" className="category" onChange={this.onChange}>
                    {Object.keys(this.state.categories).map(id => (
                        <option value={id} key={id}>{id}</option>
                    ))}
                </select>
                </div>
                <div>
                    <div>
                        <p>title</p>
                <input className="title" onChange={this.onChange} name="title"/>
                    </div>
                    <p>Content</p>
                <input className="Content" onChange={this.onChange} name="content"/>
                </div>
                <button onClick={this.ButtonClick}>Save</button>
            </div>
        );
    }
}

export default withErrorHandler(Edit);