const { validateStringNotEmptyNoSpaces, validateString, validateDate } = require('../validators')
const { createId } = require('../utils')

class Note {
    constructor(id, user, text, date = new Date) {
        if (id != null) validateStringNotEmptyNoSpaces(id, 'note id')
        validateStringNotEmptyNoSpaces(user, 'user id')
        if (text != null) validateString(text, 'text')
        validateDate(date)

        this.id = id || createId()
        this.user = user
        this.text = text || ''
        this.date = date
    }

    static fromJson(json) {
        const { id, user, text, date } = JSON.parse(json)

        return new Note(id, user, text, new Date(date))
    }
}

module.exports = Note