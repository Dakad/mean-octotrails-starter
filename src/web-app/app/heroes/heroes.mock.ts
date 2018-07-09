import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id:'187',
        name: 'Black Panther'
        
      },
      {
        id:'220',
        name: 'Captain America'
      },
      {
        id:'351',
        name: 'HULK'
      },
      {
        id:'664',
        name: 'Thor'
      },
      {
        id:'740',
        name: 'Silver Surfer'
      },
      {
        id:'718',
        name: 'Wolverine'
      },
      {
        id:'262',
        name: 'Daredevil'
      },
      {
        id:'282',
        name: 'Doctor Strange'
      }
    ];
    return { heroes };
  }
}