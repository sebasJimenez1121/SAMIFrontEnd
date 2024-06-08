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
import { FilterCategoriesComponent } from './components/molecules/filter-categories/filter-categories.component';
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
import { ReservationFormComponent } from './components/organisms/reservation-form/reservation-form.component';
import { MedicalCardComponent } from './components/organisms/medical-card/medical-card.component';
import { MedicalInformationComponent } from './components/organisms/medical-information/medical-information.component';
import { DoctorCommentsComponent } from './components/organisms/doctor-comments/doctor-comments.component';
import { MedicalProfileComponent } from './components/organisms/medical-profile/medical-profile.component';
import { AppointmentCardComponent } from './components/organisms/appointment-card/appointment-card.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { RegisterTemplateComponent } from './components/templates/register-template/register-template.component';
import { StarterTemplateComponent } from './components/templates/starter-template/starter-template.component';
import { SliderComponent } from './components/organisms/slider/slider.component';
import { TemplateAppointmentScheduleComponent } from './components/templates/template-appointment-schedule/template-appointment-schedule.component';
import { AppointmentManagementTemplateComponent } from './components/templates/appointment-management-template/appointment-management-template.component';
import { CoreModule } from '../core/core.module';
import { TemplateBindingParseResult } from '@angular/compiler';
import { HistorialCitaTemplateComponent } from './components/templates/historial-cita-template/historial-cita-template.component';
import { HeaderUsuarioComponent } from './components/organisms/header-usuario/header-usuario.component';
import { AppointmentModalComponent  } from './components/templates/appointment-modal/appointment-modal.component';
import { ReagendarCitaComponent } from './components/templates/reagendar-cita/reagendar-cita.component';
import { InputFileComponent } from './components/atoms/input-file/input-file.component';
import { ModalComponent } from './components/atoms/modal/modal.component';



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
    FilterCategoriesComponent,
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
    ReservationFormComponent,
    MedicalCardComponent,
    MedicalInformationComponent,
    DoctorCommentsComponent,
    MedicalProfileComponent,
    AppointmentCardComponent,
    LoginTemplateComponent,
    RegisterTemplateComponent,
    StarterTemplateComponent,
    SliderComponent,
    TemplateAppointmentScheduleComponent,
    AppointmentManagementTemplateComponent,
    HistorialCitaTemplateComponent,
    HeaderUsuarioComponent,
    AppointmentModalComponent ,
    ReagendarCitaComponent,
    InputFileComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CoreModule
  ],
 exports:[
  HeaderComponent,
  TemplateAppointmentScheduleComponent,
  StarterTemplateComponent,
  LoginTemplateComponent,
  RegisterTemplateComponent,
  AppointmentManagementTemplateComponent,
  HistorialCitaTemplateComponent,
  InputFileComponent,
  ModalComponent
 ],


})
export class SharedModule { }
























