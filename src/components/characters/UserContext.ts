import { createContext } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const UserContext = createContext({ name: 'Jason Smith', email: 'jason.smith@gmail.com', age: 40 });
