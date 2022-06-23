const { db, COLLECTIONS } = require("../db/firebase-db")
const { getTimeZoneFromAPI, getTimeZonesFromAPI } = require("../services/worldTimesAPI")

const getTimeZones = async( req, res ) => {
  const { name } = req.query
  try {
    const data = {
      success: true,
    }

    if (name) {
      const response = await getTimeZoneFromAPI({ name })
      data.timezone = response
    } else {
      const response = await getTimeZonesFromAPI()
      data.timezones = response
    }

    res.status(200).json(data)    
  } catch (error) {
    res.status(400).json({
      success: false,
      error
    }) 
  }
}

const getUserTimeZones = async( req, res ) => {
  try {
    const { user_id } = req

    const snapshot = await db.collection(COLLECTIONS.users).doc(user_id).get()
    const timezones = snapshot.data()

    res.status(200).json({
      success: true,
      user_id: user_id,
      timezones: timezones
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      error
    })
  }
}

const addTimeZone = async( req, res ) => {
  const { user_id, name } = req.body
  try {
    const userRef =  db.collection(COLLECTIONS.users).doc(user_id)
    const snapshot= await userRef.get()
    const data = snapshot.data()

    const user_time_zones = data.user_time_zones || []

    const filteredTimeZones = user_time_zones.filter( tz => {return tz !== name} )

    filteredTimeZones.push(name)
    
    const response = await userRef.set({
      user_time_zones: filteredTimeZones
    });

    res.status(200).json({
      success: true,
      user_id: user_id,
      name: name,
      filteredTimeZones
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      error
    })
  }
    
}

const deleteTimeZone = async( req, res ) => {
  const { user_id, name } = req.body
  try {
    const userRef =  db.collection(COLLECTIONS.users).doc(user_id)
    const snapshot= await userRef.get()
    const data = snapshot.data()

    const user_time_zones = data.user_time_zones || []

    const filteredTimeZones = user_time_zones.filter( tz => {return tz !== name} )
        
    const response = await userRef.set({
      user_time_zones: filteredTimeZones
    });

    res.status(200).json({
      success: true,
      user_id: user_id,
      name: name,
      filteredTimeZones
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
  getUserTimeZones,
  addTimeZone,
  deleteTimeZone
}