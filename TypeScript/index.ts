

// function getFrist<T>(arr : T[] , n : number){
//     return arr.slice(0, n);
// }

// getFrist<number>([1,2,3,4,5], 9);

// function compare<A extends number , B extends number >(a : A , b : B){
//     return a < b ? -1 : a > b ? 1 :0 
// }

// compare<number , number>(10,10)

interface IABC {
    a : string 
    b : number 
    c : string 
}

type PickAB = Pick<IABC , 'a' | 'b'>

type clonePickAB<T , K extends keyof T> ={
    [P in K] : T[P]
} 

let AB : clonePickAB<IABC , 'a' | 'b'> = {
    a : 'a',
    b : 1,
}

// cú pháp này lặp qua tất cả các key trong T (lúc này T là Object và K là key của T , T[K] là value của key đó)
type WeekType<T> ={
    [K in keyof T] : T[K]
} 


//cú pháp này lấy tất cả các key của object và gán cho nó là string
type ConvertStringType1<T>={
    [K : string] : string
}
type ConvertStringType2<T>={
    [K in keyof T] : string
}

let x: ConvertStringType1<IABC> = {
    a : 'a',
    b : 'b',// erorr vì all là string
    c : 'c'
}


interface Todo{
    title : string 
    description ?: string
}

//yêu cầu các thuộc tính đầy đủ mặc dù có optional
const todo : Required<Todo> ={
    title : 'title',
    description : 'description'
} 

//Mọi thuộc tính trong partial đều là optional 
const todo1 : Partial<Todo> ={
    title : 'title',
    description : 'description'
} 