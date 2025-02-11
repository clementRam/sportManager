import { Component, OnInit, Input } from '@angular/core';
import { Programme } from 'src/app/shared/models/programme.model';
import { ProgrammeService } from 'src/app/shared/services/programme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programme-card',
  templateUrl: './programme-card.component.html',
  styleUrls: ['./programme-card.component.scss']
})
export class ProgrammeCardComponent implements OnInit {

  @Input()
  programme: Programme;

  constructor(private programmeService: ProgrammeService, private route: Router) { }

  ngOnInit() {
  }

  deleteProgramme(): void{
    this.programmeService.deleteProgramme(this.programme.id).subscribe();
  }

  clickViewProgramme(): void{
    this.route.navigate([`programmes/${this.programme.id}`])
  }

}
