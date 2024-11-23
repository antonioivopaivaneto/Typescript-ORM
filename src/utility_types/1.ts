interface Todo{
    priority:number;
    description:string;
    done:boolean;
}

const todo: Partial<Todo> = {
    description:"Todo 1",
    done:false,
}

function updateTodo(update:Omit<Todo, "priority" | "description">){
    return {...todo,...update}
}

const update = {
    done:true
}

console.log(updateTodo(update))