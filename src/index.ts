

import { GeFile } from "controller/generate.controller";
import inquirer from "inquirer";
import {IAnswers} from "interface/answers.interface";
import { questions } from "questions/questions";

     

class Init{
    constructor(){
    inquirer.prompt(questions).then((answers:IAnswers)=>{
    // console.log(`Voce escolheu ${answers.tech} e sua pasta sera ${answers.techName}`);
     GeFile.gen(answers)
    });
    }
}


new Init();