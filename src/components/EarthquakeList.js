import React, { Component } from 'react';
import earthquake from '../data/earthquakes';

let quakes = earthquake.features.map(earthquakes => {
      return (
        <div className="quake-list">
          <div className="row">
            {/* {quakes} */}
          </div>
        </div>
      )
    });

class EarthquakeList extends Component {
  render() {
    return (
      <section>
        {quakes}
      </section>
    )
  }
}

export default EarthquakeList;
