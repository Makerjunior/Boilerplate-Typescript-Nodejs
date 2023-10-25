import { EChoicesBoilerPlate } from 'enuns/choices.boilers.enum';
import { GitRepository } from 'enuns/git.repository.enum';
import { IAnswers } from 'interface/answers.interface';
import shelljs from 'shelljs';
import path from 'path';
class GenerationController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerPlate.NODE_JS:
            this.execPath(GitRepository.NODEJS, answers.techName)
          break;

        case EChoicesBoilerPlate.Scss:
            this.execPath(GitRepository.SCSS, answers.techName)
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  private execPath(gitname:string, folder:String) {
    //console.log(gitname, folder);

    try {
       shelljs.cd(path.resolve());
       shelljs.exec(`git`)
    } catch (error) {
      console.log(error)
    }
  }

}

export const GeFile = new GenerationController();
