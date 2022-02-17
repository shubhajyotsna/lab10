const {readFileSync}=require('fs');
var load2=()=>JSON.parse(readFileSync('customer.json'))//stringfy //parse
module.exports={load2};