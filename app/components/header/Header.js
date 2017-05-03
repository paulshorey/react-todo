import React from 'react';

export default class Header extends React.Component {

    static propTypes = {
        title: React.PropTypes.any.isRequired
    }

    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}