// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import ReportComponent from './components/ReportComponent';
import MonthFilterComponent from './components/MonthFilterComponent';
import {MONTHS} from './constant/Months';

class App extends Component {

    state = { selectedValue: 1, month: '' }

    componentDidMount() {
        this.setState({ month: MONTHS.find(m => m.value === this.state.selectedValue).name })
    }

    onDropdownChanged = (value) => {
        this.setState({ selectedValue: value, month: MONTHS.find(m => m.value === +value).name });
    }

    render() {

        return (
            <div className="App">
                <strong>Month Filter:</strong> <MonthFilterComponent onChange={this.onDropdownChanged} defaultValue={1} array={MONTHS} />
                <div>
                    <ReportComponent
                        title={`$ Gross Profit in month ${this.state.month} 2016`}
                        month={this.state.selectedValue}
                        isAllTimeEnabled ={false}
                    />
                </div>
                <div>
                    <ReportComponent
                        title='$ Gross Profit - All months'
                        isAllTimeEnabled ={true}
                    />
                </div>
            </div>
        );
    }
}

export default App;
