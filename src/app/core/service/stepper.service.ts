import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Patient } from '../../core/models/patient.model';
import { DoctorPublic } from '../../core/models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private reservationStatus = new BehaviorSubject<boolean>(false);
  private submitStep = new BehaviorSubject<void>(undefined);
  private stepCompleted = new BehaviorSubject<void>(undefined);
  private canProceedSource = new Subject<boolean>();

  canProceed$ = this.canProceedSource.asObservable();

  private patientSubject = new BehaviorSubject<Patient | null>(null);
  private doctorSubject = new BehaviorSubject<DoctorPublic | null>(null);

  setCanProceed(value: boolean) {
    this.canProceedSource.next(value);
  }

  // Emite el estado de la reserva
  emitReservationStatus(status: boolean) {
    this.reservationStatus.next(status);
  }

  // Devuelve el estado de la reserva como un observable
  getReservationStatus(): Observable<boolean> {
    return this.reservationStatus.asObservable();
  }

  // Emite que el paso ha sido enviado
  emitSubmitStep() {
    this.submitStep.next();
  }

  // Devuelve un observable que notifica cuando el paso ha sido enviado
  getSubmitStep(): Observable<void> {
    return this.submitStep.asObservable();
  }

  // Emite que el paso ha sido completado
  emitStepCompleted() {
    this.stepCompleted.next();
  }

  // Devuelve un observable que notifica cuando el paso ha sido completado
  getStepCompleted(): Observable<void> {
    return this.stepCompleted.asObservable();
  }

  // Métodos para manejar la información del paciente
  setPatient(patient: Patient) {
    this.patientSubject.next(patient);
  }

  getPatient(): Observable<Patient | null> {
    return this.patientSubject.asObservable();
  }

  // Métodos para manejar la información del doctor
  setDoctor(doctor: DoctorPublic) {
    this.doctorSubject.next(doctor);
  }

  getDoctor(): Observable<DoctorPublic | null> {
    return this.doctorSubject.asObservable();
  }
}
