// Translations
const translations = {
    ru: {
        nav: {
            home: "Главная",
            about: "О себе",
            skills: "Навыки",
            projects: "Проекты",
            contact: "Контакты"
        },
        hero: {
            greeting: "Привет, я",
            role: "Разработчик",
            years: "лет",
            developer: "Разработчик",
            creator: "Создатель кода",
            contact: "Связаться",
            skills: "Мои навыки",
            projects: "Проектов",
            hours: "Часов кода",
            ideas: "Идей"
        },
        about: {
            label: "О себе",
            title: "Кто я такой",
            text1: "Привет! Я <span class='highlight'>Руслан</span>, но друзья зовут меня <span class='highlight'>Сусиком</span> или просто <span class='highlight'>Сус</span>. Мне 15 лет, и я увлечен программированием.",
            text2: "Пишу код, создаю проекты и постоянно учусь чему-то новому. Каждая строка кода — это шаг к чему-то большему.",
            text3: "Люблю экспериментировать с новыми технологиями и создавать что-то уникальное. Мой подход — это сочетание креативности и технических навыков.",
            text4: "Я основатель компании <span class='highlight'>StarCO</span> — мы создаем инновационные решения для игрового сообщества и веб-разработки.",
            text5: "Для разработки использую <span class='highlight'>Kiro IDE</span> — современную среду разработки с AI-ассистентом, которая помогает писать код быстрее и эффективнее.",
            badge1: "Веб-разработка",
            badge2: "Быстрое обучение",
            badge3: "Инновации",
            badge4: "Kiro IDE",
            stat1: "Лет",
            stat2: "Идей",
            stat3: "Код"
        },
        company: {
            label: "Компания",
            description: "Моя компания, где мы создаем инновационные проекты для игрового сообщества и веб-разработки",
            starworld: "Игровой мир с уникальными возможностями и сообществом",
            stargames: "Коллекция увлекательных игр и развлечений для всех",
            starhost: "Профессиональный хостинг серверов для игр и приложений",
            visit: "Посетить",
            join: "Присоединяйся к нашему сообществу",
            joinText: "Следи за новостями и обновлениями в нашем Telegram канале",
            telegram: "Telegram канал"
        },
        team: {
            label: "Команда",
            description: "Наш игровой клан, где собрались лучшие игроки и друзья",
            owner: "Овнер",
            owner1: "Овнер 1",
            owner2: "Овнер 2",
            owner3: "Овнер 3",
            deputyOwner: "Зам.Овнер",
            seniorAdmin: "Ст.Админ",
            member: "Участник",
            memberRole: "Участник",
            legend: "Legenda",
            sys: "Основатель и разработчик",
            sent: "Главный овнер клана",
            linka: "Совладелец клана",
            patapin: "Активный игрок команды",
            matvey: "Заместитель владельца",
            razor: "Старший администратор",
            devide: "Активный участник команды",
            walter: "Легендарный участник",
            members: "Участников",
            victories: "Побед",
            active: "Активность"
        },
        skills: {
            label: "Навыки",
            title: "Что я умею",
            technical: "Технические",
            soft: "Личные",
            tools: "Инструменты",
            html: "Семантическая верстка, Flexbox, Grid, анимации",
            js: "ES6+, DOM манипуляции, асинхронность",
            responsive: "Адаптивный дизайн",
            responsiveDesc: "Mobile-first подход, кроссбраузерность",
            design: "дизайн",
            designDesc: "Прототипирование, пользовательский опыт",
            learning: "Быстрое обучение",
            learningDesc: "Легко осваиваю новые технологии и фреймворки",
            creativity: "Креативность",
            creativityDesc: "Нестандартный подход к решению задач",
            attention: "Внимание к деталям",
            attentionDesc: "Забочусь о качестве и чистоте кода",
            motivation: "Самомотивация",
            motivationDesc: "Постоянно развиваюсь и учусь новому"
        },
        projects: {
            label: "Проекты",
            title: "Мои работы",
            view: "Посмотреть",
            visit: "Посетить сайт",
            tags: {
                hosting: "Хостинг",
                servers: "Серверы",
                management: "Управление",
                plugin: "Плагин",
                auth: "Авторизация",
                integration: "Интеграция"
            },
            starhost: {
                desc: "Профессиональный хостинг серверов для игр и приложений. Удобная панель управления, высокая производительность и надежность. Поддержка различных игровых серверов и веб-приложений.",
                feature1: "Панель управления",
                feature2: "Высокая производительность",
                feature3: "24/7 Поддержка"
            },
            veloauth: {
                desc: "Мощный плагин авторизации для Minecraft серверов на платформе Velocity. Обеспечивает безопасность игроков с современными методами шифрования и защиты данных.",
                feature1: "Безопасная авторизация",
                feature2: "Шифрование данных",
                feature3: "Настраиваемый"
            },
            api: {
                desc: "API плагин для интеграции с VeloAuth System. Позволяет разработчикам легко интегрировать систему авторизации в свои плагины и расширения.",
                feature1: "Простая интеграция",
                feature2: "Документация",
                feature3: "Расширяемый"
            }
        },
        contact: {
            label: "Контакты",
            title: "Давайте работать вместе",
            text: "Открыт для новых проектов и интересных предложений",
            cta: "Готов к сотрудничеству?",
            ctaText: "Свяжись со мной через любой удобный способ",
            telegram: "Написать в Telegram",
            github: "GitHub профиль"
        },
        footer: {
            made: "Сделано с",
            ide: "Разработано в"
        },
        mods: {
            title: "Мои Моды для Minecraft",
            subtitle: "Премиум контент",
            enternal: "Продвинутая система моделей для Minecraft",
            skinster: "Кастомизация скинов и персонажей",
            download: "Скачать мод",
            note: "💎 Эксклюзивные моды от Сусика",
            sectionLabel: "MINECRAFT МОДЫ",
            sectionTitle: "Мои Моды",
            enternalDesc: "Хоррор мод для Minecraft с жуткими моделями и атмосферой. Добавляет пугающие существа и события!",
            skinsterDesc: "Мод для установки скинов в оффлайн аккаунтах Minecraft. Играй с любым скином без премиум аккаунта!",
            feature1: "Хоррор модели",
            feature2: "Жуткие существа",
            feature3: "Атмосфера ужаса",
            feature4: "Оффлайн скины",
            feature5: "Без премиума",
            feature6: "Легкая установка",
            downloadBtn: "СКАЧАТЬ МОД",
            infoTitle: "Эксклюзивный контент",
            infoText: "Моды созданы специально для улучшения игрового опыта"
        },
        personal: {
            label: "Личное",
            title: "Мой мир",
            timeWeather: "Время и Погода",
            myMusic: "Моя Музыка",
            loadingWeather: "Загрузка погоды...",
            stats: "Статистика",
            visits: "Посещений",
            online: "Онлайн",
            tracksPlayed: "Треков прослушано"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            role: "Developer",
            years: "years old",
            developer: "Developer",
            creator: "Code Creator",
            contact: "Contact Me",
            skills: "My Skills",
            projects: "Projects",
            hours: "Hours of Code",
            ideas: "Ideas"
        },
        about: {
            label: "About",
            title: "Who I Am",
            text1: "Hi! I'm <span class='highlight'>Ruslan</span>, but friends call me <span class='highlight'>Susik</span> or just <span class='highlight'>Sus</span>. I'm 15 years old and passionate about programming.",
            text2: "I write code, create projects, and constantly learn something new. Every line of code is a step towards something greater.",
            text3: "I love experimenting with new technologies and creating something unique. My approach combines creativity and technical skills.",
            text4: "I'm the founder of <span class='highlight'>StarCO</span> — we create innovative solutions for the gaming community and web development.",
            text5: "For development, I use <span class='highlight'>Kiro IDE</span> — a modern development environment with an AI assistant that helps write code faster and more efficiently.",
            badge1: "Web Development",
            badge2: "Fast Learning",
            badge3: "Innovation",
            badge4: "Kiro IDE",
            stat1: "Years",
            stat2: "Ideas",
            stat3: "Code"
        },
        company: {
            label: "Company",
            description: "My company where we create innovative projects for the gaming community and web development",
            starworld: "Gaming world with unique features and community",
            stargames: "Collection of exciting games and entertainment for everyone",
            starhost: "Professional server hosting for games and applications",
            visit: "Visit",
            join: "Join Our Community",
            joinText: "Follow news and updates on our Telegram channel",
            telegram: "Telegram Channel"
        },
        team: {
            label: "Team",
            description: "Our gaming clan where the best players and friends gathered",
            owner: "Owner",
            owner1: "Owner 1",
            owner2: "Owner 2",
            owner3: "Owner 3",
            deputyOwner: "Deputy Owner",
            seniorAdmin: "Senior Admin",
            member: "Member",
            memberRole: "Member",
            legend: "Legenda",
            sys: "Founder and Developer",
            sent: "Main clan owner",
            linka: "Co-owner of the clan",
            patapin: "Active team player",
            matvey: "Deputy owner",
            razor: "Senior administrator",
            devide: "Active team member",
            walter: "Legendary member",
            members: "Members",
            victories: "Victories",
            active: "Activity"
        },
        skills: {
            label: "Skills",
            title: "What I Do",
            technical: "Technical",
            soft: "Soft",
            tools: "Tools",
            html: "Semantic markup, Flexbox, Grid, animations",
            js: "ES6+, DOM manipulation, async",
            responsive: "Responsive Design",
            responsiveDesc: "Mobile-first approach, cross-browser",
            design: "design",
            designDesc: "Prototyping, user experience",
            learning: "Fast Learning",
            learningDesc: "Easily master new technologies and frameworks",
            creativity: "Creativity",
            creativityDesc: "Non-standard approach to problem solving",
            attention: "Attention to Detail",
            attentionDesc: "Care about code quality and cleanliness",
            motivation: "Self-Motivation",
            motivationDesc: "Constantly developing and learning new things"
        },
        projects: {
            label: "Projects",
            title: "My Work",
            view: "View",
            visit: "Visit Website",
            tags: {
                hosting: "Hosting",
                servers: "Servers",
                management: "Management",
                plugin: "Plugin",
                auth: "Auth",
                integration: "Integration"
            },
            starhost: {
                desc: "Professional server hosting for games and applications. Convenient control panel, high performance and reliability. Support for various game servers and web applications.",
                feature1: "Control Panel",
                feature2: "High Performance",
                feature3: "24/7 Support"
            },
            veloauth: {
                desc: "Powerful authentication plugin for Minecraft servers on Velocity platform. Ensures player security with modern encryption and data protection methods.",
                feature1: "Secure Authentication",
                feature2: "Data Encryption",
                feature3: "Customizable"
            },
            api: {
                desc: "API plugin for integration with VeloAuth System. Allows developers to easily integrate the authentication system into their plugins and extensions.",
                feature1: "Easy Integration",
                feature2: "Documentation",
                feature3: "Extensible"
            }
        },
        contact: {
            label: "Contact",
            title: "Let's Work Together",
            text: "Open for new projects and interesting offers",
            cta: "Ready to Collaborate?",
            ctaText: "Contact me through any convenient way",
            telegram: "Message on Telegram",
            github: "GitHub Profile"
        },
        footer: {
            made: "Made with",
            ide: "Built with"
        },
        mods: {
            title: "My Minecraft Mods",
            subtitle: "Premium Content",
            enternal: "Advanced model system for Minecraft",
            skinster: "Skin and character customization",
            download: "Download Mod",
            note: "💎 Exclusive mods by Susik",
            sectionLabel: "MINECRAFT MODS",
            sectionTitle: "My Mods",
            enternalDesc: "Horror mod for Minecraft with creepy models and atmosphere. Adds scary creatures and events!",
            skinsterDesc: "Mod for installing skins on offline Minecraft accounts. Play with any skin without premium!",
            feature1: "Horror Models",
            feature2: "Scary Creatures",
            feature3: "Horror Atmosphere",
            feature4: "Offline Skins",
            feature5: "No Premium",
            feature6: "Easy Install",
            downloadBtn: "DOWNLOAD MOD",
            infoTitle: "Exclusive Content",
            infoText: "Mods created specifically to enhance the gaming experience"
        },
        personal: {
            label: "Personal",
            title: "My World",
            timeWeather: "Time & Weather",
            myMusic: "My Music",
            loadingWeather: "Loading weather...",
            stats: "Statistics",
            visits: "Visits",
            online: "Online",
            tracksPlayed: "Tracks Played"
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            greeting: "Hola, soy",
            role: "Desarrollador",
            years: "años",
            developer: "Desarrollador",
            creator: "Creador de Código",
            contact: "Contactar",
            skills: "Mis Habilidades",
            projects: "Proyectos",
            hours: "Horas de Código",
            ideas: "Ideas"
        },
        about: {
            label: "Sobre mí",
            title: "Quién Soy",
            text1: "¡Hola! Soy <span class='highlight'>Ruslan</span>, pero mis amigos me llaman <span class='highlight'>Susik</span> o simplemente <span class='highlight'>Sus</span>. Tengo 15 años y me apasiona la programación.",
            text2: "Escribo código, creo proyectos y aprendo constantemente algo nuevo. Cada línea de código es un paso hacia algo más grande.",
            text3: "Me encanta experimentar con nuevas tecnologías y crear algo único. Mi enfoque combina creatividad y habilidades técnicas.",
            text4: "Soy el fundador de <span class='highlight'>StarCO</span> — creamos soluciones innovadoras para la comunidad de juegos y desarrollo web.",
            badge1: "Desarrollo Web",
            badge2: "Aprendizaje Rápido",
            badge3: "Innovación",
            stat1: "Años",
            stat2: "Ideas",
            stat3: "Código"
        },
        company: {
            label: "Empresa",
            description: "Mi empresa donde creamos proyectos innovadores para la comunidad de juegos y desarrollo web",
            starworld: "Mundo de juegos con características únicas y comunidad",
            stargames: "Colección de juegos emocionantes y entretenimiento para todos",
            starhost: "Alojamiento profesional de servidores para juegos y aplicaciones",
            visit: "Visitar",
            join: "Únete a Nuestra Comunidad",
            joinText: "Sigue las noticias y actualizaciones en nuestro canal de Telegram",
            telegram: "Canal de Telegram"
        },
        skills: {
            label: "Habilidades",
            title: "Lo Que Hago",
            technical: "Técnicas",
            soft: "Personales",
            tools: "Herramientas",
            html: "Marcado semántico, Flexbox, Grid, animaciones",
            js: "ES6+, manipulación DOM, asíncrono",
            responsive: "Diseño Adaptable",
            responsiveDesc: "Enfoque mobile-first, compatibilidad",
            design: "diseño",
            designDesc: "Prototipado, experiencia de usuario",
            learning: "Aprendizaje Rápido",
            learningDesc: "Domino fácilmente nuevas tecnologías y frameworks",
            creativity: "Creatividad",
            creativityDesc: "Enfoque no estándar para resolver problemas",
            attention: "Atención al Detalle",
            attentionDesc: "Me preocupo por la calidad y limpieza del código",
            motivation: "Automotivación",
            motivationDesc: "Desarrollo constante y aprendizaje de cosas nuevas"
        },
        projects: {
            label: "Proyectos",
            title: "Mi Trabajo",
            view: "Ver",
            visit: "Visitar Sitio",
            tags: {
                hosting: "Alojamiento",
                servers: "Servidores",
                management: "Gestión",
                plugin: "Plugin",
                auth: "Autenticación",
                integration: "Integración"
            },
            starhost: {
                desc: "Alojamiento profesional de servidores para juegos y aplicaciones. Panel de control conveniente, alto rendimiento y confiabilidad. Soporte para varios servidores de juegos y aplicaciones web.",
                feature1: "Panel de Control",
                feature2: "Alto Rendimiento",
                feature3: "Soporte 24/7"
            },
            veloauth: {
                desc: "Potente plugin de autenticación para servidores Minecraft en plataforma Velocity. Garantiza la seguridad de los jugadores con métodos modernos de cifrado y protección de datos.",
                feature1: "Autenticación Segura",
                feature2: "Cifrado de Datos",
                feature3: "Personalizable"
            },
            api: {
                desc: "Plugin API para integración con VeloAuth System. Permite a los desarrolladores integrar fácilmente el sistema de autenticación en sus plugins y extensiones.",
                feature1: "Integración Fácil",
                feature2: "Documentación",
                feature3: "Extensible"
            }
        },
        contact: {
            label: "Contacto",
            title: "Trabajemos Juntos",
            text: "Abierto a nuevos proyectos y ofertas interesantes",
            cta: "¿Listo para Colaborar?",
            ctaText: "Contáctame de cualquier manera conveniente",
            telegram: "Mensaje en Telegram",
            github: "Perfil de GitHub"
        },
        footer: {
            made: "Hecho con"
        },
        mods: {
            title: "Mis Mods de Minecraft",
            subtitle: "Contenido Premium",
            enternal: "Sistema avanzado de modelos para Minecraft",
            skinster: "Personalización de skins y personajes",
            download: "Descargar Mod",
            note: "💎 Mods exclusivos de Susik",
            sectionLabel: "MODS DE MINECRAFT",
            sectionTitle: "Mis Mods",
            enternalDesc: "Mod de horror para Minecraft con modelos espeluznantes y atmósfera. ¡Añade criaturas aterradoras y eventos!",
            skinsterDesc: "Mod para instalar skins en cuentas offline de Minecraft. ¡Juega con cualquier skin sin premium!",
            feature1: "Modelos de Horror",
            feature2: "Criaturas Aterradoras",
            feature3: "Atmósfera de Terror",
            feature4: "Skins Offline",
            feature5: "Sin Premium",
            feature6: "Instalación Fácil",
            downloadBtn: "DESCARGAR MOD",
            infoTitle: "Contenido Exclusivo",
            infoText: "Mods creados específicamente para mejorar la experiencia de juego"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über mich",
            skills: "Fähigkeiten",
            projects: "Projekte",
            contact: "Kontakt"
        },
        hero: {
            greeting: "Hallo, ich bin",
            role: "Entwickler",
            years: "Jahre alt",
            developer: "Entwickler",
            creator: "Code-Ersteller",
            contact: "Kontakt",
            skills: "Meine Fähigkeiten",
            projects: "Projekte",
            hours: "Stunden Code",
            ideas: "Ideen"
        },
        about: {
            label: "Über mich",
            title: "Wer Ich Bin",
            text1: "Hallo! Ich bin <span class='highlight'>Ruslan</span>, aber Freunde nennen mich <span class='highlight'>Susik</span> oder einfach <span class='highlight'>Sus</span>. Ich bin 15 Jahre alt und begeistert vom Programmieren.",
            text2: "Ich schreibe Code, erstelle Projekte und lerne ständig etwas Neues. Jede Codezeile ist ein Schritt zu etwas Größerem.",
            text3: "Ich liebe es, mit neuen Technologien zu experimentieren und etwas Einzigartiges zu schaffen. Mein Ansatz kombiniert Kreativität und technische Fähigkeiten.",
            badge1: "Webentwicklung",
            badge2: "Schnelles Lernen",
            badge3: "Innovation",
            stat1: "Jahre",
            stat2: "Ideen",
            stat3: "Code"
        },
        skills: {
            label: "Fähigkeiten",
            title: "Was Ich Mache",
            technical: "Technisch",
            soft: "Persönlich",
            tools: "Werkzeuge",
            html: "Semantisches Markup, Flexbox, Grid, Animationen",
            js: "ES6+, DOM-Manipulation, asynchron",
            responsive: "Responsives Design",
            responsiveDesc: "Mobile-First-Ansatz, browserübergreifend",
            design: "Design",
            designDesc: "Prototyping, Benutzererfahrung",
            learning: "Schnelles Lernen",
            learningDesc: "Beherrsche leicht neue Technologien und Frameworks",
            creativity: "Kreativität",
            creativityDesc: "Nicht-standardisierter Ansatz zur Problemlösung",
            attention: "Liebe zum Detail",
            attentionDesc: "Achte auf Codequalität und Sauberkeit",
            motivation: "Selbstmotivation",
            motivationDesc: "Entwickle mich ständig weiter und lerne Neues"
        },
        projects: {
            label: "Projekte",
            title: "Meine Arbeit",
            view: "Ansehen",
            visit: "Website Besuchen",
            tags: {
                hosting: "Hosting",
                servers: "Server",
                management: "Verwaltung",
                plugin: "Plugin",
                auth: "Authentifizierung",
                integration: "Integration"
            },
            starhost: {
                desc: "Professionelles Server-Hosting für Spiele und Anwendungen. Bequemes Kontrollpanel, hohe Leistung und Zuverlässigkeit. Unterstützung für verschiedene Spielserver und Webanwendungen.",
                feature1: "Kontrollpanel",
                feature2: "Hohe Leistung",
                feature3: "24/7 Support"
            },
            veloauth: {
                desc: "Leistungsstarkes Authentifizierungs-Plugin für Minecraft-Server auf Velocity-Plattform. Gewährleistet Spielersicherheit mit modernen Verschlüsselungs- und Datenschutzmethoden.",
                feature1: "Sichere Authentifizierung",
                feature2: "Datenverschlüsselung",
                feature3: "Anpassbar"
            },
            api: {
                desc: "API-Plugin zur Integration mit VeloAuth System. Ermöglicht Entwicklern die einfache Integration des Authentifizierungssystems in ihre Plugins und Erweiterungen.",
                feature1: "Einfache Integration",
                feature2: "Dokumentation",
                feature3: "Erweiterbar"
            }
        },
        contact: {
            label: "Kontakt",
            title: "Lass Uns Zusammenarbeiten",
            text: "Offen für neue Projekte und interessante Angebote",
            cta: "Bereit zur Zusammenarbeit?",
            ctaText: "Kontaktiere mich auf bequeme Weise",
            telegram: "Nachricht auf Telegram",
            github: "GitHub-Profil"
        },
        footer: {
            made: "Gemacht mit"
        },
        mods: {
            title: "Meine Minecraft-Mods",
            subtitle: "Premium-Inhalt",
            enternal: "Fortgeschrittenes Modellsystem für Minecraft",
            skinster: "Skin- und Charakteranpassung",
            download: "Mod Herunterladen",
            note: "💎 Exklusive Mods von Susik",
            sectionLabel: "MINECRAFT-MODS",
            sectionTitle: "Meine Mods",
            enternalDesc: "Horror-Mod für Minecraft mit gruseligen Modellen und Atmosphäre. Fügt erschreckende Kreaturen und Ereignisse hinzu!",
            skinsterDesc: "Mod zum Installieren von Skins auf Offline-Minecraft-Konten. Spiele mit jedem Skin ohne Premium!",
            feature1: "Horror-Modelle",
            feature2: "Gruselige Kreaturen",
            feature3: "Horror-Atmosphäre",
            feature4: "Offline-Skins",
            feature5: "Kein Premium",
            feature6: "Einfache Installation",
            downloadBtn: "MOD HERUNTERLADEN",
            infoTitle: "Exklusiver Inhalt",
            infoText: "Mods speziell entwickelt, um das Spielerlebnis zu verbessern"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            greeting: "Salut, je suis",
            role: "Développeur",
            years: "ans",
            developer: "Développeur",
            creator: "Créateur de Code",
            contact: "Me Contacter",
            skills: "Mes Compétences",
            projects: "Projets",
            hours: "Heures de Code",
            ideas: "Idées"
        },
        about: {
            label: "À propos",
            title: "Qui Je Suis",
            text1: "Salut! Je suis <span class='highlight'>Ruslan</span>, mais mes amis m'appellent <span class='highlight'>Susik</span> ou simplement <span class='highlight'>Sus</span>. J'ai 15 ans et je suis passionné par la programmation.",
            text2: "J'écris du code, crée des projets et apprends constamment quelque chose de nouveau. Chaque ligne de code est un pas vers quelque chose de plus grand.",
            text3: "J'aime expérimenter avec de nouvelles technologies et créer quelque chose d'unique. Mon approche combine créativité et compétences techniques.",
            badge1: "Développement Web",
            badge2: "Apprentissage Rapide",
            badge3: "Innovation",
            stat1: "Ans",
            stat2: "Idées",
            stat3: "Code"
        },
        skills: {
            label: "Compétences",
            title: "Ce Que Je Fais",
            technical: "Techniques",
            soft: "Personnelles",
            tools: "Outils",
            html: "Balisage sémantique, Flexbox, Grid, animations",
            js: "ES6+, manipulation DOM, asynchrone",
            responsive: "Design Responsive",
            responsiveDesc: "Approche mobile-first, multi-navigateurs",
            design: "design",
            designDesc: "Prototypage, expérience utilisateur",
            learning: "Apprentissage Rapide",
            learningDesc: "Maîtrise facilement les nouvelles technologies et frameworks",
            creativity: "Créativité",
            creativityDesc: "Approche non standard de la résolution de problèmes",
            attention: "Attention aux Détails",
            attentionDesc: "Souci de la qualité et de la propreté du code",
            motivation: "Auto-Motivation",
            motivationDesc: "Développement constant et apprentissage de nouvelles choses"
        },
        projects: {
            label: "Projets",
            title: "Mon Travail",
            view: "Voir",
            visit: "Visiter le Site",
            tags: {
                hosting: "Hébergement",
                servers: "Serveurs",
                management: "Gestion",
                plugin: "Plugin",
                auth: "Authentification",
                integration: "Intégration"
            },
            starhost: {
                desc: "Hébergement professionnel de serveurs pour jeux et applications. Panneau de contrôle pratique, haute performance et fiabilité. Support pour divers serveurs de jeux et applications web.",
                feature1: "Panneau de Contrôle",
                feature2: "Haute Performance",
                feature3: "Support 24/7"
            },
            veloauth: {
                desc: "Plugin d'authentification puissant pour serveurs Minecraft sur plateforme Velocity. Assure la sécurité des joueurs avec des méthodes modernes de cryptage et de protection des données.",
                feature1: "Authentification Sécurisée",
                feature2: "Cryptage des Données",
                feature3: "Personnalisable"
            },
            api: {
                desc: "Plugin API pour l'intégration avec VeloAuth System. Permet aux développeurs d'intégrer facilement le système d'authentification dans leurs plugins et extensions.",
                feature1: "Intégration Facile",
                feature2: "Documentation",
                feature3: "Extensible"
            }
        },
        contact: {
            label: "Contact",
            title: "Travaillons Ensemble",
            text: "Ouvert aux nouveaux projets et offres intéressantes",
            cta: "Prêt à Collaborer?",
            ctaText: "Contactez-moi de manière pratique",
            telegram: "Message sur Telegram",
            github: "Profil GitHub"
        },
        footer: {
            made: "Fait avec"
        },
        mods: {
            title: "Mes Mods Minecraft",
            subtitle: "Contenu Premium",
            enternal: "Système de modèles avancé pour Minecraft",
            skinster: "Personnalisation des skins et personnages",
            download: "Télécharger le Mod",
            note: "💎 Mods exclusifs de Susik",
            sectionLabel: "MODS MINECRAFT",
            sectionTitle: "Mes Mods",
            enternalDesc: "Mod d'horreur pour Minecraft avec des modèles effrayants et une atmosphère. Ajoute des créatures terrifiantes et des événements!",
            skinsterDesc: "Mod pour installer des skins sur des comptes Minecraft hors ligne. Jouez avec n'importe quel skin sans premium!",
            feature1: "Modèles d'Horreur",
            feature2: "Créatures Effrayantes",
            feature3: "Atmosphère d'Horreur",
            feature4: "Skins Hors Ligne",
            feature5: "Sans Premium",
            feature6: "Installation Facile",
            downloadBtn: "TÉLÉCHARGER LE MOD",
            infoTitle: "Contenu Exclusif",
            infoText: "Mods créés spécifiquement pour améliorer l'expérience de jeu"
        }
    },
    it: {
        nav: {
            home: "Home",
            about: "Chi sono",
            skills: "Competenze",
            projects: "Progetti",
            contact: "Contatti"
        },
        hero: {
            greeting: "Ciao, sono",
            role: "Sviluppatore",
            years: "anni",
            developer: "Sviluppatore",
            creator: "Creatore di Codice",
            contact: "Contattami",
            skills: "Le Mie Competenze",
            projects: "Progetti",
            hours: "Ore di Codice",
            ideas: "Idee"
        },
        about: {
            label: "Chi sono",
            title: "Chi Sono",
            text1: "Ciao! Sono <span class='highlight'>Ruslan</span>, ma gli amici mi chiamano <span class='highlight'>Susik</span> o semplicemente <span class='highlight'>Sus</span>. Ho 15 anni e sono appassionato di programmazione.",
            text2: "Scrivo codice, creo progetti e imparo costantemente qualcosa di nuovo. Ogni riga di codice è un passo verso qualcosa di più grande.",
            text3: "Amo sperimentare con nuove tecnologie e creare qualcosa di unico. Il mio approccio combina creatività e competenze tecniche.",
            badge1: "Sviluppo Web",
            badge2: "Apprendimento Rapido",
            badge3: "Innovazione",
            stat1: "Anni",
            stat2: "Idee",
            stat3: "Codice"
        },
        skills: {
            label: "Competenze",
            title: "Cosa Faccio",
            technical: "Tecniche",
            soft: "Personali",
            tools: "Strumenti",
            html: "Markup semantico, Flexbox, Grid, animazioni",
            js: "ES6+, manipolazione DOM, asincrono",
            responsive: "Design Responsive",
            responsiveDesc: "Approccio mobile-first, cross-browser",
            design: "design",
            designDesc: "Prototipazione, esperienza utente",
            learning: "Apprendimento Rapido",
            learningDesc: "Padroneggio facile di nuove tecnologie e framework",
            creativity: "Creatività",
            creativityDesc: "Approccio non standard alla risoluzione dei problemi",
            attention: "Attenzione ai Dettagli",
            attentionDesc: "Cura della qualità e pulizia del codice",
            motivation: "Automotivazione",
            motivationDesc: "Sviluppo costante e apprendimento di cose nuove"
        },
        projects: {
            label: "Progetti",
            title: "Il Mio Lavoro",
            view: "Visualizza",
            visit: "Visita il Sito",
            tags: {
                hosting: "Hosting",
                servers: "Server",
                management: "Gestione",
                plugin: "Plugin",
                auth: "Autenticazione",
                integration: "Integrazione"
            },
            starhost: {
                desc: "Hosting professionale di server per giochi e applicazioni. Pannello di controllo conveniente, alte prestazioni e affidabilità. Supporto per vari server di gioco e applicazioni web.",
                feature1: "Pannello di Controllo",
                feature2: "Alte Prestazioni",
                feature3: "Supporto 24/7"
            },
            veloauth: {
                desc: "Potente plugin di autenticazione per server Minecraft su piattaforma Velocity. Garantisce la sicurezza dei giocatori con moderni metodi di crittografia e protezione dei dati.",
                feature1: "Autenticazione Sicura",
                feature2: "Crittografia Dati",
                feature3: "Personalizzabile"
            },
            api: {
                desc: "Plugin API per l'integrazione con VeloAuth System. Consente agli sviluppatori di integrare facilmente il sistema di autenticazione nei loro plugin ed estensioni.",
                feature1: "Integrazione Facile",
                feature2: "Documentazione",
                feature3: "Estensibile"
            }
        },
        contact: {
            label: "Contatti",
            title: "Lavoriamo Insieme",
            text: "Aperto a nuovi progetti e offerte interessanti",
            cta: "Pronto a Collaborare?",
            ctaText: "Contattami in modo conveniente",
            telegram: "Messaggio su Telegram",
            github: "Profilo GitHub"
        },
        footer: {
            made: "Fatto con"
        }
    },
    pt: {
        nav: {
            home: "Início",
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            greeting: "Oi, eu sou",
            role: "Desenvolvedor",
            years: "anos",
            developer: "Desenvolvedor",
            creator: "Criador de Código",
            contact: "Contato",
            skills: "Minhas Habilidades",
            projects: "Projetos",
            hours: "Horas de Código",
            ideas: "Ideias"
        },
        about: {
            label: "Sobre",
            title: "Quem Eu Sou",
            text1: "Oi! Eu sou <span class='highlight'>Ruslan</span>, mas amigos me chamam de <span class='highlight'>Susik</span> ou apenas <span class='highlight'>Sus</span>. Tenho 15 anos e sou apaixonado por programação.",
            text2: "Escrevo código, crio projetos e aprendo constantemente algo novo. Cada linha de código é um passo em direção a algo maior.",
            text3: "Adoro experimentar novas tecnologias e criar algo único. Minha abordagem combina criatividade e habilidades técnicas.",
            badge1: "Desenvolvimento Web",
            badge2: "Aprendizado Rápido",
            badge3: "Inovação",
            stat1: "Anos",
            stat2: "Ideias",
            stat3: "Código"
        },
        skills: {
            label: "Habilidades",
            title: "O Que Eu Faço",
            technical: "Técnicas",
            soft: "Pessoais",
            tools: "Ferramentas"
        },
        projects: {
            label: "Projetos",
            title: "Meu Trabalho",
            view: "Ver"
        },
        contact: {
            label: "Contato",
            title: "Vamos Trabalhar Juntos",
            text: "Aberto para novos projetos e ofertas interessantes",
            cta: "Pronto para Colaborar?",
            ctaText: "Entre em contato de forma conveniente",
            telegram: "Mensagem no Telegram",
            github: "Perfil do GitHub"
        },
        footer: {
            made: "Feito com"
        }
    },
    zh: {
        nav: {
            home: "首页",
            about: "关于",
            skills: "技能",
            projects: "项目",
            contact: "联系"
        },
        hero: {
            greeting: "你好，我是",
            role: "开发者",
            years: "岁",
            developer: "开发者",
            creator: "代码创造者",
            contact: "联系我",
            skills: "我的技能",
            projects: "项目",
            hours: "编码时间",
            ideas: "想法"
        },
        about: {
            label: "关于",
            title: "我是谁",
            text1: "你好！我是 <span class='highlight'>Ruslan</span>，但朋友们叫我 <span class='highlight'>Susik</span> 或 <span class='highlight'>Sus</span>。我15岁，热爱编程。",
            text2: "我编写代码，创建项目，不断学习新东西。每一行代码都是迈向更大目标的一步。",
            text3: "我喜欢尝试新技术，创造独特的东西。我的方法结合了创造力和技术技能。",
            badge1: "网页开发",
            badge2: "快速学习",
            badge3: "创新",
            stat1: "年",
            stat2: "想法",
            stat3: "代码"
        },
        skills: {
            label: "技能",
            title: "我的能力",
            technical: "技术",
            soft: "软技能",
            tools: "工具"
        },
        projects: {
            label: "项目",
            title: "我的作品",
            view: "查看"
        },
        contact: {
            label: "联系",
            title: "让我们一起工作",
            text: "欢迎新项目和有趣的提议",
            cta: "准备好合作了吗？",
            ctaText: "通过任何方便的方式联系我",
            telegram: "Telegram消息",
            github: "GitHub资料"
        },
        footer: {
            made: "用心制作"
        }
    },
    ja: {
        nav: {
            home: "ホーム",
            about: "私について",
            skills: "スキル",
            projects: "プロジェクト",
            contact: "お問い合わせ"
        },
        hero: {
            greeting: "こんにちは、私は",
            role: "開発者",
            years: "歳",
            developer: "開発者",
            creator: "コードクリエイター",
            contact: "お問い合わせ",
            skills: "私のスキル",
            projects: "プロジェクト",
            hours: "コーディング時間",
            ideas: "アイデア"
        },
        about: {
            label: "私について",
            title: "私は誰ですか",
            text1: "こんにちは！私は <span class='highlight'>Ruslan</span> ですが、友達は <span class='highlight'>Susik</span> または <span class='highlight'>Sus</span> と呼びます。15歳でプログラミングに情熱を持っています。",
            text2: "コードを書き、プロジェクトを作成し、常に新しいことを学んでいます。すべてのコード行は、より大きなものへの一歩です。",
            text3: "新しい技術を試し、ユニークなものを作ることが大好きです。私のアプローチは創造性と技術スキルを組み合わせています。",
            badge1: "ウェブ開発",
            badge2: "速習",
            badge3: "イノベーション",
            stat1: "年",
            stat2: "アイデア",
            stat3: "コード"
        },
        skills: {
            label: "スキル",
            title: "私ができること",
            technical: "技術的",
            soft: "ソフト",
            tools: "ツール"
        },
        projects: {
            label: "プロジェクト",
            title: "私の作品",
            view: "表示"
        },
        contact: {
            label: "お問い合わせ",
            title: "一緒に働きましょう",
            text: "新しいプロジェクトと興味深い提案を歓迎します",
            cta: "コラボレーションの準備はできていますか？",
            ctaText: "便利な方法でお問い合わせください",
            telegram: "Telegramでメッセージ",
            github: "GitHubプロフィール"
        },
        footer: {
            made: "愛を込めて作成"
        }
    },
    ko: {
        nav: {
            home: "홈",
            about: "소개",
            skills: "기술",
            projects: "프로젝트",
            contact: "연락처"
        },
        hero: {
            greeting: "안녕하세요, 저는",
            role: "개발자",
            years: "세",
            developer: "개발자",
            creator: "코드 크리에이터",
            contact: "연락하기",
            skills: "내 기술",
            projects: "프로젝트",
            hours: "코딩 시간",
            ideas: "아이디어"
        },
        about: {
            label: "소개",
            title: "나는 누구인가",
            text1: "안녕하세요! 저는 <span class='highlight'>Ruslan</span>이지만 친구들은 <span class='highlight'>Susik</span> 또는 <span class='highlight'>Sus</span>라고 부릅니다. 15세이며 프로그래밍에 열정적입니다.",
            text2: "코드를 작성하고 프로젝트를 만들며 끊임없이 새로운 것을 배웁니다. 모든 코드 라인은 더 큰 것을 향한 한 걸음입니다.",
            text3: "새로운 기술을 실험하고 독특한 것을 만드는 것을 좋아합니다. 제 접근 방식은 창의성과 기술 능력을 결합합니다.",
            badge1: "웹 개발",
            badge2: "빠른 학습",
            badge3: "혁신",
            stat1: "년",
            stat2: "아이디어",
            stat3: "코드"
        },
        skills: {
            label: "기술",
            title: "내가 하는 일",
            technical: "기술적",
            soft: "소프트",
            tools: "도구"
        },
        projects: {
            label: "프로젝트",
            title: "내 작업",
            view: "보기"
        },
        contact: {
            label: "연락처",
            title: "함께 일합시다",
            text: "새로운 프로젝트와 흥미로운 제안을 환영합니다",
            cta: "협업할 준비가 되셨나요?",
            ctaText: "편리한 방법으로 연락하세요",
            telegram: "Telegram 메시지",
            github: "GitHub 프로필"
        },
        footer: {
            made: "사랑으로 제작"
        }
    }
};

