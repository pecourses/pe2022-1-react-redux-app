import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../store/slices/contactsSlice';

export const ContactsList = ({ contacts, remove }) => {
  // checked, onChange
  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <input type='checkbox' />
          <button onClick={() => remove(c.id)}>X</button>
          {JSON.stringify(c)}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ contactsList }) => contactsList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
