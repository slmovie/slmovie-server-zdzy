import { IMovieDetail } from "./detail-typing";

export interface Callback {
    status: number,
    result: any
}

export interface FindOneCallback extends Callback {
    result: IMovieDetail | undefined
}