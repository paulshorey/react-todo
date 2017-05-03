import React from 'react';

export default class Item extends React.Component {

    static propTypes = {
        idx: React.PropTypes.number.isRequired,
        name: React.PropTypes.any.isRequired
    };

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            check: false
        };
    }
    
    handleClick() {
        this.setState({
            check: !this.state.check
        });
    }

    render() {
        return (
            <li key={this.props.idx} onClick={this.handleClick} className={ this.state.check ? 'checked' : 'unchecked' }>{this.props.name}</li>
        );
    }
}