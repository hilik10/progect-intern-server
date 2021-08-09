var answerSchema = require("../schemas/answerSchema.js");
var internSchema = require("../schemas/internSchema.js");

function interncontrol() {
    function crateAnswer(req, res) {
        console.log("work answer");
        new answerSchema({ intern: req.body._id, name: req.body.name, url: req.body.url }).save(
            function (err, newDoc) {

                console.log('answer work');
                if (err) {
                    console.log('answer:', err);
                    return res.status(500).send({});
                }
                internSchema.updateOne({ user: req.body._id }, { $push: { done: newDoc._id } }, (err) => {
                    if (err) {
                        console.log('update:', err);
                        return res.status(500).send({});
                    }
               
                res.status(201).send(newDoc);
                console.log("save" + newDoc);
            })
            }
        );

    }
    return {
        crateAnswer: crateAnswer
    }
}
module.exports = interncontrol();