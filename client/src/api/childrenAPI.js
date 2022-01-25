import axios from 'axios'
import '../utils/common'
import './models'

var prefix = ""

export default {
    /**
     * get all children
     * @returns 
     */
    getChild: async function() {
        return axios.get(`${prefix}/v1/child`)
    },

    /**
     * 
     * @param {string} name 
     * @returns 
     */
    getChildByName: async function(name) {
        if (typeof name !== 'string' || name == "") { throw "name must be a nonempty string"}
        return axios.get(`${prefix}/v1/child/${name}`)
    },

    /**
     * 
     * @param {Number} id 
     * @returns 
     */
    getChildById: async function(id) {
        if (!isInt(id)) { throw "id must be an integer" }
        return axios.get(`${prefix}/v1/child/${id}`)
    },

    /**
     * 
     * @param {Child} child 
     * @returns 
     */
    addChild: async function(child) {
        if (typeof child.name !== 'string' || child.name == "") throw "name must be a nonempty string"
        if (child.gender.toUpperCase() != 'M' || child.gender.toUpperCase() != 'F') { throw "gender must be m/f" }
        if (!isDate(child.bday)) { throw "bday must be a valid date string (YYYY-MM-DD)" }
        if (typeof child.pottyTrained !== 'boolean') { throw "pottyTrained must be a boolean (T/F)" }

        child.id = undefined
        return axios.post(`${prefix}/v1/child/add`, child)
    },

    /**
     * 
     * @param {Child} child 
     * @returns 
     */
    updateChild: async function(child) {
        if (!isInt(child.id)) throw "id must be an integer"
        if (typeof child.name !== 'string' || child.name == "") { throw "name must be a nonempty string"}
        if (child.gender.toUpperCase() != 'M' || child.gender.toUpperCase() != 'F') { throw "gender must be m/f" }
        if (!isDate(child.bday)) { throw "bday must be a valid date string (YYYY-MM-DD)" }
        if (typeof child.pottyTrained !== 'boolean') { throw "pottyTrained must be a boolean (T/F)" }
        
        return axios.put(`${prefix}/v1/child/${child.id}`, child)
    }
}