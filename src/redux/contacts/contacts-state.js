import contactsData from '../../data/contacts.json';
import dataGenerator from '../../helpers/dataGenerator';

const contacts = dataGenerator(contactsData);

const initialState = {
  contacts: {
    items: contacts,
    filter: '',
  },
};

export default initialState;
