const User = require('./User');
const Job = require('./Job');
const Application = require('./Application');

const getSampleUser = () => {

    const sampleUser = new User({

        autoSubmit: true,
        email: 'alice@example.com',
        firstName: 'Alice',
        middleName: 'J.',
        lastName: 'Smith',
        preferredName: 'Ali',
        phoneNumber: '+14165551234',
        
        city: 'Toronto',
        state: 'Ontario',
        country: 'Canada',
        zipCode: 'M5H 2N2',
        
        education: [
            {
            school: 'University of Toronto',
            degree: 'B.Sc.',
            major: 'Computer Science',
            startDate: new Date('2019-09-01'),
            endDate: new Date('2023-06-01'),
            gpa: 3.85
            }
        ],
        
        experience: [
            {
            company: 'TechNova',
            title: 'Software Intern',
            description: 'Built internal tooling for the developer team using Node.js and MongoDB.',
            location: 'Remote',
            startDate: new Date('2022-05-01'),
            endDate: new Date('2022-08-31')
            },
            {
            company: 'QuickApps',
            title: 'Junior Web Developer',
            description: 'Maintained and updated React-based frontend for e-commerce clients.',
            location: 'Toronto, Canada',
            startDate: new Date('2023-07-01'),
            endDate: new Date('2024-01-01')
            }
        ],
        
        skills: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'Python'],
        
        resumeUrl: 'https://firebase.storage.com/resumes/alice_resume.pdf',
        linkedInUrl: 'https://linkedin.com/in/alice-smith',
        githubUrl: 'https://github.com/alicesmith',
        portfolioUrl: 'https://alice.dev',
        
        visaRequired: {
            canada: false,
            usa: true
        },
        
        preferences: {
            jobTypes: ['internship', 'new grad'],
            locations: ['Remote', 'Toronto', 'San Francisco'],
            minSalary: 65000,
            notificationEmail: true
        }

    });

    return sampleUser;
}

const getSampleJob = () => {

    const sampleJob = new Job({
        title: 'Software Engineer Intern',
        company: 'TechCorp',
        location: 'Remote',
        jobDescription: 'Join our team as a Software Engineer Intern and work on exciting projects.',
        jobType: 'Internship',
        url: "https://nakisa.com/career-opportunities/?gh_jid=4408067101&gh_src=7401e9fd5us&utm_source=LinkedIn&src=93c4f47a1us&sourceId=71e38eb1-8e6a-4615-8d04-25c35063217a&mode=job&iis=Job%2BBoard&iisn=LinkedIn&source=LinkedIn",
        platform: 'LinkedIn',
        applicationUrl: "https://nakisa.com/career-opportunities/?gh_jid=4408067101&gh_src=7401e9fd5us&utm_source=LinkedIn&src=93c4f47a1us&sourceId=71e38eb1-8e6a-4615-8d04-25c35063217a&mode=job&iis=Job%2BBoard&iisn=LinkedIn&source=LinkedIn",
        applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        postDate: new Date(),
        hash: '1234567890abcdefg'
    })

    return sampleJob;
}

module.exports = {
    getSampleUser,
    getSampleJob
}