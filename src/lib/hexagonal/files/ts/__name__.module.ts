import { Module } from '@nestjs/common';
import { <%= classify(name) %>Controller } from './adapters/inbound/api/<%= name %>.controller';
import { <%= classify(name) %>Controller } from './adapters/outbound/repositories/<%= name %>.repository';
import { <%= classify(name) %>Service } from './domain/ports/inbound/<%= name %>.service';
import { I<%= classify(name) %>Repo } from './domain/ports/outbound/i<%= name %>.repository.interface';

@Module({
  imports: [],
  controllers: [<%= classify(name) %>Controller],
  providers: [
    <%= classify(name) %>Service,
    {
      provide: I<%= classify(name) %>Repo,
      useClass: <%= classify(name) %>Repository,
    },
  ],
  exports: [<%= classify(name) %>Service],
})
export class <%= classify(name) %>Module {}
