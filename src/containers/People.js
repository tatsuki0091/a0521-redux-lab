import React from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";
import { addPeopleAction, deletePeopleAction } from "../redux/users/action";

const People = ({ data, addFunc, deleteFunc }) => {
  const personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "John",
      age: Math.floor(Math.random() * 40),
    };
    addFunc(newPerson);
  };

  const personDeletedHandler = (personId) => {
    deleteFunc(personId);
  };

  return (
    <div>
      <AddPerson
        personAdded={() => {
          personAddedHandler();
        }}
      />
      {data.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => personDeletedHandler(person.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFunc: (newPerson) => {
      dispatch(addPeopleAction(newPerson));
    },
    deleteFunc: (personId) => {
      dispatch(deletePeopleAction(personId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
