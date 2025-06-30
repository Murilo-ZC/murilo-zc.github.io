import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LLMsPage() {
  const router = useRouter();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#1E3A8A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>LLMs</Text>
      </View>

      {/* Introduction Section */}
      <View style={styles.introSection}>
        <View style={styles.iconContainer}>
          <Ionicons name="build" size={60} color="#F97316" />
        </View>
        
        <Text style={styles.introTitle}>Estratégias de LLMs</Text>
        <Text style={styles.introDescription}>
          Técnicas e estratégias para otimizar o uso de Large Language Models. 
          Aqui você encontrará exemplos práticos, prompts eficazes e metodologias 
          para extrair o máximo potencial dos modelos de IA.
        </Text>
      </View>

      {/* Prompt Strategies Section */}
      <View style={styles.promptStrategiesSection}>
        <Text style={styles.strategiesTitle}>Estratégias de Prompt Engineering</Text>
        <Text style={styles.strategiesSubtitle}>
          Técnicas comprovadas para melhorar a qualidade das respostas dos LLMs
        </Text>

        {/* Few-Shot Learning */}
        <View style={styles.strategyCard}>
          <View style={styles.strategyHeader}>
            <Ionicons name="bulb" size={24} color="#0EA5E9" />
            <Text style={styles.strategyName}>Few-Shot Learning</Text>
          </View>
          <Text style={styles.strategyDescription}>
            Forneça exemplos antes de fazer a pergunta para guiar o modelo. Isso ajuda o LLM a entender o padrão esperado e aplicar o mesmo formato na resposta.
          </Text>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Exemplo Prático:</Text>
            <Text style={styles.exampleText}>
              "Analise o sentimento dos seguintes comentários de clientes:{'\n\n'}
              'O produto chegou antes do prazo e funciona perfeitamente!' → POSITIVO{'\n'}
              'A entrega atrasou e o produto veio com defeito' → NEGATIVO{'\n'}
              'Produto ok, mas poderia ser mais barato' → NEUTRO{'\n\n'}
              Agora analise: 'Adorei o atendimento, superou minhas expectativas!'"
            </Text>
          </View>
          <View style={styles.reasonBox}>
            <Text style={styles.reasonTitle}>Por que funciona:</Text>
            <Text style={styles.reasonText}>
              • O modelo aprende o padrão de classificação{'\n'}
              • Entende o formato de resposta esperado{'\n'}
              • Aplica a mesma lógica ao novo exemplo
            </Text>
          </View>
          <View style={styles.counterExampleBox}>
            <Text style={styles.counterExampleTitle}>❌ Contra-exemplo:</Text>
            <Text style={styles.counterExampleText}>
              "Analise o sentimento deste texto: 'O produto é bom mas caro'"{'\n\n'}
              <Text style={styles.improvementTitle}>✅ Como melhorar:</Text>
              "Analise o sentimento dos seguintes textos:{'\n'}
              'Produto excelente, recomendo!' → POSITIVO{'\n'}
              'Não gostei, muito ruim' → NEGATIVO{'\n'}
              'Produto ok, mas poderia ser melhor' → NEUTRO{'\n\n'}
              Agora analise: 'O produto é bom mas caro'"
            </Text>
          </View>
        </View>

        {/* Chain of Thought */}
        <View style={styles.strategyCard}>
          <View style={styles.strategyHeader}>
            <Ionicons name="git-branch" size={24} color="#8B5CF6" />
            <Text style={styles.strategyName}>Chain of Thought</Text>
          </View>
          <Text style={styles.strategyDescription}>
            Peça ao modelo para explicar seu raciocínio passo a passo. Isso força o LLM a pensar de forma estruturada e reduz erros de lógica.
          </Text>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Exemplo Prático:</Text>
            <Text style={styles.exampleText}>
              "Uma empresa tem 150 funcionários. 60% trabalham presencialmente, 30% remoto e 10% híbrido. Se 40% dos presenciais mudarem para híbrido, quantos funcionários estarão em cada modalidade?{'\n\n'}
              Vamos resolver passo a passo:{'\n'}
              1. Calcular funcionários atuais em cada modalidade{'\n'}
              2. Calcular quantos presenciais mudarão para híbrido{'\n'}
              3. Atualizar os números finais"
            </Text>
          </View>
          <View style={styles.reasonBox}>
            <Text style={styles.reasonTitle}>Por que funciona:</Text>
            <Text style={styles.reasonText}>
              • Força o modelo a quebrar problemas complexos{'\n'}
              • Reduz erros de cálculo e lógica{'\n'}
              • Torna o processo transparente e verificável
            </Text>
          </View>
          <View style={styles.counterExampleBox}>
            <Text style={styles.counterExampleTitle}>❌ Contra-exemplo:</Text>
            <Text style={styles.counterExampleText}>
              "Calcule: Uma empresa tem 150 funcionários, 60% presenciais, 30% remotos, 10% híbridos. Se 40% dos presenciais mudarem para híbrido, quantos estarão em cada modalidade?"{'\n\n'}
              <Text style={styles.improvementTitle}>✅ Como melhorar:</Text>
              "Vamos resolver passo a passo:{'\n'}
              1. Calcular funcionários atuais: 90 presenciais, 45 remotos, 15 híbridos{'\n'}
              2. Calcular mudança: 40% de 90 = 36 funcionários{'\n'}
              3. Resultado final: 54 presenciais, 45 remotos, 51 híbridos"
            </Text>
          </View>
        </View>

        {/* Role Prompting */}
        <View style={styles.strategyCard}>
          <View style={styles.strategyHeader}>
            <Ionicons name="person" size={24} color="#F97316" />
            <Text style={styles.strategyName}>Role Prompting</Text>
          </View>
          <Text style={styles.strategyDescription}>
            Defina um papel específico para o modelo assumir. Isso ativa conhecimentos específicos e ajusta o tom da resposta.
          </Text>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Exemplo Prático:</Text>
            <Text style={styles.exampleText}>
              "Você é um CTO experiente com 15 anos liderando equipes de desenvolvimento. Sua empresa está considerando migrar de monólito para microserviços.{'\n\n'}
              Contexto: 50 desenvolvedores, aplicação com 2M usuários, crescimento de 300% ao ano.{'\n\n'}
              Forneça uma análise detalhada incluindo:{'\n'}
              • Prós e contras da migração{'\n'}
              • Timeline recomendada{'\n'}
              • Riscos e mitigações{'\n'}
              • ROI estimado"
            </Text>
          </View>
          <View style={styles.reasonBox}>
            <Text style={styles.reasonTitle}>Por que funciona:</Text>
            <Text style={styles.reasonText}>
              • Ativa conhecimentos específicos do domínio{'\n'}
              • Ajusta o nível de detalhe e expertise{'\n'}
              • Orienta o modelo para o contexto correto
            </Text>
          </View>
          <View style={styles.counterExampleBox}>
            <Text style={styles.counterExampleTitle}>❌ Contra-exemplo:</Text>
            <Text style={styles.counterExampleText}>
              "Como migrar de monólito para microserviços?"{'\n\n'}
              <Text style={styles.improvementTitle}>✅ Como melhorar:</Text>
              "Você é um CTO experiente com 15 anos liderando equipes de desenvolvimento. Sua empresa está considerando migrar de monólito para microserviços.{'\n\n'}
              Contexto: 50 desenvolvedores, aplicação com 2M usuários, crescimento de 300% ao ano.{'\n\n'}
              Forneça uma análise detalhada incluindo:{'\n'}
              • Prós e contras da migração{'\n'}
              • Timeline recomendada{'\n'}
              • Riscos e mitigações{'\n'}
              • ROI estimado"
            </Text>
          </View>
        </View>

        {/* Zero-Shot Learning */}
        <View style={styles.strategyCard}>
          <View style={styles.strategyHeader}>
            <Ionicons name="flash" size={24} color="#84CC16" />
            <Text style={styles.strategyName}>Zero-Shot Learning</Text>
          </View>
          <Text style={styles.strategyDescription}>
            Faça perguntas diretas sem fornecer exemplos prévios. Ideal para tarefas que o modelo já conhece bem.
          </Text>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Exemplo Prático:</Text>
            <Text style={styles.exampleText}>
              "Analise este código Python e identifique possíveis problemas de segurança:{'\n\n'}
              def process_user_input(user_data):{'\n'}
              {'  '}query = 'SELECT * FROM users WHERE id = ' + user_data['id']{'\n'}
              {'  '}result = database.execute(query){'\n'}
              {'  '}return result{'\n\n'}
              Forneça:{'\n'}
              • Tipo de vulnerabilidade{'\n'}
              • Risco associado{'\n'}
              • Solução recomendada"
            </Text>
          </View>
          <View style={styles.reasonBox}>
            <Text style={styles.reasonTitle}>Por que funciona:</Text>
            <Text style={styles.reasonText}>
              • Aproveita conhecimento pré-treinado do modelo{'\n'}
              • Mais eficiente para tarefas conhecidas{'\n'}
              • Menos tokens utilizados no prompt
            </Text>
          </View>
          <View style={styles.counterExampleBox}>
            <Text style={styles.counterExampleTitle}>❌ Contra-exemplo:</Text>
            <Text style={styles.counterExampleText}>
              "Analise este código e me diga se tem problemas de segurança:{'\n'}
              def process_user_input(user_data):{'\n'}
              {'  '}query = 'SELECT * FROM users WHERE id = ' + user_data['id']{'\n'}
              {'  '}result = database.execute(query){'\n'}
              {'  '}return result"{'\n\n'}
              <Text style={styles.improvementTitle}>✅ Como melhorar:</Text>
              "Analise este código Python e identifique possíveis problemas de segurança:{'\n\n'}
              def process_user_input(user_data):{'\n'}
              {'  '}query = 'SELECT * FROM users WHERE id = ' + user_data['id']{'\n'}
              {'  '}result = database.execute(query){'\n'}
              {'  '}return result{'\n\n'}
              Forneça:{'\n'}
              • Tipo de vulnerabilidade{'\n'}
              • Risco associado{'\n'}
              • Solução recomendada"
            </Text>
          </View>
        </View>

        {/* Temperature Control */}
        <View style={styles.strategyCard}>
          <View style={styles.strategyHeader}>
            <Ionicons name="thermometer" size={24} color="#EF4444" />
            <Text style={styles.strategyName}>Controle de Temperatura</Text>
          </View>
          <Text style={styles.strategyDescription}>
            Ajuste a criatividade vs. precisão das respostas. A temperatura controla a aleatoriedade na geração de texto.
          </Text>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Exemplos Práticos:</Text>
            <Text style={styles.exampleText}>
              "Temperatura 0.1 (Baixa):{'\n'}
              'Escreva um relatório técnico sobre APIs REST'{'\n\n'}
              Temperatura 0.7 (Média):{'\n'}
              'Crie uma história criativa sobre um desenvolvedor'{'\n\n'}
              Temperatura 0.9 (Alta):{'\n'}
              'Invente um novo conceito de programação revolucionário"
            </Text>
          </View>
          <View style={styles.reasonBox}>
            <Text style={styles.reasonTitle}>Por que funciona:</Text>
            <Text style={styles.reasonText}>
              • Baixa: Respostas consistentes e precisas{'\n'}
              • Média: Equilibra criatividade e coerência{'\n'}
              • Alta: Máxima criatividade e originalidade
            </Text>
          </View>
          <View style={styles.counterExampleBox}>
            <Text style={styles.counterExampleTitle}>❌ Contra-exemplo:</Text>
            <Text style={styles.counterExampleText}>
              "Escreva um relatório técnico sobre APIs REST" (com temperatura 0.9){'\n\n'}
              <Text style={styles.improvementTitle}>✅ Como melhorar:</Text>
              "Escreva um relatório técnico sobre APIs REST" (com temperatura 0.1){'\n\n'}
              <Text style={styles.improvementTitle}>Para criatividade:</Text>
              "Invente um novo conceito de programação revolucionário" (com temperatura 0.9)
            </Text>
          </View>
        </View>
      </View>

   

      {/* Contact Section */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Interessado em IA?</Text>
        <Text style={styles.contactSubtitle}>
          Vamos conversar sobre projetos de inteligência artificial
        </Text>
        
        <View style={styles.contactButtons}>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => openLink('mailto:carvalho.zanini@gmail.com')}
          >
            <Ionicons name="mail" size={20} color="#fff" />
            <Text style={styles.contactButtonText}>Enviar Mensagem</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.secondaryContactButton}
            onPress={() => openLink('https://www.linkedin.com/in/murilo-zanini-de-carvalho-0980415b/')}
          >
            <Ionicons name="logo-linkedin" size={20} color="#0EA5E9" />
            <Text style={styles.secondaryContactButtonText}>Conectar no LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © {new Date().getFullYear()} Murilo ZC. Desenvolvido com ❤️, ☕ e Expo.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F97316',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  backButton: {
    padding: 8,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  // Introduction Section
  introSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  introTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 16,
    textAlign: 'center',
  },
  introDescription: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 320,
  },

  // Prompt Strategies Section
  promptStrategiesSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  strategiesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 8,
  },
  strategiesSubtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
  },
  strategyCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  strategyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  strategyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginLeft: 12,
  },
  strategyDescription: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
    marginBottom: 16,
  },
  exampleBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0EA5E9',
  },
  exampleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 4,
  },
  exampleText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  reasonBox: {
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  reasonTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: 4,
  },
  reasonText: {
    fontSize: 13,
    color: '#92400E',
    lineHeight: 18,
  },
  counterExampleBox: {
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444',
  },
  counterExampleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#991B1B',
    marginBottom: 4,
  },
  counterExampleText: {
    fontSize: 13,
    color: '#991B1B',
    lineHeight: 18,
  },
  improvementTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#059669',
    marginTop: 8,
    marginBottom: 4,
  },

  // Construction Section
  constructionSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  constructionCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  constructionIcon: {
    marginBottom: 20,
  },
  constructionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F97316',
    marginBottom: 10,
    textAlign: 'center',
  },
  constructionSubtitle: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 20,
    textAlign: 'center',
  },
  constructionDescription: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  constructionFeatures: {
    width: '100%',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#64748B',
  },

  // Coming Soon Section
  comingSoonSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
  },
  comingSoonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  comingSoonCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  comingSoonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  comingSoonDescription: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
  },

  // Contact Section
  contactSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 8,
  },
  contactSubtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 25,
  },
  contactButtons: {
    gap: 15,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#84AA16',
    paddingVertical: 15,
    borderRadius: 25,
    gap: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryContactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#0EA5E9',
    paddingVertical: 15,
    borderRadius: 25,
    gap: 8,
  },
  secondaryContactButtonText: {
    color: '#0EA5E9',
    fontSize: 16,
    fontWeight: '600',
  },

  // Footer
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
  },
}); 