import PropTypes from 'prop-types';

export default function Contact({ contact, deleteItem }) {
  return (
    <li style={{ width: '275px', display: 'flex' }} id={contact.id}>
      {contact.name}: {contact.number}
      <button
        onClick={() => {
          deleteItem(contact.id);
        }}
        style={{ marginLeft: 'auto' }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
