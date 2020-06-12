import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames/bind';

export default class TodoItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className={classNames(
                {
                    'TodoItem TodoItem-complete': item.isComplete,
                    'TodoItem': !item.isComplete,
                }
            )}>
                {this.props.item.title}
            </div>
        );
    }
}
