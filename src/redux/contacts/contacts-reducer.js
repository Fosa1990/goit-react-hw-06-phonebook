import { combineReducers } from '@reduxjs/toolkit';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  ADD_FILTER,
  CLEAR_FILTER,
} from './contacts-types';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_CONTACT:
      return [payload, ...state];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case ADD_FILTER:
      return payload.text;

    case CLEAR_FILTER:
      return '';

    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
// const [filter, setFilter] = useState('');

// const formSubmitHandler = data => {
//   const isContactValid = validateContact(data, contacts);
//   if (isContactValid) {
//     data.id = nanoid();
//     setContacts(contacts => [data, ...contacts]);
//   }
// };

// const validateContact = (data, contacts) => {
//   if (contacts.some(({ name }) => name === data.name)) {
//     alert(`${data.name} is already in contacts!`);
//     return false;
//   } else if (contacts.some(({ number }) => number === data.number)) {
//     alert(`${data.number} is already in contacts!`);
//     return false;
//   } else return true;
// };

// const deleteContact = id => {
//   setContacts(state => state.filter(contact => contact.id !== id));
// };

// const handleSearch = event => {
//   setFilter(event.currentTarget.value);
// };

// const filteredContacts = useMemo(() => {
//   const getFiltredContacts = contacts => {
//     const lowerCaseFilter = filter.toLowerCase();
//     return contacts.filter(person =>
//       person.name.toLowerCase().includes(lowerCaseFilter),
//     );
//   };
//   return getFiltredContacts(contacts);
// }, [contacts, filter]);
