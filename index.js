const { program } = require("commander");

const contacts = require("./db/contacts.js");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contacts.listContacts();
      return console.table(contactList);
    case "get":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);
    case "add":
      const contactToAdd = await contacts.addContact({ name, email, phone });
      return console.log(contactToAdd);
    case "remove":
      const contactToRemove = await contacts.removeContact(id);
      return console.log(contactToRemove);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a,--action, <type>")
  .option("-i,--id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-ph, --phone, <type>");

program.parse();

const options = program.opts();
invokeAction(options);
