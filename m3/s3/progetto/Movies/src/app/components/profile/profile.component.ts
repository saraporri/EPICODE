import { iUsers } from './../../models/users';
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private authSvc: AuthService) {}

  user: iUsers | undefined;

  ngOnInit() {
    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    });
  }
}
