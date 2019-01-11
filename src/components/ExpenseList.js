import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};
                        //CONNECTING THE MAP FUNCTION TO EXPENSE LIST
export default connect(mapStateToProps)(ExpenseList);

//                                 information that we get
// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;