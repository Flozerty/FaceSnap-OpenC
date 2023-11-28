import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() facesnap!: FaceSnap;

  textButton: string = 'Oh snap!'

  ngOnInit(): void {

  }

  onSnap() {
    if (this.textButton === 'Oh snap!') {
      this.facesnap.snaps++;
      this.textButton = 'Oops unsnap'
    } else {
      this.facesnap.snaps--;
      this.textButton = 'Oh snap!'
    }
  }
}
