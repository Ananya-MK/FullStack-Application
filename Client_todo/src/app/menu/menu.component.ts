import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticatorService } from '../services/hardcoded-authenticator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
constructor(public authenticatorService:HardcodedAuthenticatorService){

}
}
