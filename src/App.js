// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import ColumnChartComponent from './components/ColumnChart';

class App extends Component {

    state = { selectedValue: 1 }

    onDropdownChanged = (event) => {
        this.setState({selectedValue: event.target.value})
    }

    renderDropdown() {
        return (
            <select defaultValue="1" onChange={this.onDropdownChanged}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        )
    }

    render() {

        return (
            <div className="App">
                <h1>$ Gross Profit in month {this.renderDropdown()} 2016</h1>
                <div>
                    <ColumnChartComponent
                        month={this.state.selectedValue}
                        viewBy={false}
                    />
                </div>
                <div>
                    <ColumnChartComponent
                        title='$ Gross Profit - All months'
                        viewBy={true}
                    />
                </div>
            </div>
        );
    }
}

export default App;
