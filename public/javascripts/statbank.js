console.log('Statbank Tool')
import JSONstat from 'https://unpkg.com/jsonstat-toolkit@1.0.8/import.mjs'
import { datalist } from 'https://unpkg.com/jsonstat-utils@2.5.5/export.mjs'

const STATBANK_BASE_URL =
        'https://statbank.cso.ie/StatbankServices/StatbankServices.svc/jsonservice/responseinstance/'
// need to start with an array of objects with table codes
// as Statbank doesn't have a discoverable list
fetch('../data/statbank_table_codes.json')
    .then(response => response.json())
    .then(tableCodes => {
      console.log('No of tables:\n')
      console.log(tableCodes.length)
    })

