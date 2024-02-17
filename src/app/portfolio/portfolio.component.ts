import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Yusuf Akalin - Portfolio');
  }

  ngOnInit(): void {
      this.projects = this.projectsService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.typescript) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.projectsService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.filtering = false;
    this.projects = this.projectsService.GetProjects();
  }
}
