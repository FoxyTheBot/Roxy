import { Helper } from './RoxyClient';

export interface Run {
    (client: Helper, ...args: any[]): any;
}

export interface RoxyEvent {
    bind: string;
    run: Run;
}