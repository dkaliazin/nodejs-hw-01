import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const newContact = createFakeContact();
    const dataContacts = await readContacts();
    dataContacts.push(newContact);
    await writeContacts(dataContacts);
};

addOneContact();
