import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Person } from "../types";

export const selectPeople = (state: RootState): Person[] => state.people.people;

export const selectPersonById = createSelector(
  selectPeople,
  (_: RootState, personId: string) => personId,
  (people, personId) => people.find((person) => person.id === personId)
);

export const selectProjectPeople = createSelector(
  selectPeople,
  (_: RootState, projectId: string) => projectId,
  (people, projectId) =>
    people.filter((person) => person.projectId === projectId)
);
