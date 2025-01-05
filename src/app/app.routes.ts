import { Routes } from '@angular/router'
import { CvComponent } from './cv/cv.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { NotfoundComponent } from './notfound/notfound.component'

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cv' },
    {
        path: 'cv',
        component: CvComponent,
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
    },
    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '/404' },
]
