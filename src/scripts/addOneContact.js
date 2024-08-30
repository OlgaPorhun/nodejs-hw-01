import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeContacts(contacts);

    console.log('New contact has been successfully added.');
  } catch (error) {
    console.error('Error adding a new contact:', error);
  }
};

(async () => {
  await addOneContact();
})();
