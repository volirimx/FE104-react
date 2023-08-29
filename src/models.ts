export interface CardDataResult {
    results: Post[]
    
}

export interface Post {
        id: number,
        image: string,
        text: string,
        date: string,
        lesson_num: number,
        title: string,
        description: string,
        author: number,
        favorites?: boolean;     
           
}