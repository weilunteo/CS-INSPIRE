import rocket from '../assets/rocket.svg';
import read from '../assets/read.svg';
import heart from '../assets/heart.svg';
import jay from '../assets/jay.jpeg'
import tom from '../assets/tom.jpeg'
import monica from '../assets/monica.jpeg'


export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "testimonials",
      title: "Testimonials",
    },

    {
      id: "get-started",
      title: "Get Started",
    },
    
];


export const feedback = [
    {
      id: "feedback-1",
      content:
        "An extremely valuable tool. It helped me uncover hidden biases and challenged my preconceived notions. I appreciate how user-friendly and interactive the app is, making it easy to engage with the content.",
      name: "Maverick",
      title: "HR Director",
      img: tom,
    },
    {
      id: "feedback-2",
      content:
        "This platform guided me through a self-reflection process and provided valuable insights into the biases I may hold. The clear and concise explanations helped me understand the impact of biases on decision-making.",
      name: "Coyote",
      title: "HR Analyst",
      img: jay,
    },
    {
      id: "feedback-3",
      content:
        "This app exceeded my expectations! It offered a well-designed platform to explore and confront my biases in a non-judgmental way. Definitely appreciate the personalized feedback and recommendations for further learning.",
      name: "Phoenix",
      title: "HR Specialist",
      img: monica,
    },
];


export const features = [
    {
        id: 'feature-1',
        icon: rocket,
        title: 'Personalized Toolkits',
        content: 'Customized resources to understand biases and develop an inclusive mindset.'
    },
    {
        id: 'feature-2',
        icon: read,
        title: 'Interactive Exploration',
        content: 'Personalized reading suggestions to deepen knowledge on unconscious biases.'
    },
    {
        id: 'feature-3',
        icon: heart,
        title: 'Discussion Platform',
        content: 'Community-driven discussions for sharing experiences and fostering inclusive dialogue.'
    },

];
