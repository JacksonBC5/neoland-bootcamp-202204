require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
// const {registerUser} = require('./logic')
// const {authenticateUser} = require('./logic')
// const {retrieveUser} = require('./logic')
// const {updateUser} = require('./logic')
const { ConflictError, FormatError, AuthError, NotFoundError } = require('./errors')

// const { generateToken, verifyToken } = require('./helpers')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleUpdateUser,

    handleCreateNote,
    handleRetrieveNotes,
    handleUpdateNote


} = require('./handlers')

const { connect, disconnect } = require('mongoose')

; (async() => {
    await connect('mongodb://localhost:27017/notes-db')

        console.log('db connected')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users', jsonBodyParser, handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        
        routes.post('/notes', jsonBodyParser, handleCreateNote)
        routes.get('/notes', jsonBodyParser, handleRetrieveNotes)
        routes.patch('/notes/:noteId', jsonBodyParser, handleUpdateNote)



        api.use('/api', routes)


        // api.patch('/api/users', jsonBodyParser, (req, res) => {
        //     try {
        //         const userId = verifyToken(req)

        //         const { body: { name, age, email, phone } } = req

        //         updateUser(userId, name, age, email, phone)
        //             .then(() => res.status(204).send())
        //             .catch(error => {
        //                 let status = 500

        //                 if (error instanceof NotFoundError)
        //                     status = 404

        //                 res.status(status).json({ error: error.message })
        //             })
        //     } catch (error) {
        //         let status = 500

        //         if (error instanceof TypeError || error instanceof FormatError || error instanceof RangeError)
        //             status = 400
        //         else if (error instanceof AuthError)
        //             status = 401

        //         res.status(status).json({ error: error.message })
        //     }
        // })

        // api.post('/api/notes', jsonBodyParser, (req, res) => {
        //     try {
        //         const userId = verifyToken(req)

        //         const { body: { text } } = req

        //         createNote(userId, text)
        //             .then(noteId => res.status(201).json({ noteId }))
        //             .catch(error => {
        //                 let status = 500

        //                 if (error instanceof NotFoundError)
        //                     status = 404

        //                 res.status(status).json({ error: error.message })
        //             })
        //     } catch (error) {
        //         let status = 500

        //         if (error instanceof TypeError || error instanceof FormatError)
        //             status = 400
        //         else if (error instanceof AuthError)
        //             status = 401

        //         res.status(status).json({ error: error.message })
        //     }
        // })

        
        // api.get('/api/notes', (req, res) => {
        //     try {
        //         const userId = verifyToken(req)

        //         retrieveNotes(userId)
        //             .then(notes => res.status(200).json(notes))
        //             .catch(error => {
        //                 let status = 500

        //                 if (error instanceof NotFoundError)
        //                     status = 404

        //                 res.status(status).json({ error: error.message })
        //             })
        //     } catch (error) {
        //         let status = 500

        //         if (error instanceof TypeError || error instanceof FormatError)
        //             status = 400
        //         else if (error instanceof AuthError)
        //             status = 401

        //         res.status(status).json({ error: error.message })
        //     }
        // })

        
        // api.patch('/api/notes/:noteId', jsonBodyParser, (req, res) => {
        //     try {
        //         const userId = verifyToken(req)

        //         const { params: { noteId }, body: { text } } = req

        //         updateNote(userId, noteId, text)
        //             .then(() => res.status(204).send())
        //             .catch(error => {
        //                 let status = 500

        //                 if (error instanceof AuthError)
        //                     status = 401
        //                 else if (error instanceof NotFoundError)
        //                     status = 404

        //                 res.status(status).json({ error: error.message })
        //             })
        //     } catch (error) {
        //         let status = 500

        //         if (error instanceof TypeError || error instanceof FormatError)
        //             status = 400
        //         else if (error instanceof AuthError)
        //             status = 401

        //         res.status(status).json({ error: error.message })
        //     }
        // })

        // api.delete('/api/notes/:noteId', jsonBodyParser, (req, res) => {
        //     try {
        //         const userId = verifyToken(req)

        //         const { params: { noteId } } = req

        //         deleteNote(userId, noteId)
        //             .then(() => res.status(204).send())
        //             .catch(error => {
        //                 let status = 500

        //                 if (error instanceof AuthError)
        //                     status = 401
        //                 else if (error instanceof NotFoundError)
        //                     status = 404

        //                 res.status(status).json({ error: error.message })
        //             })
        //     } catch (error) {
        //         let status = 500

        //         if (error instanceof TypeError || error instanceof FormatError)
        //             status = 400
        //         else if (error instanceof AuthError)
        //             status = 401

        //         res.status(status).json({ error: error.message })
        //     }
        // })



        api.listen(8080, () => console.log('API running'))

        process.on('SIGINT', async () => {
            await disconnect()

            console.log('\nDB disconnected')

            process.exit(0)
        })
    })()