import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Component, OnInit } from '@angular/core';

const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
    currentUser {
      login
      avatar_url(avatarSize: $avatarSize)
    }
  }
`;

interface QueryResponse {
  currentUser;
  loading;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loading: boolean;
  currentUser: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<QueryResponse>({
        query: CurrentUserForProfile,
        variables: {
          avatarSize: 100
        }
      })
      .subscribe(({ data }) => {
        this.loading = data.loading;
        this.currentUser = data.currentUser;
      });
  }
}
