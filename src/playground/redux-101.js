import { createStore } from 'redux';

//Action generators - functions that return action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const drecrementCount = ( {decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {} ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
    resetCount: 0
});

//reducers
//1 reducers are pure functions
//2 never change state or action

const countReducer = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.resetCount
            };
        case 'SET':
            return {
                count: action.count
            };
        default: 
            return state;  
    }
});


const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
});



store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(drecrementCount({decrementBy: 10})); 
    
store.dispatch(setCount({count: 101})); 

store.dispatch(resetCount())
