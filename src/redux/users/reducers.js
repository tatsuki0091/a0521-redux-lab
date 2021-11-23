import * as Actions from "./action";
import initialState from "../store/initialState";

export const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_PEOPLE:
      const newPeople = [...state.people, action.payload.newPerson];
      return {
        ...state,
        people: newPeople,
      };
    case Actions.DELETE_PEOPLE:
      function excludeData(value) {
        return value.id !== action.payload.personId;
      }
      const deletePeople = state.people.filter(excludeData);
      return {
        ...state,
        people: deletePeople,
      };
    default:
      return state;
  }
};
