/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita o modo estrito do React, ajudando a identificar problemas no código durante o desenvolvimento.
  reactStrictMode: true,

  // Utiliza o minificador SWC para reduzir o tamanho do código JavaScript na produção.
  swcMinify: true,

  // Remove o cabeçalho "X-Powered-By" das respostas HTTP para evitar a exposição da tecnologia utilizada.
  poweredByHeader: false,

  // Configura o indicador de atividade de build no ambiente de desenvolvimento para a posição inferior direita da tela.
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },

  // Ignora erros do ESLint durante o processo de build, permitindo builds mais rápidos em ambientes de desenvolvimento.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
