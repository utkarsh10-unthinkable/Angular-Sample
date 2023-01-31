import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './component/footer/footer.component';
import { AuthorComponent } from './component/author/author.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
    
  ],
  exports:[ToolbarComponent,FooterComponent,AuthorComponent,HttpClientModule]
})
export class SharedModule { }
