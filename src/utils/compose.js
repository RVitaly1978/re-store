const compose = (...funcs) => (component) => {
  return funcs.reduceRight(
    (wrapped, fn) => fn(wrapped),
    component
  );
}

export default compose;
