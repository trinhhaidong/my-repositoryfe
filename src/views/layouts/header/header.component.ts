import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink,CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public authService: AuthService) {
    
   }
  
  logout(): void { this.authService.logout(); }
}