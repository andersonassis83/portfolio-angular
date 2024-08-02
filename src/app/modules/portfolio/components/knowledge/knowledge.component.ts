import { Component, signal } from '@angular/core';

//Interfaces
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt:'Ícone de conhecimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt:'Ícone de conhecimento de CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt:'Ícone de conhecimento de Javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt:'Ícone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt:'Ícone de conhecimento de Node'
    },
  ]);

}
