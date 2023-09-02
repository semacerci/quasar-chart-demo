
import HighchartsVue from 'highcharts-vue'
import { boot } from 'quasar/wrappers'

export default boot(({app}) =>{
    app.use(HighchartsVue)
    
})