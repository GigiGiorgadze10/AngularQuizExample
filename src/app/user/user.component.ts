import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../../service/user.service'; // Corrected casing
import { StatsComponent } from '../stats/stats.component'; // Import StatsComponent

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, StatsComponent], // Add StatsComponent here
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: User[] = [];
  selectedUser: User | null = null; // Use appropriate type for selectedUser

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  statusColor(user: User): string {
    return user.Status === "Confirmed" ? "green" : user.Status === "Blocked" ? "red" : "black";
  }

  onSelect(user: User): void {
    this.selectedUser = user; // Set the selected user
  }
}
