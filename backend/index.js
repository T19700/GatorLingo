import express from "express"
import cors from "cors"
import oracledb from "oracledb"

const app=express();
app.use(cors());


/*app.get("/getData", (req, res)=> {
    res.send("Hello world!")
});*/

app.get("/getOracleData", (req, res)=> {
    res.send("step 1")
    async function fetchStudentInfo() {
        try {
            const connection = await oracledb.getConnection({
                user: 'audreyweigel',
                password: '5QC8eJJ3zDBMv72DudP1rVzV',
                connectString: 'oracle.cise.ufl.edu/orcl'
            });
            res.send("step 2")
            const result = await connection.execute(
                'SELECT * FROM Student'
            );
            res.send(result);
        }
        catch (err) {
            return err;
        } 
    }
    fetchStudentInfo();
});

app.listen(5001, ()=> console.log("app is running"));
