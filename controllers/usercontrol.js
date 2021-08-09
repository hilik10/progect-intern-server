const userSchema = require("../schemas/userSchema.js");
const internSchema = require("../schemas/internSchema");
const supervisorSchema = require("../schemas/supervisorSchema");
var crypto = require('../token/tokenfunc.js');

function userConntrol() {
    function updateintern(req, res) {
        console.log("update");
        console.log(req.body);
        const newDoc = new internSchema(req.body);
        supervisorSchema.findOne({ School: newDoc.School }, (err, supervisor) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            newDoc.supervisor_id = supervisor._id;

            newDoc.save(function (err, result) {
                if (err) {
                    console.log("intern:", err);
                    return res.status(500).send();
                }
                userSchema.updateOne({ _id: result.user }, { more_info: result._id, role: "intern" }, (err) => {
                    if (err) {
                        console.log('update:', err);
                        return res.status(500).send({});
                    }
                    supervisorSchema.updateOne({ School: newDoc.School }, { $push:{ students: req.body.user }}, (err) => {
                        if (err) {
                            console.log('update:', err);
                            return res.status(500).send({});
                        }
 
                        res.status(200).send(result);
                        console.log(req.body);
                        console.log(result);
                    })
                })
            })
        })
    }
    function updateSupervisor(req, res) {
        const supervisor = new supervisorSchema(req.body);

        supervisor.save(function (err, newDoc) {
            if (err) {
                console.log('supervisor:', err);
                return res.status(500).send({});
            }
            userSchema.updateOne({ _id: newDoc.user }, { more_info: newDoc._id, role: "supervisor" }, (err) => {
                if (err) {
                    console.log('update:', err);
                    return res.status(500).send({});
                }
                res.status(201).send(newDoc);
                console.log("supervisor crate");
                console.log(newDoc);
            })
        })
    }
    function crate(req, res) {

        var newUser = new userSchema(req.body);
        newUser.password = crypto.cryptPassword(newUser.password);
        newUser.save(function (err, newDoc) {
            console.log('create work');
            if (err) {
                console.log('create:', err);
                return res.status(500).send({});
            }
            res.status(201).send(newDoc);
            console.log("yesss");
            console.log(newDoc);
        }
        )
    }


    return {
        crate: crate,
        updateintern: updateintern,
        updateSupervisor: updateSupervisor
    }
}
module.exports = userConntrol();