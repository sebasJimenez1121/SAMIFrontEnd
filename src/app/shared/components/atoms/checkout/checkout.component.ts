import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environment/environment';

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
  @Input() userAddress: string = "";
  @Input() userDocType: string = "";
  @Input() userDocNumber: string = "";
  @Input() userEmail: string = "";
  @Input() userPhone: string = "";

  constructor() {
    this.initializeCheckout();
  }

  initializeCheckout() {
    this.handler = ePayco.checkout.configure({
      key: environment.ePaycoPublicKey,
      test: environment.ePaycoTestMode
    });
  }

  openCheckout() {
    const data = {
      // Parámetros de la compra (obligatorios)
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
      
      // Atributos opcionales
      confirmation: "http://tu-backend.com/payment-confirmation",
      response: "http://tu-frontend.com/payment-response",
      
      // Atributos del cliente
      name_billing: this.userName || 'Usuario',
      address_billing: this.userAddress || 'Dirección',
      type_doc_billing: this.userDocType || 'CC',
      mobilephone_billing: this.userPhone || '3000000000',
      number_doc_billing: this.userDocNumber || '12345678',
      email_billing: this.userEmail || 'correo@ejemplo.com',
      
      // Deshabilitar métodos de pago que no son virtuales
      methodsDisable: ["CASH"]
    };
  
    if (!this.handler) {
      this.initializeCheckout();
    }
  
    this.handler.open(data);
  }
}