// Language Manager
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ru';
    }
    
    init() {
        // Ждем полной загрузки DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.updateLanguage(this.currentLang);
                this.updateLangButton();
            });
        } else {
            this.updateLanguage(this.currentLang);
            this.updateLangButton();
        }
    }
    
    updateLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        const elements = document.querySelectorAll('[data-i18n]');
        console.log(`Найдено элементов для перевода: ${elements.length}`);
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];
            
            for (const k of keys) {
                value = value?.[k];
            }
            
            if (value) {
                // Сохраняем HTML теги если они есть
                if (value.includes('<')) {
                    el.innerHTML = value;
                } else {
                    el.textContent = value;
                }
                console.log(`Переведено: ${key} = ${value}`);
            } else {
                console.warn(`Перевод не найден для: ${key} (язык: ${lang})`);
            }
        });
        
        // Обновляем placeholder для форм
        this.updateFormPlaceholders(lang);
        
        this.updateLangButton();
    }
    
    updateFormPlaceholders(lang) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        if (nameInput && translations[lang]?.contact?.name) {
            nameInput.setAttribute('placeholder', ' ');
        }
        if (emailInput && translations[lang]?.contact?.email) {
            emailInput.setAttribute('placeholder', ' ');
        }
        if (messageInput && translations[lang]?.contact?.message) {
            messageInput.setAttribute('placeholder', ' ');
        }
    }
    
    updateLangButton() {
        const langMap = {
            ru: 'RU',
            en: 'EN',
            es: 'ES',
            de: 'DE',
            fr: 'FR',
            it: 'IT',
            pt: 'PT',
            zh: 'ZH',
            ja: 'JA',
            ko: 'KO'
        };
        
        const currentLangEl = document.getElementById('currentLang');
        if (currentLangEl) {
            currentLangEl.textContent = langMap[this.currentLang];
        }
    }
}

// Initialize language manager
const langManager = new LanguageManager();
langManager.init();
