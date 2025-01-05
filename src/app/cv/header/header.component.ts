import { Component } from '@angular/core';
import { SectionPointerComponent } from '../section-pointer/section-pointer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faEnvelope,
    faPhoneAlt,
    faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-header',
    imports: [SectionPointerComponent, FontAwesomeModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    faEnvelope = faEnvelope;
    faPhoneAlt = faPhoneAlt;
    faAdress = faMapLocationDot;
    faLinkedIn = faLinkedin;
}
