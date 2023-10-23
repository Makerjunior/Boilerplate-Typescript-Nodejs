import { EChoicesBoilerPlate } from 'enuns/choices.boilers.enum';
import path from 'node:path';
import fs from 'node:fs'
export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate deseja?',
    choices: [EChoicesBoilerPlate.NODE_JS, EChoicesBoilerPlate.Scss],
  },
  {
    type: 'input',
    name: 'techName',
    message: 'Dê um nome para a pasta do projeto:',
    validate: (folderName: string) => {
      if (/[^\w\s-]/.test(folderName)) {
        return 'Nome inválido! Use caracteres validos';
      }else if(!folderName){
        return "Por favor insira o nome";
      }else if (folderName === "boilerplate-typescript-nodejs" || 
                folderName == "boilerplate-scss") {
                  return "Não é possivel criar com esse nome.";
      }

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        console.log(dir)
      } catch (error) {
        return "Nome invalido";
      }

    

      // You can add more custom validation logic here if needed.
      return true; // Return true to indicate the input is valid.
    },
  },
];
