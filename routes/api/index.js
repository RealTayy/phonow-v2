/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require("express").Router();

/**********************************|
|*  SET UP INDIVIDUAL API ROUTES  *|
|**********************************/
// Import in individual routes
const emailRoutes = require("./email")

// Sets path to use individual routes
router.use('/email', emailRoutes);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains API routes
module.exports = router;