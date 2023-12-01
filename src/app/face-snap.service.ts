import { Injectable } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis toujours',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 357,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Moi',
      description: "Oui c'est moi",
      imageUrl: 'https://cdn.pixabay.com/photo/2020/09/09/00/21/harmonia-macrocosmica-5556154_1280.png',
      createdDate: new Date(),
      snaps: 250,
      location: 'A la montagne'
    },
    {
      id: 3,
      title: 'Toi',
      description: "Oui c'est toi",
      imageUrl: 'https://cdn.pixabay.com/photo/2020/02/01/23/01/jupiter-4811646_1280.png',
      createdDate: new Date(),
      snaps: 650,
    }];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error("FaceSnap not found!");
    } else {
      return faceSnap;
    }


  }
  snapFaceSnapbyId(id: number, snapType: 'snap' | 'unsnap') {
    const faceSnap = this.getFaceSnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
