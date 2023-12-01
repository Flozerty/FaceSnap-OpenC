import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../face-snap.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {

  @Input() facesnap!: FaceSnap;

  textButton: string = 'Oh snap!'

  constructor(private faceSnapService: FaceSnapService, private route: Router) { }

  onSnap() {
    if (this.textButton === 'Oh snap!') {
      this.faceSnapService.snapFaceSnapbyId(this.facesnap.id, 'snap');
      this.textButton = 'Oops unsnap'
    } else {
      this.faceSnapService.snapFaceSnapbyId(this.facesnap.id, 'unsnap');
      this.textButton = 'Oh snap!'
    }
  }

  onViewFaceSnap() {
    this.route.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }
}
