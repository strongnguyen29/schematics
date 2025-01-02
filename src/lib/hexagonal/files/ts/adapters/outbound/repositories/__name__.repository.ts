import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { I<%= classify(name) %>Repository } from '../../domain/ports/outbound/<%= dasherize(name) %>.repository.interface';

@Injectable()
export class <%= classify(name) %>Response implement I<%= classify(name) %>Repository {
  protect readonly logger = new Logger(<%= classify(name) %>Response.name);

  constructor() {
  }
}
