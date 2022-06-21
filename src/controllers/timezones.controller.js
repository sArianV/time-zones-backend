const { db, COLLECTIONS } = require("../db/firebase-db")
const { getTimeZonesFromAPI } = require("../services/worldTimesAPI")

const getTimeZones = async( req, res ) => {
  try {
    const response = await getTimeZonesFromAPI()
    
    res.status(200).json({
      success: true,
      timezones: response
    })    
  } catch (error) {
    res.status(400).json({
      success: false,
      error
    }) 
  }
}

const getUserTimeZones = async( req, res ) => {
  try {
    const {id} = req.params

    console.log(id)
    const snapshot = await db.collection(COLLECTIONS.users).get()
    
    console.log("snapshot", snapshot)

    res.status(200).json({
      success: true,
      timezones: snapshot
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      error
    })
  }
}

module.exports = {
  getTimeZones,
  getUserTimeZones
}