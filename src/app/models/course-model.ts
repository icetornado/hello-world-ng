/* interface CourseModelInterface {
    name: string;
    authorID: number;
    status: string;
    isOpen: boolean;
    student: number;
    releaseDate: object;
    price: number;
} */

export class CourseModel {
    public name: string;
    public authorID: number;
    public isOpen: boolean;
    public student: number;
    public releasedDate: object;
    public price: number;
}
