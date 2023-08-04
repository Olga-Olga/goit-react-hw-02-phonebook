import React from 'react';

const ContactList = ({ paramList }) => {
  return (
    <div>
      {paramList.map(el => (
        <li key={el.id}>
          {el.name} {el.number}
        </li>
      ))}
    </div>
  );
};

export default ContactList;
