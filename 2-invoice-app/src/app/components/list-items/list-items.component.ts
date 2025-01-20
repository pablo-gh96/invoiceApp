import { Component, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { RowItemComponent } from '../row-item/row-item.component';
import { Item } from '../../models/item';
@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
})
export class ListItemsComponent {

  @Input() items: Item [] = [];
}
