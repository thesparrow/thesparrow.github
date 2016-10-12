bio = {
    name: "Anna Shilova",
    role: "Software Engineer",
    contacts: {
        mobile: "3238782583",
        email: "annaDev@gmail.com",
        github: "github/thesparrow",
        twitter: "",
        location: "Los Angeles"
    },
    welcomeMessage: "Welcome to my journey as a developer. I'm currently working in the South Bay, Los Angeles California.",
    skills: ["JavaScript", "C#", "C#MVC", "jQuery", "Adobe Photoshop", "HTML/HTML 5", "Test Driven Development"],
    biopic: "images/biopic.jpg",
    display: function() {}
};

education = {
    schools: [{
        name: "UCSD",
        location: "La Jolla",
        degree: "Bachelor of Science, Computer Science",
        major: "Computer Science",
        minor: "Biology",
        datesAttended: "2009-2013",
        url: "https://ucsd.edu/"
    }],
    onlineCourses: [{
            school: "Pluralsight",
            title: "HTML 5 Advanced Topics",
            dates: "August 2016",
            url: "https://www.pluralsight.com/courses/html5-advanced",
            display: function() {}

        }, {
            school: "Pluralsight",
            title: "Mobile First Responsive Web Design",
            dates: "August 2016",
            url: "https://www.pluralsight.com/courses/mobile-first-responsive-web-design",
            display: function() {}

        }, {
            school: "Pluralsight",
            title: "ASP.NET MVC 5 Fundamentals",
            dates: "June 2016",
            url: "https://www.pluralsight.com/courses/aspdotnet-mvc5-fundamentals",
            display: function() {}

        }, {
            school: "Udacity",
            title: "Udacity Fullstack Web Developer",
            dates: "August 2016 - October 2016",
            url: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004",
            display: function() {}
        }, {
            school: "Udemy",
            title: "The Complete ASP.NET MVC 5 Course",
            dates: "June 2016 - July 2016",
            url: "https://www.udemy.com/the-complete-aspnet-mvc-5-course/",
            display: function() {}
        },

    ]
};

work = {
    jobs: [{
        employer: "Mitchell International",
        title: "Software Development Engineer",
        location: "San Diego",
        dates: "November 2013 - May 2016",
        description: "Worked on the fullstack in an enterprise application. Created a framework for automation testing.",
        display: function() {}
    }, {
        employer: "ViaSat",
        title: "Software Engineer",
        location: "Carlsbad",
        dates: "June 2010 - September 2010",
        description: "Worked as a software engineer on gis/mapping part of an enterprise application.",
        display: function() {}
    }, {
        employer: "UCSD",
        title: "Web Engineer",
        location: "La Jolla",
        dates: "June 2010 - September 2010",
        description: "Worked on a building a disater relief website. From markup to full functioning features.",
        display: function() {}
    }]
};

projects = {
    projects: [{
        title: "Information Haiti",
        dates: "June 2010 - January 2013",
        description: "Information network for Haiti disater relief. Create a heat map of local goods and services.",
        images: ["images/haitiProject.png"],
        display: function() {}
    }, {
        title: "Music Store",
        dates: "June 2016 - August 2016",
        description: "MVC framework built music store. Has memmbership and basic database connectivity.",
        images: ["images/haitiProject.png"],
        display: function() {}
    }]
};


//generate the header information
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);


//skills 

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

//contact info 
for (var i = 0; i < formattedContactInfo.length; i++) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}

//Education 
education.display = function() {


    var formattedSchoolInfo = [];

    //walk through all the schools
    for (var i = 0; i < education.schools.length; i++) {

        //create div for each school entry
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        //create a div for online education
        if (education.onlineCourses.length > 0) {
            //create a header 
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                //$(".education-entry:last").append(formattedOnlineURL);
            }

        }

    }
}

education.display();


//employment 
work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

work.display();


//projects 
projects.display = function() {

    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            console.log("WE are in projects'");
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

projects.display();
