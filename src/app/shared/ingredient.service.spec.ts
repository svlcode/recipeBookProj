import { MockInstance } from 'ng-mocks';
import { IngredientService } from './ingredient.service';
import { LoggingService } from './logging.service';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { Ingredient } from './ingredient.model';

describe('IngredientService', () => {
  //jest.spyOn(LoggingService);
  let spectator: SpectatorService<IngredientService>;

  const createService = createServiceFactory({
    service: IngredientService,
    mocks: [LoggingService],
  });

  beforeEach(() => (spectator = createService()));

  it('should call log', () => {

    
    console.log('test...');
    const spy = spectator.inject<LoggingService>(LoggingService);
    spy.logMessage.call((msg: string) => console.log('spying: ' + msg));

    spectator.service.addIngredient(new Ingredient('aa', 2));

    expect(spy.logMessage).toHaveBeenCalled();
  });
});
