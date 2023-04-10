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
Download instantclient_19_8
Copy path into initOracleClient and replace it
*/

oracledb.initOracleClient({libDir: 'C:/oracle/instantclient-basic-windows.x64-19.18.0.0.0dbru/instantclient_19_18'});            

app.get("/getOracleData", (req, res)=> {
    async function fetchStudentInfo() {
        let connection;
        const type = req.query.type;
        try {
            connection = await oracledb.getConnection(constr);
            const sql = "SELECT * FROM QUESTION";
            const result = await connection.execute(sql);
            res.send(result.rows);
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

app.get("/getQuestions", (req, res)=> {
    async function fetchQuestion() {
        let connection;
        const type = req.query.type;
        const lessonNum = req.query.lesson;
        const index = req.query.i;
        try {
            connection = await oracledb.getConnection(constr);
            const sql = "SELECT QUESTION FROM QUESTION WHERE QUESTIONTYPE = '" + type + "' AND LESSONNUM = " + lessonNum + " OFFSET " + (index - 1) + " ROWS FETCH NEXT 1 ROWS ONLY";
            const result = await connection.execute(sql);
            res.send(result.rows);
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
    fetchQuestion();
});

app.get("/getCorrectAnswer", (req, res)=> {
    async function fetchCorrect() {
        let connection;
        const type = req.query.type;
        const lessonNum = req.query.lesson;
        const index = req.query.i;
        try {
            connection = await oracledb.getConnection(constr);
            const sql = "SELECT ANSWER FROM QUESTION WHERE QUESTIONTYPE = '" + type + "' AND LESSONNUM = " + lessonNum + " OFFSET " + (index - 1) + " ROWS FETCH NEXT 1 ROWS ONLY";
            const result = await connection.execute(sql);
            res.send(result.rows);
            
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
    fetchCorrect();
});

app.get("/getNumberOfQuestions", (req, res)=> {
    async function fetchQuestionInfo() {
        let connection;
        const type = req.query.type;
        const lessonNum = req.query.lesson;
        try {
            connection = await oracledb.getConnection(constr);
            const sql = "SELECT COUNT(*) FROM QUESTION WHERE QUESTIONTYPE='"+ type + "' AND LESSONNUM=2";
            const result = await connection.execute(sql);
            res.send(result.rows);
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
    fetchQuestionInfo();
});

app.get("/getRandomAnswer", (req, res)=> {
    async function fetchQuestionInfo() {
        let connection;
        const type = req.query.type;
        const lessonNum = req.query.lesson;
        try {
            connection = await oracledb.getConnection(constr);
            const sql = "SELECT ANSWER FROM ( SELECT ANSWER FROM QUESTION WHERE QUESTIONTYPE='"+ type + "' AND LESSONNUM=" +lessonNum + " ORDER BY dbms_random.value ) WHERE rownum = 1";
            const result = await connection.execute(sql);
            res.send(result.rows);
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
    fetchQuestionInfo();
});

app.listen(1521, ()=> console.log("app is running"));
