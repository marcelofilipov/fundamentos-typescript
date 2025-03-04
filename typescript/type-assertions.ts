/**
 * Afirmações de Tipo - Type Assertions
 * palavra "as" - "como"
 *
 * Às vezes, você terá informações sobre o
 * tipo de um valor que o TypeScript não consegue conhecer.
 */

type Person = {
  firstName: string;
  lastName: string;
};

const value = { firstName: "Marcelo" } as Person; //! recomendo usarem o "as"
//const value = <Person>{};

// 1 - algo que acontece em tempo de execução ou fator externo

// 2 - criando mocks para testes automatizados

console.log(value.firstName);
