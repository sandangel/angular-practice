import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from 'protractor/built/exitCodes';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [BrowserModule, HttpModule],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
