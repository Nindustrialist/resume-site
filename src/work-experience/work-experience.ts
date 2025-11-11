import { Component, input } from '@angular/core';
import { WorkExperienceModel } from '../models/workExperienceModel';

@Component({
  selector: 'resume-work-experience',
  imports: [],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {
  public workExperience = input.required<WorkExperienceModel>();
}
