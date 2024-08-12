import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isChatOpen = false;
  introText = 'Hola, mi nombre es SAMBot. ¿En qué puedo ayudarte?';
  messages: { fromUser: boolean, text: string }[] = [];
  newMessage = '';

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, fromUser: true });
      this.newMessage = '';
      // Lógica para enviar el mensaje al backend y recibir respuesta
    }
  }
}
