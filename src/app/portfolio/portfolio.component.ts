import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: 'Sample Project',
    summary: 'This is my portfolio website.!',
    description: 'This is a website I made to showcase my projects and skills.',
    link: '',
    tags: [Tag.ANGULAR, Tag.R, Tag.ELASTICSEARCH],
    img: ['assets/img/portfolio.png']
  };
  constructor(private titleService: Title) {
    this.titleService.setTitle('Yusuf Akalin - Portfolio');
  }
}
