import { EChoicesBoilerPlate } from 'enuns/choices.boilers.enum';
import path from 'node:path';
import fs from 'node:fs';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Which Boilerplate do you want to use?',
    choices: [EChoicesBoilerPlate.NODE_JS, EChoicesBoilerPlate.Scss],
  },
  {
    type: 'input',
    name: 'techName',
    message: 'Give a name to the project folder:',
    validate: (folderName: string) => {
      if (/[^\w\s-]/.test(folderName)) {
        return 'Invalid name! Use valid characters.';
      } else if (!folderName) {
        return 'Please enter a name.';
      } else if (folderName === 'boilerplate-typescript-nodejs' || folderName === 'boilerplate-scss') {
        return 'Cannot create with this name.';
      } else {
        try {
          const dir = path.resolve(folderName);
          fs.accessSync(dir, fs.constants.R_OK);
          return 'Folder with the same name already exists.';
        } catch (error) {
          // Folder doesn't exist, so it's a valid name.
        }
      }

      // You can add more custom validation logic here if needed.
      return true; // Return true to indicate the input is valid.
    },
  },
];
