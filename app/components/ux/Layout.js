import React from 'react';

import Header from '../header/Header';
import List from '../contacts/List';
import Forms from '../form/Forms';

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    handleAddItem(e) {
        e.preventDefault();
        let item = document.getElementById('add-item');
        if (item.value !== '' && item.value !== undefined) {
            let addItem = {
                id: Date.now(),
                name: item.value
            };
            this.setState((prevState) => ({
                    data: prevState.data.concat(addItem)
                })
            );
            item.value = '';
        }
    }

    render() {
        return (
            <div>
                <Header title="Todo List" />
                <Forms submit={this.handleAddItem} />
                <List list={this.state.data} />
            </div>
        );
    }
}