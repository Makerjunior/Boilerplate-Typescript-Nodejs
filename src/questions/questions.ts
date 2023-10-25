import { EChoicesBoilerPlate } from 'enuns/choices.boilers.enum';
import path from 'node:path';
import fs from 'node:fs';
import { EError } from 'enuns/error.msg.enun';
import { GitRepository } from 'enuns/git.repository.enum';

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
        return EError.InvalidName;
      } else if (!folderName) {
        return 'Please enter a name.';
      } else if (
        folderName === GitRepository.NODEJS ||
        folderName === GitRepository.SCSS
      ) {
        return EError.NameUnavailable;
      } else {
        try {
          const dir = path.resolve(folderName);
          fs.accessSync(dir, fs.constants.R_OK);
          return EError.FolderExists;
        } catch (error) {
          // Folder doesn't exist, so it's a valid name.
        }
      }

      // You can add more custom validation logic here if needed.
      return true; // Return true to indicate the input is valid.
    },
  },
];
