import { TestBed, inject } from '@angular/core/testing';

import { FriendsShowService } from './friends-show.service';

describe('FriendsShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsShowService]
    });
  });

  it('should ...', inject([FriendsShowService], (service: FriendsShowService) => {
    expect(service).toBeTruthy();
  }));
});
