import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-experience-card',
    imports: [CommonModule],
    templateUrl: './experience-card.component.html',
    styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {
    @Input() date = '';
    @Input() location = '';
    @Input() companyName = '';
    @Input() positionName = '';
    @Input() responsibilities: string[] = [];
    @Input() isJob = true;
}
