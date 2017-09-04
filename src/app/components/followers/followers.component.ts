import { PostService } from '../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe(followers => (this.followers = followers));
  }
}
