import { InjectionToken } from '@angular/core';
import { DoctorPublic } from '../models/doctor.model';
import { Patient } from '../models/patient.model';

export const DYNAMIC_DATA = new InjectionToken<{ doctor: DoctorPublic, patient: Patient }>('DYNAMIC_DATA');
