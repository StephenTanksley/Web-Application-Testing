import React from 'react';
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from './App';
import Display from './components/Display/Display';

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <Display />
  );
  console.log(wrapper.debug())
});
