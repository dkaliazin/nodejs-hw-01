import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    const dataContacts = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    dataContacts.push(...newContacts);
    await writeContacts(dataContacts);
};

generateContacts(5);
