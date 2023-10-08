import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() selectedCountry!: string;
  @Output() countrySelected = new EventEmitter<string>();

  selectCountry(country: string) {
    this.selectedCountry = country;
    this.countrySelected.emit(country);
  }
}
