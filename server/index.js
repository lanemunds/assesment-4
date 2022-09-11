const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getInsult } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/insult", getInsult);



const {getTeams, deleteTeam, updateTeam, createTeam}= require('./controller')

app.get('/api/teams', getTeams)
app.delete('/api/teams/:id', deleteTeam)
app.post('/api/teams', createTeam)
app.put('/api/teams/:id', updateTeam)




app.listen(4000, () => console.log("Server running on 4000"));
