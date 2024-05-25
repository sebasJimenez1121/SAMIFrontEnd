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
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  
})
export class SharedModule { }