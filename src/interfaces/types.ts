export interface Team{
    link: string,
    name: string,
    matchNumber?: number;
    proGoals?: number;
    conGoals?: number;
    proCards?: number;
    conCards?: number;
    proCorners?: number;
    conCorners?: number;
}

export interface Matchlink{
    link: string
}