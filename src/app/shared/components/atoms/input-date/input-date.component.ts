import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Cita {
  id: string;
  nameMedico: string;
  especialidad: string;
  namePaciente: string;
  estado: string;
  patientDocument: string;
  patientPhone: string;
  valorCita: string;
  motivoCita: string;
  imagenMedico: string;
  fechaCita: string;
}

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  currentDate: Date = new Date();
  citas: Cita[] = [];
  selectedDate: Date | null = null;
  hours: number | null = null;
  minutes: number | null = null;
  period: 'AM' | 'PM' = 'AM';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCitasFromApi();
  }

  getCitasFromApi(): void {
    this.http.get<{ citas: Cita[] }>('http://localhost:8000/citas')  // Reemplaza con la URL de tu API
      .subscribe(data => {
        this.citas = data.citas;
        console.log(this.citas);
      });
  }

  changeMonth(monthChange: number): void {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + monthChange);
    this.currentDate = newDate;
  }

  getWeeksInMonth(): Date[][] {
    const weeks: Date[][] = [];
    let currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    currentDate.setDate(currentDate.getDate() - currentDate.getDay()); // Empieza desde el domingo anterior o actual
    while (currentDate.getMonth() !== this.currentDate.getMonth() + 1 || currentDate.getDay() !== 0) {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
    }
    return weeks;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  hasCita(date: Date): boolean {
    return this.citas.some(cita => new Date(cita.fechaCita).toDateString() === date.toDateString());
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }

  selectPeriod(period: 'AM' | 'PM'): void {
    this.period = period;
  }

  saveCita(): void {
    if (this.selectedDate && this.hours !== null && this.minutes !== null) {
      let adjustedHours = this.hours;
      if (this.period === 'PM' && this.hours < 12) {
        adjustedHours += 12;
      }
      if (this.period === 'AM' && this.hours === 12) {
        adjustedHours = 0;
      }
      this.selectedDate.setHours(adjustedHours, this.minutes);

      const newCita: Cita = {
        id: (this.citas.length + 1).toString(),
        nameMedico: 'Dr. Example',
        especialidad: 'General',
        namePaciente: 'Example Patient',
        estado: 'Agendada',
        patientDocument: '00000000',
        patientPhone: '0000000000',
        valorCita: '50.000',
        motivoCita: 'Consulta',
        imagenMedico: 'path_to_image',
        fechaCita: this.selectedDate.toISOString(),
      };

      this.citas.push(newCita);
      console.log('Cita guardada:', newCita);
    } else {
      alert('Por favor selecciona una fecha y una hora.');
    }
  }
}
