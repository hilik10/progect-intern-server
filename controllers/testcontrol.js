var testschema = require('../schemas/testSchema.js');
var userSchema = require("../schemas/userSchema.js");
var internSchema = require("../schemas/internSchema.js");

function testcontrol() {
    function find(req, res) {
        let search = new RegExp(req.body.fileUrl);
        let nameFile = req.body.name;
        console.log(search, nameFile);
        testschema.find({ url: search, name: nameFile }, function (err, docs) {
            if (docs.length > 0) {
                return res.status(404).send({ err });
            }
            res.status(201).send({ docs });
        })
    }

    function crateTest(req, res) {
        console.log("save ");
        console.log(req.body._id);
        new testschema({ supervisor: req.body.supervisor_id, name: req.body.name, url: req.body.url }).save(


  
            function (err, newDoc) {

                console.log('save work');
                if (err) {
                    console.log('save:', err);
                    return res.status(500).send({});
                }
                res.status(201).send(newDoc);
                console.log("save" + newDoc);
            }
        );

       
    }

    function deleteTest(req, res) {
        console.log("test deleteTest");

        testschema.deleteOne({ _id: req.body._id }, function (err, result) {
            if (err) {
                console.log("error deleteTest");
                return res.status(500).send("error delete" + err);
            }
            console.log("success deleteTest");
            res.status(200).send(result);
        })
    }
    function getalltest(req, res) {
        console.log("getalltest");
        let search = new RegExp('upload')
        testschema.find({ url: search, supervisor: req.body.supervisor_id }, function (err, tests) {
            if (err) {
                console.log("error " + err);
                return res.status(500).send("getalltest" + err);
            }
            console.log(tests)
            res.status(200).send(tests);
        })
    }
   
   

    return {
        find: find,
        crateTest: crateTest,
        deleteTest: deleteTest,
        getalltest: getalltest,
       
    }
}


module.exports = testcontrol();