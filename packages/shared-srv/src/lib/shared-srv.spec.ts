import { sharedSrv } from './shared-srv';

describe('sharedSrv', () => {
    it('should work', () => {
        expect(sharedSrv()).toEqual('shared-srv');
    })
})