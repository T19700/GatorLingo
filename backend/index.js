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
//oracledb.initOracleClient({libDir: 'C:/oracle/instantclient-basic-windows.x64-19.18.0.0.0dbru/instantclient_19_18'});            
//oracledb.initOracleClient({libDir: '/Users/rachelpeterson/Downloads/instantclient_19_8'}); 
oracledb.initOracleClient({libDir: 'C:/Users/trist/Oracle/instantclient_21_9'});

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
            const sqlQuestion = "SELECT QUESTION FROM QUESTION WHERE QUESTIONTYPE = '" + type + "' AND LESSONNUM = " + lessonNum + " OFFSET " + (index - 1) + " ROWS FETCH NEXT 1 ROWS ONLY";
            const sqlAnswer = "SELECT ANSWER FROM QUESTION WHERE QUESTIONTYPE = '" + type + "' AND LESSONNUM = " + lessonNum + " OFFSET " + (index - 1) + " ROWS FETCH NEXT 1 ROWS ONLY";
            const sqlRandom1 = "SELECT ANSWER FROM ( SELECT ANSWER FROM QUESTION WHERE QUESTIONTYPE='"+ type + "' AND LESSONNUM=" +lessonNum + " ORDER BY dbms_random.value ) WHERE rownum = 1";
            const sqlRandom2 = "SELECT ANSWER FROM ( SELECT ANSWER FROM QUESTION WHERE QUESTIONTYPE='"+ type + "' AND LESSONNUM=" +lessonNum + " ORDER BY dbms_random.value ) WHERE rownum = 1";
            const result = await connection.execute(sqlQuestion);
            const result2 = await connection.execute(sqlAnswer);
            const result3 = await connection.execute(sqlRandom1);
            const result4 = await connection.execute(sqlRandom2);
            res.send(result.rows + " " + result2.rows + " " + result3.rows + " " + result4.rows);
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

app.get("/getTranslationQuestions", (req, res)=> {
    async function fetchQuestion() {
        let connection;
        const type = req.query.type;
        const lessonNum = req.query.lesson;
        const index = req.query.i;
        try {
            connection = await oracledb.getConnection(constr);
            const sqlQuestion = "SELECT QUESTION FROM QUESTION WHERE QUESTIONTYPE = '" + type + "' AND LESSONNUM = " + lessonNum + " OFFSET " + (index - 1) + " ROWS FETCH NEXT 1 ROWS ONLY";
            const sqlAnswer = "SELECT ANSWER FROM QUESTION WHERE QUESTIONTYPE = '" + type + "' AND LESSONNUM = " + lessonNum + " OFFSET " + (index - 1) + " ROWS FETCH NEXT 1 ROWS ONLY";
            const sqlRandom1 = "SELECT ANSWER FROM ( SELECT ANSWER FROM QUESTION WHERE QUESTIONTYPE='"+ type + "' AND LESSONNUM=" +lessonNum + " ORDER BY dbms_random.value ) WHERE rownum = 1";
            const sqlRandom2 = "SELECT ANSWER FROM ( SELECT ANSWER FROM QUESTION WHERE QUESTIONTYPE='"+ type + "' AND LESSONNUM=" +lessonNum + " ORDER BY dbms_random.value ) WHERE rownum = 1";
            const result = await connection.execute(sqlQuestion);
            const result2 = await connection.execute(sqlAnswer);
            const result3 = await connection.execute(sqlRandom1);
            const result4 = await connection.execute(sqlRandom2);
            console.log(result.rows + "+" + result2.rows + "+" + result3.rows + "+" + result4.rows);
            res.send(result.rows + "+" + result2.rows + "+" + result3.rows + "+" + result4.rows);
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

app.get("/numberOfLessons", (req, res)=> {
    async function fetchQuestionInfo() {
        let connection;
        const className = req.query.className;
        try {
            connection = await oracledb.getConnection(constr);
            const sql1 = "SELECT COUNT(DISTINCT LESSONNUM) FROM QUESTION WHERE QUESTIONTYPE= 'vocab' AND CLASSID='" + className + "'";
            const sql2 = "SELECT COUNT(DISTINCT LESSONNUM) FROM QUESTION WHERE QUESTIONTYPE= 'translation' AND CLASSID='" + className + "'";
            const result1 = await connection.execute(sql1);
            const result2 = await connection.execute(sql2);
            res.send(result1.rows + " " + result2.rows);
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

app.get("/availableCourses", (req, res)=> {
    async function fetchQuestionInfo() {
        let connection;
        try {
            connection = await oracledb.getConnection(constr);
            const sql1 = "SELECT DISTINCT CLASSID FROM QUESTION";
            const result1 = await connection.execute(sql1);
            //console.log("Checking: " + result1.rows);
            res.send(result1.rows);
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

app.get("/addQuestion", (req, res)=> {
    async function fetchQuestionInfo() {
        let connection;
        let lessonNum = req.query.lessonNum;
        let className = req.query.className;
        let questionType = req.query.questionType;
        let question = req.query.question;
        let answer = req.query.answer;
        try {
            connection = await oracledb.getConnection(constr);
            const sql1 = "INSERT INTO QUESTION VALUES( :num, :name, :type, :q, :a)";
            const result = await connection.execute(
                sql1,
                { num : {val: lessonNum }, name : {val: className}, type : {val: questionType }, q : {val: question }, a : {val: answer } },
                {autoCommit: true}
              );
            console.log("Success");
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

app.get("/availableResources", (req, res)=> {
    async function fetchQuestionInfo() {
        let connection;
        let className = req.query.className;
        let resourceType = req.query.resourceType;
        try {
            connection = await oracledb.getConnection(constr);
            const sql1 = "SELECT DISTINCT URL FROM POLLS WHERE CLASSID= '" + className + "' AND TYPE= '" + resourceType + "'";
            const result1 = await connection.execute(sql1);
            console.log(result1.rows);
            res.send(result1.rows);
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

app.get("/addResource", (req, res)=> {
    async function fetchQuestionInfo() {
        let connection;
        let className = req.query.className;
        let resourceType = req.query.resourceType;
        let weblink = req.query.weblink;
        try {
            connection = await oracledb.getConnection(constr);
            const sql1 = "INSERT INTO RESOURCES VALUES( :name, :weblink, :type)";
            const result1 = await connection.execute(
                sql1,
                { name : {val: className}, weblink : {val: weblink}, type : {val: resourceType}},
                {autoCommit: true}
            );
            console.log("Success");
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
