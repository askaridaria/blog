import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './pages/details/details.component';
import { ArticleService } from './services/article.service';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './pages/home/home.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HighlightMenuDirective } from './highlight-menu.directive';
import { SymbolPipePipe } from './symbol-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ArticleComponent,
    FooterComponent,
    ModalComponent,
    AddComponent,
    MenuComponent,
    HighlightMenuDirective,
    SymbolPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
