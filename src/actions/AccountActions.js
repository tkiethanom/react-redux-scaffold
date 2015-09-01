export const ADD_ACCOUNT = 'ADD_ACCOUNT';

export function addAccount(text) {
  return { type: ADD_ACCOUNT, text };
}
