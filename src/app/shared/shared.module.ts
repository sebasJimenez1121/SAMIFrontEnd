import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/atoms/button/button.component';
import { TextComponent } from './components/atoms/text/text.component';
import { TitlePrincipalComponent } from './components/atoms/title-principal/title-principal.component';
import { TitleSecundariComponent } from './components/atoms/title-secundari/title-secundari.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { ButtonCircleComponent } from './components/atoms/button-circle/button-circle.component';
import { ButtonBottomlessComponent } from './components/atoms/button-bottomless/button-bottomless.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputComponent } from './components/atoms/input/input.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { InputTextAreaComponent } from './components/atoms/input-text-area/input-text-area.component';
import { SelectsComponent } from './components/atoms/selects/selects.component';
import { InputDateComponent } from './components/atoms/input-date/input-date.component';
import { InputRatingComponent } from './components/atoms/input-rating/input-rating.component';
import { DataDisplayAvatarComponent } from './components/atoms/data-display-avatar/data-display-avatar.component';
import { DataDisplayChipComponent } from './components/atoms/data-display-chip/data-display-chip.component';
import { FeedbackProgessComponent } from './components/atoms/feedback-progess/feedback-progess.component';
import { NavigationBreadcrumbsComponent } from './components/atoms/navigation-breadcrumbs/navigation-breadcrumbs.component';
import { NavigationPaginationComponent } from './components/atoms/navigation-pagination/navigation-pagination.component';
import { NavigationStepperComponent } from './components/atoms/navigation-stepper/navigation-stepper.component';
import { DataDisplayListComponent } from './components/atoms/data-display-list/data-display-list.component';
import { NavigationTabsComponent } from './components/atoms/navigation-tabs/navigation-tabs.component';
import { DataDisplayBadgeComponent } from './components/atoms/data-display-badge/data-display-badge.component';
import { TitleTerciarioComponent } from './components/atoms/title-terciario/title-terciario.component';
import { TextFieldComponent } from './components/atoms/text-field/text-field.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/molecules/menu/menu.component';
import { ProfileButtonComponent } from './components/molecules/profile-button/profile-button.component';
import { ImageCardComponent } from './components/molecules/image-card/image-card.component';
import { ContentCardComponent } from './components/molecules/content-card/content-card.component';
import { RegistrationFormComponent } from './components/molecules/registration-form/registration-form.component';
import { LoginFormComponent } from './components/molecules/login-form/login-form.component';
import { AppointmentFormComponent } from './components/molecules/appointment-form/appointment-form.component';
import { LateralMenuComponent } from './components/molecules/lateral-menu/lateral-menu.component';
import { CalendarOptionsComponent } from './components/molecules/calendar-options/calendar-options.component';
import { SetButtonsComponent } from './components/molecules/set-buttons/set-buttons.component';
import { ButtonSetLoginRegistrationComponent } from './components/molecules/button-set-login-registration/button-set-login-registration.component';
import { RatingSystemComponent } from './components/molecules/rating-system/rating-system.component';
import { CommentsTextAreaComponent } from './components/molecules/comments-text-area/comments-text-area.component';
import { ListFooterComponent } from './components/molecules/list-footer/list-footer.component';
import { SetLinksLoginComponent } from './components/molecules/set-links-login/set-links-login.component';
import { SetLinksRegisterComponent } from './components/molecules/set-links-register/set-links-register.component';
import { ContentCardServicesComponent } from './components/molecules/content-card-services/content-card-services.component';
import { ImageCardServicesComponent } from './components/molecules/image-card-services/image-card-services.component';
import { ContentCardRecommendedDoctorsComponent } from './components/molecules/content-card-recommended-doctors/content-card-recommended-doctors.component';
import { ImageCardRecommendedDoctorsComponent } from './components/molecules/image-card-recommended-doctors/image-card-recommended-doctors.component';
import { ContentCardCommentsDoctorsComponent } from './components/molecules/content-card-comments-doctors/content-card-comments-doctors.component';
import { ImageCardCommentsDoctorsComponent } from './components/molecules/image-card-comments-doctors/image-card-comments-doctors.component';
import { ServiceCardComponent } from './components/organisms/service-card/service-card.component';
import { RecommendedCardComponent } from './components/organisms/recommended-card/recommended-card.component';
import { LoginComponent } from './components/organisms/login/login.component';
import { RegisterComponent } from './components/organisms/register/register.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { CommentCardComponent } from './components/organisms/comment-card/comment-card.component';
import { AboutUsComponent } from './components/organisms/about-us/about-us.component';
import { VideoTutorialComponent } from './components/organisms/video-tutorial/video-tutorial.component';
import { ScheduleAppointmentComponent } from './components/organisms/schedule-appointment/schedule-appointment.component';
import { MedicalCardComponent } from './components/organisms/medical-card/medical-card.component';
import { MedicalInformationComponent } from './components/organisms/medical-information/medical-information.component';
import { DoctorCommentsComponent } from './components/organisms/doctor-comments/doctor-comments.component';
import { MedicalProfileComponent } from './components/organisms/medical-profile/medical-profile.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { RegisterTemplateComponent } from './components/templates/register-template/register-template.component';
import { StarterTemplateComponent } from './components/templates/starter-template/starter-template.component';
import { SliderComponent } from './components/organisms/slider/slider.component';
import { TemplateAppointmentScheduleComponent } from './components/templates/template-appointment-schedule/template-appointment-schedule.component';
import { AppointmentManagementTemplateComponent } from './components/templates/appointment-management-template/appointment-management-template.component';
import { CoreModule } from '../core/core.module';
import { HistorialCitaTemplateComponent } from './components/templates/historial-cita-template/historial-cita-template.component';
import { InputFileComponent } from './components/atoms/input-file/input-file.component';
import { ModalComponent } from './components/atoms/modal/modal.component';
import { ModalReservationFormComponent } from './components/organisms/modal-reservation-form/modal-reservation-form.component';
import { HowToScheduleComponent } from './components/organisms/how-to-schedule/how-to-schedule.component';
import { InputDateHistoryComponent } from './components/atoms/input-date-history/input-date-history.component';
import { StepperContainerComponent } from './components/molecules/stepper-container/stepper-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDisplayDataComponent } from './components/organisms/modal-display-data/modal-display-data.component';
import { ModalRescheduleAppointmentComponent } from './components/organisms/modal-reschedule-appointment/modal-reschedule-appointment.component';
import { ButtonsPagoComponent } from './components/molecules/buttons-pago/buttons-pago.component';
import { VisualizarCitaComponent } from './components/molecules/visualizar-cita/visualizar-cita.component';
import { ButtonPriceComponent } from './components/molecules/button-price/button-price.component';
import { EmptyStateComponent } from './components/atoms/empty-state/empty-state.component';
import { HomeAdminTemplateComponent } from './components/templates/home-admin-template/home-admin-template.component';
import { CustomAlertComponent } from './components/organisms/custom-alert/custom-alert.component';
import { RoleStyleDirective } from './directives/role-style.directive';
import { HeaderUsuarioComponent } from './components/organisms/header-usuario/header-usuario.component';
import { DoctorRegisterTemplateComponent } from './components/templates/doctor-register-template/doctor-register-template.component';
import { TemplateDoctorDashboardComponent } from './components/templates/template-doctor-dashboard/template-doctor-dashboard.component';
import { ContentCardEspecialidadComponent } from './components/molecules/content-card-especialidad/content-card-especialidad.component';
import { CardEspecialidadComponent } from './components/organisms/card-especialidad/card-especialidad.component';
import { DoctorRegisterComponent} from './components/molecules/doctor-register/doctor-register.component';
import { AddSpecialtyComponent } from './components/organisms/add-specialty/add-specialty.component';
import { ModalPerfilAdminComponent } from './components/organisms/modal-perfil-admin/modal-perfil-admin.component';
import { ModalPerfilPacienteComponent   } from './components/organisms/modal-perfil-paciente/modal-perfil-paciente.component';
import { HomePacienteTemplateComponent } from './components/templates/home-paciente-template/home-paciente-template.component';
import { ChatbotComponent } from './components/organisms/chatbot/chatbot.component';
import { TemplateAppoinmentScheduleAdminComponent } from './components/templates/template-appoinment-schedule-admin/template-appoinment-schedule-admin.component';
import { DoctorsProfilesTemplateComponent } from './components/templates/doctors-profiles-template/doctors-profiles-template.component';
import { MedicalCardPerfilComponent } from './components/organisms/medical-card-perfil/medical-card-perfil.component';
import { ContentCardPerfilDoctorComponent } from './components/molecules/content-card-perfil-doctor/content-card-perfil-doctor.component';
import { ModalPerfilDoctorComponent } from './components/organisms/modal-perfil-doctor/modal-perfil-doctor.component';
import { TrackingRecordTemplateComponent } from './components/templates/tracking-record-template/tracking-record-template.component';
import { ModalAppointmentRegistrationComponent } from './components/organisms/modal-appointment-registration/modal-appointment-registration.component';
import { RecoverPasswordComponent } from './components/organisms/recover-password/recover-password.component';
import { NewPasswordComponent } from './components/organisms/new-password/new-password.component';
import { CalendarDoctorComponent } from './components/molecules/calendar-doctor/calendar-doctor.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HamburgerMenuComponent } from './components/molecules/hamburger-menu/hamburger-menu.component';
import { FooterDoctorAdminComponent } from './components/organisms/footer-doctor-admin/footer-doctor-admin.component';
import { MedicinesTemplateComponent } from './components/templates/medicines-template/medicines-template.component';
import { MedicalTableComponent } from './components/organisms/medical-table/medical-table.component';
import { ModalDoctorComponent } from './components/organisms/modal-doctor/modal-doctor.component';
import { TemplateMedicalHistoryComponent } from './components/templates/template-medical-history/template-medical-history.component';
import { TemplatePrescriptionMedicationsComponent } from './components/templates/template-prescription-medications/template-prescription-medications.component';
import { TemplateHistorialCitaAdminComponent } from './components/templates/template-historial-cita-admin/template-historial-cita-admin.component';
import { ModalPrescriptionMedicationsComponent } from './components/organisms/modal-prescription-medications/modal-prescription-medications.component';
@NgModule({
  declarations: [
    ButtonComponent,
    TextComponent,
    TitlePrincipalComponent,
    TitleSecundariComponent,
    LinkComponent,
    ButtonCircleComponent,
    ButtonBottomlessComponent,
    ImageComponent,
    IconComponent,
    InputComponent,
    LabelComponent,
    InputTextAreaComponent,
    SelectsComponent,
    InputDateComponent,
    InputRatingComponent,
    DataDisplayAvatarComponent,
    DataDisplayChipComponent,
    FeedbackProgessComponent,
    NavigationBreadcrumbsComponent,
    NavigationPaginationComponent,
    NavigationStepperComponent,
    DataDisplayListComponent,
    NavigationTabsComponent,
    DataDisplayBadgeComponent,
    TitleTerciarioComponent,
    TextFieldComponent,
    MenuComponent,
    ProfileButtonComponent,
    ImageCardComponent,
    ContentCardComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    AppointmentFormComponent,
    LateralMenuComponent,
    CalendarOptionsComponent,
    SetButtonsComponent,
    ButtonSetLoginRegistrationComponent,
    RatingSystemComponent,
    CommentsTextAreaComponent,
    ListFooterComponent,
    SetLinksLoginComponent,
    SetLinksRegisterComponent,
    ContentCardServicesComponent,
    ImageCardServicesComponent,
    ContentCardRecommendedDoctorsComponent,
    ImageCardRecommendedDoctorsComponent,
    ContentCardCommentsDoctorsComponent,
    ImageCardCommentsDoctorsComponent,
    ServiceCardComponent,
    RecommendedCardComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    CommentCardComponent,
    AboutUsComponent,
    VideoTutorialComponent,
    ScheduleAppointmentComponent,
    MedicalCardComponent,
    MedicalInformationComponent,
    DoctorCommentsComponent,
    MedicalProfileComponent,
    LoginTemplateComponent,
    RegisterTemplateComponent,
    StarterTemplateComponent,
    SliderComponent,
    TemplateAppointmentScheduleComponent,
    AppointmentManagementTemplateComponent,
    HistorialCitaTemplateComponent,
    InputFileComponent,
    ModalComponent,
    ModalReservationFormComponent,
    HowToScheduleComponent,
    InputDateHistoryComponent,
    ModalDisplayDataComponent,
    ModalRescheduleAppointmentComponent,
    StepperContainerComponent,
    ButtonsPagoComponent,
    VisualizarCitaComponent,
    ButtonPriceComponent,
    EmptyStateComponent,
    HomeAdminTemplateComponent,
    CustomAlertComponent,
    CustomAlertComponent,
    RoleStyleDirective,
    HeaderUsuarioComponent,
    DoctorRegisterTemplateComponent,
    TemplateDoctorDashboardComponent,
    ContentCardEspecialidadComponent,
    CardEspecialidadComponent,
    DoctorRegisterComponent,
    AddSpecialtyComponent,
    ModalPerfilAdminComponent,
    HomePacienteTemplateComponent,
    ModalPerfilPacienteComponent,
    ChatbotComponent,
    TemplateAppoinmentScheduleAdminComponent,
    DoctorsProfilesTemplateComponent,
    MedicalCardPerfilComponent,
    ContentCardPerfilDoctorComponent,
    ModalPerfilDoctorComponent,
    TrackingRecordTemplateComponent,
    ModalAppointmentRegistrationComponent,
    RecoverPasswordComponent,
    NewPasswordComponent,
    CalendarDoctorComponent,
    HamburgerMenuComponent,
    FooterDoctorAdminComponent,
    MedicinesTemplateComponent,
    MedicalTableComponent,
    ModalDoctorComponent,
    TemplateMedicalHistoryComponent,
    TemplatePrescriptionMedicationsComponent,
    TemplateHistorialCitaAdminComponent,
    ModalPrescriptionMedicationsComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CoreModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
 exports:[
  HeaderComponent,
  TemplateAppointmentScheduleComponent,
  StarterTemplateComponent,
  LoginTemplateComponent,
  RegisterTemplateComponent,
  AppointmentManagementTemplateComponent,
  HistorialCitaTemplateComponent,
  ModalReservationFormComponent,
  CalendarOptionsComponent,
  HowToScheduleComponent,
  AppointmentFormComponent,
  LateralMenuComponent,
  FooterComponent,
  DoctorRegisterTemplateComponent,
  HomeAdminTemplateComponent,
  TemplateDoctorDashboardComponent,
  HomePacienteTemplateComponent,
  ChatbotComponent,
  TemplateAppoinmentScheduleAdminComponent,
  DoctorsProfilesTemplateComponent, 
  MedicalCardPerfilComponent,
  ContentCardPerfilDoctorComponent,
  ModalPerfilDoctorComponent,
  TrackingRecordTemplateComponent,
  RecoverPasswordComponent,
  NewPasswordComponent,
  TextComponent,
  ButtonComponent,
  IconComponent,
  TitleTerciarioComponent,
  LinkComponent,
  CalendarDoctorComponent,
  FooterDoctorAdminComponent,
  MedicinesTemplateComponent ,
  TemplateMedicalHistoryComponent,
  TemplatePrescriptionMedicationsComponent,
  TemplateHistorialCitaAdminComponent,
  ModalPrescriptionMedicationsComponent 
 ],


})
export class SharedModule { }
























