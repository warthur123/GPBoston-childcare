class Child {
    constructor({id, name, gender, bday, pottyTrained}) {
        this.id = id
        this.name = name
        this.gender = gender
        this.birthday = bday
        this.pottyTrained = pottyTrained
    }
}

class Adult {
    constructor ({id, name, gender, bday, married}) {
        this.id = id
        this.name = name
        this.gender = gender
        this.birthday = bday
        this.married = married
    }
}

class Event {
    constructor ({id, startTime, endTime}) {
        this.id = id
        this.startTime = startTime
        this.endTime = endTime
    }
}

class Constraint {
    constructor({id, adultId, groupId, startTime, endTime}) {
        this.id = id
        this.adultId = adultId
        this.groupId = groupId
        this.startTime = startTime
        this.endTime = endTime
    }
}