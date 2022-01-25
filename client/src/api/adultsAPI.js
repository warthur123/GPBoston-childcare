import axios from 'axios'
import '../utils/common'


export default {
    getAdults: async function() {
        return axios.get(`${prefix}/v1/adult`)
    },

    /**
     * 
     * @param {string} name 
     * @returns 
     */
    getAdultByName: async function(name) {
        if (typeof name !== 'string' || name == "") { throw "name must be a nonempty string"}
        return axios.get(`${prefix}/v1/adult/${name}`)
    },

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    getAdultById: async function(id) {
        if (!isInt(id)) { throw "id must be an integer" }
        return axios.get(`${prefix}/v1/adult/${id}`)
    },

    /**
     * 
     * @param {Adult} adult 
     * @returns 
     */
    addAdult: async function(adult) {
        if (typeof adult.name !== 'string' || adult.name == "") throw "name must be a nonempty string"
        if (adult.gender.toUpperCase() != 'M' || adult.gender.toUpperCase() != 'F') { throw "gender must be m/f" }
        if (!isDate(adult.bday)) { throw "bday must be a valid date string (YYYY-MM-DD)" }
        if (typeof adult.married !== 'boolean') { throw "married must be a boolean (T/F)" }

        adult.id = undefined // id will be assigned on creation
        return axios.post(`${prefix}/v1/adult/add`, adult)
    },

    /**
     * 
     * @param {Adult} adult 
     * @returns 
     */
    updateAdult: async function(adult) {
        if (!isInt(adult.id)) throw "id must be an integer"
        if (typeof adult.name !== 'string' || adult.name == "") { throw "name must be a nonempty string"}
        if (adult.gender.toUpperCase() != 'M' || adult.gender.toUpperCase() != 'F') { throw "gender must be m/f" }
        if (!isDate(adult.bday)) { throw "bday must be a valid date string (YYYY-MM-DD)" }
        if (typeof adult.married !== 'boolean') { throw "married must be a boolean (T/F)" }
        
        return axios.put(`${prefix}/v1/adult/${adult.id}`, adult)
    },

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    getRecentEvents: async function(id) {
        if (!isInt(id)) throw "id must be an integer"
        return axios.get(`${prefix}/v1/adult/${id}/recent`)
    },

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    getAllEvents: async function(id) {
        if (!isInt(id)) throw "id must be an integer"
        return axios.get(`${prefix}/v1/adult/${id}/all`)
    },
}