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

export default function ProjectsPage() {
    const router = useRouter();

    const openLink = (url) => {
        Linking.openURL(url);
    };

    const handleBackNavigation = () => {
        router.back();
      };

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
                <Text style={styles.headerTitle}>Projetos</Text>
            </View>

            {/* Construction Section */}
            <View style={styles.constructionSection}>
                <View style={styles.constructionCard}>
                    <View style={styles.constructionIcon}>
                        <Ionicons name="construct" size={80} color="#F97316" />
                    </View>

                    <Text style={styles.constructionTitle}>🚧 Em Construção 🚧</Text>
                    <Text style={styles.constructionSubtitle}>
                        Esta seção está sendo desenvolvida
                    </Text>

                    <Text style={styles.constructionDescription}>
                        Estou trabalhando para trazer uma coleção completa dos meus projetos mais significativos.
                        Em breve você poderá explorar soluções inovadoras, aplicações mobile, sistemas web e muito mais!
                    </Text>

                    <View style={styles.constructionFeatures}>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#84AA16" />
                            <Text style={styles.featureText}>Projetos completos com case studies</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#84AA16" />
                            <Text style={styles.featureText}>Demonstrações interativas</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#84AA16" />
                            <Text style={styles.featureText}>Métricas e resultados alcançados</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={20} color="#84AA16" />
                            <Text style={styles.featureText}>Tecnologias e metodologias utilizadas</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Coming Soon Section */}
            <View style={styles.comingSoonSection}>
                <Text style={styles.sectionTitle}>Próximos Projetos</Text>
                <Text style={styles.sectionSubtitle}>
                    Alguns dos projetos que estarão disponíveis em breve
                </Text>

                <View style={styles.comingSoonGrid}>
                    <View style={styles.comingSoonCard}>
                        <Ionicons name="phone-portrait" size={32} color="#0EA5E9" />
                        <Text style={styles.comingSoonTitle}>Apps Mobile</Text>
                        <Text style={styles.comingSoonDescription}>
                            Aplicativos desenvolvidos com React Native e Flutter
                        </Text>
                    </View>

                    <View style={styles.comingSoonCard}>
                        <Ionicons name="globe" size={32} color="#8B5CF6" />
                        <Text style={styles.comingSoonTitle}>Sistemas Web</Text>
                        <Text style={styles.comingSoonDescription}>
                            Plataformas web completas e responsivas
                        </Text>
                    </View>

                    <View style={styles.comingSoonCard}>
                        <Ionicons name="school" size={32} color="#F97316" />
                        <Text style={styles.comingSoonTitle}>Projetos Educacionais</Text>
                        <Text style={styles.comingSoonDescription}>
                            Soluções para ensino e aprendizado
                        </Text>
                    </View>

                    <View style={styles.comingSoonCard}>
                        <Ionicons name="analytics" size={32} color="#84AA16" />
                        <Text style={styles.comingSoonTitle}>Análise de Dados</Text>
                        <Text style={styles.comingSoonDescription}>
                            Dashboards e relatórios inteligentes
                        </Text>
                    </View>
                </View>
            </View>

            {/* Contact Section */}
            <View style={styles.contactSection}>
                <Text style={styles.contactTitle}>Interessado em colaborar?</Text>
                <Text style={styles.contactSubtitle}>
                    Vamos conversar sobre possíveis projetos e oportunidades
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
        backgroundColor: '#8B5CF6',
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
