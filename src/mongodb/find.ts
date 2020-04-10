import { IMovieDetail } from '../typing/detail-typing'
import { MoviesDB, MovieModel } from './detail/detail-con'
import { log } from '../utils/log-utils'
import { Document } from 'mongoose'

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

export function findAll(name: RegExp) {
    return new Promise((reslove, reject) => {
        const db = MoviesDB()
        const model = MovieModel(db)
        model.find({ $or: [{ name: name }, { describe: name }, { location: name }, { actor: name }, { director: name }] },
            null,
            { sort: { "_id": -1 } },
            (error: any, res: Document[]) => {
                if (error) {
                    reject(error)
                } else {
                    if (res.length > 0) {
                        reslove(res)
                    } else {
                        reject()
                    }
                }
                db.close()
            })
    })
}

// findAll(new RegExp("周星驰")).then(doc => log(doc)).catch(error => log(error))

// findByID(83306).then(doc => log(doc)).catch(error => log(error))
