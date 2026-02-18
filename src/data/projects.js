import ConstructManage from "../assets/img/projetos/ConstrucManager.png";
import habitrack from "../assets/img/projetos/habitrack.jpg";
import PollenVision from "../assets/img/projetos/PollenVision.png";
import Tradutor from "../assets/img/projetos/Tradutor.png";
import CiebRedação from "../assets/img/projetos/Cieb.jpg";
import OdontoLogin from "../assets/img/projetos/OdontoLogin.png";
import RedaMais from "../assets/img/projetos/RedaMais.jpg";
import RedaMaisBanner from "../assets/img/projetos/RedaMaisBanner.png";
import SGR from "../assets/img/projetos/SGR.jpeg";
import AgricountBanner from "../assets/img/projetos/AgricountBanner.png";

// Placeholder: substitua por imagens reais quando disponíveis
const agricountPlaceholder = AgricountBanner;
const redaPlaceholder = RedaMaisBanner;
const dentalPlaceholder = OdontoLogin;
const sgrPlaceholder = SGR;

export const projects = [
  {
    "title": "SGR — Sistema de Gerenciamento de Reservas",
    "category": "Aplicação Web Fullstack",
    "image": sgrPlaceholder,
    "description": "Sistema institucional desenvolvido para o STI da UNIVASF. Gerenciamento completo de reservas de espaços e recursos da universidade, com painel administrativo, calendário interativo, autenticação integrada e API GraphQL.",
    "type": "Aplicativo Web",
    "languages": "Laravel, React, GraphQL, Docker, PostgreSQL",
    "platform": "Desktop, Mobile",
    "country": "Brasil",
    "url": "Não pode ser divulgado"
  },
  {
    "title": "Reda+",
    "category": "IA Generativa & Educação",
    "image": redaPlaceholder,
    "description": "Assistente de estudos com IA para correção instantânea de redações ENEM. O aluno tira foto da folha e recebe feedback detalhado nas 5 competências oficiais do INEP. Utiliza LLMs (GPT, Gemini) para análise.",
    "type": "Aplicativo Mobile & Web",
    "languages": "React Native, Django, LLMs, Python",
    "platform": "Android (Play Store), iOS (em breve)",
    "country": "Brasil",
    "url": "https://redamais.com.br"
  },
  {
    "title": "AgriCount",
    "category": "IA & Agronegócio",
    "image": agricountPlaceholder,
    "description": "Solução de Visão Computacional e IA para gestão de pomares de manga. Contagem automatizada de frutos via câmera, gestão de safras, estimativa de produção em toneladas/caixas, dashboard de produtividade e funcionamento offline.",
    "type": "Aplicativo Mobile",
    "languages": "React Native, Swift, Python, YOLO, Django",
    "platform": "iOS, Android",
    "country": "Brasil",
    "url": "Não pode ser divulgado"
  },
  {
    "title": "ConstrucManager",
    "category": "Aplicações Web",
    "image": ConstructManage,
    "description": "Sistema completo de gestão de estoque e vendas para construção civil. Cadastro de produtos, fornecedores e clientes, controle de vendas diárias e gerenciamento de estoque.",
    "type": "Aplicativo Web",
    "languages": "Django, React, Python",
    "platform": "Web",
    "country": "Brasil",
    "url": "https://github.com/Hebert-code/ConstrucManager.git"
  },
  {
    "title": "Sistema Odontológico",
    "category": "Aplicações Web",
    "image": dentalPlaceholder,
    "description": "Sistema de gestão para clínica odontológica desenvolvido como freelancer. Controle de pacientes, agendamento de consultas, prontuário eletrônico e gestão financeira da clínica.",
    "type": "Aplicativo Web",
    "languages": "Django, Bootstrap, JavaScript, MySQL",
    "platform": "Web",
    "country": "Brasil",
    "url": "Não pode ser divulgado"
  },
  {
    "title": "HabiTrack",
    "category": "Aplicações Móveis",
    "image": habitrack,
    "description": "Aplicativo de monitoramento de hábitos desenvolvido em SwiftUI durante o programa Hacktrunk. Registro de metas e hábitos, gerenciamento de progresso, relatórios e insights sobre desempenho pessoal.",
    "type": "Aplicativo Mobile",
    "languages": "SwiftUI, Swift, Node-Red, Cloudant",
    "platform": "iOS",
    "country": "Brasil",
    "url": "https://github.com/Hebert-code/habitrack"
  },
  {
    "title": "PollenVision",
    "category": "IA & Visão Computacional",
    "image": PollenVision,
    "description": "Plataforma de análise de viabilidade de pólen com IA e visão computacional. Dados precisos para tomada de decisão em processos agrícolas e ambientais.",
    "type": "Aplicativo Web",
    "languages": "Django, Python, YOLO, JavaScript",
    "platform": "Desktop, Mobile",
    "country": "Brasil",
    "url": "Não pode ser divulgado"
  },
  {
    "title": "Cieb-Redação",
    "category": "IA Generativa",
    "image": CiebRedação,
    "description": "Aplicativo desenvolvido para escolas como parte de um projeto de bolsa de pesquisa. Correção automática de redações do ENEM com LLMs, integrando Deepseek, ChatGPT, Gemini e Maritaca para feedback preciso e detalhado.",
    "type": "Aplicativo Web",
    "languages": "Django, Bootstrap, JavaScript, LLMs",
    "platform": "Desktop, Mobile",
    "country": "Brasil",
    "url": "Não pode ser divulgado"
  },
];