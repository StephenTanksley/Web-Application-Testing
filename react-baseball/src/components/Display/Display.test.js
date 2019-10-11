import React from 'react';
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from './App';

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <Display />
  );

  const element = wrapper.queryByText(/outs/i);
    expect(element).toBeInTheDocument()
});
