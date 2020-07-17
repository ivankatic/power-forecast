import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Forecast extends Component {
    daily = [];

    componentDidMount() {
        this.sortByDay();
    }
    
    sortByDay() {
        var weekday = new Array(7);
				weekday[0] = 'Sunday';
				weekday[1] = 'Monday';
				weekday[2] = 'Tuesday';
				weekday[3] = 'Wednesday';
				weekday[4] = 'Thursday';
				weekday[5] = 'Friday';
				weekday[6] = 'Saturday';

        var i, j, date, month, day, th, tm, pv, entry, dayName, th2, tm2;
        for (i=0; i < this.props.forecast.length; i++) {
            date = new Date(this.props.forecast[i].period_end);
            month = date.getMonth()+1;
            day = date.getDate();
            th = date.getHours();
            th2 = ("0" + th).slice(-2);
            tm = date.getMinutes();
            tm2 = ("0" + tm).slice(-2);
            pv = this.props.forecast[i].pv_estimate;
            dayName = weekday[date.getDay()];

            entry = {
                dn: dayName,
                d: day,
                m: month,
                values: [
                    {
                        th,
                        th2,
                        tm,
                        tm2,
                        pv
                    }
                ],
                average: 0,
                sum: 0
            }

            if (!this.daily[0] || entry.d !== this.daily[this.daily.length-1].d) {
                this.daily.push(entry);
            } else {
                if (Number(entry.values[0].th) > 6 && Number(entry.values[0].th) < 20) {
                    this.daily[this.daily.length - 1].values.push(entry.values[0]);
                }
            }
        }
        
        // average daily power
        var sum = 0;
        for (i = 0; i < this.daily.length; i++) {
            for (j = 1; j < this.daily[i].values.length; j++) {
                sum += this.daily[i].values[j].pv;
            }
            this.daily[i].sum = sum;
            this.daily[i].average = sum / (this.daily[i].values.length-1);
            sum = 0;
        }

        // remove days with only night time data
        for (i = 0; i < this.daily.length; i++) {
            if (!this.daily[i].values[1]) {
                this.daily.splice(i, 1);
            }
        }
    }

    renderForecast() {
        return this.daily.map((day, index) => {
            return (
            <div className='forecast__box' key={index}>
                <div className='forecast__col'>
                    <div className='forecast__date'>{day.d}.{day.m}.</div>
                    <div className='forecast__day'>{day.dn}</div>
                    <div className='forecast__time'>
                        {day.values[1].th2}:{day.values[1].tm2} - {day.values[day.values.length - 1].th2}:{day.values[day.values.length - 1].tm2}</div> 
                </div>

                <div className='forecast__col'>
                    <div className="forecast__col--title">Daily average:</div>
                        <div className="forecast__power">{day.average ? day.average.toFixed(2) : "0"} kW</div>
                </div>
            </div>
            );
        });
    }
   
    render() {
        return (
			<div>
                <main className='result-box'>
					<h1 className='box__title'>Solar power forecast</h1>

                    <div className='result-box--outer'>
                        {this.renderForecast()}
					</div>

                    <Link to='/'>
                        <button className='button--wide u-side-padding'>Home</button>
                    </Link>
				</main>
				
			</div>
		);
    }
}

const mapStateToProps = (state) => {
    return { forecast: Object.values(state.forecast) };
};

export default connect(mapStateToProps)(Forecast);