import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
declare var require: any
require('../../../../script.js');


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  profile: any={};
  repos: any={};
  stars: any={};

  constructor(private profileService: ProfileService) {

    this.profileService.getProfileData().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getRepositories().subscribe(repos => {
      this.repos = repos;
    });
    this.profileService.getStars().subscribe(stars => {
      this.stars = stars;
    });
  }

  findDeveloper() {
    this.profileService.getDeveloper(this.username);

    this.profileService.getProfileData().subscribe(profile => {
      this.profile = profile;
    });
    this.profileService.getRepositories().subscribe(repos => {
      this.repos = repos;
    });
    this.profileService.getStars().subscribe(stars => {
      this.stars = stars;
    });

  }
  ngOnInit() {}
}
