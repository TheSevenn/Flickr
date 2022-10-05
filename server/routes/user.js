import { Router } from "express";

import { getFavorites, addToFavorites, removeFromFavorites } from "../controllers/favorites.js";
import { addToWatchlist, removeFromWatchlist, getWatchlist } from "../controllers/watchlist.js";
import { checkAuth } from "../middlewares/checkAuth.js";
const router = Router();

// POST,GET /user/watchlist
router.route( '/watchlist' ).get( checkAuth, getWatchlist ).patch( checkAuth, addToWatchlist );

// DELETE /user/watchlist/item/delete
router.patch( '/watchlist/:item/remove', checkAuth, removeFromWatchlist );

// POST,GET /user/favorite
router.route( '/favorites' ).get( checkAuth, getFavorites ).patch( checkAuth, addToFavorites );

// DELETE /user/favorite/item/delete
router.patch( '/favorites/:item/remove', checkAuth, removeFromFavorites )

export default router;