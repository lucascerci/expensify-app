import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, id, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    {    console.log(id) }
    <input type="button" Value="Remove" onClick={() => {
            dispatch(removeExpense({ id }))
            console.log(id);
        }}/>
  </div>
);



export default connect()(ExpenseListItem);
