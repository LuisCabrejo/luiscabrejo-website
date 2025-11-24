'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Zap, Sparkles, Maximize2, Minimize2, Wifi, WifiOff, RefreshCw, User, Upload, Phone, Mail, CreditCard } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  emotion?: string;
  responseType?: string;
  isOffline?: boolean;
  retryCount?: number;
  hasProfileOptions?: boolean;
  needsNameInput?: boolean;
  hasPackageOptions?: boolean;
  hasPaymentOptions?: boolean;
  needsUserData?: boolean;
}

interface NexusState {
  isLoading: boolean;
  loadingMessage: string;
  isTyping: boolean;
  currentTypedMessage: string;
  loadingPhase: 'analysis' | 'processing' | 'writing' | 'complete';
}

interface ConnectionState {
  status: 'connected' | 'connecting' | 'disconnected' | 'retrying';
  lastSuccessfulConnection: Date | null;
  consecutiveFailures: number;
  averageResponseTime: number;
}

interface ProfileOption {
  id: string;
  icon: string;
  label: string;
  emoji: string;
}

interface PackageOption {
  id: string;
  name: string;
  price: string;
  icon: string;
  description: string;
  isPopular?: boolean;
}

interface PaymentOption {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface UserData {
  nombre: string;
  whatsapp: string;
  email: string;
  identificacion: string;
  documento?: File;
}

interface NexusChatProps {
  context?: string;
  className?: string;
  showPrompt?: boolean;
  promptMessage?: string;
}

export default function NexusChat({
  context = 'general',
  className = '',
  showPrompt = true,
  promptMessage = '¿Listo para construir tu activo empresarial con Gano Excel? NEXUS conoce el CreaTuActivo completo.'
}: NexusChatProps) {
  const [isChatOpen, setChatOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChatPrompt, setShowChatPrompt] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Estados para efecto galáctico
  const [chatPhase, setChatPhase] = useState<'closed' | 'initializing' | 'connecting' | 'typing' | 'ready'>('closed');
  const [isInitialMessageShown, setIsInitialMessageShown] = useState(false);

  // Estados del chat con MEMORIA MEJORADA
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationSummary, setConversationSummary] = useState<string[]>([]);

