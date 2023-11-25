const createUser = require('../../../api/v1/User/controllers/createUser')
const premiumUser = require('../../../api/v1/User/controllers/premiumUser')

const router = require('express').Router()

router.get('/users/premium/:email', premiumUser)
router.post('/users', createUser)

module.exports = router