const Database = require('./db');
const createProffy = require('./createProffy');


Database.then(async (db)=>{
     //Insert datas
    proffyValue= {
        name: "Douglas Santos",
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGqcQBV-_1DNw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=xkDRRL8043ehIJuVvCSZCu2qMgwUBTJFMFuMeJ8NW_g",
        whatsapp: "940465063",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    classValue = {
        subject: "1",
        cost: "20"
        //
    }

    classScheduleValues = [

    {
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
    ]
    

    //createProffy(db, {proffyValue, classValue, classScheduleValues})

    
    
    //Check datas
    //All proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectedProffys)


    //Consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
    `)
    //console.log(selectedClassesAndProffys)



    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedules)
})