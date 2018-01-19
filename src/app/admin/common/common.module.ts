import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLeftPanelComponent } from './admin-left-panel/admin-left-panel.component';
import { AdminHeaderComponent} from './admin-header/admin-header.component';
import { AdminFooterComponent} from './admin-footer/admin-footer.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AdminLeftPanelComponent,AdminHeaderComponent,AdminFooterComponent],
  exports: [AdminLeftPanelComponent,AdminHeaderComponent,AdminFooterComponent]
})
export class AdminCommonModule { }
