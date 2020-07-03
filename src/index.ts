import app from './app'
import config from './utils/config'

app.listen(app.get('port'), ()=>{
    console.log(`Running on ${config.ENV} PORT: ${config.PORT}`)
})
