

function getFrist<T>(arr : T[] , n : number){
    return arr.slice(0, n);
}

getFrist<number>([1,2,3,4,5], 9);

function compare<A extends number , B extends number >(a : A , b : B){
    return a < b ? -1 : a > b ? 1 :0 
}

compare<number , number>(10,10)



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

//methods pick : Chọn các thuộc tính trong type để tạo type mới
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

//methods record : tạo thành 1 object mới giới hạn key và cùng kiểu dữ liệu

type RecordNumbers = Record<'a' | 'b' , number>

let numbers : RecordNumbers = {
    a : 1 ,
    b : 2
}

//methods omit : tạo thành 1 type mới bằng cách loại bỏ các key được chỉ định

type OmitAB = Omit<IABC , 'c'> //c

// condition in typescript

type IsArray<T> = 
    T extends number[] ? true : 
    T extends string[] ? true :
    T extends string ? false : 
    T extends (string | null | undefined) ? false :
    false

 type T1 = IsArray<number[]> 
 type T2 = IsArray<string[]>
 type T3 = IsArray<string>
 type T4 = IsArray<string | null | undefined>
 type T5 = IsArray<[true , false]>

 type If<Condition extends Boolean, Branch1 , Bracnh2> =  Condition extends true ? string :  number 

 type GetwithDefault<Key , Obj , Default> = Key extends keyof Obj ? Obj[Key] : Default



//  check type
 type checkType<T> = {
    [K in keyof T] : T[K]
 }

 type check1 = checkType<IABC> 

//  assign B cho A
 type Assign <A , B> = Omit<A , keyof B> & B 

// Lấy phần tử đầu tiên
type firstElement<T extends unknown []> = T[0]

type f1 = firstElement<[1,2,3,4,5]>

// infer : suy luận type (chỉ được dùng trong câu lệnh điều kiện)
type inferType<T> = T extends (infer R) ? R : T

type inferType1 = inferType<string[]>
type inferType2 = inferType<string>
type inferType3 = inferType<number>

//fist element
type Head<Tuple> = Tuple extends[infer U ,...infer rest] ? U : never

//last element
type Last<Tuple> = Tuple extends [...infer rest , infer U] ? U : never

//first and last element
type FirstAndLast<Tuple> = Tuple extends [infer U ,...infer rest , infer V] ? [U , V] : never
