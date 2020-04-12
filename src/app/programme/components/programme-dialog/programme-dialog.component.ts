import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Programme } from 'src/app/shared/models/programme.model';
import { ProgrammeService } from 'src/app/shared/services/programme.service';

@Component({
  selector: 'app-programme-dialog',
  templateUrl: './programme-dialog.component.html',
  styleUrls: ['./programme-dialog.component.scss']
})
export class ProgrammeDialogComponent implements OnInit {
  
  programme: Programme;

  programmeForm = this.fb.group({
    name: ['', Validators.required]
  });
  

  constructor(
    public dialogRef: MatDialogRef<ProgrammeDialogComponent>,
    private fb: FormBuilder, 
    private programmeService: ProgrammeService,
    @Inject(MAT_DIALOG_DATA) public data: any 
    ) { }

  ngOnInit() {
    if(this.data && this.data.programme){
      this.programme = this.data.programme;
    }
  }

  onSubmit(): void{
    if(this.programme){
      this.programmeService.updateProgramme({...this.programme, ...this.programmeForm.value})
      .subscribe(() => this.dialogRef.close());
    } else {
      this.programmeService.createProgramme(this.programmeForm.value).subscribe(() => this.dialogRef.close());
    }
  }

  onCancel(): void{
    this.dialogRef.close();
  }

}
