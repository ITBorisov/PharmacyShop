import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule,
  MatInputModule, MatFormFieldModule, MatCardModule, MatListModule, MatSelectModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatInputModule,
  MatFormFieldModule, MatCardModule, MatListModule, MatSelectModule, MatGridListModule],
  exports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatInputModule,
  MatFormFieldModule, MatCardModule, MatListModule, MatSelectModule, MatGridListModule],
  declarations: []
})
export class MyOwnCustomMaterialModuleModule { }
