let result = 1;

try {
  if (result === 0) {
    throw new Error("O valor è igual a zero");
  }
} catch (error) {
  console.log(error);
} finally {
  console.log("fim");
}
