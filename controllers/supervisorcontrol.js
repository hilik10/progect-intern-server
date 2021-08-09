var supervisorSchema = require("../schemas/supervisorSchema");
var internSchema = require("../schemas/internSchema.js");

function supervisorcontrol() {
    function getintern(req, res) {
        console.log("getname");
        supervisorSchema.findOne({ _id: req.body.supervisor_id }).populate({
            path: 'students', populate: {
                path: 'more_info'
            }
        }).exec(
            (err, interns) => {
                if (err) {
                    return res.status(500).send(err);
                }
                if (!interns) {
                    return res.status(404).send({ msg: "not found" });
                }
                console.log(interns.students);
                res.status(200).send(interns.students);
            }
        );

    }

    function getAnswer(req, res) {
        console.log("get answer");
        internSchema.findOne({ user: req.body._id }).populate({
            path: 'done'
        }).exec(
            (err, answers) => {
                if (err) {
                    return res.status(500).send(err);
                }
                if (!answers) {
                    return res.status(404).send({ msg: "not found" });
                }
                console.log(answers.done);
                res.status(200).send(answers.done);
            }
        );
    }

    return {
        getintern,
        getAnswer
    }
}
module.exports = supervisorcontrol();