import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard', () => {
  it('has buttons inside it', () => {
    const simulatedDOM = rtl.render(<Dashboard />)
    expect(simulatedDOM).toBeVisible()
  })
})


test('render Dashboard', () => {
  const wrapper = rtl.render(<Dashboard />)
})