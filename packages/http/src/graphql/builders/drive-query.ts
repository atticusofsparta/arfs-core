import { arfsTransactionFragment } from './fragments.js';

const buildDriveQuery = (id: string) => {
  return {
    query: `
    query {
      transactions (id: "${id}") {
    
          ${arfsTransactionFragment}
  
      }
    }
  `,
  };
};
