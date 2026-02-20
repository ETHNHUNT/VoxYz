export interface Testimonial {
    id: number;
    title: string;
    quote: string;
    name: string;
    avatar?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        title: 'VoxYZ Vault User',
        quote: '"The Vault packs saved me hours of work and gave me ready-made copy that just shipped. Can\'t recommend it enough."',
        name: 'Jane Doe',
        avatar: '/avatar/minion.png',
    },
    {
        id: 2,
        title: 'Enterprise Team',
        quote: '"Integrating the Radar into our product roadmap brought transparency and alignment. The visuals helped us make decisions faster."',
        name: 'Acme Corp',
        avatar: '/avatar/observer-optimised.png',
    },
    {
        id: 3,
        title: 'Ship Faster Founder',
        quote: '"Ship Faster gave us a process, not just tools. We launched our first agent product in under a week."',
        name: 'John Smith',
        avatar: '/avatar/scout.png',
    },
];
