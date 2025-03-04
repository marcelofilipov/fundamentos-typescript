// null (nulo) => representa ausência de valor
// undefined (não definido) => nem um valor foi atribuído

function hello(value: string | null | undefined) {
  if (value) {
    console.log("Hello, " + value?.toUpperCase());
  }
}

hello(null);
hello("Rosana");
