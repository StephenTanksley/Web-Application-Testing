import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  console.log(wrapper.debug())
})
