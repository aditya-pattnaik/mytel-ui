import { TestBed, inject } from '@angular/core/testing';

import { AddFriendService } from './add-friend.service';

describe('AddFriendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFriendService]
    });
  });

  it('should be created', inject([AddFriendService], (service: AddFriendService) => {
    expect(service).toBeTruthy();
  }));
});
