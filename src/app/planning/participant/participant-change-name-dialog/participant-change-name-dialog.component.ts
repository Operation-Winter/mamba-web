import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanningChangeNameMessage } from 'src/app/models/messages/planning-change-name-message';

@Component({
  selector: 'app-participant-change-name-dialog',
  templateUrl: './participant-change-name-dialog.component.html',
  styleUrls: ['./participant-change-name-dialog.component.scss']
})
export class ParticipantChangeNameDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ParticipantChangeNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlanningChangeNameMessage
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
