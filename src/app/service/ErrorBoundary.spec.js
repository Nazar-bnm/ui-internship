import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
  const CustomComponent = () => <div>Component</div>;

  test('renders correctly', () => {
    const wrapped = shallow(
      <ErrorBoundary>
        <CustomComponent />
      </ErrorBoundary>
    );
    expect(wrapped.exists('CustomComponent')).toBe(true);
  })

  test('lifecycle hook componentDidCatch should have been called', () => {
    const wrapped = shallow(
      <ErrorBoundary>
        <CustomComponent />
      </ErrorBoundary>
    );
    const instance = wrapped.instance();
    const spy = jest.spyOn(instance, 'componentDidCatch');
    const error = new Error('Error!');

    wrapped.find('CustomComponent').simulateError(error);
    expect(spy).toHaveBeenCalled();
  });
})

