import React from 'react';
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import Dashboard from './Dashboard';

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <Dashboard />
  );

  const strike = wrapper.queryByText(/strike/i);
    expect(strike).toBeInTheDocument()

  const ball = wrapper.queryByText(/ball/i);
    expect(ball).toBeInTheDocument()

  const foul = wrapper.queryByText(/foul/i);
    expect(foul).toBeInTheDocument()

  const hit = wrapper.queryByText(/hit/i);
    expect(hit).toBeInTheDocument()

});