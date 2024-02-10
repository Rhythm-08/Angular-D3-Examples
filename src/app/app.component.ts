import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
    title = 'angular-d3-examples';

}
