import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsComponent, TabComponent, UserFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ChallengeTabs');
}
