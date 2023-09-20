const { Router } = require("express");

const { userRegstrGet, userRegstrPost } = require("../controllers/users");

const router = Router();

router.get("/regstr", userRegstrGet);
router.post("/regstrpost", userRegstrPost);

module.exports = router;
