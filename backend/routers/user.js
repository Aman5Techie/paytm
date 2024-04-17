const { Router } = require("express");
const controllers = require("../controllers/controller");

const middlewares = require("../middlewares/middleware");
const user_controller = require("../controllers/user");

const router = Router();


router
  .route("/")
  .get(middlewares.temp_middleware, controllers.basic_controller);

router.post("/signup", middlewares.signup_midleware, user_controller.signup);
router.post("/login", middlewares.login_midleware, user_controller.login);
router.put("/" , middlewares.auth_middleware,user_controller.update_data)
router.get("/bulk" , user_controller.get_alluser)
router.delete("/delete",user_controller.delete_db)
router.get("/userinfo",middlewares.auth_middleware,user_controller.user_info)
router.post("/temp",user_controller.temp)


module.exports = router;
