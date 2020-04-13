import express from "express"
import { findOneByID, findAll } from "./mongodb/find"
import { FindOneCallback, SearchCallback, HotMoviesCallback, NewMoviesCallback } from "./typing/callback-typing";
import { IMovieDetail } from "./typing/detail-typing";
import { getHot, getNewMovies } from "./mongodb/home-get"
import { log } from "./utils/log-utils";
const router = express.Router();

router.get('/detail', async (req, res) => {
    try {
        const doc = await findOneByID(req.query.code.toString())
        const callBack: FindOneCallback = {
            status: 0,
            result: doc as unknown as IMovieDetail
        }
        res.json(callBack)
    } catch (error) {
        const callBack: FindOneCallback = {
            status: 0,
            result: undefined
        }
        res.json(callBack)
    }
})

router.get('/search', async (req, res) => {
    try {
        const qs = new RegExp(String(req.query.name).toString());
        const doc = await findAll(qs)
        const callBack: SearchCallback = {
            status: 0,
            result: doc as unknown as IMovieDetail[]
        }
        res.json(callBack)
    } catch (error) {
        const callBack: SearchCallback = {
            status: 0,
            result: undefined
        }
        res.json(callBack)
    }
})

router.get("/index/hot", async (req, res) => {
    try {
        const doc = await getHot()
        const callBack: HotMoviesCallback = {
            status: 0,
            result: doc as unknown as IMovieDetail[]
        }
        res.json(callBack)
    } catch (error) {
        const callBack: HotMoviesCallback = {
            status: 0,
            result: undefined
        }
        res.json(callBack)
    }
})

router.get("/index/new", async (req, res) => {
    try {
        const doc = await getNewMovies(req.query.index.toString())
        const callBack: NewMoviesCallback = {
            status: 0,
            result: doc as unknown as IMovieDetail[]
        }
        res.json(callBack)
    } catch (error) {
        const callBack: NewMoviesCallback = {
            status: 0,
            result: undefined
        }
        res.json(callBack)
    }
})

module.exports = router