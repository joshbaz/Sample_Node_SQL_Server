const listingModel = require('../model/listingModel')
const imageModel = require('../model/imageModel')
const propertyImageModel = require('../model/propertyImageModel')
const customInputModel = require('../model/customInputModel')
const prospectModel = require('../model/propectsModel')
const basicxtcsModel = require('../model/basicxtcsModel')
const contactAgentModel = require('../model/contactAgentModel')
const prospectMessageModel = require('../model/messagesModel.js')

/**
 * listing creation
 */

exports.createList = async (req, res, next) => {
    try {
        const { title, area, description, featured } = req.body

        const itemCreation = await listingModel.create({
            title,
            area,
            description,
            featured,
        })

        res.status(200).json(itemCreation)
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}
