import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './resume/resume.config';
import { Resume } from './resume/resume';

bootstrapApplication(Resume, appConfig).catch((err) => console.error(err));
