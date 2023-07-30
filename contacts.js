const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");
console.log(contactsPath);

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}

module.exports = {
  listContacts,
};

// const fileOperation = async () => {
//   const data = await fs.readFile("./db/contacts.json", "utf-8");
//   console.log(data);
// };

// fileOperation();

// const addContact = async () => {};

// fs.readFile("./db/contacts.json")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const path = require("path");
// const chalk = require("chalk");
// const dataValidator = require("./helpers/dataValidator");

// const createFile = async (fileName, content) => {
//   const file = { fileName, content };

//   const result = await dataValidator(file);
//   if (result.error) {
//     const err = result.error.details;
//     const path = err[0].path;
//     console.log(path);
//     console.log(chalk.red("Please specify"));
//   }
//   console.log(result);
// };

// module.exports = { createFile };
