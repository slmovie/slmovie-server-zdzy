import { IMovieDetail } from '../typing/detail-typing'
import { MoviesDB, MovieModel } from './detail/detail-con'

export function findOneByID(id: string) {
    return new Promise((reslove, reject) => {
        const db = MoviesDB()
        const model = MovieModel(db)
        model.findOne({ id: id }, (error: any, doc: IMovieDetail) => {
            if (error) {
                reject(error)
            } else {
                reslove(doc)
            }
            db.close()
        })
    })
}

// findByID(83306).then(doc => log(doc)).catch(error => log(error))
