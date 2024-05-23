//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/588c1222-5bdf-40db-9d84-29ffe6e3bb91/prompts/add-option', function (req, res) {
    var type = req.session.data['type']
    if (type == "binary"){
      res.redirect('/588c1222-5bdf-40db-9d84-29ffe6e3bb91/prompts/add/binary')
    } else if (type == "range"){
      res.redirect('/588c1222-5bdf-40db-9d84-29ffe6e3bb91/prompts/add/range')
    } else if (type == "text"){
      res.redirect('/588c1222-5bdf-40db-9d84-29ffe6e3bb91/prompts/add/text')
    } else {
      res.redirect('/588c1222-5bdf-40db-9d84-29ffe6e3bb91/prompts/add')
    }
  })
