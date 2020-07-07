import React, { Component } from 'react';
import { connect } from 'react-redux';
import { times } from 'lodash';

class Forecast extends Component {
    daily = [];

    componentDidMount() {
        this.sortByDay();
    }
    
    sortByDay() {
        var i, j, date, month, day, th, tm, pv, entry;
        for (i=0, j=0; i < this.props.forecast.length; i++) {
            date = new Date(this.props.forecast[i].period_end);
            month = date.getMonth();
            day = date.getDate();
            th = date.getHours();
            tm = date.getMinutes();
            pv = this.props.forecast[i].pv_estimate;

            entry = {
                d: day,
                m: month,
                values: [
                    {
                        th,
                        tm,
                        pv
                    }
                ],
                average: 0,
                sum: 0
            }

            if (!this.daily[0] || entry.d !== this.daily[this.daily.length-1].d) {
                this.daily.push(entry);
            } else {
                this.daily[this.daily.length - 1].values.push(entry.values[0]);
            }
        }
        
        // average daily power
        var sum;
        for (i = 0; i < this.daily.length; i++) {
            console.log(this.daily[i]);
            for (j = 0; j < this.daily[i].values.length; j++) {
                sum += this.daily[i].values[j].pv;
            }
            this.daily[i].sum = sum;
            this.daily[i].average = sum / this.daily[i].values.length;
            sum = 0;
        }
    }

    renderForecast() {
        return this.daily.map((day, index) => {
            return (
            <div key={index}>
                <div>{day.d}.{day.m}. Power: {day.average}, Sum {day.sum}</div>
                
            </div>
            );
        });
    }
   
    render() {
        return (
			<div>
				{this.renderForecast()}
			</div>
		);
    }
}

const mapStateToProps = (state) => {
    return { forecast: Object.values(state.forecast) };
};

export default connect(mapStateToProps)(Forecast);