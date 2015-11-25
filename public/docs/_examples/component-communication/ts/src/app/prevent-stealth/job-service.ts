// #docregion
import {Injectable, EventEmitter} from 'angular2/angular2';
import {Hero} from '../hero';

@Injectable()
export abstract class JobBoardFacade {
    abstract post(jobRequest: string):void;
    abstract assign(hero: Hero):void;
    abstract jobRequest():string;
    abstract respondingHeroes (): Hero[];
    abstract assignedTo():Hero;
}

@Injectable()
export abstract class InvitedHeroFacade {
    abstract take(hero: Hero):void;
    abstract jobPostEvent(): EventEmitter<string>;
    abstract jobAssignedEvent(): EventEmitter<Hero>;
}

@Injectable()
export class JobService implements JobBoardFacade, InvitedHeroFacade {
    private _jobRequest: string = null;
    private _respondingHeroes: Hero[] = [];
    private _assignedTo: Hero = null;
    private _jobPostEvent = new EventEmitter<string>();
    private _jobAssignedEvent = new EventEmitter<Hero>();

    jobRequest() { return this._jobRequest };
    respondingHeroes() { return this._respondingHeroes; }
    assignedTo() { return this._assignedTo; }
    jobPostEvent() { return this._jobPostEvent; }
    jobAssignedEvent() { return this._jobAssignedEvent; }

    post(jobRequest: string) {
        this._jobRequest = jobRequest;
        this._respondingHeroes = [];
        this._assignedTo = null;
        this._jobPostEvent.next(jobRequest);
    }

    take(hero: Hero) {
        this._respondingHeroes.push(hero);
    }

    assign(hero: Hero) {
        this._assignedTo = hero;
        this._jobAssignedEvent.next(hero);
    }
}
// #enddocregion