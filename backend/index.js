import express from "express"
import cors from "cors"
import oracledb from "oracledb"

const app=express();
app.use(cors());

const constr = {
    user: "audreyweigel",
    password: "5QC8eJJ3zDBMv72DudP1rVzV",
    connectString: "oracle.cise.ufl.edu/orcl"
}

/* 
Instructions for Oracle Library:
Copy instantclient_19_8
Copy path into initOracleClient and replace it
*/

oracledb.initOracleClient({libDir: '/Users/rachelpeterson/Downloads/instantclient_19_8'});            

app.get("/getOracleData", (req, res)=> {
    async function fetchStudentInfo() {
        let connection;
        try {
            connection = await oracledb.getConnection(constr);
            const result = await connection.execute(
                'SELECT * FROM Student'
            );
            console.log(result.rows);
            res.send("Connection successful");
        }
        catch (err) {
            console.log(err);
        } 
        finally {
            if (connection) {
                try {
                  await connection.close();
                } catch (err) {
                    console.log(err);
                }
              }
        }
    }
    fetchStudentInfo();
});

app.listen(1521, ()=> console.log("app is running"));
