import React from 'react';
import Enzyme from 'enzyme';
import uuid from 'uuid/v1';

import categoryReducer from '../../reducer/categories';
import expenseReducer from '../../reducer/expenses';

describe('Category Reducer:', () => {
		
    let testCategory = {name:'vacation', budget:20000, createDate: new Date(), id: uuid()};
    let state =[];		

    test('adds new category', () => {
        let action = {type: 'CATEGORY_CREATE', payload: testCategory};
        state = categoryReducer(state, action);

        expect(state.length).toEqual(1);
        expect(state[0].name).toBe('vacation');
        expect(state[0].budget).toEqual(20000);      
    });

    test('updates a category', () => {
        
        let categoryUpdate = {name:'VACATION', budget:30000};			

            state = categoryReducer(state, {
            type: 'CATEGORY_UPDATE',
            payload: {
                name: categoryUpdate.name,
                budget: categoryUpdate.budget,
                createDate: new Date(),
                id: testCategory.id,
            }
        });

        expect(state[0].name).toBe('VACATION');
        expect(state[0].budget).toEqual(30000);
        expect(state.length).toEqual(1);
    });

    test('destroys a category', () => {
        let testDestroy = [{name:'one', budget:1, expenses: {}, id: uuid()}, 
                                                {name:'two', budget:2, expenses: {}, id: uuid()}];
        state = [...testDestroy];
        // console.log(state);
        state = categoryReducer(state, {
            type: 'CATEGORY_DESTROY', 
            payload: testDestroy[0]
        });
        // console.log(state);
        expect(state.length).toEqual(1);
        expect(state[0].name).toBe('two');
    });
})

describe('Expense Reducer:', () => {


    // let categoryID = payload.categoryID;
    // let category = state[categoryID];
    // let result = [...category, payload];
    // return {...state, [categoryID]: result};

    test('Adds expense to a given category', () =>{
        let addExpense = {name:'expense1', cost:1, id:uuid(), categoryID:uuid()}
        let state = {[addExpense.categoryID]:addExpense};
        let action = {type: 'EXPENSE_CREATE', payload: addExpense};

        state = expenseReducer(state, action);
        expect(state[addExpense.categoryID][0]).toBe(addExpense);
    })

})