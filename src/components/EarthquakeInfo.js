import React, { Component } from 'react';
import moment from 'moment'
import earthquake from '../data/earthquakes';

let info = earthquake.features.map(earthquakes => {
      return (
        <div className="col-sm-6" key={earthquakes.properties.ids}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{earthquakes.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakes.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquakes.properties.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {earthquakes.geometry.coordinates}</p>

              <a href={earthquakes.properties.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>
      )
    });

class EarthquakeInfo extends Component {
  render() {
    return (
      <section>
        {info}
      </section>
    )
  }
}

export default EarthquakeInfo;
