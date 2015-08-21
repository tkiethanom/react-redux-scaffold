// run functions sequencely
export function seq(...funcs) {
  return function() {
    funcs.every((func) => {
      return func(...arguments);
    });
  };
}
