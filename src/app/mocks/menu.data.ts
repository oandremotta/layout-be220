export const MENU_ITEMS: MenuItem[] = [
  { icon: 'barbell-outline', title: 'Treinamento' },
  { icon: 'chatbox-ellipses-outline', title: 'Horário de aulas' },
  { icon: 'pricetag-outline', title: 'Comunicados' },
  { icon: 'sparkles-outline', title: 'Eventos' },
  { icon: 'newspaper-outline', title: 'Meus dados' },
  { icon: 'card-outline', title: 'Carteirinha' },
  { icon: 'help-circle-outline', title: 'Ajuda' },
  { icon: 'shield-checkmark-outline', title: 'Segurança' },
  { icon: 'settings-outline', title: 'Configurações' }
];

export interface MenuItem {
  icon: string;
  title: string;
}
