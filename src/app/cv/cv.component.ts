import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionPointerComponent } from './section-pointer/section-pointer.component';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cv',
    imports: [
        HeaderComponent,
        SectionPointerComponent,
        ExperienceCardComponent,
        CommonModule,
    ],
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.scss',
})
export class CvComponent {
    competencies = [
        'Angular',
        'JS (ES5/ES6+)',
        'HTML5',
        'TypeScript',
        'SASS/SCSS',
        'RxJS',
        'NgRx',
        'Webpack',
        'Karma + Jasmine',
        'MongoDB',
        'PostgreSQL',
    ];
}
