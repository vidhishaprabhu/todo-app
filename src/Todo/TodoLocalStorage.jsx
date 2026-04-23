const localTodos="reactTodo"
export const getLocalStorageData=()=>{
  const rawTodos=localStorage.getItem(localTodos)
    if(!rawTodos) return []
    else{
      return JSON.parse(rawTodos)
    }
}
export const setLocalStorageData=(task)=>{
  return localStorage.setItem(localTodos,JSON.stringify(task))
}