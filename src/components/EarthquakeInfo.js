import React, { Component } from 'react';
import earthquake from '../data/earthquakes';

let info = earthquake.map(earthquakes => {
      return (
        <div className="col-sm-6" key={earthquakes.features.properties.ids}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{earthquakes.features.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakes.features.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment({earthquakes.features.properties.time}).format('llll')}</h6>
              <p className="card-text">Coordinates: {earthquakes.features.geometry.coordinates}</p>

              <a href={earthquakes.features.properties.url} className="card-link">USGS Event Link</a>

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
