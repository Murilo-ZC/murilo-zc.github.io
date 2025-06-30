import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function HomePage() {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const stats = [
    { number: '50+', label: 'Projetos', icon: 'folder' },
    { number: '10+', label: 'Anos Exp.', icon: 'time' },
    { number: '10+', label: 'Anos Ensino', icon: 'book' },
  ];

  const technologies = [
    { name: 'Python', icon: 'logo-python', color: '#F97316' },
    { name: 'Flutter', icon: 'logo-android', color: '#8B5CF6' },
    { name: 'React Native', icon: 'logo-react', color: '#0EA5E9' },
    { name: 'Node.js', icon: 'logo-nodejs', color: '#84CC16' },  
    { name: 'Docker', icon: 'cube', color: '#1E3A8A' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroContent}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Image source={{uri:'https://media.licdn.com/dms/image/v2/D4D03AQEo4Oud_aHIzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676951331743?e=1756944000&v=beta&t=aZsAOBNpKa9PlAsekP65XVIPSP_hP2IX2euHP1mv3Hs'}} style={styles.avatarImage} />
            </View>
            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Disponível</Text>
            </View>
          </View>
          
          <Text style={styles.heroTitle}>Murilo-ZC</Text>
          <Text style={styles.heroSubtitle}>Professor, Desenvolvedor Mobile & Full Stack</Text>
          <Text style={styles.heroDescription}>
            Transformando ideias em soluções digitais inovadoras. 
            Especialista em desenvolvimento web, mobile e no ensino de programação.
          </Text>
          
          <View style={styles.ctaButtons}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => openLink('mailto:carvalho.zanini@gmail.com')}
            >
              <Ionicons name="mail" size={25} color="#fff" />
              <Text style={styles.primaryButtonText}>Entre em Contato</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => openLink('https://github.com/murilo-zc')}
            >
              <Ionicons name="logo-github" size={25} color="#000" />
              <Text style={styles.secondaryButtonText}>Ver GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <Ionicons name={stat.icon} size={24} color="#F97316" />
              <Text style={styles.statNumber}>{stat.number}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Technologies Section */}
      <View style={styles.techSection}>
        <Text style={styles.sectionTitle}>Tecnologias</Text>
        <Text style={styles.sectionSubtitle}>
          Stack completa para desenvolvimento moderno
        </Text>
        
        <View style={styles.techGrid}>
          {technologies.map((tech, index) => (
            <View key={index} style={styles.techCard}>
              <Ionicons name={tech.icon} size={32} color={tech.color} />
              <Text style={styles.techName}>{tech.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Navigation Section */}
      <View style={styles.navigationSection}>
        <Text style={styles.sectionTitle}>Explore Meu Trabalho</Text>
        <Text style={styles.sectionSubtitle}>
          Descubra projetos, repositórios e mais alguns projetos compartilhados
        </Text>
        
        <View style={styles.navCards}>
          <TouchableOpacity
            style={[styles.navCard, { backgroundColor: '#0EA5E9' }]}
            onPress={() => handleNavigation('/repositories/')}
          >
            <Ionicons name="git-branch" size={32} color="#fff" />
            <Text style={styles.navCardTitle}>Repositórios</Text>
            <Text style={styles.navCardSubtitle}>
              Projetos no GitHub, desde projetos de estudo até projetos profissionais
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" style={styles.navArrow} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navCard, { backgroundColor: '#8B5CF6' }]}
            onPress={() => handleNavigation('/projects/')}
          >
            <Ionicons name="rocket" size={32} color="#fff" />
            <Text style={styles.navCardTitle}>Projetos</Text>
            <Text style={styles.navCardSubtitle}>
              Soluções completas que vão além do código
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" style={styles.navArrow} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navCard, { backgroundColor: '#F97316' }]}
            onPress={() => handleNavigation('/llms/')}
          >
            <Ionicons name="build" size={32} color="#fff" />
            <Text style={styles.navCardTitle}>Estratégias LLMs</Text>
            <Text style={styles.navCardSubtitle}>
              Técnicas avançadas de prompts e IA
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" style={styles.navArrow} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Vamos Conversar?</Text>
        <Text style={styles.sectionSubtitle}>
          Estou sempre aberto a novas oportunidades e colaborações
        </Text>
        
        <View style={styles.socialLinks}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => openLink('https://github.com/murilo-zc')}
          >
            <Ionicons name="logo-github" size={24} color="#64748B" />
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => openLink('https://www.linkedin.com/in/murilo-zanini-de-carvalho-0980415b/')}
          >
            <Ionicons name="logo-linkedin" size={24} color="#0EA5E9" />
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => openLink('mailto:carvalho.zanini@gmail.com')}
          >
            <Ionicons name="mail" size={24} color="#84CC16" />
            <Text style={styles.socialText}>Email</Text>
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
  
  // Hero Section
  heroSection: {
    backgroundColor: '#1E3A8A',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#84AA16',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginRight: 6,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#0EA5E9',
    marginBottom: 16,
    fontWeight: '500',
  },
  heroDescription: {
    fontSize: 16,
    color: '#F1F5F9',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    maxWidth: 300,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#84AA16',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Stats Section
  statsSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    minWidth: 100,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },

  // Tech Section
  techSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
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
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 20,
  },
  techCard: {
    alignItems: 'center',
    padding: 15,
    minWidth: 80,
  },
  techName: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
    fontWeight: '500',
  },

  // Navigation Section
  navigationSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  navCards: {
    gap: 15,
  },
  navCard: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  navCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
    marginBottom: 8,
  },
  navCardSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    lineHeight: 20,
  },
  navArrow: {
    position: 'absolute',
    top: 24,
    right: 24,
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
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialButton: {
    alignItems: 'center',
    padding: 15,
  },
  socialText: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
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
