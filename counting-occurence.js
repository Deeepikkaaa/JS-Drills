// Counting the occurrence of the distinct elements
const elem = ["a", "b", "1", "2", "a", "2"];

const result = elem.reduce((acc, curr) => {
  return curr in acc
    ? { ...acc, [curr]: acc[curr] + 1 }
    : { ...acc, [curr]: 1 };
}, {});

console.log(result);
