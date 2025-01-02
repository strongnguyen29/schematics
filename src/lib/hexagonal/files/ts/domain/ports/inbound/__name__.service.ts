import { Injectable, Inject, Logger } from '@nestjs/common';
import { I<%= classify(name) %>Repository, I<%= classify(name) %>Repo } from '../../ports/outbound/<%= dasherize(name) %>.repository.interface';

@Injectable()
export class <%= classify(name) %>Service {
  protect readonly logger = new Logger(<%= classify(name) %>Service.name);

  constructor(
    @Inject(I<%= classify(name) %>Repo)
    private readonly <%= camelize(name) %>Repository: I<%= classify(name) %>Repository,
  ) {}
}
