import React from 'react';
import Enzyme, {shallow}  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CategoryForm from '../../component/category-form';

import ExpenseForm from '../../component/expense-form';
Enzyme.configure({ adapter: new Adapter() });

describe('Category-form component', () => {
    it('renders', () => {
        expect(shallow(<CategoryForm />).length).toEqual(1)
    });

    it('adds a new category',()=>{
        let name = "Foo";
        let budget = 100;
        let categoryCreate = (state) => {
            expect(categoryForm.state().name).toEqual(name);
            expect(categoryForm.state().budget).toEqual(budget);
        }
        let categoryForm = shallow(<CategoryForm handler={categoryCreate} />)

        categoryForm.find('.type-input').simulate('change', {target:{name:"name", value:name}});
        categoryForm.find('.amount-input').simulate('change', {target:{name:"budget", value:budget}});
        categoryForm.find('button').simulate('submit',{ preventDefault:()=>{}});
    })

})
describe('Expense-form component', () => {
    it('renders', () =>{
        expect(shallow(<ExpenseForm />).length).toEqual(1)
    })
    it('adds a new expense',()=>{
        let name = "Foo";
        let cost = 50;
        let expenseCreate = (state) => {
            expect(categoryForm.state().name).toEqual(name);
            expect(categoryForm.state().cost).toEqual(cost);
        }
        let expenseForm = shallow(<ExpenseForm handler={expenseCreate} />)

        expenseForm.find('#expense-item').simulate('change', {target:{name:"name", value:name}});
        expenseForm.find('#cost').simulate('change', {target:{name:"cost", value:cost}});
        expenseForm.find('button').simulate('submit',{ preventDefault:()=>{}});
    })
})