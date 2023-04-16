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
// oracledb.initOracleClient({libDir: '/Users/rachelpeterson/Downloads/instantclient_19_8'});            

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

app.get("/setUser", (req)=> {
    async function setUserInfo() {
        let connection;
        const firstName = req.query._firstName;
        const lastName = req.query._lastName;
        const occupation = req.query._occupation;

        try {
            connection = await oracledb.getConnection(constr);
            const sql = "INSERT INTO ALL_USERS VALUES( :first, :last, :className, :occ)";
            await connection.execute(
                sql,
                { first : {val: firstName }, last : {val: lastName}, className : {val: ""}, occ : {val: occupation }},
                {autoCommit: true}
            );
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
    setUserInfo();
});

app.get("/updateClass", (req)=> {
    async function updateUserInfo() {
        let connection;
        const firstName = req.query._firstName;
        const lastName = req.query._lastName;
        const studentClass = req.query.classInfo;
      
        try {
          connection = await oracledb.getConnection(constr);
          const sql = "UPDATE ALL_USERS SET CLASSNAME = :sClass WHERE FIRSTNAME = :fName AND LASTNAME = :lName";
          await connection.execute(
            sql,
            {
              sClass: { val: studentClass, type: oracledb.STRING },
              fName: { val: firstName, type: oracledb.STRING },
              lName: { val: lastName, type: oracledb.STRING }
            },
            { autoCommit: true }
          );
        } catch (err) {
          console.log(err);
        } finally {
          if (connection) {
            try {
              await connection.close();
            } catch (err) {
              console.log(err);
            }
          }
        }
      }
      updateUserInfo();
});

app.get("/getUserOccupation", (req, res)=> {
    async function getUserInfo() {
        let connection;
        const firstName = req.query._firstName;
        const lastName = req.query.lastName;

        try {
            connection = await oracledb.getConnection(constr);
            const sql = "SELCT OCCUPATION FROM ALL_USERS WHERE firstName = " + firstName + " AND lastName = " + lastName;
            const result = await connection.execute(sql);
            res.send(result.rows);        }
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
    getUserInfo();
});

app.get("/getUserClass", (req, res)=> {
    async function getUserInfo() {
        let connection;
        const firstName = req.query._firstName;
        const lastName = req.query._lastName;

        try {
            connection = await oracledb.getConnection(constr);
            const sql = "SELECT CLASSNAME FROM ALL_USERS WHERE firstName = :firstName AND lastName = :lastName";
            const result = await connection.execute(sql, { firstName: firstName, lastName: lastName }); 
            if (result.rows.length > 0) {
                const className = result.rows[0][0]; 
                const trimmedClassName = className.substring(0, 7); 
                res.send(trimmedClassName);
            }
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
    getUserInfo();
});

app.listen(1521, ()=> console.log("app is running"));
