import React from 'react';
import Enzyme from 'enzyme';
import uuid from 'uuid/v1';

import {create, update, destroy} from '../../action/category';
import {create as expenseCreate, update as expenseUpdate, destroy as expenseDestroy, 
                                               insert as expenseInsert} from '../../action/expense';

describe ('Category actions:', () => {

  test (' "Add" returns correct action type and payload', () => {

    let category = {name: 'food', budget: '200'};
    let action = create(category);

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.name).toEqual('food');
    expect(action.payload.budget).toEqual('200');
    expect(action.payload.id).not.toBe(undefined);
  });

  test (' "Update" returns correct action type and updated payload', () => {
    
        let category = {name: 'FOOD', budget: '300'};
        let action = update(category);

        expect(action.type).toEqual('CATEGORY_UPDATE');
        expect(action.payload.name).toEqual('FOOD');
        expect(action.payload.budget).toEqual('300');
  });

  test (' "Delete" returns correct action type and categoryId', () => {
    
        let category = {name: 'fun', id: uuid()};
        let action = destroy(category.id);

        expect(action.type).toEqual('CATEGORY_DESTROY');
        expect(action.payload).toEqual(category.id)
  })
});

describe ('Expense actions:', () => {
  let expense = {name:'groceries', cost:100, id: uuid(), categoryID: uuid()}

  test (' "Create" returns correct action type and payload', () => {
      // let expense = {name:'groceries', cost:100, id: uuid(), categoryID: uuid()}
      let action = expenseCreate(expense);

      expect(action.type).toBe('EXPENSE_CREATE');
      expect(action.payload.name).toBe('groceries');
      expect(action.payload.cost).toEqual(100);
      expect(action.payload.id).not.toBe(undefined)
  })

  test ('"Update" returns correct action type and updated payload',() => {
    let expenseEdit = {name: 'GROCERIES', cost: 200, id:expense.id, categoryID:expense.categoryID};
    let action = expenseUpdate(expenseEdit);

    expect(action.type).toEqual('EXPENSE_UPDATE');
    expect(action.payload.name).toEqual('GROCERIES');
    expect(action.payload.cost).toEqual(200);
  })

  test ('"Delete" returns correct action type and id',() => {
    let expense = {name:'milk', cost:5, id: uuid(), categoryID: uuid()}
    let action = expenseDestroy(expense);

    // console.log(action.payload);
    expect(action.type).toEqual('EXPENSE_DESTROY');
    expect(action.payload.id).toEqual(expense.id);
  })

  test ('"Insert" returns correct action type and new categoryId',() => {
    let newCategoryID = uuid();
    expense.categoryID = newCategoryID ;
    let action = expenseInsert(expense);

    expect(action.type).toEqual('EXPENSE_INSERT');
    expect(action.payload.categoryID).toEqual(newCategoryID);
  })
})
