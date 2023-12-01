import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../face-snap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() facesnap!: FaceSnap;

  textButton: string = 'Oh snap!'

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.textButton === 'Oh snap!') {
      this.faceSnapService.snapFaceSnapbyId(this.facesnap.id, 'snap');
      this.textButton = 'Oops unsnap'
    } else {
      this.faceSnapService.snapFaceSnapbyId(this.facesnap.id, 'unsnap');
      this.textButton = 'Oh snap!'
    }
  }
}
