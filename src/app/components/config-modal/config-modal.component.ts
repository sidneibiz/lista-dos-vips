import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PathService, FilePath } from '../../../providers';

@Component({
  selector: 'config-modal-component',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.css']
})

export class ConfigModalComponent implements OnInit{

  @Input()
  public filePath: string;

  public paths: Array<FilePath>;

  constructor(public dialogRef: MatDialogRef<ConfigModalComponent>,private pathService : PathService) { }

  ngOnInit() {
    this.pathService.getFilesPath().then(response => {
      this.paths = response;
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.pathService.setFilesPath({path: this.filePath, active: true});
    this.dialogRef.close();
  }

}