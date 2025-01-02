import { Controller, Logger } from '@nestjs/common';
import { <%= classify(name) %>Service } from '../../domain/inbound/<%= name %>.service';

@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
  private readonly logger = new Logger(<%= classify(name) %>Controller.name);
  constructor(
    private readonly <%= camelize(name) %>Service: <%= classify(name) %>Service,
  ) {}
}
