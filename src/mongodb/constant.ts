import mongoose, { Connection } from 'mongoose'
import { MovieSchema } from './schema/detail-schema';
import { HomeSchema } from './schema/home-schema';

export const DBAddress = 'mongodb://read:qwqwewq.as.fdi.0-9fdkslafr@152.136.103.63:14370';

export const MoviesDB = () => {
    return mongoose.createConnection(DBAddress + "/" + 'movies', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export const MovieModel = (db: Connection) => {
    return db.model('Movie', MovieSchema)
}

export const HomeModel = (db: Connection) => {
    return db.model("Home", HomeSchema)
}