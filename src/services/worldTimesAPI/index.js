const axios = require("axios");

const base_url = "http://worldtimeapi.org/api/timezone"

const getTimeZonesFromAPI = async () => {
    try {

        const response = await axios.get(base_url)
        
        return response?.data || []
    } catch (error) {
        return
    }
}

const getTimeZoneFromAPI = async ({ name }) => {
    try {
        const response = await axios.get(base_url+"/"+name)

        return response?.data || null
    } catch (error) {
        console.log(error)
        return
    }
}

module.exports = {
    getTimeZonesFromAPI,
    getTimeZoneFromAPI
}