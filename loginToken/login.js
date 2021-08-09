const express = require('express');
const UserModel = require('../schemas/userSchema');
const crypto = require('../token/tokenfunc');
const UserToken = require('./userToken');



function login(req, res) {
    UserModel.findOne({ name: req.body.name },
        function (err, doc) {
            if (err) {
                console.log("eror:" + err);
                return res.status(500).send();
            }
            if (crypto.compare(req.body.password, doc.password)) {
                console.log("doc:", doc);
                doc.populate("more_info", (err, result) => {
                    if (err) {
                        console.log("pop:" + err);
                        return res.status(500).send();
                    }
                    var userToken = new UserToken(true, null,
                        doc.id, doc.name, doc.gmail, doc.phone,
                        Date.now() + (60 * 1000 * 60));
                    res.status(200).send({
                        token: userToken.token, id: doc.id, name: doc.name,
                        rolNumber: userToken.rolNumber, _id: doc._id, supervisor_id: 
                        userToken.rolNumber == 500 ?
                         doc.more_info._id 
                         : 
                         doc.more_info.supervisor_id
                    });
                })

            }
        })
}
function loginRegister(req, res) {
    UserModel.findOne({ name: req.body.name },
        function (err, doc) {
            if (err) {
                console.log("eror:" + err);
                return res.status(500).send();
            }
            if (crypto.compare(req.body.password, doc.password)) {
                console.log("doc:", doc);

                var userToken = new UserToken(true, null,
                    doc.id, doc.name, doc.gmail, doc.phone,
                    Date.now() + (60 * 1000 * 60));
                res.status(200).send({
                    token: userToken.token, id: doc.id, name: doc.name,
                    rolNumber: userToken.rolNumber, _id: doc._id
                });


            }
        })
}



module.exports = { login, loginRegister };
