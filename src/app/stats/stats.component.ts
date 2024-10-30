import { Component, Input } from '@angular/core';
import { User } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'] 
})
export class StatsComponent {
  @Input() user!: User;

  statusColor(user: User) {
    return user.Status === "Confirmed" ? "green" : user.Status === "Blocked" ? "red" : "black";
  }
}
