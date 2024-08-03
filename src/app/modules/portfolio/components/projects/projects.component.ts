import { Component, signal } from '@angular/core';

//Interfaces
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
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
}
