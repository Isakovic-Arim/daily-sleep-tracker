import React, { Component } from 'react';
import Entry from './Entry';
import Graph from './Graph';
import Table from './Table';
import Deletion from './Deletion'
import Update from './Update';
import { StatsContextProvider } from './ContextProvider';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { statistics: [], loading: true };
    }

    componentDidMount() {
        this.populateTable();
    }

    renderTable(statistics) {
        return <Table>
            {statistics.map(statistic => {
                const date = new Date(statistic.date);
                return <tr key={statistic.id} className='h-10 text-center bg-blue-200'>
                    <td className='bg-white'>{(date.getMonth() + 1) + "/" + (date.getDate())}</td>
                    <td>{statistic.bedTime.substring(11, 16)}</td>
                    <td>{statistic.wakeUpTime.substring(11, 16)}</td>
                    <td>{statistic.duration.substring(0, 8)}</td>
                    <td><Update id={statistic.id} /></td>
                    <td><Deletion id={statistic.id} /></td>
                </tr>
            })}
        </Table>
    }

    render() {
        return (
            <div className='bg-white h-full w-full p-8 rounded-xl drop-shadow-lg'>
                <h1 className='text-5xl font-medium text-center mb-10'>Daily Sleep Tracker</h1>
                <StatsContextProvider>
                    <Entry />
                    {
                        this.state.loading ? "Loading..." :
                            <div className='grid lg:flex justify-evenly'>
                                <Graph statistics={this.state.statistics} />
                                {this.renderTable(this.state.statistics)}
                            </div>
                    }
                </StatsContextProvider>
            </div>
        );
    }

    async populateTable() {
        const response = await fetch('statistics');
        const data = await response.json();
        this.setState({ statistics: data, loading: false });
    }
}
