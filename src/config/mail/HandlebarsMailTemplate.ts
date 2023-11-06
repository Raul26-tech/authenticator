import fs from "fs";
import handlebars from "handlebars";

export interface ITemplateVariable {
  [key: string]: string | number;
}

export interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariable;
}

class HandlebarsTemplate {
  async parse({ file, variables }: IParseMailTemplate) {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: "utf-8",
    });
    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export { HandlebarsTemplate };
