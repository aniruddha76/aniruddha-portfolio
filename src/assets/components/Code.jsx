import { CodeBlock, dracula } from 'react-code-blocks';

function MyCodeBlock({ code, language, showLineNumbers }) {
  return (
    <CodeBlock
      text={`var aboutMe = function () {
    let name = 'Aniruddha Ravindra Thakur'
    let dateOfBirth = 372002
    let email = 'aniruddhathakur76@gmail.com'

    let workExperience = [
        {
            company: 'HPCL Mumbai Refinery',
            mode: 'Onsite',
            role: 'Frontend Developer Intern',
            duration: 'june 2023 - july 2023'
        },
        {
            company: 'Kotak Education Foundation',
            mode: 'Onsite',
            role: 'IT Engineer',
            duration: 'December 2022 - January 2023'
        }
    ]

    let Education = [
        {
            degree: 'Bachelor of Engineering in Information Technology',
            institution: 'University of Mumbai',
            college: 'Bharati Vidyapeeth College of Engineering, Navi Mumbai',
            year: 2024
        },
        {
            degree: 'Diploma in Computer Engineering',
            institution: 'Maharashtra State Board of Technical Education',
            college: 'Vivekanand Education Society Polytechnic, Chembur',
            year: 2021
        }
    ]

    let skills = ['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Express.js', 'Discord.js', 'Electron', 'Git', 'GitHub', 'Vercel', 'Wordpress', 'Figma', 'Canva']
}`}
      language={"javascript"}
      showLineNumbers={true}
      theme={dracula}
    />
  );
}

export default MyCodeBlock;