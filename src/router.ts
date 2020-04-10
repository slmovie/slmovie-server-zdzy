import express from "express"
import { findOneByID } from "./mongodb/find"
import { FindOneCallback } from "./typing/callback-typing";
import { IMovieDetail } from "./typing/detail-typing";
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

module.exports = router