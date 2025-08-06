import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ProfileService, Profile } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule, // ← garante <mat-chip-list> e <mat-chip>
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ajuda o parser a não reclamar
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'], // ← corrigido para plural!
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  constructor(private svc: ProfileService) {}

  ngOnInit() {
    this.svc.getProfile().subscribe((p) => (this.profile = p));
  }
}
