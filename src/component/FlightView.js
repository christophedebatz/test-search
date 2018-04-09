import React, { Component } from 'react';

const FlightView = (props) => (
  <div style={{ border: '1px solid gray', borderRadius: '10px', padding: '15px', margin: '15px' }}>
    <ul style={{ margin: '5px' }}>
      <li>Flight #{props.flight.no} with <strong>{props.flight.company}</strong></li>
      <li>From <strong>{props.flight.departureCity}</strong> to <strong>{props.flight.arrivalCity}</strong></li>
      <li>{JSON.stringify(props.flight.pricings)}</li>
    </ul>
  </div>
);

export default FlightView;
