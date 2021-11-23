export const ADD_PEOPLE = "ADD_PEOPLE";
export const DELETE_PEOPLE = "DELETE_PEOPLE";

export const addPeopleAction = (newPerson) => {
  return { type: ADD_PEOPLE, payload: { newPerson } };
};

export const deletePeopleAction = (personId) => {
  return { type: DELETE_PEOPLE, payload: { personId } };
};
