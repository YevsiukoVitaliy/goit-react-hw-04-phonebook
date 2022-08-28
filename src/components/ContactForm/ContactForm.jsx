import React, { useState } from 'react';

const ContactForm = ({ onHandleSubmit }) => {
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  const handleSubmit = evt => {
    evt.preventDefault();
    onHandleSubmit(name, number);
    setname('');
    setnumber('');
  };
  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setname(value);
        break;
      case 'number':
        setnumber(value);
        break;
      default:
        break;
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: '1px solid', width: '500px', padding: '15px' }}
    >
      <label>
        Name
        <input
          style={{ display: 'block' }}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>
      <label>
        Number
        <input
          style={{ display: 'block' }}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>
      <input
        style={{ display: 'block', marginTop: '15px' }}
        type="submit"
        value="Add contact"
      />
    </form>
  );
};

export default ContactForm;