import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';
import { Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
@Component({
  selector: 'app-doctors-profiles-template',
  templateUrl: './doctors-profiles-template.component.html',
  styleUrl: './doctors-profiles-template.component.css'
})
export class DoctorsProfilesTemplateComponent   implements OnInit {
 
  @Input() titleText: string = 'Te presentamos a nuestros expertos';
  @Input() titleClass: string = 'white-title';
  @Input() paginatedDoctors: Doctor[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() specialtyChange = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();
  @Input() userRole: any = "";
  

  @Input() specialties: Specialty[] = []; // Asegúrate de que esta propiedad está definida correctamente
  imageUrl: string | null = '';
  isProfileModalOpen = false;

  constructor(private specialtyService: SpecialtyService) {}

  ngOnInit(): void {
    this.loadSpecialties();
  }

  loadSpecialties(): void {
    this.specialtyService.getSpecialties().subscribe(
      (specialties) => {
        this.specialties = specialties;
      },
      (error) => {
        console.error('Error fetching specialties:', error);
      }
    );
  }

  onSpecialtyChange(event: any) {
    this.specialtyChange.emit(+event.target.value);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

 
  
  
}
