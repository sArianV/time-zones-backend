const { getTimeZonesFromAPI } = require("../services/worldTimesAPI")

const getTimeZones = async( req, res ) => {
  try {
    const response = await getTimeZonesFromAPI()
  
    res.status(200).json({
      success: true,
      timezones: response
    })    
  } catch (error) {
    res.status(200).json({
      success: false,
      error
    }) 
  }
}

module.exports = {
  getTimeZones
}