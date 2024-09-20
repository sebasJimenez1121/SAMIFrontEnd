import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { CitaService } from '../../../../core/service/cita.service';  
import { Appointment } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-calendar-doctor',
  templateUrl: './calendar-doctor.component.html',
  styleUrls: ['./calendar-doctor.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class CalendarDoctorComponent implements OnInit {
  @ViewChild('calendarContainer', { static: true }) calendarContainer!: ElementRef;
  @ViewChild('eventModal', { static: true }) eventModal!: ElementRef;
  calendar!: Calendar;
  selectedInfo: any = null;
  selectedEvent: any = null;
  private eventsKey = 'ljs-events';
  doctorId: number = 1; 
  citas: Appointment[] = [];

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.initCalendar();
    this.loadDoctorAppointments(this.doctorId); 
  }

  private loadDoctorAppointments(doctorId: number): void {
    this.citaService.getCitas().subscribe(
      data => {
        this.citas = data;
        this.updateCalendarEvents();
      },
      error => {
        console.error('Error loading citas:', error);
      }
    );
  }

  private initCalendar() {
    this.calendar = new Calendar(this.calendarContainer.nativeElement, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      locale: 'es', // Esto configura el idioma de las fechas
      editable: true,
      selectable: true,
      events: this.getEvents(),
      select: this.handleOnSelect.bind(this),
      eventClick: this.handleOnClickEvent.bind(this),
      customButtons: {
        hoy: {
          text: 'Hoy', // Botón "Hoy" personalizado en español
          click: () => {
            this.calendar.today(); // Navegar a la fecha de hoy
          }
        }
      },
      headerToolbar: {
        left: 'prev,next hoy', 
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      buttonText: {
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        list: 'Agenda'
      },
      weekText: 'Sm',
      allDayText: 'Todo el día',
      moreLinkText: (n) => `+ ver ${n} más`,
      noEventsText: 'No hay eventos para mostrar'
    });
  
    this.calendar.render();
  }
  

  private updateCalendarEvents() {
    this.calendar.removeAllEvents();
    this.citas.forEach(appointment => {
      this.calendar.addEvent({
        id: appointment.codigoCita ? appointment.codigoCita.toString() : '',
        title: `Cita con ${appointment.nombreDoctor || 'Desconocido'}`,
        start: appointment.fechaCita,
        color: '#1e90ff',
        extendedProps: {
          description: appointment.motivoCita || '',
          patientName: appointment.nombrePaciente || 'Desconocido'
        }
      });
    });
  }

  private getEvents() {
    return JSON.parse(localStorage.getItem(this.eventsKey) || '[]');
  }

  private saveEvent(event: any) {
    const events = this.getEvents();
    localStorage.setItem(this.eventsKey, JSON.stringify([event, ...events]));
  }

  private updateEvent(newEvent: any, id: string) {
    const events = this.getEvents();
    localStorage.setItem(this.eventsKey, JSON.stringify(
      events.map((event: any) => event.id === id ? { ...event, ...newEvent } : event)
    ));
  }

  private deleteEvent(id: string) {
    const events = this.getEvents();
    localStorage.setItem(this.eventsKey, JSON.stringify(events.filter((event: any) => event.id !== id)));
  }

  handleOnSelect(info: any) {
    this.selectedInfo = info;
    this.eventModal.nativeElement.open();
  }

  handleOnClickEvent(data: any) {
    const form = this.eventModal.nativeElement.querySelector('form');
    form.querySelector('[name="title"]').value = data.event.title || '';
    form.querySelector('[name="description"]').value = data.event.extendedProps?.description || '';
    this.selectedEvent = data.event;
    this.eventModal.nativeElement.querySelector('.delete-event-btn').classList.remove('d-none');
    this.eventModal.nativeElement.querySelector("button[type='submit']").innerHTML = 'Editar';
    this.eventModal.nativeElement.open();
  }

  handleOnSubmitForm(event: Event) {
    event.preventDefault();
    
    const target = event.target as HTMLFormElement;
    const titleInput = target.querySelector('[name="title"]') as HTMLInputElement;
    const descriptionInput = target.querySelector('[name="description"]') as HTMLInputElement;
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
  
    if (!title || !description) return;
  
    if (this.selectedEvent) {
      this.selectedEvent.setProp('title', title);
      this.selectedEvent.setExtendedProp('description', description);
      this.updateEvent({ title, description }, this.selectedEvent.id);
    } else {
      const newEvent = {
        id: `${Date.now()}`,
        title,
        extendedProps: { description },
        start: this.selectedInfo.startStr,
        end: this.selectedInfo.endStr
      };
      this.saveEvent(newEvent);
      this.calendar.addEvent(newEvent);
    }
  
    this.eventModal.nativeElement.close();
  }
  
  handleOnDeleteEvent() {
    if (this.selectedEvent) {
      this.deleteEvent(this.selectedEvent.id);
      this.selectedEvent.remove();
    }
    this.eventModal.nativeElement.close();
  }

  handleOnModalClosed() {
    const form = this.eventModal.nativeElement.querySelector('form');
    form.querySelector('[name="title"]')!.value = '';
    form.querySelector('[name="description"]')!.value = '';
    this.eventModal.nativeElement.querySelector('.delete-event-btn').classList.add('d-none');
    this.eventModal.nativeElement.querySelector("button[type='submit']").innerHTML = 'Guardar';
    this.selectedInfo = null;
    this.selectedEvent = null;
  }
}
