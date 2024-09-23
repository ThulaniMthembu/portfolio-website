import { Book, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
      
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <Book className="w-8 h-8 mr-4" />
          <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
        </div>
        <p className="mb-4">
          I specialize in building complete websites from scratch, focusing on maintainability and user experience. My expertise includes:
        </p>
        <ul className="list-disc list-inside mb-4 grid grid-cols-2 gap-2">
          <li>HTML, CSS, and JavaScript</li>
          <li>React and Redux</li>
          <li>Next.js and TypeScript</li>
          <li>Bootstrap and Tailwind CSS</li>
          <li>Sass for advanced styling</li>
          <li>EmailJS for client communication systems</li>
        </ul>
        <p>
          I&apos;m actively enhancing my skills through participation in LeetCode challenges and personal projects, including a cake shop website and an e-commerce platform.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex items-center mb-4">
          <Award className="w-8 h-8 mr-4" />
          <h2 className="text-2xl font-semibold">Certifications</h2>
        </div>
        <ul className="space-y-2">
          <li>
            <span className="font-semibold">Responsive Web Design</span> - FreeCodeCamp
          </li>
          <li>
            <span className="font-semibold">JavaScript Algorithms and Data Structures</span> - FreeCodeCamp
          </li>
          <li>
            <span className="font-semibold">Front End Development Libraries</span> - FreeCodeCamp
          </li>
        </ul>
      </div>

      <div>
        <div className="flex items-center mb-4">
          <TrendingUp className="w-8 h-8 mr-4" />
          <h2 className="text-2xl font-semibold">Continuous Learning</h2>
        </div>
        <p>
          I&apos;m passionate about staying up-to-date with the latest web development trends and technologies. Through continuous learning and practice, I strive to deliver cutting-edge solutions to my clients and contribute effectively to any development team.
        </p>
      </div>
    </div>
  );
}
