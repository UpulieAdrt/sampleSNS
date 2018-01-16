let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("Topic triggered the Lambda");

	sns.publish({
		Message: 'This is the message published to topic_um via Lambda',
		Subject: 'Topic_um_Messages',
		MessageAttributes: {
			'Sender name': {
				DataType: 'String',
				StringValue: 'upulie'
			},
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:publisher_topic'
	}).promise()
		.then(data => {
			// your code goes here

			console.log("Published to topic_um");
		})
		.catch(err => {
			// error handling goes here
			console.log("Error encounterred ");
		});


}