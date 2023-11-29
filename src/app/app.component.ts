import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [

      this.mySnap = {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis toujours',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 357,
        location: 'Paris'
      },

      this.myOtherSnap = {
        title: 'Moi',
        description: "Oui c'est moi",
        imageUrl: 'https://cdn.pixabay.com/photo/2020/09/09/00/21/harmonia-macrocosmica-5556154_1280.png',
        createdDate: new Date(),
        snaps: 250,
        location: 'A la montagne'
      },

      this.myLastSnap = {
        title: 'Toi',
        description: "Oui c'est toi",
        imageUrl: 'https://cdn.pixabay.com/photo/2020/02/01/23/01/jupiter-4811646_1280.png',
        createdDate: new Date(),
        snaps: 650,
      }]
  }
}
