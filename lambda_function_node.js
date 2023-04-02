var aws = require('aws-sdk');
var ses = new aws.SES({region: 'ap-south-1'});
exports.handler = function(event, context) {
console.log("Incoming: ", event);
// var output = querystring.parse(event);
var eParams = {
Destination: {
ToAddresses: ["raushan8586.kumar@gmail.com"]//give the email ID which is verified by SES
},
Message: {
Body: {Text: {
Data: "Hurray a new user has been created !!!!"
}
},
Subject: { Data: "New User"}
},
Source: "setlembalakrishna2728@gmail.com" //give the email ID which is verified by SES
};
console.log('===SENDING EMAIL===');
var email = ses.sendEmail(eParams, function(err, data){
if(err) console.log(err);
else {
console.log("===EMAIL SENT===");
console.log(data);
console.log("EMAIL CODE END");
console.log('EMAIL: ', email);
context.succeed(event);
}
});
};
