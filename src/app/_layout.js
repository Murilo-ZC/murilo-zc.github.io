// Criar um layout padrão para a aplicação, utilizando o padrão
// | Cor                                                                             | HEX       | Uso sugerido                                  | Rationale                                                                                    |
// | ------------------------------------------------------------------------------- | --------- | --------------------------------------------- | -------------------------------------------------------------------------------------------- |
// | ![#1E3A8A](https://via.placeholder.com/15/1E3A8A/000000?text=+) Deep Blue       | `#1E3A8A` | Cabeçalhos, rodapés e elementos de navegação  | Inspira confiança e profissionalismo — ideal para a seção "Sobre" e menu principal.          |
// | ![#0EA5E9](https://via.placeholder.com/15/0EA5E9/000000?text=+) Sky Teal        | `#0EA5E9` | Botões primários e links                      | Moderno e "leve" — remete a apps mobile, passa sensação de fluidez e dinamismo.              |
// | ![#F97316](https://via.placeholder.com/15/F97316/000000?text=+) Sunset Orange   | `#F97316` | Destaques em estatísticas e projetos de dados | Vibrante e energético — ótimo para chamar atenção em gráficos, números e chamadas de ação.   |
// | ![#8B5CF6](https://via.placeholder.com/15/8B5CF6/000000?text=+) Violet Innovate | `#8B5CF6` | Seção de jogos VR e Godot                     | Criativo e tecnológico — simboliza inovação e o universo imersivo de realidade virtual.      |
// | ![#64748B](https://via.placeholder.com/15/64748B/000000?text=+) Slate Gray      | `#64748B` | Texto corrido, ícones e bordas sutis          | Neutro escuro para garantir boa legibilidade sem pesar visualmente.                          |
// | ![#F1F5F9](https://via.placeholder.com/15/F1F5F9/000000?text=+) Soft Light      | `#F1F5F9` | Fundo geral e cartões                         | Fundo claro e suave que valoriza o conteúdo, sem distrair do que realmente importa.          |
// | ![#84CC16](https://via.placeholder.com/15/84CC16/000000?text=+) Lime Accent     | `#84CC16` | CTA's e micro interações                      | Acento energético para "Inscreva-se", "Entre em contato" ou botões de download de materiais. |

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#1E3A8A" />
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E3A8A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#F1F5F9',
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Murilo ZC - Portfolio',
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="repositories/index" 
          options={{ 
            title: 'Meus Repositórios',
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="projects/index" 
          options={{ 
            title: 'Meus Projetos',
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="llms/index" 
          options={{ 
            title: 'Estratégias de LLMs',
            headerShown: false 
          }} 
        />
      </Stack>
    </>
  );
}
