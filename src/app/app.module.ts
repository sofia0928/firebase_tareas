import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './services/shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyCw_EBRBia5Oh6QVyemLUgCLTI-HSaCgYU",
  authDomain: "app-tareas-3d8c4.firebaseapp.com",
  projectId: "app-tareas-3d8c4",
  storageBucket: "app-tareas-3d8c4.appspot.com",
  messagingSenderId: "667776901175",
  appId: "1:667776901175:web:b9fba82f60134d6c80dfb2"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
