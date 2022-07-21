const listingController = require('../controllers/listingController')
const initDB_Items = require('../middleware/initDBItems')
const router = require('express').Router()

router.post('/createlist', initDB_Items, listingController.createList)
module.exports = router
