import axios from 'axios'
import '../utils/common'
import './models'

var prefix = ""

export default {
    /**
     * get all events
     * @returns 
     */
    getEvents: async function() {
        return axios.get(`${prefix}/v1/event`)
    },

    getEventsByDate: async function(date) {
        if (!isDate(date)) { throw "date must be a valid date string (YYYY-MM-DD)"}
        return axios.get(`${prefix}/v1/event/${date}`)
    },

    /**
     * 
     * @param {Number} id 
     * @returns 
     */
    getEventsById: async function(id) {
        if (!isInt(id)) { throw "id must be an integer" }
        return axios.get(`${prefix}/v1/event/${id}`)
    },

    getEligibleAdults: async function(id) {
        if (!isInt(id)) { throw "id must be an integer" }
        return axios.get(`${prefix}/v1/event/${id}/eligibleAdults`)
    },

    /**
     * 
     * @param {event} event 
     * @returns 
     */
    addEvent: async function(event) {
        if (!isDate(event.startTime)) throw "start time must be a valid date string (YYYY-MM-DD)"
        if (!isDate(event.endTime)) throw "end time must be a valid date string (YYYY-MM-DD)"

        event.id = undefined
        return axios.post(`${prefix}/v1/event/add`, event)
    },

    /**
     * 
     * @param {event} event 
     * @returns 
     */
    updateEvent: async function(event) {
        if (!isInt(event.id)) throw "id must be an integer"
        if (!isDate(event.startTime)) throw "start time must be a valid date string"
        if (!isDate(event.endTime)) throw "end time must be a valid date string"
        
        return axios.put(`${prefix}/v1/event/${event.id}`, event)
    },

    deleteEvent: async function(id) {
        if (!isInt(id)) throw "id must be an integer"
        return axios.delete(`${prefix}/v1/event/${id}`)
    },
}