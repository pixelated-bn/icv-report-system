const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ContractWorkForceSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: this.id
  },
  v_id: {
    type: String,
    required: true,
    default: this.v_id
  },
  quarter_id: {
    type: String,
    required: true,
    default: function () {
      
      var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    var day = currentTime.getDate()
    
    if(day <= 22 && month == 4)
    {
      return "Q01";
    }
    
     else if(day <= 22 && month == 7) {

      return "Q02";

    }
    
    else if(day <= 22 && month == 10) {
 
      return "Q03";

    }
    
    else if(day <= 22 && month == 1) {

      return "Q04";

    }
    
    else {
   
      return "None";

    }
  }},
  year: {
    type: String,
    required: true,
    default: function () {
 
     var currentTime = new Date()
     var year = currentTime.getFullYear()

     return year;

  }},
  contract_no: {
    type: String,
    required: true,
    default: this.contract_no
  },
  contract_id: {
    type: String,
    required: true,
    default: this.contract_id
  },
  kpi: {
    type: String,
    required: true,
    default: this.kpi
  },
  category: {
    type: String,
    required: true,
    default: this.category
  },
    position: {
    type: String,
    required: true,
  },
  local: {
    type: Number,
    required: true
  },
  nonlocal: {
    type: Number,
    required: true
  },
  sawp: {
    type: Number,
    required: true
  },
  total:{
    type: Number,
    required:true,
    default: function() {
    return (this.local + this.nonlocal).toFixed(2)
}},
  localpct: {
    type: Number,
    required: true,
    default: function() {
      return Math.round((this.local/(this.local + this.nonlocal)*100)*10) / 10
  }},
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('WorkforceContract', ContractWorkForceSchema);

//const Workforce = mongoose.model('Workforce', WorkForceSchema);

//module.exports = workforces;

//const Workforce = module.exports = mongoose.model('Workforce', WorkForceSchema);