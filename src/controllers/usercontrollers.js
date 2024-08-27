const database = require("../../database");

const getusers = (req,res)=>{
    database
      .query ("select * from users")
      .then (([users]) => {
        res.status(200).json(users); // use res.json instead of console.log
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};

const getusersid = (req,res)=> {
    const id = parseInt(req.params.id);
    database 
    .query("select * from users where id =?",[id])
    .then(([users]) => {
        if (users[0] != null) {
          res.status(200).json(users[0]);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};
module.exports = {
    getusers,
    getusersid,
  };