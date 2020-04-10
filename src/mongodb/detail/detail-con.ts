import mongoose, { Connection } from 'mongoose'
import { DBAddress } from '../constant'
import { MovieSchema } from './detail-schema'

export const MoviesDB = () => {
    return mongoose.createConnection(DBAddress + "/" + 'movies', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export const MovieModel = (db: Connection) => {
    return db.model('Movie', MovieSchema)
}