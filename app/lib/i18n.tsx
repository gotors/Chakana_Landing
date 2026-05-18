"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "es" | "en";

const translations = {
  es: {
    // Header nav
    nav: {
      howItWorks: "Cómo funciona",
      join: "Sumarse",
      contact: "Contacto",
      langSwitch: "EN",
    },
    // Hero
    hero: {
      stamp: "· CUENCA, ECUADOR ·",
      headline1: "Aquí tu ",
      headlineAccent: "apoyo",
      headline2: " vuelve.",
      lede: "Un ecosistema de economía circular para el barrio: lo que ya no usas encuentra un próximo lugar, lo que necesitas regresa por manos cercanas.",
      reactivating: "Reactivando la Atenas",
    },
    // TechStrip
    techStrip: {
      poweredBy: "IMPULSADO POR",
    },
    // HowItWorks
    howItWorks: {
      eyebrow: "02 · CÓMO FUNCIONA",
      title: "El ciclo que reactiva el barrio.",
      steps: [
        {
          eyebrow: "CONSUME",
          title: "Consume en un Tambu",
          body: "Visita un local participante y paga con la app. Tu apoyo queda registrado de forma inmutable.",
        },
        {
          eyebrow: "APORTA",
          title: "Deja tu reseña",
          body: "Comparte tu experiencia. Cada reseña auténtica aporta valor al barrio y queda grabada de forma permanente.",
        },
        {
          eyebrow: "CIRCULA",
          title: "Gana Aurios, circula más",
          body: "Recibes Aurios — el crédito del barrio — que puedes usar para descuentos en tu próxima visita. El ciclo continúa.",
        },
      ],
    },
    // Download
    download: {
      eyebrow: "03 · DESCARGA",
      title: "Empieza a circular desde tu bolsillo.",
      lede: "Descarga la app de Chakana ahora mismo. Escanea el código QR o toca el botón para instalar.",
      qrLabel: "Escanea para descargar",
      downloadCta: "Descargar APK",
      downloadHint: "Android · versión beta",
      appStoreSoon: "(próximamente)",
    },
    // Footer
    footer: {
      tagline: "Ecosistema de Economía Circular",
      rights: "Todos los derechos reservados.",
      terms: "Términos",
      privacy: "Privacidad",
    },
    // Contact page
    contact: {
      eyebrow: "Contacto · Chakana",
      title: "Hablemos.",
      lede: "¿Quieres ser embajador, sumar tu tambú o simplemente saber más? Escríbenos.",
      labels: {
        email: "Correo",
        instagram: "Instagram",
        twitter: "X / Twitter",
        whatsapp: "WhatsApp",
      },
    },
    // Terms page
    terms: {
      eyebrow: "Legal · Chakana",
      title: "Términos de Servicio",
      updated: "Última actualización: 9 de mayo de 2026",
      intro: "Estos Términos de Servicio regulan el uso de Chakana, plataforma digital operada por Gavanti, enfocada en economía circular, reseñas verificables y beneficios para comunidades locales. Al acceder, registrarte o utilizar Chakana, aceptas estos términos.",
      sections: [
        {
          title: "1. Descripción del servicio y aceptación",
          content: [
            "Chakana permite que embajadores y tambús interactúen mediante perfiles de usuario, reseñas, recompensas en Aurios, integraciones con infraestructura blockchain (Solana) y herramientas complementarias como reportes de voz y servicios de pago.",
            "Si no estás de acuerdo con estos términos, debes dejar de usar la plataforma. Chakana puede actualizar estos términos y notificará cambios materiales por medios razonables dentro del servicio.",
          ],
        },
        {
          title: "2. Cuentas de usuario y responsabilidades",
          items: [
            "Debes proporcionar datos veraces, completos y actualizados al crear una cuenta.",
            "Eres responsable de la seguridad de tus credenciales y de cualquier actividad realizada con tu cuenta.",
            "Eres responsable de la custodia de tu wallet y claves privadas; Chakana no almacena ni recupera llaves privadas.",
            "No puedes usar la plataforma para fraude, suplantación, lavado de activos, manipulación de reseñas o actividades ilícitas.",
          ],
        },
        {
          title: "3. Pagos, compras y política de reembolsos",
          content: [
            "Chakana puede habilitar pagos mediante Stripe para compras, órdenes o servicios vinculados a la plataforma. Al pagar, autorizas el cobro correspondiente en los medios habilitados por Stripe.",
            "Los reembolsos se gestionan caso por caso según naturaleza del producto/servicio, estado de la orden, evidencia de cobro y políticas aplicables de protección al consumidor en Ecuador. Cuando proceda, el reembolso se procesará por el mismo canal de pago utilizado originalmente, sujeto a tiempos del emisor, adquirente y Stripe.",
          ],
        },
        {
          title: "4. Divulgación de riesgos cripto y blockchain",
          items: [
            "Las transacciones blockchain son irreversibles en la mayoría de casos.",
            "Los activos digitales pueden presentar volatilidad y riesgos tecnológicos, regulatorios y operativos.",
            "Pueden existir comisiones de red, congestión y demoras fuera del control de Chakana.",
            "La información de Chakana no constituye asesoría financiera, de inversión, legal ni tributaria. Cada usuario asume sus decisiones y riesgos.",
          ],
        },
        {
          title: "5. Propiedad intelectual",
          content: [
            "Chakana, su marca, diseño, software, textos, contenidos, lógica de producto y elementos distintivos son propiedad de Gavanti o se usan bajo licencia. No se permite copiar, reproducir, descompilar, distribuir o crear obras derivadas sin autorización previa por escrito.",
          ],
        },
        {
          title: "6. Servicios de terceros y marcas",
          content: [
            "Chakana depende de servicios de terceros para operar funcionalidades específicas. El uso de esos servicios puede estar sujeto además a términos y políticas de sus respectivos proveedores.",
            "Stripe, Solana, Vercel, ElevenLabs y Dev3pack son marcas de sus respectivos titulares. Su mención en Chakana es únicamente descriptiva y no implica patrocinio ni afiliación exclusiva.",
          ],
        },
        {
          title: "7. Limitación de responsabilidad",
          content: [
            "En la máxima medida permitida por la ley, Gavanti y Chakana no serán responsables por daños indirectos, incidentales, especiales, consecuenciales o lucro cesante derivados del uso o imposibilidad de uso del servicio, incluyendo interrupciones, fallas de terceros, eventos de red blockchain, pérdida de acceso a wallet, o errores de datos no atribuibles a dolo o culpa grave de Gavanti.",
          ],
        },
        {
          title: "8. Suspensión y terminación",
          content: [
            "Chakana podrá suspender o cerrar cuentas por incumplimiento de estos términos, uso abusivo, riesgos de seguridad o requerimiento legal. También puedes dejar de usar la plataforma en cualquier momento.",
          ],
        },
        {
          title: "9. Ley aplicable y jurisdicción",
          content: [
            "Estos términos se rigen por las leyes de la República del Ecuador. Cualquier controversia se someterá a la jurisdicción competente en Ecuador, sin perjuicio de mecanismos de resolución amistosa o alterna cuando proceda.",
          ],
        },
        {
          title: "10. Contacto",
          content: ["Para consultas legales, soporte o reclamos relacionados con estos términos, escríbenos a: "],
          email: "support@gavanti.org",
        },
      ],
    },
    // Privacy page
    privacy: {
      eyebrow: "Legal · Chakana",
      title: "Política de Privacidad",
      updated: "Última actualización: 9 de mayo de 2026",
      intro: "Esta Política de Privacidad explica cómo Gavanti, operador de Chakana, recopila, usa, conserva y protege datos personales cuando usas la plataforma.",
      sections: [
        {
          title: "1. Qué datos recopilamos",
          items: [
            "Datos de cuenta: correo electrónico, nombre visible, rol/perfil y credenciales de acceso.",
            "Datos de perfil: información que agregues en tu cuenta o en tu tambú.",
            "Datos Web3: direcciones públicas de wallet y metadatos de transacciones asociadas al uso del servicio.",
            "Datos de reseñas y contenido: textos enviados, sellos de tiempo y registros técnicos vinculados.",
            "Datos de pago: información de cobro gestionada por Stripe (identificadores de cliente/pago, estado de transacción y metadatos de orden). Chakana no almacena números completos de tarjeta.",
            "Datos técnicos: logs, eventos de uso, datos de dispositivo, cookies y analítica básica.",
          ],
        },
        {
          title: "2. Cómo usamos tus datos",
          items: [
            "Crear y administrar cuentas, autenticación y seguridad de sesión.",
            "Prestar funcionalidades centrales (reseñas, recompensas, reportes y operación de tambús).",
            "Procesar pagos, conciliaciones y prevención de fraude.",
            "Mejorar producto, calidad del servicio y soporte al usuario.",
            "Cumplir obligaciones legales, regulatorias y de seguridad.",
          ],
        },
        {
          title: "3. Bases de procesamiento y consentimiento",
          content: [
            "Tratamos datos cuando es necesario para ejecutar la relación contractual de uso de Chakana, para cumplir obligaciones legales, para intereses legítimos de operación y seguridad, y/o con tu consentimiento cuando corresponda.",
          ],
        },
        {
          title: "4. Encargados y terceros procesadores",
          content: [
            "Podemos compartir datos con proveedores necesarios para la operación del servicio, entre ellos:",
          ],
          items: [
            "Stripe para procesamiento de pagos.",
            "Supabase para autenticación, base de datos, almacenamiento y funciones backend.",
            "Proveedores de correo para notificaciones transaccionales y comunicaciones de servicio.",
            "Servicios de infraestructura y blockchain para operación técnica y verificación de eventos.",
          ],
          closing: "Exigimos medidas contractuales y técnicas razonables de seguridad a nuestros proveedores, pero cada tercero opera bajo sus propias políticas de privacidad.",
        },
        {
          title: "5. Retención, acceso y eliminación",
          content: [
            "Conservamos los datos solo por el tiempo necesario para los fines descritos, y por periodos adicionales cuando la ley lo exija (por ejemplo, temas contables, fiscales o de seguridad).",
            "Puedes solicitar acceso, rectificación, actualización o eliminación de tus datos personales. Cuando exista obligación legal o técnica de conservar ciertos registros (por ejemplo, trazas contables o referencias públicas on-chain), limitaremos el tratamiento según corresponda.",
          ],
        },
        {
          title: "6. Comunicaciones y cumplimiento CAN-SPAM / GDPR",
          items: [
            "Los correos promocionales incluirán mecanismos de baja (unsubscribe) claros y funcionales.",
            "Atendemos solicitudes de oposición al marketing directo y preferencias de comunicación.",
            "Para usuarios en jurisdicciones aplicables, respetamos derechos equivalentes a GDPR: acceso, rectificación, supresión, limitación, portabilidad y oposición.",
          ],
        },
        {
          title: "7. Cookies y analítica",
          content: [
            "Usamos cookies y tecnologías similares para autenticación, funcionamiento de sesión, preferencias de usuario, seguridad y métricas de uso. Puedes gestionar cookies desde la configuración de tu navegador o dispositivo, teniendo en cuenta que deshabilitarlas puede afectar funcionalidades del servicio.",
          ],
        },
        {
          title: "8. Seguridad de la información",
          content: [
            "Aplicamos medidas administrativas, técnicas y organizativas razonables para proteger datos personales. Aun así, ningún sistema es totalmente infalible; por ello recomendamos usar contraseñas robustas, mantener tus credenciales seguras y proteger tu wallet.",
          ],
        },
        {
          title: "9. Transferencias internacionales",
          content: [
            "Algunos proveedores pueden procesar datos fuera de Ecuador. En esos casos, procuramos salvaguardas adecuadas y estándares razonables de protección de datos.",
          ],
        },
        {
          title: "10. Menores de edad",
          content: [
            "Chakana no está dirigido a menores sin supervisión legal aplicable. Si identificamos tratamiento indebido de datos de menores, tomaremos medidas de bloqueo o eliminación.",
          ],
        },
        {
          title: "11. Cambios a esta política",
          content: [
            "Podemos actualizar esta política para reflejar cambios legales, técnicos o de producto. Publicaremos la versión vigente con su fecha de actualización.",
          ],
        },
        {
          title: "12. Contacto para solicitudes de datos",
          content: ["Para ejercer tus derechos de privacidad, consultas o solicitudes de eliminación, contáctanos en: "],
          email: "support@gavanti.org",
        },
      ],
    },
  },

  en: {
    nav: {
      howItWorks: "How it works",
      join: "Join",
      contact: "Contact",
      langSwitch: "ES",
    },
    hero: {
      stamp: "· CUENCA, ECUADOR ·",
      headline1: "Here your ",
      headlineAccent: "support",
      headline2: " comes back.",
      lede: "A circular economy ecosystem for the neighborhood: what you no longer use finds a new home, what you need returns through nearby hands.",
      reactivating: "Reactivating la Atenas",
    },
    techStrip: {
      poweredBy: "POWERED BY",
    },
    howItWorks: {
      eyebrow: "02 · HOW IT WORKS",
      title: "The cycle that reactivates the neighborhood.",
      steps: [
        {
          eyebrow: "CONSUME",
          title: "Shop at a Tambu",
          body: "Visit a participating local and pay with the app. Your support is recorded immutably.",
        },
        {
          eyebrow: "CONTRIBUTE",
          title: "Leave your review",
          body: "Share your experience. Every authentic review adds value to the neighborhood and is recorded permanently.",
        },
        {
          eyebrow: "CIRCULATE",
          title: "Earn Aurios, keep circulating",
          body: "You receive Aurios — the neighborhood credit — that you can use for discounts on your next visit. The cycle continues.",
        },
      ],
    },
    download: {
      eyebrow: "03 · DOWNLOAD",
      title: "Start circulating from your pocket.",
      lede: "Download the Chakana app right now. Scan the QR code or tap the button to install.",
      qrLabel: "Scan to download",
      downloadCta: "Download APK",
      downloadHint: "Android · beta version",
      appStoreSoon: "(coming soon)",
    },
    footer: {
      tagline: "Circular Economy Ecosystem",
      rights: "All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
    },
    contact: {
      eyebrow: "Contact · Chakana",
      title: "Let's talk.",
      lede: "Want to become an ambassador, add your tambú, or just learn more? Reach out.",
      labels: {
        email: "Email",
        instagram: "Instagram",
        twitter: "X / Twitter",
        whatsapp: "WhatsApp",
      },
    },
    terms: {
      eyebrow: "Legal · Chakana",
      title: "Terms of Service",
      updated: "Last updated: May 9, 2026",
      intro: "These Terms of Service govern the use of Chakana, a digital platform operated by Gavanti, focused on circular economy, verifiable reviews and benefits for local communities. By accessing, registering or using Chakana, you accept these terms.",
      sections: [
        {
          title: "1. Service description and acceptance",
          content: [
            "Chakana enables ambassadors and tambús to interact through user profiles, reviews, Aurios rewards, integrations with blockchain infrastructure (Solana), and complementary tools such as voice reports and payment services.",
            "If you disagree with these terms, you must stop using the platform. Chakana may update these terms and will notify of material changes through reasonable means within the service.",
          ],
        },
        {
          title: "2. User accounts and responsibilities",
          items: [
            "You must provide truthful, complete and up-to-date information when creating an account.",
            "You are responsible for the security of your credentials and any activity carried out with your account.",
            "You are responsible for the custody of your wallet and private keys; Chakana does not store or recover private keys.",
            "You may not use the platform for fraud, impersonation, money laundering, review manipulation or illegal activities.",
          ],
        },
        {
          title: "3. Payments, purchases and refund policy",
          content: [
            "Chakana may enable payments through Stripe for purchases, orders or services linked to the platform. By paying, you authorize the corresponding charge through the means enabled by Stripe.",
            "Refunds are managed on a case-by-case basis according to the nature of the product/service, order status, payment evidence and applicable consumer protection policies in Ecuador. Where applicable, the refund will be processed through the same payment channel originally used, subject to the timing of the issuer, acquirer and Stripe.",
          ],
        },
        {
          title: "4. Crypto and blockchain risk disclosure",
          items: [
            "Blockchain transactions are irreversible in most cases.",
            "Digital assets may present volatility and technological, regulatory and operational risks.",
            "Network fees, congestion and delays outside Chakana's control may occur.",
            "Chakana's information does not constitute financial, investment, legal or tax advice. Each user assumes their own decisions and risks.",
          ],
        },
        {
          title: "5. Intellectual property",
          content: [
            "Chakana, its brand, design, software, texts, content, product logic and distinctive elements are the property of Gavanti or are used under license. Copying, reproducing, decompiling, distributing or creating derivative works without prior written authorization is not permitted.",
          ],
        },
        {
          title: "6. Third-party services and brands",
          content: [
            "Chakana relies on third-party services to operate specific functionalities. The use of those services may also be subject to the terms and policies of their respective providers.",
            "Stripe, Solana, Vercel, ElevenLabs and Dev3pack are trademarks of their respective owners. Their mention in Chakana is descriptive only and does not imply sponsorship or exclusive affiliation.",
          ],
        },
        {
          title: "7. Limitation of liability",
          content: [
            "To the maximum extent permitted by law, Gavanti and Chakana shall not be liable for indirect, incidental, special, consequential damages or lost profits arising from the use or inability to use the service, including interruptions, third-party failures, blockchain network events, loss of wallet access, or data errors not attributable to willful misconduct or gross negligence by Gavanti.",
          ],
        },
        {
          title: "8. Suspension and termination",
          content: [
            "Chakana may suspend or close accounts for breach of these terms, abusive use, security risks or legal requirement. You may also stop using the platform at any time.",
          ],
        },
        {
          title: "9. Applicable law and jurisdiction",
          content: [
            "These terms are governed by the laws of the Republic of Ecuador. Any dispute shall be submitted to the competent jurisdiction in Ecuador, without prejudice to friendly or alternative resolution mechanisms where applicable.",
          ],
        },
        {
          title: "10. Contact",
          content: ["For legal inquiries, support or claims related to these terms, contact us at: "],
          email: "support@gavanti.org",
        },
      ],
    },
    privacy: {
      eyebrow: "Legal · Chakana",
      title: "Privacy Policy",
      updated: "Last updated: May 9, 2026",
      intro: "This Privacy Policy explains how Gavanti, operator of Chakana, collects, uses, retains and protects personal data when you use the platform.",
      sections: [
        {
          title: "1. What data we collect",
          items: [
            "Account data: email address, display name, role/profile and access credentials.",
            "Profile data: information you add to your account or tambú.",
            "Web3 data: public wallet addresses and transaction metadata associated with use of the service.",
            "Review and content data: submitted texts, timestamps and linked technical records.",
            "Payment data: billing information managed by Stripe (customer/payment identifiers, transaction status and order metadata). Chakana does not store full card numbers.",
            "Technical data: logs, usage events, device data, cookies and basic analytics.",
          ],
        },
        {
          title: "2. How we use your data",
          items: [
            "Create and manage accounts, authentication and session security.",
            "Provide core functionalities (reviews, rewards, reports and tambú operations).",
            "Process payments, reconciliations and fraud prevention.",
            "Improve the product, service quality and user support.",
            "Comply with legal, regulatory and security obligations.",
          ],
        },
        {
          title: "3. Legal bases and consent",
          content: [
            "We process data when necessary to perform the contractual relationship for using Chakana, to comply with legal obligations, for legitimate operational and security interests, and/or with your consent where applicable.",
          ],
        },
        {
          title: "4. Processors and third parties",
          content: [
            "We may share data with providers necessary for operating the service, including:",
          ],
          items: [
            "Stripe for payment processing.",
            "Supabase for authentication, database, storage and backend functions.",
            "Email providers for transactional notifications and service communications.",
            "Infrastructure and blockchain services for technical operation and event verification.",
          ],
          closing: "We require reasonable contractual and technical security measures from our providers, but each third party operates under its own privacy policies.",
        },
        {
          title: "5. Retention, access and deletion",
          content: [
            "We retain data only for as long as necessary for the purposes described, and for additional periods when required by law (e.g., accounting, tax or security matters).",
            "You may request access, rectification, update or deletion of your personal data. Where there is a legal or technical obligation to retain certain records (e.g., accounting traces or public on-chain references), we will limit processing accordingly.",
          ],
        },
        {
          title: "6. Communications and CAN-SPAM / GDPR compliance",
          items: [
            "Promotional emails will include clear and functional unsubscribe mechanisms.",
            "We honor objections to direct marketing and communication preferences.",
            "For users in applicable jurisdictions, we respect rights equivalent to GDPR: access, rectification, erasure, restriction, portability and objection.",
          ],
        },
        {
          title: "7. Cookies and analytics",
          content: [
            "We use cookies and similar technologies for authentication, session functionality, user preferences, security and usage metrics. You can manage cookies from your browser or device settings, keeping in mind that disabling them may affect service functionalities.",
          ],
        },
        {
          title: "8. Information security",
          content: [
            "We apply reasonable administrative, technical and organizational measures to protect personal data. Even so, no system is completely infallible; we therefore recommend using strong passwords, keeping your credentials secure and protecting your wallet.",
          ],
        },
        {
          title: "9. International transfers",
          content: [
            "Some providers may process data outside Ecuador. In such cases, we seek appropriate safeguards and reasonable data protection standards.",
          ],
        },
        {
          title: "10. Minors",
          content: [
            "Chakana is not directed at minors without applicable legal supervision. If we identify improper processing of minors' data, we will take blocking or deletion measures.",
          ],
        },
        {
          title: "11. Changes to this policy",
          content: [
            "We may update this policy to reflect legal, technical or product changes. We will publish the current version with its update date.",
          ],
        },
        {
          title: "12. Contact for data requests",
          content: ["To exercise your privacy rights, inquiries or deletion requests, contact us at: "],
          email: "support@gavanti.org",
        },
      ],
    },
  },
} as const;

export type Translations = (typeof translations)[keyof typeof translations];

interface LangContextValue {
  lang: Lang;
  t: Translations;
  animKey: number;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [animKey, setAnimKey] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const browser = navigator.language.toLowerCase();
    const detected: Lang = browser.startsWith("es") ? "es" : "en";
    setLang(detected);
  }, []);

  const toggle = () => {
    setFading(true);
    setTimeout(() => {
      setLang((l) => (l === "es" ? "en" : "es"));
      setAnimKey((k) => k + 1);
      setFading(false);
    }, 280);
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], animKey, toggle }}>
      <div
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 280ms ease",
        }}
      >
        {children}
      </div>
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
