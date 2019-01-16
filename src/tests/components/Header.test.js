// react-test-renderer
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header'


test('should render Header correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});



