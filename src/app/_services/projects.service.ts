import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: 'Sample Project', summary: 'This is my portfolio website.!', description: 'This is a website I made to showcase my projects and skills.', link: '//www.github.com', tags: [Tag.ANGULAR, Tag.R, Tag.ELASTICSEARCH], img: ['../../assets/portraet_Akalin.jpg']},
    {id: 1, name: 'Sample Project 2', summary: 'This is a different project', description: 'This is a website I made to showcase my projects and skills.', link: '', tags: [Tag.SQL, Tag.JAVA, Tag.CSS], img: ['../../assets/img/portfolio.png']},
    {id: 2, name: 'Sample Project 3', summary: 'This is another project', description: 'This is a website I made to showcase my projects and skills.', link: '', tags: [Tag.HTML, Tag.PYTHON, Tag.FASTAPI], img: ['../../assets/img/portfolio.png']},
    {id: 3, name: 'Sample Project 3', summary: 'This is another project', description: 'This is a website I made to showcase my projects and skills.', link: '', tags: [Tag.HTML, Tag.PYTHON, Tag.FASTAPI], img: ['../../assets/img/portfolio.png']},
    {id: 4, name: 'Sample Project 3', summary: 'This is another project', description: 'This is a website I made to showcase my projects and skills.', link: '', tags: [Tag.HTML, Tag.PYTHON, Tag.FASTAPI], img: ['../../assets/img/portfolio.png']},
    {id: 5, name: 'Sample Project 3', summary: 'This is another project', description: 'This is a website I made to showcase my projects and skills.', link: '', tags: [Tag.HTML, Tag.PYTHON, Tag.FASTAPI], img: ['../../assets/img/portfolio.png']},
    {id: 6, name: 'Sample Project 3', summary: 'This is another project', description: 'This is a website I made to showcase my projects and skills.', link: '', tags: [Tag.HTML, Tag.PYTHON, Tag.FASTAPI], img: ['../../assets/img/portfolio.png']},
    {id: 7, name: 'Sample Project 3', summary: 'This is another project', description: 'This is a website I made to showcase my projects and skills.', link: '', tags: [Tag.HTML, Tag.PYTHON, Tag.FASTAPI], img: ['../../assets/img/portfolio.png']}
  ];

  constructor() { }

  GetProjects(): Project[] {
    return this.projects;
  }
  
  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new Error('Project not found');
    }
    return project;
  }
}
