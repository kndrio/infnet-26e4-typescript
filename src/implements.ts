//IMPLEMENTS: uma classe que segue a interface
interface Notificador {
    enviar(mensagem: string): boolean;
}

//IMPLEMENTADO DE FORMA ADEQUADA
class NotificadorEmail implements Notificador {
    constructor(private destinatario: string) {} //atalho para criar e inicializar a propriedade

    enviar(mensagem: string): boolean {
        // Implementação para envio de e-mail
        console.log(`Enviando e-mail para ${this.destinatario}: ${mensagem}`);
        return true;
    }
}

const avisos: Notificador[] = [new NotificadorEmail("user@example.com")];
for (const aviso of avisos) aviso.enviar("Olá! Este é um aviso importante.");

//Classe inadequada não implementa o método da interface, portanto não pode ser instanciada
//class NotificadorSMS implements Notificador {}