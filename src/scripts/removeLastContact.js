import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";
export const removeLastContact = async () => {
    const dataContacts = await readContacts();
    const contactsLength = dataContacts.length;
    if (contactsLength>=1){
        dataContacts.pop();
    await writeContacts(dataContacts);
    }
    else {
        await writeContacts([]);
    }
};

removeLastContact();
