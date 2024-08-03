import { Component, signal } from '@angular/core';

//Interfaces
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Angular',
        p: 'Ago 2024',
      },
      text:'<p>Desenvolvimento de sistemas SPA.</p>'
    },
    {
      summary: {
        strong: 'Full-stack developer',
        p: 'mar 2019 - mar 2020',
      },
      text:'<p>Manutenção de sistemas legados e desenvolvimento de sistemas com Java, Spring Boot, .</p>'
    },
  ])

}
