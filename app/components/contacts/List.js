import React from 'react';

import Item from './Item';

export default class List extends React.Component {

    static propTypes = {
        list: React.PropTypes.array.isRequired
    };

    static defaultProps = {
        list: []
    };

    render() {
        const contacts = this.props.list;
        const tmpl = contacts.map((item, index) => (
                <Item key={index} idx={index} name={item.name} />
            )
        );
        return (
            <ul id="list">
                {tmpl}
            </ul>
        );
    }
}