  // Estados para perfilado y opciones
  const [showProfileSelection, setShowProfileSelection] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileOption | null>(null);
  const [showNameInput, setShowNameInput] = useState(false);
  const [userName, setUserName] = useState('');
  const [showPackageSelection, setShowPackageSelection] = useState(false);
  const [showPaymentSelection, setShowPaymentSelection] = useState(false);
  const [showUserDataForm, setShowUserDataForm] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    nombre: '',
    whatsapp: '',
    email: '',
    identificacion: ''
  });

  // Estados para delays inteligentes
  const [nexusState, setNexusState] = useState<NexusState>({
    isLoading: false,
    loadingMessage: '',
    isTyping: false,
    currentTypedMessage: '',
    loadingPhase: 'complete'
  });

  // Estado de conexión
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    status: 'connected',
    lastSuccessfulConnection: new Date(),
    consecutiveFailures: 0,
    averageResponseTime: 2000
  });

  const chatMessagesEndRef = useRef<HTMLDivElement>(null);
  const responseTimeRef = useRef<number[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-expandir en móvil
  useEffect(() => {
    if (isChatOpen && isMobile) {
      setIsExpanded(true);
    }
  }, [isChatOpen, isMobile]);

  // Opciones de perfilado
  const PROFILE_OPTIONS: ProfileOption[] = [
    { id: 'empleado_ejecutivo', icon: '🏢', label: 'Empleado/Ejecutivo Corporativo', emoji: '🏢' },
    { id: 'profesional_salud', icon: '🏥', label: 'Profesional de la Salud', emoji: '🏥' },
    { id: 'empresario_comerciante', icon: '👨‍💼', label: 'Empresario/Comerciante', emoji: '👨‍💼' },
    { id: 'ama_casa', icon: '🏠', label: 'Ama de Casa/CEO del hogar', emoji: '🏠' },
    { id: 'profesional_independiente', icon: '🎓', label: 'Profesional Independiente', emoji: '🎓' },
    { id: 'otro', icon: '✍️', label: 'Otro', emoji: '✍️' }
  ];

  // Opciones de paquetes
  const PACKAGE_OPTIONS: PackageOption[] = [
    {
      id: 'emprendedor',
      name: 'EMPRENDEDOR',
      price: '$200 USD',
      icon: '🏢',
      description: 'Acceso completo CreaTuActivo + inventario inicial Gano Excel para validar el modelo'
    },
    {
      id: 'empresarial',
      name: 'EMPRESARIAL',
      price: '$500 USD',
      icon: '🚀',
      description: 'Todo lo anterior + inventario ampliado + herramientas de marketing premium',
      isPopular: true
    },
    {
      id: 'visionario',
      name: 'VISIONARIO',
      price: '$1000 USD',
      icon: '💼',
      description: 'Máximo potencial desde día 1 + inventario completo + mentoría directa'
    }
  ];

  // Opciones de pago
  const PAYMENT_OPTIONS: PaymentOption[] = [
    {
      id: 'efectivo',
      name: 'Efectivo',
      icon: '💵',
      description: 'Pago en efectivo en oficina (Villavicencio)'
    },
    {
      id: 'transferencia',
      name: 'Transferencia Bancaria',
      icon: '🏦',
      description: 'Transferencia directa a cuenta empresarial'
    },
    {
      id: 'nequi',
      name: 'Nequi',
      icon: '📱',
      description: 'Pago rápido vía Nequi'
    }
  ];

  // Funciones de detección
  const hasProfileOptions = (message: string): boolean => {
    return message.includes('[ Botón:') &&
           (message.includes('¿Cuál de estas opciones describe mejor tu situación actual?👇') ||
            message.includes('¿Cuál opción te identifica más?'));
  };

  const needsNameInput = (message: string): boolean => {
    return message.includes('¿Cuál es tu nombre?') ||
           message.includes('¿Cómo te llamas?') ||
           message.includes('Me gustaría conocerte por tu nombre') ||
           message.includes('me gustaría conocerte un poco más') ||
           message.includes('Para brindarte una experiencia completamente personalizada');
  };

  const hasPackageOptions = (message: string): boolean => {
    return message.includes('EMPRENDEDOR') && message.includes('EMPRESARIAL') && message.includes('VISIONARIO') &&
           (message.includes('¿Con cuál paquete quieres arrancar?') ||
            message.includes('¿Cuál paquete te gustaría explorar?'));
  };

  const hasPaymentOptions = (message: string): boolean => {
    return message.includes('método de pago') ||
           (message.includes('Efectivo') && message.includes('Transferencia') && message.includes('Nequi'));
  };

  const needsUserData = (message: string): boolean => {
    return message.includes('datos de contacto') ||
           message.includes('WhatsApp') && message.includes('correo') ||
           message.includes('completar tu registro');
  };

  // Mensajes de fallback para conexión débil
  const OFFLINE_RESPONSES = {
    general: "Disculpa, tengo una dificultad técnica temporal. Mientras tanto, puedes explorar app.creatuactivo.com para ver las herramientas del CreaTuActivo funcionando. ¿Hay algo específico sobre Gano Excel o el CreaTuActivo que te gustaría saber?",
    fundador: "Temporalmente tengo dificultades técnicas, pero ser Fundador significa tres cosas concretas: **Posicionamiento** (primeros 150 antes del lanzamiento masivo), **Participación** (en la construcción del sistema) y **Privilegio** (acceso a herramientas antes que nadie). El programa está diseñado por Luis y Liliana para crear una base sólida antes del 1 de septiembre.",
    inversion: "Durante esta dificultad técnica: Los paquetes fundadores son **$200** (Emprendedor), **$500** (Empresarial) y **$1000** (Visionario). Inversión única sin costos ocultos. Además, solo 50 PV mensual (aprox $80 USD) por el cual recibes producto de igual valor.",
    ganoexcel: "Aunque tengo dificultades técnicas: Gano Excel es una empresa de **30+ años** con patente mundial sobre Ganoderma Lucidum creada por **Leow Soon Seng** en 1995. Luis y Liliana crearon el **CreaTuActivo** para facilitar la distribución de estos productos únicos."
  };

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, nexusState.currentTypedMessage]);

  // Detección automática de problemas de red
  useEffect(() => {
    const handleNetworkChange = () => {
      if (!navigator.onLine) {
        setConnectionState(prev => ({
          ...prev,
          status: 'disconnected'
        }));
      } else {
        setConnectionState(prev => ({
          ...prev,
          status: 'connected',
          lastSuccessfulConnection: new Date(),
          consecutiveFailures: 0
        }));
      }
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  // Función para obtener respuesta offline inteligente
  const getOfflineResponse = (message: string): string => {
    const normalizedMessage = message.toLowerCase();
    if (normalizedMessage.includes('fundador') || normalizedMessage.includes('programa')) {
      return OFFLINE_RESPONSES.fundador;
    }
    if (normalizedMessage.includes('invest') || normalizedMessage.includes('dinero') || normalizedMessage.includes('precio')) {
      return OFFLINE_RESPONSES.inversion;
    }
    if (normalizedMessage.includes('gano excel') || normalizedMessage.includes('ganoderma')) {
      return OFFLINE_RESPONSES.ganoexcel;
    }
    return OFFLINE_RESPONSES.general;
  };

  // Función de envío con retry automático
  const sendMessageWithRetry = async (message: string, maxRetries = 3): Promise<any> => {
    const startTime = Date.now();

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        setConnectionState(prev => ({
          ...prev,
          status: attempt > 1 ? 'retrying' : 'connecting'
        }));

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        const formattedHistory = chatMessages
          .filter(msg => !msg.isOffline)
          .map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text
          }));

        const response = await fetch('/api/claude-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message,
            conversationHistory: formattedHistory,
            context
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const responseTime = Date.now() - startTime;
          responseTimeRef.current.push(responseTime);
          if (responseTimeRef.current.length > 10) {
            responseTimeRef.current = responseTimeRef.current.slice(-10);
          }

          const avgResponseTime = responseTimeRef.current.reduce((a, b) => a + b, 0) / responseTimeRef.current.length;

          setConnectionState(prev => ({
            ...prev,
            status: 'connected',
            lastSuccessfulConnection: new Date(),
            consecutiveFailures: 0,
            averageResponseTime: avgResponseTime
          }));

          return await response.json();
        }

        throw new Error(`HTTP ${response.status}`);

      } catch (error) {
        console.log(`Intento ${attempt}/${maxRetries} fallido:`, error);

        setConnectionState(prev => ({
          ...prev,
          consecutiveFailures: prev.consecutiveFailures + 1
        }));

        if (attempt === maxRetries) {
          setConnectionState(prev => ({
            ...prev,
            status: 'disconnected'
          }));

          return {
            message: getOfflineResponse(message),
            delay: 1000,
            metadata: { responseType: 'offline' },
            isOffline: true
          };
        }

        await new Promise(resolve => setTimeout(resolve, Math.min(1000 * Math.pow(2, attempt - 1), 5000)));
      }
    }
  };

  // Handler para selección de perfil
  const handleProfileSelection = async (profile: ProfileOption) => {
    setSelectedProfile(profile);
    setShowProfileSelection(false);

    const userMessage: ChatMessage = {
      id: `profile-${Date.now()}`,
      text: `${profile.emoji} ${profile.label}`,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    await executeResponseSequence(`${profile.emoji} ${profile.label}`);
  };

  // Handler para input de nombre
  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;

    setShowNameInput(false);
    setShowProfileSelection(false);

    const userMessage: ChatMessage = {
      id: `name-${Date.now()}`,
      text: userName.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    const nameToSend = userName.trim();
    setUserName('');

    await executeResponseSequence(nameToSend);
  };

  // Handler para selección de paquete
  const handlePackageSelection = async (packageOption: PackageOption) => {
    setShowPackageSelection(false);

    const userMessage: ChatMessage = {
      id: `package-${Date.now()}`,
      text: `${packageOption.icon} ${packageOption.name} - ${packageOption.price}`,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    await executeResponseSequence(`${packageOption.name} ${packageOption.price}`);
  };

  // Handler para selección de método de pago
  const handlePaymentSelection = async (paymentOption: PaymentOption) => {
    setShowPaymentSelection(false);

    const userMessage: ChatMessage = {
      id: `payment-${Date.now()}`,
      text: `${paymentOption.icon} ${paymentOption.name}`,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    await executeResponseSequence(`${paymentOption.name}`);
  };

  // Handler para envío de datos de usuario
  const handleUserDataSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userData.nombre || !userData.whatsapp || !userData.email || !userData.identificacion) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    setShowUserDataForm(false);

    const userDataMessage = `Datos de contacto:
• Nombre: ${userData.nombre}
• WhatsApp: ${userData.whatsapp}
• Email: ${userData.email}
• Identificación: ${userData.identificacion}
${userData.documento ? '• Documento adjunto: ✅' : ''}`;

    const userMessage: ChatMessage = {
      id: `userdata-${Date.now()}`,
      text: userDataMessage,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);

    // Simular envío a WhatsApp de Liliana
    const whatsappMessage = `🚀 NUEVO FUNDADOR REGISTRADO

👤 Nombre: ${userData.nombre}
📱 WhatsApp: ${userData.whatsapp}
📧 Email: ${userData.email}
🆔 ID: ${userData.identificacion}
📄 Documento: ${userData.documento ? 'Adjunto' : 'Pendiente'}

⏰ ${new Date().toLocaleString()}

Portal: luiscabrejo.com/fundadores`;

    console.log('📤 Envío simulado a WhatsApp Liliana (310 2066 593):', whatsappMessage);

    await executeResponseSequence('DATOS_ENVIADOS_COMPLETAR_REGISTRO');
  };

  // Handler para archivo
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserData(prev => ({ ...prev, documento: file }));
    }
  };

  // Función para renderizar mensaje con botones integrados
  const renderMessageWithButtons = (message: ChatMessage) => {
    const messageText = message.text;

    // Renderizar botones de perfil
    if (messageText.includes('[ Botón:') && showProfileSelection) {
      const lines = messageText.split('\n');
      const messageLines: string[] = [];

      lines.forEach((line) => {
        if (!line.includes('[ Botón:')) {
          messageLines.push(line);
        }
      });

      return (
        <div className="space-y-3">
          <div className="text-sm leading-relaxed whitespace-pre-wrap text-gray-200">
            {messageLines.join('\n')}
          </div>

          <div className="grid gap-2 mt-4">
            {PROFILE_OPTIONS.map(profile => (
              <button
                key={profile.id}
                onClick={() => handleProfileSelection(profile)}
                className="w-full p-2.5 text-left bg-gradient-to-r from-blue-900/20 to-purple-900/20 hover:from-blue-800/40 hover:to-purple-800/40 rounded-lg border border-blue-500/20 hover:border-blue-400/50 transition-all duration-200 group"
              >
                <span className="text-white text-sm flex items-center gap-3">
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {profile.icon}
                  </span>
                  <span className="font-medium">{profile.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Renderizar botones de paquetes
    if (hasPackageOptions(messageText) && showPackageSelection) {
      return (
        <div className="space-y-3">
          <div className="text-sm leading-relaxed whitespace-pre-wrap text-gray-200">
            {messageText.split('EMPRENDEDOR')[0]}
          </div>

          <div className="grid gap-3 mt-4">
            {PACKAGE_OPTIONS.map(pkg => (
              <button
                key={pkg.id}
                onClick={() => handlePackageSelection(pkg)}
                className={`w-full p-4 text-left rounded-lg border transition-all duration-200 group ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/40 hover:border-green-400/60'
                    : 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20 hover:border-blue-400/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {pkg.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-bold">{pkg.name}</span>
                      <span className="text-blue-300 font-bold">{pkg.price}</span>
                      {pkg.isPopular && (
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-xs">{pkg.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Renderizar botones de pago
    if (hasPaymentOptions(messageText) && showPaymentSelection) {
      return (
        <div className="space-y-3">
          <div className="text-sm leading-relaxed whitespace-pre-wrap text-gray-200">
            {messageText.split('Efectivo')[0]}
          </div>

          <div className="grid gap-2 mt-4">
            {PAYMENT_OPTIONS.map(payment => (
              <button
                key={payment.id}
                onClick={() => handlePaymentSelection(payment)}
                className="w-full p-3 text-left bg-gradient-to-r from-blue-900/20 to-purple-900/20 hover:from-blue-800/40 hover:to-purple-800/40 rounded-lg border border-blue-500/20 hover:border-blue-400/50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {payment.icon}
                  </span>
                  <div>
                    <span className="text-white font-medium block">{payment.name}</span>
                    <span className="text-gray-300 text-xs">{payment.description}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Mensaje normal
    return (
      <p className="text-sm leading-relaxed whitespace-pre-wrap">{messageText}</p>
    );
  };

  // Componente para input de nombre
  const NameInputForm = () => {
    if (!showNameInput) return null;

    return (
      <div className="mt-4 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/30">
        <form onSubmit={handleNameSubmit} className="space-y-3">
          <div className="text-center">
            <User className="w-6 h-6 mx-auto text-blue-400 mb-2" />
            <p className="text-sm text-gray-300">
              💬 ¿Cuál es tu nombre para personalizar nuestra conversación?
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Escribe tu nombre aquí..."
              className="flex-1 bg-slate-700 text-white p-3 rounded-lg border border-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              autoFocus
            />
            <button
              type="submit"
              disabled={!userName.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all text-sm font-medium"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Componente para formulario de datos de usuario
  const UserDataForm = () => {
    if (!showUserDataForm) return null;

    return (
      <div className="mt-4 p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg border border-green-500/30">
        <form onSubmit={handleUserDataSubmit} className="space-y-4">
          <div className="text-center">
            <Phone className="w-6 h-6 mx-auto text-green-400 mb-2" />
            <p className="text-sm text-gray-300 mb-3">
              📋 Completa tus datos para finalizar el registro
            </p>
          </div>

          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Nombre completo *"
              value={userData.nombre}
              onChange={(e) => setUserData(prev => ({ ...prev, nombre: e.target.value }))}
              className="bg-slate-700 text-white p-3 rounded border border-slate-500 focus:ring-2 focus:ring-green-500 text-sm"
              required
            />

            <input
              type="tel"
              placeholder="WhatsApp (ej: 310 123 4567) *"
              value={userData.whatsapp}
              onChange={(e) => setUserData(prev => ({ ...prev, whatsapp: e.target.value }))}
              className="bg-slate-700 text-white p-3 rounded border border-slate-500 focus:ring-2 focus:ring-green-500 text-sm"
              required
            />

            <input
              type="email"
              placeholder="Correo electrónico *"
              value={userData.email}
              onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-slate-700 text-white p-3 rounded border border-slate-500 focus:ring-2 focus:ring-green-500 text-sm"
              required
            />

            <input
              type="text"
              placeholder="Número de identificación *"
              value={userData.identificacion}
              onChange={(e) => setUserData(prev => ({ ...prev, identificacion: e.target.value }))}
              className="bg-slate-700 text-white p-3 rounded border border-slate-500 focus:ring-2 focus:ring-green-500 text-sm"
              required
            />

            <div className="border-2 border-dashed border-slate-500 rounded-lg p-4 text-center">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mx-auto"
              >
                <Upload className="w-4 h-4" />
                {userData.documento ? userData.documento.name : 'Subir documento de identidad (opcional)'}
              </button>
              <p className="text-xs text-gray-400 mt-1">PDF, JPG o PNG máx 5MB</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-lg text-white font-medium hover:shadow-lg transition-all"
          >
            ✅ Enviar Datos y Continuar
          </button>
        </form>
      </div>
    );
  };

  // Lógica para la invitación proactiva del chat
  useEffect(() => {
    if (!showPrompt) return;

    const timer = setTimeout(() => {
      if (!isChatOpen) {
        setShowChatPrompt(true);
      }
    }, 7000);
    return () => clearTimeout(timer);
  }, [isChatOpen, showPrompt]);

  // Función para inicializar secuencia galáctica
  const initializeGalacticSequence = () => {
    setChatPhase('initializing');

    setTimeout(() => {
      setChatPhase('connecting');
    }, 800);

    setTimeout(() => {
      setChatPhase('typing');
    }, 1500);

    setTimeout(async () => {
      setChatPhase('ready');

      try {
        const data = await sendMessageWithRetry('INICIAR_CHAT_BIENVENIDA', 1);
        const { message: responseMessage } = data;

        const welcomeMessage: ChatMessage = {
          id: 'welcome-intro',
          text: responseMessage,
          isUser: false,
          timestamp: new Date(),
          hasProfileOptions: hasProfileOptions(responseMessage),
          needsNameInput: needsNameInput(responseMessage)
        };

        setChatMessages([welcomeMessage]);
        setIsInitialMessageShown(true);

        if (hasProfileOptions(responseMessage)) {
          setShowProfileSelection(true);
        }
        if (needsNameInput(responseMessage)) {
          setShowNameInput(true);
        }

      } catch (error) {
        const fallbackMessage: ChatMessage = {
          id: 'fallback-intro',
          text: '👋 ¡Hola! Soy NEXUS, representante del CreaTuActivo que Luis y Liliana desarrollaron. Estoy teniendo una dificultad técnica momentánea, pero puedo ayudarte con información sobre la oportunidad fundadores. ¿Qué te gustaría saber sobre Gano Excel o el CreaTuActivo?',
          isUser: false,
          timestamp: new Date(),
          isOffline: true
        };
        setChatMessages([fallbackMessage]);
        setIsInitialMessageShown(true);
      }
    }, 3500);
  };

  // Función para simular tipeo realista
  const simulateTyping = async (text: string): Promise<void> => {
    return new Promise((resolve) => {
      const words = text.split(' ');
      let currentIndex = 0;
      let currentText = '';

      const typeNextWord = () => {
        if (currentIndex >= words.length) {
          setNexusState(prev => ({ ...prev, isTyping: false, currentTypedMessage: '' }));
          resolve();
          return;
        }

        const word = words[currentIndex];
        currentText += (currentIndex > 0 ? ' ' : '') + word;

        setChatMessages(prevMessages => {
          const newMessages = [...prevMessages];
          if (newMessages.length > 0) {
            newMessages[newMessages.length - 1] = {
              ...newMessages[newMessages.length - 1],
              text: currentText
            };
          }
          return newMessages;
        });

        currentIndex++;

        const keyWords = ['monopolio', 'tecnológico', 'estratégico', 'fundador', 'filosofía', 'Luis'];
        const isKeyWord = keyWords.some(kw => word.toLowerCase().includes(kw));
        const speed = isKeyWord ? 120 : 60;
        const extraDelay = word.endsWith('.') || word.endsWith('!') || word.endsWith('?') ? 300 : 0;

        setTimeout(typeNextWord, speed + extraDelay);
      };

      typeNextWord();
    });
  };

  // Secuencia completa de respuesta con retry automático
  const executeResponseSequence = async (userMessage: string) => {
    try {
      setNexusState({
        isLoading: true,
        loadingMessage: connectionState.status === 'connected' ? 'NEXUS está pensando...' : 'Intentando conectar...',
        isTyping: false,
        currentTypedMessage: '',
        loadingPhase: 'analysis'
      });

      const data = await sendMessageWithRetry(userMessage);
      const { message: responseMessage, delay: calculatedDelay, metadata, isOffline } = data;

      console.log('📤 API Response:', {
        message: responseMessage,
        hasProfileOptions: hasProfileOptions(responseMessage),
        needsNameInput: needsNameInput(responseMessage),
        hasPackageOptions: hasPackageOptions(responseMessage),
        hasPaymentOptions: hasPaymentOptions(responseMessage),
        needsUserData: needsUserData(responseMessage)
      });

      if (isOffline) {
        const offlineMessage: ChatMessage = {
          id: `offline-${Date.now()}`,
          text: responseMessage,
          isUser: false,
          timestamp: new Date(),
          isOffline: true
        };

        setChatMessages(prev => [...prev, offlineMessage]);
        setNexusState(prev => ({ ...prev, isLoading: false, loadingPhase: 'complete' }));
        return;
      }

      const phases = {
        analysis: Math.floor(calculatedDelay * 0.3),
        processing: Math.floor(calculatedDelay * 0.4),
        writing: Math.floor(calculatedDelay * 0.3)
      };

      await new Promise(resolve => setTimeout(resolve, phases.analysis));

      const processingMessage = metadata.responseType === 'strategic'
        ? 'Preparando respuesta estratégica sobre Gano Excel...'
        : 'NEXUS está analizando tu consulta sobre el CreaTuActivo...';

      setNexusState(prev => ({
        ...prev,
        loadingMessage: processingMessage,
        loadingPhase: 'processing'
      }));

      await new Promise(resolve => setTimeout(resolve, phases.processing));

      setNexusState(prev => ({
        ...prev,
        isLoading: false,
        isTyping: true,
        loadingMessage: '',
        loadingPhase: 'writing'
      }));

      const tempMessage: ChatMessage = {
        id: `response-${Date.now()}`,
        text: '',
        isUser: false,
        timestamp: new Date(),
        hasProfileOptions: hasProfileOptions(responseMessage),
        needsNameInput: needsNameInput(responseMessage),
        hasPackageOptions: hasPackageOptions(responseMessage),
        hasPaymentOptions: hasPaymentOptions(responseMessage),
        needsUserData: needsUserData(responseMessage)
      };

      setChatMessages(prev => [...prev, tempMessage]);
      await simulateTyping(responseMessage);

      // Configurar estados de UI después del mensaje
      if (hasProfileOptions(responseMessage)) {
        setShowProfileSelection(true);
      }
      if (needsNameInput(responseMessage)) {
        setShowNameInput(true);
      }
      if (hasPackageOptions(responseMessage)) {
        setShowPackageSelection(true);
      }
      if (hasPaymentOptions(responseMessage)) {
        setShowPaymentSelection(true);
      }
      if (needsUserData(responseMessage)) {
        setShowUserDataForm(true);
      }

      setNexusState(prev => ({
        ...prev,
        isTyping: false,
        loadingPhase: 'complete'
      }));

    } catch (error) {
      console.error('Error:', error);
      setNexusState({
        isLoading: false,
        loadingMessage: '',
        isTyping: false,
        currentTypedMessage: '',
        loadingPhase: 'complete'
      });

      setChatMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        text: getOfflineResponse(userMessage),
        isUser: false,
        timestamp: new Date(),
        isOffline: true
      }]);
    }
  };

  // Función para enviar mensaje
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || nexusState.isLoading || nexusState.isTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    await executeResponseSequence(userMessage.text);
  };

  const handleToggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChatToggle = () => {
    if (!isChatOpen) {
      setChatOpen(true);
      setShowChatPrompt(false);

      if (!isInitialMessageShown) {
        initializeGalacticSequence();
      }
    } else {
      setChatOpen(false);
      setChatPhase('closed');
      setIsExpanded(false);
    }
  };

  // Función para obtener tamaño del chat optimizado
  const getChatDimensions = () => {
    if (isMobile) {
      return {
        width: 'w-[100vw]',
        height: 'h-[100vh]',
        maxHeight: 'max-h-[100vh]',
        messagesHeight: 'calc(100vh - 200px)'
      };
    }

    if (isExpanded) {
      return {
        width: 'w-[50vw] max-w-[600px] min-w-[500px]',
        height: 'h-[90vh] max-h-[700px]',
        maxHeight: 'max-h-[90vh]',
        messagesHeight: 'calc(90vh - 200px)'
      };
    }

    return {
      width: 'w-80 sm:w-96',
      height: 'h-[500px]',
      maxHeight: 'max-h-[500px]',
      messagesHeight: '360px'
    };
  };

  // Función para obtener clases dinámicas del chat container
  const getChatContainerClasses = () => {
    const dimensions = getChatDimensions();

    if (isMobile) {
      return `fixed inset-0 ${dimensions.width} ${dimensions.height} rounded-none shadow-2xl overflow-hidden flex flex-col transition-all duration-300 z-50`;
    }

    if (isExpanded) {
      return `fixed top-5 right-5 ${dimensions.width} ${dimensions.height} rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 z-50`;
    }

    return `absolute bottom-20 right-0 ${dimensions.width} ${dimensions.height} rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300`;
  };

  // Función para obtener estilos dinámicos del chat container
  const getChatContainerStyles = (): React.CSSProperties => {
    let styles: React.CSSProperties = {
      background: 'rgba(23, 31, 42, 0.95)',
      backdropFilter: 'blur(12px)'
    };

    switch (chatPhase) {
      case 'connecting':
        styles.border = '1px solid rgba(139, 92, 246, 0.6)';
        styles.boxShadow = '0 0 25px rgba(139, 92, 246, 0.4), 0 0 50px rgba(59, 130, 246, 0.3)';
        break;
      case 'typing':
        styles.border = '1px solid rgba(59, 130, 246, 0.6)';
        styles.boxShadow = '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)';
        break;
      case 'ready':
        styles.border = '1px solid rgba(59, 130, 246, 0.5)';
        styles.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)';
        break;
      default:
        styles.border = '1px solid rgba(255, 255, 255, 0.1)';
        break;
    }

    return styles;
  };

  // Componente indicador de conexión
  const ConnectionIndicator = () => {
    if (connectionState.status === 'connected') return null;

    const statusConfig = {
      connecting: {
        icon: <RefreshCw className="w-4 h-4 animate-spin" />,
        color: 'bg-yellow-500',
        text: 'Conectando...',
        textColor: 'text-yellow-700'
      },
      retrying: {
        icon: <RefreshCw className="w-4 h-4 animate-spin" />,
        color: 'bg-orange-500',
        text: `Reintentando... (${connectionState.consecutiveFailures} fallos)`,
        textColor: 'text-orange-700'
      },
      disconnected: {
        icon: <WifiOff className="w-4 h-4" />,
        color: 'bg-red-500',
        text: 'Sin conexión - Modo offline',
        textColor: 'text-red-700'
      }
    };

    const config = statusConfig[connectionState.status as keyof typeof statusConfig];

    return (
      <div className="flex items-center justify-between gap-2 p-2 bg-gray-100 text-sm border-b">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${config.color}`}></div>
          {config.icon}
          <span className={config.textColor}>{config.text}</span>
        </div>
      </div>
    );
  };

  // Componente para renderizar las fases galácticas
  const renderChatPhase = () => {
    switch (chatPhase) {
      case 'initializing':
        return (
          <div className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-3"></div>
              <p className="text-blue-400 text-sm">Iniciando NEXUS<span className="animate-pulse">...</span></p>
            </div>
          </div>
        );

      case 'connecting':
        return (
          <div className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3 animate-pulse"></div>
              <p className="text-purple-400 text-sm">Estableciendo conexión<span className="animate-pulse">...</span></p>
            </div>
          </div>
        );

      case 'typing':
        return (
          <div className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <p className="text-blue-300 text-sm">NEXUS está preparando tu respuesta...</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Componente de estado de carga
  const LoadingIndicator = () => {
    if (!nexusState.isLoading && !nexusState.isTyping) return null;

    return (
      <div className="flex justify-start mb-4">
        <div className="bg-slate-700 text-gray-200 p-3 rounded-2xl mr-4 max-w-[280px]">
          {nexusState.isLoading && (
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
              </div>
              <span className="text-sm">{nexusState.loadingMessage}</span>
            </div>
          )}
          {nexusState.isTyping && (
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm">NEXUS está escribiendo...</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const dimensions = getChatDimensions();

  return (
    <div className={`fixed bottom-5 right-5 z-50 ${className}`}>
      {/* Prompt proactivo */}
      {showChatPrompt && showPrompt && !isMobile && (
        <div className="absolute bottom-20 right-0 w-64 bg-slate-800 p-4 rounded-lg shadow-lg animate-bounce"
             style={{ backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p className="text-sm text-white">
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {promptMessage}
            </span>
          </p>
          <button
            onClick={() => setShowChatPrompt(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Botón del chat */}
      <button
        onClick={handleChatToggle}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative"
      >
        {isChatOpen ? <X className="w-8 h-8"/> : <MessageCircle className="w-8 h-8"/>}

        {connectionState.status !== 'connected' && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
            <WifiOff className="w-2 h-2 text-white" />
          </div>
        )}
      </button>

      {/* Ventana del chat */}
      {isChatOpen && (
        <div
          className={getChatContainerClasses()}
          style={getChatContainerStyles()}
        >
          <ConnectionIndicator />

          {/* Header del Chat */}
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    NEXUS
                    {chatPhase !== 'ready' && chatPhase !== 'closed' && (
                      <span className="ml-2 text-xs opacity-75">
                        {chatPhase === 'initializing' && '🔄'}
                        {chatPhase === 'connecting' && '🔗'}
                        {chatPhase === 'typing' && '✍️'}
                      </span>
                    )}
                    {connectionState.status === 'connected' ? (
                      <Wifi className="w-4 h-4 text-green-300" />
                    ) : (
                      <WifiOff className="w-4 h-4 text-red-300" />
                    )}
                  </h4>
                  <p className="text-xs opacity-90">
                    {chatPhase === 'ready'
                      ? `CreaTuActivo • Gano Excel ${connectionState.status === 'connected' ? '• Online' : '• Offline'}`
                      : 'Inicializando...'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {chatPhase === 'ready' && !isMobile && (
                  <button
                    onClick={handleToggleExpansion}
                    className="text-white hover:text-blue-200 transition-colors p-1"
                    title={isExpanded ? 'Reducir chat' : 'Expandir chat'}
                  >
                    {isExpanded ? (
                      <Minimize2 className="w-5 h-5" />
                    ) : (
                      <Maximize2 className="w-5 h-5" />
                    )}
                  </button>
                )}
                {isMobile && (
                  <button
                    onClick={handleChatToggle}
                    className="text-white hover:text-blue-200 transition-colors p-1"
                    title="Cerrar chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Contenido del Chat */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-4"
            style={{ maxHeight: dimensions.messagesHeight }}
          >
            {chatPhase !== 'ready' && chatPhase !== 'closed' ? (
              renderChatPhase()
            ) : (
              <>
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`${
                      isExpanded || isMobile ? 'max-w-[90%]' : 'max-w-[280px]'
                    } p-3 rounded-2xl break-words transition-all duration-300 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-4'
                        : message.isOffline
                        ? 'bg-orange-100 text-orange-800 mr-4 border-l-4 border-orange-500'
                        : 'bg-slate-700 text-gray-200 mr-4'
                    }`}>
                      {message.isUser ? (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      ) : (
                        renderMessageWithButtons(message)
                      )}

                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        {message.isOffline && (
                          <span className="text-xs bg-orange-200 text-orange-700 px-1 rounded">
                            📡 Offline
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <LoadingIndicator />

                {/* Componentes de interacción */}
                <NameInputForm />
                <UserDataForm />

                <div ref={chatMessagesEndRef} />
              </>
            )}
          </div>

          {/* Input del Chat */}
          {chatPhase === 'ready' && (
            <div className="p-3 border-t border-slate-700 flex-shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={
                    showProfileSelection
                      ? "Selecciona tu perfil arriba para continuar..."
                      : showNameInput
                      ? "Comparte tu nombre arriba para personalizar..."
                      : showPackageSelection
                      ? "Selecciona tu paquete fundador arriba..."
                      : showPaymentSelection
                      ? "Elige tu método de pago arriba..."
                      : showUserDataForm
                      ? "Completa tus datos arriba para finalizar..."
                      : connectionState.status === 'connected'
                      ? "Pregúntame sobre Gano Excel o el CreaTuActivo..."
                      : "Modo offline - Respuestas básicas disponibles..."
                  }
                  className="flex-1 bg-slate-800 text-white p-3 rounded-lg border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  disabled={nexusState.isLoading || nexusState.isTyping || showProfileSelection || showNameInput || showPackageSelection || showPaymentSelection || showUserDataForm}
                />
                <button
                  type="submit"
                  disabled={nexusState.isLoading || nexusState.isTyping || !inputMessage.trim() || showProfileSelection || showNameInput || showPackageSelection || showPaymentSelection || showUserDataForm}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status indicator */}
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>
                  🤖 NEXUS CreaTuActivo {connectionState.status === 'connected' ? 'online' : 'offline'} • Especialista Gano Excel
                </span>
                <div className="flex items-center gap-2">
                  {nexusState.isLoading && <span className="animate-pulse">⚡ Procesando...</span>}
                  {connectionState.status === 'connected' && (
                    <span className="text-green-600">
                      ⚡ {Math.round(connectionState.averageResponseTime)}ms
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
