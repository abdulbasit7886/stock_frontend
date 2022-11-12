import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-confirmation-delete',
  templateUrl: './confirmation-delete.component.html',
  styleUrls: ['./confirmation-delete.component.css'],
})
export class ConfirmationDeleteComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ConfirmationDeleteComponent>) {}

  ngOnInit(): void {}
}
