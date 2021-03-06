import { EventModel  } from './event-model';
import { UserModel  } from './user-model';

export class TicketModel {
    id?: number;
    date: string;
    artist: string;
    numberOfTickets: number;
    minimalBidPrice: number;
    bidStep: number;
    bidStartDate: string;
    bidEndDate: string;
    eventId: number;
    event?: EventModel;
    sellerUserId: number;
    seller?: UserModel;

    constructor(param?: TicketModel) {
        Object.assign(this, param);
    }

    static get emptyTicket(): TicketModel {
        return {
            date: '',
            artist: '',
            numberOfTickets: 0,
            minimalBidPrice: 0,
            bidStep: 0,
            bidStartDate: '',
            bidEndDate: '',
            eventId: 0,
            sellerUserId: 0,
        };
    }
}
