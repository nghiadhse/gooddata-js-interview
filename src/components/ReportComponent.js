import React from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class ReportComponent extends React.Component {

    getMonthFilter(month) {
        if (month) {
            return {
                absoluteDateFilter: {
                    dataSet: {
                        uri: dateAttribute
                    },
                    from: `2016-${('0' + month).slice(-2)}-01`,
                    to: `2016-${('0' + month).slice(-2)}-31`
                }
    
            }
        } else {
            return null;
        }
        
    }

    getMeasures() {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: grossProfitMeasure
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ]
    }

    getViewBy(viewBy) {
        if (viewBy) {
            return {
                visualizationAttribute:
                {
                    displayForm: {
                        uri: dateAttributeInMonths
                    },
                    localIdentifier: 'a1'
                }
            }
        } else {
            return null;
        }
    }
    renderHeader(title) {
        return title ? <h1>{title}</h1> : null;
    }

    render() {
        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const filters = this.getMonthFilter(this.props.month) ? [this.getMonthFilter(this.props.month)] : [];
        const measures = this.getMeasures();
        const viewBy = this.getViewBy(this.props.isAllTimeEnabled);

        return (
            <div key={this.props.childKey}>                
                {this.renderHeader(this.props.title)}
                <ColumnChart
                        filters={filters}
                        measures={measures}
                        viewBy={viewBy}
                        projectId={projectId}
                    />
            </div>
        );
    }
}

export default ReportComponent;