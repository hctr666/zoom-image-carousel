export const classnames = (baseClass, variantClassMap = {}) => {
  const classes = Object.keys(variantClassMap)
    .reduce(
      (accumulator, variantClass) => {
        if (variantClassMap[variantClass]) {
          return [...accumulator, variantClass];
        }
        return accumulator;
      },
      [baseClass]
    )
    .join(' ');

  return classes;
};
