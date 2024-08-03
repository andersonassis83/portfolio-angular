import { Component, inject, signal } from '@angular/core';

//Interfaces
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enums
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialogs
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto portfolio design",
      title: "Design portfolio",
      width: '100px',
      height: '51px',
      description: '<p>Portfolio de design, contendo casos de uso de diversas áreas do design como: UX/UI, Game design, Audiovisual, entre outros.</p>',
      links: [
        {
          name: 'Conheça o portfolio',
          href: 'https://www.andersonassis.art.br'
        }
      ]
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
