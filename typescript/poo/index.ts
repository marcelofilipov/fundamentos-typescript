import { Person } from "./banking/Person";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));

  // maria.firstName;

  // maria.firstName = "Maria da Silva";
  maria.firstName = "";

  console.log(maria.firstName); // Output: "Maria da Silva"
}

main();
