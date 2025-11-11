import { Component, signal } from '@angular/core';
import { WorkExperience } from '../work-experience/work-experience';
import { WorkExperienceModel } from '../models/workExperienceModel';

@Component({
  selector: 'resume',
  imports: [WorkExperience],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  public workExperiences: WorkExperienceModel[] = [
    {
      employerName: 'Heartland Payment Systems (now Global Payment Systems)',
      employerLocation: 'Jeffersonville, IN',
      jobTitle: 'Developer Intern',
      datesEmployed: '12/2012 - 08/2015',
      descriptions: [
        'Investigated and debugged code to find and fix bugs reported by internal users',
        'Created and modified scripts to update production data in T-SQL',
        "Designed and developed an application to update production data to streamline my team's usual responsibilities and reduce errors from manual script creation",
      ],
    },
    {
      employerName: 'Bastian Software Solutions',
      employerLocation: 'Louisville, KY',
      jobTitle: 'Software Developer',
      datesEmployed: '02/2016 - 07/2018',
      descriptions: [
        'Traveled to client sites, installed software, and resolved software issues',
        'Interfaced with client systems using socket connections, WCF services, and parsing data from customer created files and MSSQL tables',
        "Utilized open source NHibernate ORM and Microsoft's MEF dependency injection framework to customize standard software to client specifications",
        'Enhanced C++ legacy code with bug fixes and new features',
        'Created and developed cloud-capable Service Fabric microservices',
      ],
    },
    {
      employerName: 'Farm Credit Mid-America',
      employerLocation: 'Louisville, KY',
      jobTitle: 'Software Developer',
      datesEmployed: '07/2018 - Present',
      descriptions: [
        'Designed and developed an Angular web application that is utilized internally, and by partner organizations, to originate billions in dollars worth of pre-approvals annually',
        'Maintain legacy MVC and AngularJS loan origination system',
        'Create, enhance, and upgrade .NET REST APIs written in C#',
        'Accessed and modified normalized data using Entity Framework and Dapper ORMs as well as direct execution of parameterized SQL and stored procedures',
        'Coordinated developers, lead developers, and architects in a cross functional team to define and implement coding standards across the organization enforced by ESLint and SonarQube',
        'Collaborated with user experience designers and developers across teams to consolidate customizations to the Material Angular library and reusable components into an npm package to manage breaking changes between versions and reduce manual styling',
        'Enhanced CI/CD Azure pipelines to ensure code quality and deployability',
        'Setup Nx monorepo containing natively federated micro frontends with host applications able able to dynamically load other remotely hosted micro frontends',
      ],
    },
  ];
}
