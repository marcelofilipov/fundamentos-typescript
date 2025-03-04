// Type Aliases (type) and Interfaces

//type Person = { firstName: string; lastName: string };
interface Person {
  firstName: string;
  lastName: string;
}

interface User extends Person {
  email: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

// Structural type system => Sistema de tipo estrutural
const person: User = {
  firstName: "Marcelo",
  lastName: "Filipov",
  email: "contato@filipov.dev.br",
};

const fullName = getFullName(person);
console.log(fullName);
