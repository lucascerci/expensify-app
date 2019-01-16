import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

// should render ExpenseForm with expense data
test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expenses={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

