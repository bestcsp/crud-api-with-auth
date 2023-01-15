const express = require("express");
// import userCtrl from '../controllers/user.controller'
// import authCtrl from '../controllers/auth.controller'
// import mediaCtrl from '../controllers/media.controller'
const mediaCtrl = require("./media.controller");
// const {
//   create,
//   video,
//   listPopular,
//   listRelated,
//   listByUser,
//   incrementViews,
//   read,
//   isPoster,
//   remove,
//   userByID,
//   mediaByID,
// } = require("./media.controller");

const router = express.Router();

router.route("/api/media/new/:userId").post(
  // authCtrl.requireSignin,
  mediaCtrl.Create
);

router.route("/api/media/video/:mediaId").get(video);

router.route("/api/media/popular").get(listPopular);

router.route("/api/media/related/:mediaId").get(listRelated);

router.route("/api/media/by/:userId").get(listByUser);

router
  .route("/api/media/:mediaId")
  .get(incrementViews, read)
  .put(
    // authCtrl.requireSignin,
    isPoster,
    update
  )
  .delete(
    // authCtrl.requireSignin,
    isPoster,
    remove
  );

// router.param("userId", userCtrl.userByID);
router.param("mediaId", mediaCtrl.mediaByID);

exports.Router;
