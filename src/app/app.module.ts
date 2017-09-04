import { RouterModule } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { ApolloClient } from 'apollo-client';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from 'protractor/built/exitCodes';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';

const client = new ApolloClient();

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FollowersComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ApolloModule.forRoot(provideClient),
    RouterModule.forRoot([
      { path: '', component: PostsComponent },
      { path: 'followers', component: PostsComponent },
      { path: 'followers/:username', component: PostsComponent },
      { path: '**', component: PostsComponent }
    ])
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
