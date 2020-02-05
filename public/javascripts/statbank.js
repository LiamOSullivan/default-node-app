console.log('Statbank Tool')
import JSONstat from 'https://unpkg.com/jsonstat-toolkit@1.0.8/import.mjs'
import { datalist } from 'https://unpkg.com/jsonstat-utils@2.5.5/export.mjs'

import { populateDropdownFromArray } from './utils/bcd-ui.mjs'
import { fetchStatbankTableFromUrl } from './utils/bcd-statbank.mjs'

const STATBANK_BASE_URL =
        'https://statbank.cso.ie/StatbankServices/StatbankServices.svc/jsonservice/responseinstance/'
// need to start with an array of objects with table codes
// as Statbank doesn't have a discoverable list
fetch('../data/statbank_table_metadata.json')
    .then(response => response.json())
    .then(metadata => {
      console.log('No of tables:\n')
      console.log(metadata.length)
      let tableCodes = metadata.map((d) => {
        return d.tablecode
      })

      let dropdown = document.getElementById('table-code-dropdown')
      populateDropdownFromArray(dropdown, tableCodes)
      let tableJson
      dropdown.addEventListener('change', (e) => {
      // console.log('select \n')
        const tableCode = e.target.value
        // let el = document.getElementById('statbank-loading')
        // el.textContent = 'Fetching data from statbank.cso.ie'
        // let elProgress = document.createElement('progress')
        // elProgress.setAttribute('max', '100')
        // elProgress.setAttribute('value', '50')
        // el.appendChild(elProgress)
        tableJson = fetchStatbankTableFromUrl(STATBANK_BASE_URL + tableCode)
      })
    })
