import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PeopleState, Person } from "../types";
import { defaultPeople } from "../static";

const initialState: PeopleState = {
  people: defaultPeople,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.people.push(action.payload);
    },
    updatePerson: (state, action: PayloadAction<Person>) => {
      const index = state.people.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.people[index] = action.payload;
      }
    },
    deletePerson: (state, action: PayloadAction<string>) => {
      state.people = state.people.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPerson, updatePerson, deletePerson } = peopleSlice.actions;

export default peopleSlice.reducer;
