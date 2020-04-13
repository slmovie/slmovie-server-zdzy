import { MoviesDB, HomeModel } from "./constant"
import { log } from "../utils/log-utils"
import { IMovieDetail } from "../typing/detail-typing"

interface HotData {
    type: string,
    movies: IMovieDetail[]
}

export function getHot() {
    return new Promise((resolve, reject) => {
        const db = MoviesDB()
        const model = HomeModel(db)
        model.findOne({ type: "0" }, (error, doc: HotData) => {
            if (error || doc == null) {
                reject(error)
            } else {
                resolve(doc.movies)
            }
            db.close()
        })
    })
}

export function getNewMovies(type: string) {
    return new Promise((resolve, reject) => {
        const db = MoviesDB()
        const model = HomeModel(db)
        model.findOne({ type: type }, (error, doc: HotData) => {
            if (error || doc == null) {
                reject(error)
            } else {
                resolve(doc.movies)
            }
            db.close()
        })
    })
}
// getHot().then(result => log(result)).catch(error => log(error))