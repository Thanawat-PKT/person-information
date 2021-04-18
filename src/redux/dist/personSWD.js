"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
exports.selectpersonList = exports.getPerson = exports.deletePerson = exports.updatePerson = exports.addNewPerson = exports.personSWD = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var personList = [
// {
//   id: uuidv4(),
//   title: '1984',
//   author: 'George Orwell',
// },
// {
//   id: uuidv4(),
//   title: "Harry Potter and the Philosopher's Stone",
//   author: 'J. K. Rowling',
// },
// {
//   id: uuidv4(),
//   title: 'The Lord of the Rings',
//   author: 'J.R.R Tolkien',
// },
];
var initialState = {
    personList: personList
};
// const value: string | null = localStorage.getItem('personList');
// if (value) {
//     dispatch(getBook(JSON.parse(value)));
// }
exports.personSWD = toolkit_1.createSlice({
    name: 'person',
    initialState: initialState,
    reducers: {
        getPerson: function (state) {
            var value = localStorage.getItem('personList');
            if (value) {
                state.personList = JSON.parse(value);
            }
        },
        addNewPerson: function (state, action) {
            state.personList.push(action.payload);
            localStorage.setItem('personList', JSON.stringify(state.personList));
        },
        updatePerson: function (state, action) {
            var id = action.payload.id;
            var persons = action.payload;
            state.personList = state.personList.map(function (person) {
                return person.id === id ? __assign({}, persons) : person;
            });
            localStorage.setItem('personList', JSON.stringify(state.personList));
        },
        deletePerson: function (state, action) {
            state.personList = state.personList.filter(function (person) { return person.id !== action.payload.id; });
            localStorage.setItem('personList', JSON.stringify(state.personList));
        }
    }
});
// To able to use reducers we need to export them.
exports.addNewPerson = (_a = exports.personSWD.actions, _a.addNewPerson), exports.updatePerson = _a.updatePerson, exports.deletePerson = _a.deletePerson, exports.getPerson = _a.getPerson;
//Selector to access personList state.
exports.selectpersonList = function (state) { return state.person.personList; };
exports["default"] = exports.personSWD.reducer;
