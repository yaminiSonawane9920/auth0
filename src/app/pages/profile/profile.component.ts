import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [HighlightModule, AsyncPipe, NgIf],
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe((profile) => {
      if (profile) {
        this.profileJson = JSON.stringify(profile, null, 2);
        console.log('User profile:', this.profileJson);
      } else {
        console.log('No user profile available (user might be logged out)');
      }
    });
    
  }
}
