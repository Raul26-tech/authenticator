import nodemailer from "nodemailer";
import { HandlebarsTemplate } from "./HandlebarsMailTemplate";
import { IParseMailTemplate } from "./HandlebarsMailTemplate";

interface IMailContact {
  name: string;
  address: string;
}

interface ISendEmail {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplate;
}

class EtherialEmail {
  async sendEmail({
    to,
    from,
    subject,
    templateData,
  }: ISendEmail): Promise<void> {
    const account = await nodemailer.createTestAccount();
    const handlebarsTemplate = new HandlebarsTemplate();

    const transport = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    const message = await transport.sendMail({
      from: {
        name: from?.name || "Equipe API Vendas",
        address: from?.address || "equipe@apivendas.com.br",
      },
      to: {
        name: to.name,
        address: to.address,
      },
      subject,
      html: await handlebarsTemplate.parse(templateData),
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }
}

export { EtherialEmail };
