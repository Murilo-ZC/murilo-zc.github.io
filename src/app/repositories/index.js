import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function RepositoriesPage() {
  const router = useRouter();

  const handleBackNavigation = () => {
    router.back();
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const repositories = [
    {
      name: 'firelink-library',
      description: 'Biblioteca de links úteis para desenvolvedores, organizados por categorias e com recursos para aprendizado e produtividade. A maior parte dos materiais e tutoriais que eu desenvolvi nos últimos tempos estão aqui. Eu não sou o único mantenedor do projeto, compartilho está tarefa com outros amigos professores e desenvolvedores.',
      language: 'Várias Linguagens',
      stars: '⭐',
      url: 'https://github.com/firelink-library',
      category: 'Recursos'
    },
    {
      name: 'react-native-examples [Em desenvolvimento]',
      description: 'Exemplos de projetos desenvolvidos em React Native com Expo.',
      language: 'JavaScript/TypeScript',
      stars: '⭐',
      url: 'https://github.com/Murilo-ZC/',
      category: 'Mobile'
    },
    {
      name: 'python-projects [Em desenvolvimento]',
      description: 'Coleção de projetos em Python, incluindo scripts de automação, análise de dados e aplicações web.',
      language: 'Python',
      stars: '⭐',
      url: 'https://github.com/Murilo-ZC/',
      category: 'Desenvolvimento'
    },
    {
      name: 'flutter-examples [Em desenvolvimento]',
      description: 'Exemplos práticos de desenvolvimento Flutter, demonstrando diferentes padrões e funcionalidades.',
      language: 'Dart/Flutter',
      stars: '⭐',
      url: 'https://github.com/Murilo-ZC/',
      category: 'Mobile'
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackNavigation}
        >
          <Ionicons name="arrow-back" size={24} color="#1E3A8A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Repositórios</Text>
      </View>

      {/* Introduction Section */}
      <View style={styles.introSection}>
        <View style={styles.iconContainer}>
          <Ionicons name="git-branch" size={60} color="#0EA5E9" />
        </View>
        
        <Text style={styles.introTitle}>Meus Repositórios</Text>
        <Text style={styles.introDescription}>
          Aqui você encontra uma coleção dos meus projetos open source e repositórios públicos. 
          Cada repositório representa uma jornada de aprendizado, experimentação e compartilhamento 
          de conhecimento com a comunidade de desenvolvedores.
        </Text>
      </View>

      {/* Repositories List */}
      <View style={styles.repositoriesSection}>
        <Text style={styles.sectionTitle}>Projetos Destacados</Text>
        
        {repositories.map((repo, index) => (
          <TouchableOpacity
            key={index}
            style={styles.repositoryCard}
            onPress={() => openLink(repo.url)}
          >
            <View style={styles.repoHeader}>
              <View style={styles.repoInfo}>
                <Text style={styles.repoName}>{repo.name}</Text>
                <View style={styles.repoMeta}>
                  <View style={styles.languageBadge}>
                    <View style={[styles.languageDot, { backgroundColor: getLanguageColor(repo.language) }]} />
                    <Text style={styles.languageText}>{repo.language}</Text>
                  </View>
                  <Text style={styles.starsText}>{repo.stars}</Text>
                </View>
              </View>
              <Ionicons name="open-outline" size={20} color="#64748B" />
            </View>
            
            <Text style={styles.repoDescription}>{repo.description}</Text>
            
            <View style={styles.repoFooter}>
              <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(repo.category) }]}>
                <Text style={styles.categoryText}>{repo.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* GitHub Link Section */}
      <View style={styles.githubSection}>
        <Text style={styles.sectionTitle}>Ver Todos os Repositórios</Text>
        <Text style={styles.sectionSubtitle}>
          Explore todos os meus projetos públicos no GitHub
        </Text>
        
        <TouchableOpacity
          style={styles.githubButton}
          onPress={() => openLink('https://github.com/Murilo-ZC?tab=repositories&q=&type=public&language=&sort=')}
        >
          <Ionicons name="logo-github" size={24} color="#fff" />
          <Text style={styles.githubButtonText}>Ver no GitHub</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Contribuições sempre bem-vindas! 🤝
        </Text>
      </View>
    </ScrollView>
  );
}

// Helper functions
const getLanguageColor = (language) => {
  const colors = {
    'JavaScript': '#F7DF1E',
    'Python': '#3776AB',
    'Dart': '#00B4AB',
    'Markdown': '#000000',
    'TypeScript': '#3178C6',
    'Java': '#ED8B00',
    'C++': '#00599C',
    'C#': '#239120'
  };
  return colors[language] || '#64748B';
};

const getCategoryColor = (category) => {
  const colors = {
    'Recursos': '#0EA5E9',
    'Portfolio': '#8B5CF6',
    'Desenvolvimento': '#84CC16',
    'Mobile': '#F97316',
    'Web': '#EF4444',
    'IA/ML': '#EC4899'
  };
  return colors[category] || '#64748B';
};

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
    backgroundColor: '#0EA5E9',
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

  // Repositories Section
  repositoriesSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 20,
  },
  repositoryCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  repoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  repoInfo: {
    flex: 1,
  },
  repoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  repoMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  languageBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  languageText: {
    fontSize: 14,
    color: '#64748B',
  },
  starsText: {
    fontSize: 14,
    color: '#64748B',
  },


  repoDescription: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 16,
  },
  repoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  repoStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: '#64748B',
  },
  repoActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
  },
  actionButtonText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },

  // GitHub Section
  githubSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 25,
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  githubButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Footer
  footer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
