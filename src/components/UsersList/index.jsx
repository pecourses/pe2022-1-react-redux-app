import React from 'react';
import { connect } from 'react-redux';

export const UsersList = ({ users, isFetching, error }) => {
  return (
    <>
      {error && <div>ERROR</div>}
      {isFetching && <div>Loading...</div>}
      {!isFetching && !error && (
        <ul>
          {users.map((u, i) => (
            <li key={i}>{JSON.stringify(u)}</li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = ({ usersList }) => usersList;

export default connect(mapStateToProps)(UsersList);
