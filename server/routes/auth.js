import { Router } from "express";

import { startSignUp, finishSignUp } from "../controllers/signUp.js";
const router = Router();

// root /user/

// POST at /user/sign_up 
router.post( '/sign_up', startSignUp );

router.post( '/confirm', finishSignUp );

// POST at /user/sign_in
router.post( '/sign_in' );

//  POST at /user/sign_out
router.post( '/sign_out' )


export default router;