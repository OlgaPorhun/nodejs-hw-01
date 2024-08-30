import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }
    await writeContacts(contacts);
    console.log(
      `${number} new contacts have been successfully generated and added.`,
    );
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
