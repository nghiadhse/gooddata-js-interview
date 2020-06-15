import React from 'react';

class MonthFilterComponent extends React.Component {

    onValueChanged = event => {
        event.preventDefault();

        this.props.onChange(event.target.value);

    }

    renderOptions() {
        return this.props.array.map(item => {
            return (
                <option key={item.value} value={item.value}>{item.name}</option>
            );
        });
    }

    render() {
        return (
            <select onChange={this.onValueChanged} defaultValue={this.props.defaultValue}>
                {this.renderOptions()}
            </select>
        )
    }
}

export default MonthFilterComponent;