import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-pointer',
    imports: [NgClass],
    templateUrl: './section-pointer.component.html',
    styleUrl: './section-pointer.component.scss',
})
export class SectionPointerComponent {
    @Input() isSubSection = false;
}
