import serviço_1 from "../assets/img/serviços/serviço_1.jpg"
import serviço_2 from "../assets/img/serviços/serviço_2.jpg"
import serviço_3 from "../assets/img/serviços/serviço_3.png"
import serviço_4 from "../assets/img/serviços/serviço_4.jpg"

export const services = [
    {
        title: "Desenvolvimento Web Fullstack",
        description: "Criação de aplicações web escaláveis com arquiteturas modernas usando React, Laravel, Django, Node.js, APIs RESTful e GraphQL.",
        icon: "🌐", 
        image: serviço_1, 
        rating: 5
    },
    {
        title: "Desenvolvimento Mobile",
        description: "Desenvolvimento de aplicativos móveis multiplataforma com React Native e Swift/SwiftUI, com interfaces responsivas e integração de APIs.",
        icon: "📱",
        image: serviço_2, 
        rating: 4.5
    },
    {
        title: "IA Generativa & Automação",
        description: "Pesquisa e implementação de soluções com LLMs (GPT, Gemini, DeepSeek), técnicas de RAG e Fine-tuning para automação de processos complexos.",
        icon: "🤖",
        image: serviço_3, 
        rating: 4.5
    },
    {
        title: "Infraestrutura & DevOps",
        description: "Containerização com Docker, gerenciamento de ambientes de desenvolvimento e produção, deploy e CI/CD.",
        icon: "⚙️",
        image: serviço_4,
        rating: 4
    }
];