import React from 'react';

export default class Forms extends React.Component {

    static propTypes = {
        submit: React.PropTypes.func
    };

    render() {
        return (
            <form onSubmit={this.props.submit}>
                <input type="text" id="add-item" />
                <button id="add-button">Add</button>
            </form>
        );
    }
}

/*const Forms = (props) => (
    <form onSubmit={props.submit}>
        <input type="text" id="add-item" />
        <button>Add</button>
    </form>
);*/

//export default Forms;