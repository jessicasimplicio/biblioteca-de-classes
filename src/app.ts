import express from 'express'
import cors from 'cors'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.get('/status', (req, res) => {
      return res.send('Hello world')
    })
  }
}

export default new App().express
