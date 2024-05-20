
import express from "express";
import {
  authUser,
  registerUser,
//   updateUserProfile,
} from "../Controllers/userController.js";
// import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/signup",registerUser);
router.post("/login", authUser);
// router.route("/profile").post(protect, updateUserProfile);

export default router;
