import { MoviesDB, HomeModel } from "./constant"
import { log } from "../utils/log-utils"
import { IMovieDetail } from "../typing/detail-typing"

interface HotData {
    name: string,
    movies: IMovieDetail[]
}

export function getHot() {
    return new Promise((resolve, reject) => {
        const db = MoviesDB()
        const model = HomeModel(db)
        model.findOne({ name: 'hot' }, (error, doc: HotData) => {
            if (error || doc == null) {
                reject(error)
            } else {
                log(doc)
                resolve(doc.movies)
            }
            db.close()
        })
    })
}
