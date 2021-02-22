var path = require("path");
var notesData = require("../db/db.json");
var fs = require("fs")

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notesData)
    });

    app.post('/api/notes', function (req, res) {
        var newNote = req.body;
        var object = notesData.length + 1;
        for (var i = 0; i < notesData.length; i++) {
            if (notesData.length != 0 && object == notesData[i].id) { object + 1 }
        }
        newNote.id = object;
        notesData.push(newNote);
        res.send(newNote)
    });

    app.delete("/api/notes/:id", function (req, res) {
        let deleteId = req.params.id;
        let deleteObj = notesData.find(note => note.id == deleteId);
        let deleteIndex = notesData.indexOf(deleteObj);
        notesData.splice(deleteIndex, 1);
        res.send(deleteObj);
    });
}
