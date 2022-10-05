import { Router } from "express";

import { startSignUp, finishSignUp } from "../controllers/signUp.js";
import { signIn } from "../controllers/signIn.js";
import { signOut } from "../controllers/signOut.js";
import { renewAccess } from "../controllers/renewAccess.js";
const router = Router();

// root /user

// POST at /user/sign_up 
router.post( '/sign_up', startSignUp );

router.post( '/finish', finishSignUp );

// POST at /user/sign_in
router.post( '/sign_in', signIn );

//  get at /user/sign_out
router.get( '/sign_out', signOut );

router.get( '/renew_access', renewAccess );

export default router;