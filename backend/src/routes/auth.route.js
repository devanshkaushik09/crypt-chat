import express from "express";


const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Sign Up end!");
});
router.get("/login", (req, res) => {
    res.send("Login end");
});
router.get("/logout", (req, res) => {
    res.send("Logout end");
});

export default router;