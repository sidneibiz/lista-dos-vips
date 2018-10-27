import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfigModalComponent } from '../config-modal/config-modal.component';

@Component({
  selector: 'toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  public pathFiles: string;

  @Input() title: string;

  constructor(private matDialog: MatDialog) { };
  openDialog(): void {
    this.matDialog.open(ConfigModalComponent, {
      width: '500px',
    });
  }
}
