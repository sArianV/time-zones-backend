const axios = require("axios");

const base_url = "http://worldtimeapi.org/api/timezone"

export const getTimeZonesFromAPI = async () => {
    try {

        const response = await axios.get(base_url)
        
        return response?.data || []
    } catch (error) {
        return
    }
}

export const getTimeZoneFromAPI = async ({ name }) => {

}