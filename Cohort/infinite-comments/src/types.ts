export interface Comment {
    id:number,
    likes:number,
    content:string,
    replies : Comment []
}