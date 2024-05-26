import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrl: './navigation-tabs.component.css'
})
export class NavigationTabsComponent {
  @Input() tabs: { label: string, route: string }[] = [
    { label: 'Tab 1', route: 'tab1' },
    { label: 'Tab 2', route: 'tab2' },
    { label: 'Tab 3', route: 'tab3' },
    { label: 'Tab 4', route: 'tab4' },
    { label: 'Tab 5', route: 'tab5' },
  ]; 
}
