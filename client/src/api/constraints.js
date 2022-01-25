import axios from 'axios'
import '../utils/common'
import './models'

var prefix = ""

export default {
    getConstraints: async function() {
        return axios.get(`${prefix}/v1/constraint`)
    },

    getConstraintsByDate: async function(date) {
        if (!isDate(date)) { throw "date must be a valid date string (YYYY-MM-DD)"}
        return axios.get(`${prefix}/v1/constraint/${date}`)
    },

    /**
     * 
     * @param {Number} id 
     * @returns 
     */
    getConstraintsById: async function(id) {
        if (!isInt(id)) { throw "id must be an integer" }
        return axios.get(`${prefix}/v1/constraint/${id}`)
    },

    /**
     * 
     * @param {constraint} constraint 
     * @returns 
     */
    addConstraint: async function(constraint) {
        if (!isDate(constraint.startTime)) throw "start time must be a valid date string (YYYY-MM-DD)"
        if (!isDate(constraint.endTime)) throw "end time must be a valid date string (YYYY-MM-DD)"

        constraint.id = undefined
        return axios.post(`${prefix}/v1/constraint/add`, constraint)
    },

    /**
     * 
     * @param {constraint} constraint 
     * @returns 
     */
    updateConstraint: async function(constraint) {
        if (!isInt(constraint.id)) throw "id must be an integer"
        if (!isDate(constraint.startTime)) throw "start time must be a valid date string"
        if (!isDate(constraint.endTime)) throw "end time must be a valid date string"
        
        return axios.put(`${prefix}/v1/constraint/${constraint.id}`, constraint)
    },

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    deleteConstraint: async function(id) {
        if (!isInt(id)) throw "id must be an integer"
        return axios.delete(`${prefix}/v1/constraint/${id}`)
    },
}