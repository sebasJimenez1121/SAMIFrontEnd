import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var ePayco: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  private handler: any;

  @Input() productName: string = "";
  @Input() productDescription: string = "";
  @Input() invoiceNumber: string = "";
  @Input() currency: string = "";
  @Input() amount: string = "";
  @Input() taxBase: string = "";
  @Input() tax: string = "";
  @Input() taxIco: string = "";
  @Input() userName: string = "";
  @Input() userAddress: any = "";
  @Input() userDocType: string = "";
  @Input() userDocNumber: string = "";
  @Input() userEmail: string = "";
  @Input() userPhone: any = "";
  @Input() codigoCita!: string;  // Código de la cita

  @Output() transactionCompleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) {
    this.initializeCheckout();
  }

  initializeCheckout() {
    this.handler = ePayco.checkout.configure({
      key: 'jjj',
      test: 'jjj'
    });
  }

  openCheckout() {
    const data = {
      name: this.productName || 'Producto',
      description: this.productDescription || 'Descripción del producto',
      invoice: this.invoiceNumber || '0001',
      currency: this.currency || 'COP',
      amount: this.amount || '10000',
      tax_base: this.taxBase || '0',
      tax: this.tax || '0',
      tax_ico: this.taxIco || '0',
      country: "co",
      lang: "es",
      external: "false",
      confirmation: "http://localhost:10102/pago/create",  // URL de tu backend

      name_billing: this.userName || 'Usuario',
      address_billing: this.userAddress || 'Dirección',
      type_doc_billing: this.userDocType || 'CC',
      mobilephone_billing: this.userPhone || '3000000000',
      number_doc_billing: this.userDocNumber || '12345678',
      email_billing: this.userEmail || 'correo@ejemplo.com',

      extra1: this.codigoCita,  // Código de la cita como parámetro extra
      methodsDisable: ["CASH"]
    };

    if (!this.handler) {
      this.initializeCheckout();
    }

    // Abre el checkout de ePayco
    this.handler.open(data);

    // Manejar la respuesta de pago
    this.handler.on('response', (response: any) => {
      this.onPaymentCompleted(response);
    });
  }

  onPaymentCompleted(response: any) {
    // Emitimos el evento con el resultado del pago
    this.transactionCompleted.emit(response);
  }
}
