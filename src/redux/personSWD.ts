import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { PersonState } from '../types';

//Defining our initialState's type
type initialStateTypePerson = {
  personList: PersonState[];
};

const personList: PersonState[] = [
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

const initialState: initialStateTypePerson = {
  personList,
};

// const value: string | null = localStorage.getItem('personList');
// if (value) {
//     dispatch(getBook(JSON.parse(value)));
// }


export const personSWD = createSlice({
  name: 'person',
  initialState,
  reducers: {
    getPerson: (state) => {
      const value: string | null = localStorage.getItem('personList');
      if (value) {
        state.personList = JSON.parse(value)
    }
    },
    addNewPerson: (state, action: PayloadAction<PersonState>) => {
      state.personList.push(action.payload);
      localStorage.setItem('personList', JSON.stringify(state.personList))
    },
    updatePerson: (state, action: PayloadAction<PersonState>) => {
      const {
        payload: { id },
      } = action;

      const persons =action.payload

      state.personList = state.personList.map((person) =>
        person.id === id ? { ...persons, } : person,
      );
      localStorage.setItem('personList', JSON.stringify(state.personList))
    },
    deletePerson: (state, action: PayloadAction<{ id: string }>) => {
      state.personList = state.personList.filter((person) => person.id !== action.payload.id);
      localStorage.setItem('personList', JSON.stringify(state.personList))
    },
  },
});

// To able to use reducers we need to export them.
export const { addNewPerson, updatePerson, deletePerson ,getPerson} = personSWD.actions;

//Selector to access personList state.
export const selectpersonList = (state: RootState) => state.person.personList;

export default personSWD.reducer;