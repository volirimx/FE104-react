export type Post = {
    id: number;
    image?: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
    onClick: (id: number) => void
}