import { Router } from "express";

const router = Router();

// POST,GET /user/watchlist
router.route( '/watchlist' ).get().post();

// DELETE /user/watchlist/item/delete
router.delete( '/watchlist/:item/delete' );

// POST,GET /user/favorite
router.route( '/favorite' ).get().post();

// DELETE /user/favorite/item/delete
router.delete( '/favorite/:item/delete' )

export default router;