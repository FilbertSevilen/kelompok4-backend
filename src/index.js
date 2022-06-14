const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const database = require('./config')

const app = express()