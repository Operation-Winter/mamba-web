import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanningAddTicketMessage } from 'src/app/models/messages/planning-add-ticket-message';

@Component({
  selector: 'app-add-ticket-dialog',
  templateUrl: './add-ticket-dialog.component.html',
  styleUrls: ['./add-ticket-dialog.component.scss']
})
export class AddTicketDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlanningAddTicketMessage
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
