import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/items/contactsItemsSlice';
import { getItems } from '../../redux/contacts/selectors/contactsSelectors';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Section from '../section';
import Container from '../container';
import Title from '../title';
import Button from '../button';
import { NAME, NUMBER } from '../../helpers/constants';

export default function Form() {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();
  const onSubmit = (id, name, number) => dispatch(addContact(id, name, number));
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const validateContact = (contactName, contactNumber, contacts) => {
    if (contacts.some(({ name }) => name === contactName)) {
      alert(`"${contactName}" is already in contacts!`);
      return false;
    } else if (contacts.some(({ number }) => number === contactNumber)) {
      alert(`"${contactNumber}" is already in contacts!`);
      return false;
    } else return true;
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === NAME) setName(value);
    if (name === NUMBER) setNumber(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const dataContacts = {
      name,
      number,
      id: nanoid(),
    };
    const isContactValid = validateContact(name, number, contacts);
    if (isContactValid) {
      onSubmit(dataContacts);
      onReset();
    }
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Section>
      <Container>
        <Title title="Phonebook" />
        <MainForm autoComplete="off" onSubmit={handleFormSubmit}>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              value={name}
              placeholder="Enter fullname"
              onChange={handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>
            Number
            <FormInput
              type="tel"
              name="number"
              value={number}
              placeholder="Enter phone number"
              onChange={handleInputChange}
              minLength="7"
              maxLength="17"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <Button
            content="Add contact"
            type="submit"
            disabled={name === '' || number === ''}
          />
        </MainForm>
      </Container>
    </Section>
  );
}
export const MainForm = styled.form`
  padding: 5px;
  margin: 0 auto;
  width: 250px;
  font-family: var(--font);
  button {
    margin: 0;
    width: 100%;
    padding: 5px 20px;
    :hover {
      background-color: var(--green);
      border: 1px solid var(--blue);
    }
    :disabled:hover {
      cursor: not-allowed;
      color: var(--red);
      background-color: var(--white);
      border: 1px solid var(--red);
    }
  }
`;
export const FormLabel = styled.label`
  margin: 0 0 2px 0;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 600;
`;
export const FormInput = styled.input`
  padding: 5px 20px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
`;
